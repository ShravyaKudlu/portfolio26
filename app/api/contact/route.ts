import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { addContact } from "@/lib/database";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    // Save to database
    const contact = addContact(name, email, message);

    // Try to send email notification (if configured)
    let emailSent = false;
    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;

    if (emailUser && emailPass && emailUser !== "your-email@gmail.com") {
      try {
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: emailUser,
            pass: emailPass,
          },
        });

        await transporter.sendMail({
          from: emailUser,
          to: emailUser,
          subject: `oppurtunity I guess by: ${name}`,
          html: `
            <h2>Someone other then you visited your website</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, "<br>")}</p>
            <hr>
            <p><small>Received at: ${new Date().toLocaleString()}</small></p>
          `,
        });
        emailSent = true;
      } catch (emailError) {
        console.error("Email sending failed:", emailError);
        // Continue - we saved to DB even if email fails
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: emailSent
          ? "Message sent successfully!"
          : "Message saved! Email notification not configured yet.",
        contact,
        emailSent,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to save message. Please try again." },
      { status: 500 },
    );
  }
}
