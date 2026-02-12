import { NextRequest, NextResponse } from "next/server";
import { getSystemPrompt } from "@/lib/context/portfolio-context";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { message, history = [] } = body;

    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 },
      );
    }

    const systemPrompt = getSystemPrompt();

    const apiKey = process.env.GEMENI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "GEMENI_API_KEY is not configured" },
        { status: 500 },
      );
    }

    const apiVersion = process.env.GEMENI_API_VERSION || "v1";
    const model = process.env.GEMENI_MODEL || "gemini-2.0-flash";
    const modelPath = model.startsWith("models/") ? model : `models/${model}`;
    const url = `https://generativelanguage.googleapis.com/${apiVersion}/${modelPath}:generateContent?key=${apiKey}`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            role: "user",
            parts: [{ text: systemPrompt }],
          },
          ...history.map((item: { role: string; content: string }) => ({
            role: item.role === "assistant" ? "model" : "user",
            parts: [{ text: item.content }],
          })),
          {
            role: "user",
            parts: [{ text: message }],
          },
        ],
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 500,
        },
      }),
    });

    if (!response.ok) {
      // Fallback to simulated response if API fails
      console.error("Gemeni API error:", await response.text());
      return NextResponse.json({
        response: generateFallbackResponse(message),
        isFallback: true,
      });
    }

    const data = await response.json();
    const botResponse =
      data.candidates?.[0]?.content?.parts?.[0]?.text ||
      generateFallbackResponse(message);

    return NextResponse.json({
      response: botResponse,
      isFallback: false,
    });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json({
      response: generateFallbackResponse(""),
      isFallback: true,
    });
  }
}

function generateFallbackResponse(message: string): string {
  const lowerMsg = message.toLowerCase();

  if (
    lowerMsg.includes("contact") ||
    lowerMsg.includes("email") ||
    lowerMsg.includes("reach")
  ) {
    return `You can reach Shravya at shravyakudlu@gmail.com 📧
    Her LinkedIn and GitHub are both active too 🌐 She's always happy to chat about interesting ideas!`;
  }

  if (
    lowerMsg.includes("skill") ||
    lowerMsg.includes("tech") ||
    lowerMsg.includes("stack")
  ) {
    return "Shravya is a software Engineer skilled in React, Next.js, TypeScript, Node.js, Python, Linux💻, fastAPI and various databases. She also specializes in AI integrations with experience in LangChain, RAG, and building intelligent applications.🤖";
  }

  if (
    lowerMsg.includes("project") ||
    lowerMsg.includes("work") ||
    lowerMsg.includes("portfolio")
  ) {
    return `She's built e-commerce sites, task management apps, AI image tools, custom CMS platforms, and more 🚀
Check the projects section for all the details ✨`;
  }

  if (
    lowerMsg.includes("hire") ||
    lowerMsg.includes("job") ||
    lowerMsg.includes("work with") ||
    lowerMsg.includes("available")
  ) {
    return "Yes! Shravya is currently available for freelance projects and full-time positions🎯. Send an quick note to shravyakudlu@gmail.com with details about your project or opportunity!";
  }

  if (lowerMsg.includes("experience") || lowerMsg.includes("background")) {
    return `Shravya has 3+ years of experience in software development across frontend, backend, and AI integrations 🛠️
Always focusing on clean, reliable, and scalable code 📈`;
  }

  if (
    lowerMsg.includes("hello") ||
    lowerMsg.includes("hi") ||
    lowerMsg.includes("hey")
  ) {
    return `Hi! 👋 I'm Shravya's assistant 😊
I can tell you about her skills, projects, experience, or how to get in touch. What's up? 🌟`;
  }

  return `Hmm, I didn't quite catch that one 🤔
Feel free to email Shravya at shravyakudlu@gmail.com — she'd love to talk directly 💬`;
}
