"use client";

import { getHistory, sendChatBox } from "@/app/actions/chat.action";
import { ChatContact, Message } from "@/utils/types/chat";
import { useCallback, useState } from "react";

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      content:
        '🚗 Xin chào! Em là Trợ lí Đặt Xe Rẻ – hỗ trợ đặt xe sân bay giá tốt.\n\nEm có thể giúp mình:\n• Tìm xe, báo giá\n• Đặt chuyến nhanh\n• Tra thông tin tuyến, loại xe\n\n📌 Mình có thể thử nhắn:\n- "Danh sách xe"\n- "Danh sách tuyến"\n- "Đặt xe 4 chỗ từ sân bay Tân Sơn Nhất về TP.HCM lúc 9h sáng mai"\n\n💬 Anh/chị cần hỗ trợ gì ạ?',
      sender: "bot",
      timestamp: new Date(Date.now() - 300000),
      status: "read",
    },
  ]);

  const [isTyping, setIsTyping] = useState(false);
  const [contacts] = useState<ChatContact[]>([
    {
      id: "1",
      name: "Trợ lí Đặt Xe Rẻ",
      avatar: "🤖",
      status: "online",
      lastMessage: "Xin chào! Tôi là Trợ lí Đặt Xe Rẻ...",
      lastMessageTime: new Date(Date.now() - 300000),
      unreadCount: 0,
    },
  ]);

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
    const res = await sendChatBox(content);

    // Simulate bot response
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: res?.answer,
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
  const getHistoryChat = useCallback(async () => {
    const history = await getHistory();

    const formatted: Message[] = history.map((msg, idx) => ({
      id: `${msg.timestamp}-${idx}`, // đảm bảo unique id
      content: msg.content,
      sender: msg.sender,
      timestamp: new Date(msg.timestamp * 1000), // convert UNIX to Date
      status: "read", // vì là tin cũ nên đánh dấu đã đọc
    }));

    setMessages((prev) => [
      ...prev.filter((m) => m.id === "welcome"), // giữ welcome nếu muốn
      ...formatted,
    ]);
  }, []);

  return {
    messages,
    contacts,
    isTyping,
    sendMessage,
    getHistoryChat,
  };
}
