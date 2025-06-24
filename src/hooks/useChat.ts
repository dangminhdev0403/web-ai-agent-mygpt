"use client";

import { ChatContact, Message } from "@/utils/types/chat";
import { useCallback, useState } from "react";

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      content:
        "Xin chào! Tôi là AI Assistant. Tôi có thể giúp bạn trả lời câu hỏi, hỗ trợ công việc, hoặc chỉ đơn giản là trò chuyện. Bạn cần hỗ trợ gì hôm nay?",
      sender: "bot",
      timestamp: new Date(Date.now() - 300000),
      status: "read",
    },
  ]);

  const [isTyping, setIsTyping] = useState(false);
  const [contacts] = useState<ChatContact[]>([
    {
      id: "1",
      name: "AI Assistant",
      avatar: "🤖",
      status: "online",
      lastMessage: "Xin chào! Tôi là AI Assistant...",
      lastMessageTime: new Date(Date.now() - 300000),
      unreadCount: 0,
    },
    {
      id: "2",
      name: "Support Team",
      avatar: "👥",
      status: "online",
      lastMessage: "Cảm ơn bạn đã liên hệ với chúng tôi",
      lastMessageTime: new Date(Date.now() - 3600000),
      unreadCount: 2,
    },
    {
      id: "3",
      name: "Sales Department",
      avatar: "💼",
      status: "away",
      lastMessage: "Chúng tôi sẽ liên hệ lại với bạn sớm nhất",
      lastMessageTime: new Date(Date.now() - 7200000),
      unreadCount: 0,
    },
    {
      id: "4",
      name: "Technical Support",
      avatar: "🔧",
      status: "busy",
      lastMessage: "Vấn đề của bạn đã được ghi nhận",
      lastMessageTime: new Date(Date.now() - 86400000),
      unreadCount: 1,
    },
  ]);

  const botResponses = [
    "Cảm ơn bạn đã nhắn tin! Tôi đã hiểu câu hỏi của bạn và sẽ cố gắng trả lời một cách chi tiết nhất có thể.",
    "Đó là một câu hỏi rất thú vị! Dựa trên kinh nghiệm và kiến thức của tôi, tôi có thể đưa ra một số gợi ý hữu ích cho bạn.",
    "Tôi hiểu vấn đề bạn đang gặp phải. Hãy để tôi phân tích tình huống và đưa ra giải pháp phù hợp nhất.",
    "Rất vui được hỗ trợ bạn! Bạn có thể chia sẻ thêm chi tiết cụ thể để tôi có thể tư vấn chính xác hơn không?",
    "Dựa trên thông tin bạn cung cấp, tôi nghĩ có một số cách tiếp cận khác nhau mà chúng ta có thể thử nghiệm.",
    "Đây là một chủ đề khá phức tạp. Tôi sẽ cố gắng giải thích một cách đơn giản và dễ hiểu nhất.",
    "Tôi có thể giúp bạn với vấn đề này. Trước tiên, hãy cùng tôi xem xét các yếu tố quan trọng.",
  ];

  const sendMessage = useCallback(async (content: string) => {
    if (!content.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: content.trim(),
      sender: "user",
      timestamp: new Date(),
      status: "sending",
    };

    setMessages((prev) => [...prev, userMessage]);

    // Update message status to sent
    setTimeout(() => {
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === userMessage.id ? { ...msg, status: "sent" as const } : msg
        )
      );
    }, 500);

    // Update to delivered
    setTimeout(() => {
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === userMessage.id
            ? { ...msg, status: "delivered" as const }
            : msg
        )
      );
    }, 1000);

    // Show typing indicator
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const randomResponse =
        botResponses[Math.floor(Math.random() * botResponses.length)];

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: randomResponse,
        sender: "bot",
        timestamp: new Date(),
        status: "delivered",
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);

      // Mark user message as read
      setTimeout(() => {
        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === userMessage.id
              ? { ...msg, status: "read" as const }
              : msg
          )
        );
      }, 1000);
    }, 1500 + Math.random() * 2000);
  }, []);

  return {
    messages,
    contacts,
    isTyping,
    sendMessage,
  };
}
