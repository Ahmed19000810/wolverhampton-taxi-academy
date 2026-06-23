import { RequestHandler } from "express";

export const handleAIChat: RequestHandler = async (req, res) => {
  try {
    const { message, context } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
      return res.status(500).json({
        error: "OpenAI API key not configured",
        response:
          "I'm your AI tutor, but I need to be configured first. Please contact support.",
      });
    }

    // Call OpenAI API directly
    const openaiResponse = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o",
        messages: [
          {
            role: "system",
            content: `You are an expert AI tutor for the Wolverhampton Taxi and Private Hire Vehicle (PHV) Knowledge Test. You provide clear, accurate, and helpful explanations about:
- Safeguarding and child exploitation awareness
- PHV and taxi licensing requirements
- Vehicle maintenance and safety regulations
- Passenger handling and complaint procedures
- Wolverhampton local regulations and byelaws
- Professional conduct and ethics

Keep responses concise (2-3 paragraphs), practical, and directly relevant to the exam. Use simple language to explain complex regulations.`,
          },
          {
            role: "user",
            content: message,
          },
        ],
        temperature: 0.7,
        max_tokens: 800,
      }),
    });

    if (!openaiResponse.ok) {
      const error = await openaiResponse.json();
      console.error("OpenAI API error:", error);
      return res.status(500).json({
        error: "Failed to get response from AI",
        response:
          "Sorry, I encountered an error processing your question. Please try again.",
      });
    }

    const data = await openaiResponse.json();
    const aiResponse = data.choices[0]?.message?.content || "No response generated";

    res.json({
      response: aiResponse,
      timestamp: new Date(),
    });
  } catch (error) {
    console.error("AI Chat error:", error);
    res.status(500).json({ error: "Failed to process AI response" });
  }
};
