import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Send, MessageCircle, Zap } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface Message {
  id: string;
  type: "user" | "ai";
  content: string;
  timestamp: Date;
}

export default function AILearning() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "ai",
      content:
        "👋 Hello! I'm your AI Learning Assistant for the Wolverhampton Taxi Academy. I can help you understand exam topics, explain safeguarding concepts, licensing rules, and more. What would you like to learn about today?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/ai-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: input,
          context: "Wolverhampton PHV Knowledge Test",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to get response from AI");
      }

      const data = await response.json();

      // Add AI response
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: "ai",
        content: data.response,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      toast({
        title: "Error",
        description:
          error instanceof Error ? error.message : "Failed to get AI response",
        variant: "destructive",
      });

      // Add error message from AI
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: "ai",
        content:
          "Sorry, I encountered an error. Please try again or contact support.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  const quickQuestions = [
    "Explain safeguarding duties for taxi drivers",
    "What are the licensing requirements?",
    "How should I handle passenger disputes?",
    "What's the process for vehicle inspection?",
  ];

  const handleQuickQuestion = (question: string) => {
    setInput(question);
  };

  return (
    <Layout>
      <div className="h-[calc(100vh-160px)] flex flex-col bg-gray-50 dark:bg-slate-950">
        {/* Header */}
        <div className="bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800 p-4 sm:p-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-2">
              <Zap className="w-6 h-6 text-orange-600" />
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                AI Learning Assistant
              </h1>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Ask me anything about the Wolverhampton PHV Knowledge Test
            </p>
          </div>
        </div>

        {/* Messages Container */}
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-4xl mx-auto p-4 sm:p-6 space-y-6">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.type === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-2xl rounded-lg p-4 ${
                    message.type === "user"
                      ? "bg-orange-600 text-white rounded-br-none"
                      : "bg-white dark:bg-slate-800 text-gray-900 dark:text-white border border-gray-200 dark:border-slate-700 rounded-bl-none"
                  }`}
                >
                  {message.type === "ai" && (
                    <div className="flex items-start gap-2 mb-2">
                      <MessageCircle className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span className="text-xs font-semibold text-gray-600 dark:text-gray-400">
                        AI Assistant
                      </span>
                    </div>
                  )}
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">
                    {message.content}
                  </p>
                  <span className="text-xs opacity-70 mt-2 block">
                    {message.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-slate-800 text-gray-900 dark:text-white border border-gray-200 dark:border-slate-700 rounded-lg p-4 rounded-bl-none">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-600 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-orange-600 rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-orange-600 rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Quick Questions */}
        {messages.length === 1 && (
          <div className="bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-800 p-4">
            <div className="max-w-4xl mx-auto">
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                Quick questions:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {quickQuestions.map((question, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleQuickQuestion(question)}
                    className="text-left px-4 py-2 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg text-sm text-orange-700 dark:text-orange-200 hover:bg-orange-100 dark:hover:bg-orange-900/40 transition-all"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Input Area */}
        <div className="bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-800 p-4 sm:p-6">
          <div className="max-w-4xl mx-auto">
            <form onSubmit={handleSendMessage} className="flex gap-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me a question about the exam..."
                disabled={loading}
                className="flex-1 px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-600 dark:focus:ring-orange-500 disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="px-6 py-3 bg-orange-600 hover:bg-orange-700 disabled:bg-gray-400 text-white font-semibold rounded-lg transition-all flex items-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span className="hidden sm:inline">Send</span>
              </button>
            </form>

            <p className="text-xs text-gray-500 dark:text-gray-400 mt-3">
              💡 Tip: Ask specific questions about safeguarding, licensing
              rules, regulations, or exam topics.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
