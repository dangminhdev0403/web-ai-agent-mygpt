"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { formatTime } from "@/utils/dateUltis";
import { Message } from "@/utils/types/chat";
import { Bot, Check, CheckCheck, User } from "lucide-react";
import { useEffect, useRef } from "react";
interface MessageListProps {
  messages: Message[];
  isTyping: boolean;
}

export function MessageList({ messages, isTyping }: MessageListProps) {
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (scrollAreaRef.current) {
      const scrollContainer = scrollAreaRef.current.querySelector(
        "[data-radix-scroll-area-viewport]"
      );
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight;
      }
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const getStatusIcon = (status: Message["status"]) => {
    switch (status) {
      case "sent":
        return <Check className="w-3 h-3" />;
      case "delivered":
        return <CheckCheck className="w-3 h-3" />;
      case "read":
        return <CheckCheck className="w-3 h-3 text-blue-500" />;
      default:
        return null;
    }
  };

  const getStatusText = (status: Message["status"]) => {
    switch (status) {
      case "sending":
        return "Đang gửi...";
      case "sent":
        return "Đã gửi";
      case "delivered":
        return "Đã nhận";
      case "read":
        return "Đã đọc";
      default:
        return "";
    }
  };

  return (
    <ScrollArea ref={scrollAreaRef} className="flex-1 p-6">
      <div className="space-y-6">
        {messages.map((message, index) => {
          const showAvatar =
            index === 0 || messages[index - 1].sender !== message.sender;
          const showTimestamp =
            index === 0 ||
            message.timestamp.getTime() -
              messages[index - 1].timestamp.getTime() >
              300000; // 5 minutes

          return (
            <div key={message.id}>
              {showTimestamp && (
                <div className="flex justify-center mb-4">
                  <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {formatTime(message.timestamp)}
                  </span>
                </div>
              )}

              <div
                className={`flex gap-4 ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {message.sender === "bot" && (
                  <div
                    className={`w-10 h-10 flex-shrink-0 ${
                      showAvatar ? "visible" : "invisible"
                    }`}
                  >
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <Bot className="w-5 h-5 text-white" />
                    </div>
                  </div>
                )}

                <div
                  className={`max-w-[65%] ${
                    message.sender === "user" ? "order-2" : ""
                  }`}
                >
                  <div
                    className={`rounded-2xl px-4 py-3 shadow-sm ${
                      message.sender === "user"
                        ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-br-md"
                        : "bg-white border border-gray-200 text-gray-800 rounded-bl-md"
                    }`}
                  >
                    <p className="leading-relaxed whitespace-pre-wrap">
                      {message.content}
                    </p>
                  </div>

                  <div
                    className={`flex items-center gap-2 mt-2 text-xs ${
                      message.sender === "user"
                        ? "justify-end text-gray-500"
                        : "justify-start text-gray-500"
                    }`}
                  >
                    <span>{formatTime(message.timestamp)}</span>
                    {message.sender === "user" && message.status && (
                      <div className="flex items-center gap-1">
                        {getStatusIcon(message.status)}
                        <span
                          className={
                            message.status === "read" ? "text-blue-500" : ""
                          }
                        >
                          {getStatusText(message.status)}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {message.sender === "user" && (
                  <div
                    className={`w-10 h-10 flex-shrink-0 order-3 ${
                      showAvatar ? "visible" : "invisible"
                    }`}
                  >
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 text-white" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}

        {isTyping && (
          <div className="flex gap-4 justify-start">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl rounded-bl-md px-4 py-3 shadow-sm">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div
                  className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0.1s" }}
                ></div>
                <div
                  className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                ></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </ScrollArea>
  );
}
