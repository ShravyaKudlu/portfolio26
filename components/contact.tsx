"use client";

import { motion, useInView, Variants, AnimatePresence } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { Mail, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";
import { SectionHeader } from "./section-header";

const socialLinks = [
  { icon: Github, href: "https://github.com/ShravyaKudlu", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/shravya-kudlu",
    label: "LinkedIn",
  },
  { icon: Twitter, href: "https://x.com/ShravyaKudlu", label: "Twitter" },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
    },
  },
};

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showForm, setShowForm] = useState(true);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setShowForm(false);
        setSubmitStatus("success");
        setStatusMessage(
          "Message sent successfully! I'll get back to you soon.",
        );
        setFormState({ name: "", email: "", message: "" });
        setTimeout(() => {
          setShowForm(true);
          setSubmitStatus("idle");
          setStatusMessage("");
        }, 4000);
      } else {
        const errorMessage =
          data.error || "Failed to send message. Please try again.";
        setSubmitStatus("error");
        setStatusMessage(errorMessage);
        setTimeout(() => {
          setSubmitStatus("idle");
          setStatusMessage("");
        }, 5000);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setSubmitStatus("error");
      setStatusMessage("Failed to send message. Please try again.");
      setTimeout(() => {
        setSubmitStatus("idle");
        setStatusMessage("");
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative container-responsive">
        <SectionHeader
          title="Get In Touch"
          subtitle="Have a project in mind or just want to chat? I'd love to hear from you"
        />

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid lg:grid-cols-2 gap-12"
        >
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-violet-500" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <a
                    href="mailto:shravyakudlu@gmail.com"
                    className="text-muted-foreground hover:text-violet-400 transition-colors"
                  >
                    shravyakudlu@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-violet-500" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Location</h3>
                  <p className="text-muted-foreground">Remote / Worldwide</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Connect with me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      scale: 1.1,
                      y: -5,
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-xl glass flex items-center justify-center hover:bg-violet-500/20 transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 border border-violet-500/20"
            >
              <div className="flex items-center gap-3 mb-2">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-3 h-3 rounded-full bg-green-500"
                />
                <span className="font-semibold">Open to Opportunities</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Currently available for freelance projects and full-time
                positions.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="relative min-h-[500px]"
          >
            <AnimatePresence mode="wait">
              {showForm ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  onSubmit={handleSubmit}
                  className="p-8 rounded-3xl glass space-y-6"
                >
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      required
                      className="w-full px-4 py-3 rounded-xl input-border focus:outline-none transition-all"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      required
                      className="w-full px-4 py-3 rounded-xl input-border focus:outline-none transition-all"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl input-border focus:outline-none transition-all resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-medium flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  >
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                      />
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </motion.button>

                  {/* Error Message */}
                  <AnimatePresence>
                    {submitStatus === "error" && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="p-4 rounded-xl text-center font-medium bg-red-500/20 text-red-400 border border-red-500/30"
                      >
                        {statusMessage}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="p-8 rounded-3xl glass flex items-center justify-center min-h-[400px]"
                >
                  <PhoneBuzzSuccess />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Phone Buzz Success Animation Component
function PhoneBuzzSuccess() {
  return (
    <motion.div
      className="relative"
      initial={{ scale: 0.8, y: 20 }}
      animate={{ scale: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      {/* Content */}
      <div className="flex flex-col items-center text-center">
        {/* Phone with vibration animation */}
        <motion.div
          animate={{
            x: [0, -3, 3, -3, 3, 0],
            rotate: [0, -2, 2, -2, 2, 0],
          }}
          transition={{
            duration: 0.5,
            repeat: 3,
            ease: "easeInOut",
          }}
          className="relative mb-6"
        >
          {/* Phone icon */}
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-green-500/30 to-emerald-500/30 flex items-center justify-center border border-green-500/40 shadow-lg shadow-green-500/20">
            <svg
              className="w-10 h-10 text-green-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <rect x="5" y="2" width="14" height="20" rx="2" />
              <line x1="12" y1="18" x2="12" y2="18.01" strokeWidth={2} />
            </svg>
          </div>

          {/* Notification dot */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
            className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-green-500 flex items-center justify-center shadow-lg"
          >
            <svg
              className="w-3 h-3 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </motion.div>

          {/* Vibration lines */}
          <motion.div
            animate={{ opacity: [0, 1, 0], x: [-10, -20, -30] }}
            transition={{ duration: 0.5, repeat: 3 }}
            className="absolute left-full top-1/2 -translate-y-1/2 ml-2"
          >
            <div className="flex gap-1">
              <div className="w-0.5 h-8 bg-green-500/40 rounded-full" />
              <div className="w-0.5 h-6 bg-green-500/30 rounded-full" />
              <div className="w-0.5 h-4 bg-green-500/20 rounded-full" />
            </div>
          </motion.div>
          <motion.div
            animate={{ opacity: [0, 1, 0], x: [10, 20, 30] }}
            transition={{ duration: 0.5, repeat: 3 }}
            className="absolute right-full top-1/2 -translate-y-1/2 mr-2"
          >
            <div className="flex gap-1">
              <div className="w-0.5 h-4 bg-green-500/20 rounded-full" />
              <div className="w-0.5 h-6 bg-green-500/30 rounded-full" />
              <div className="w-0.5 h-8 bg-green-500/40 rounded-full" />
            </div>
          </motion.div>
        </motion.div>

        {/* Text */}
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-2xl font-bold mb-3"
        >
          <span className="text-green-400">Sent!</span>
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-muted-foreground text-lg max-w-[280px]"
        >
          Shravya's phone just buzzed... maybe
        </motion.p>

        {/* Subtle hint */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-xs text-muted-foreground/60 mt-4"
        >
          (Response time: Eventually™)
        </motion.p>
      </div>
    </motion.div>
  );
}
