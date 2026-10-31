"use client";

import { useState } from "react";
import { Mic, Send } from "lucide-react";
import type { ChatMessage, Language } from "@/types";

const WELCOME: Record<Language, string> = {
  en: "Hi! Ask me anything about your crops, weather, or market prices.",
  te: "నమస్కారం! మీ పంటలు, వాతావరణం లేదా మార్కెట్ ధరల గురించి అడగండి.",
  hi: "नमस्ते! अपनी फसलों, मौसम या बाज़ार भाव के बारे में पूछें।"
};

export default function VoiceAssistantPage() {
  const [language, setLanguage] = useState<Language>("en");
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: "assistant", content: WELCOME.en, language: "en", createdAt: new Date().toISOString() }
  ]);
  const [sending, setSending] = useState(false);

  async function sendMessage() {
    if (!input.trim()) return;
    const userMsg: ChatMessage = {
      role: "user",
      content: input,
      language,
      createdAt: new Date().toISOString()
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setSending(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMsg.content, language })
      });
      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply, language, createdAt: new Date().toISOString() }
      ]);
    } catch (err) {
      console.error(err);
    } finally {
      setSending(false);
    }
  }

  function startVoiceInput() {
    // TODO: Integrate the Web Speech API (SpeechRecognition) or a cloud STT service,
    // configured for the selected language (en-IN / te-IN / hi-IN).
    console.log("Voice input not yet wired up.");
  }

  return (
    <div className="mx-auto flex h-[calc(100vh-8rem)] max-w-2xl flex-col">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-neutral-900">Voice Assistant</h1>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value as Language)}
          className="rounded-md border border-neutral-200 px-2 py-1 text-sm"
        >
          <option value="en">English</option>
          <option value="te">తెలుగు</option>
          <option value="hi">हिन्दी</option>
        </select>
      </div>

      <div className="mt-4 flex-1 space-y-3 overflow-y-auto rounded-xl border border-neutral-200 bg-white p-4">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-xs rounded-2xl px-4 py-2 text-sm ${
                m.role === "user"
                  ? "bg-primary-600 text-white"
                  : "bg-neutral-100 text-neutral-800"
              }`}
            >
              {m.content}
            </div>
          </div>
        ))}
        {sending && <p className="text-xs text-neutral-400">Thinking...</p>}
      </div>

      <div className="mt-3 flex items-center gap-2">
        <button
          onClick={startVoiceInput}
          className="rounded-full border border-neutral-200 p-2.5 hover:bg-neutral-100"
          aria-label="Speak"
        >
          <Mic className="h-5 w-5 text-neutral-600" />
        </button>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Type your question..."
          className="flex-1 rounded-full border border-neutral-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
        />
        <button
          onClick={sendMessage}
          className="rounded-full bg-primary-600 p-2.5 text-white hover:bg-primary-700"
          aria-label="Send"
        >
          <Send className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
