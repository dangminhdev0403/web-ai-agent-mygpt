// client-components.tsx
"use client";

import { BookOpenCheck, MessageSquare, Users2 } from "lucide-react";

export const chatbotApplications = [
  {
    icon: <MessageSquare className="text-green-500 w-8 h-8" />,
    title: "GenAI Chatbot tư vấn",
    description:
      "Ứng dụng làm Chatbot trong tư vấn sản phẩm, dịch vụ, tuyển sinh hoặc hỏi đáp...",
  },
  {
    icon: <BookOpenCheck className="text-green-500 w-8 h-8" />,
    title: "GenAI Chatbot sửa chữa",
    description:
      "Ứng dụng hỏi đáp và tính toán giá thành sửa chữa và dịch vụ gia   đình , xã hội",
  },
  {
    icon: <Users2 className="text-green-500 w-8 h-8" />,
    title: "GenAI Chatbot Dịch vụ công",
    description:
      "Xây dựng hệ thống tư vấn thủ tục hành chính, hỏi đáp văn bản pháp quy...",
  },
];

export const chatbotButtons = [
  { label: "Chat với Rạng Đông", href: "#" },
  { label: "Chat với FUNiX", href: "#" },
  { label: "Tuyển sinh Đại học", href: "#" },
  { label: "Tư vấn SP Ngân hàng", href: "#" },
];
