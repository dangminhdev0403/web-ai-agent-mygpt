"use client";

import { ChatHeader } from "@/components/chat/ChatHeader";
import { MessageInput } from "@/components/chat/MessageInput";
import { MessageList } from "@/components/chat/MessageList";
import { useChat } from "@/hooks/useChat";
import { useEffect, useState } from "react";

export default function DesktopChatApp() {
  const { messages, contacts, isTyping, sendMessage, getHistoryChat } =
    useChat();
  const [selectedContactId, setSelectedContactId] = useState("1");
  const [isMaximized, setIsMaximized] = useState(true);

  const selectedContact = contacts.find((c) => c.id === selectedContactId);
  useEffect(() => {
    getHistoryChat();
  }, [getHistoryChat]);
  return (
    <div className="min-h-full bg-gray-100 p-10 mt-10">
      <div
        className={`mx-auto bg-white rounded-xl shadow-2xl overflow-hidden transition-all duration-300 ${
          isMaximized
            ? "w-full h-[calc(100vh-3rem)]"
            : "w-full max-w-7xl h-[800px]"
        }`}
      >
        <div className="flex h-full">
          {/* Chat Area */}
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* Chat Header */}
            <ChatHeader contact={selectedContact} />

            <div className="flex-1 overflow-y-auto">
              <MessageList messages={messages} isTyping={isTyping} />
            </div>

            {/* Input */}
            <MessageInput onSendMessage={sendMessage} disabled={isTyping} />
          </div>
        </div>
      </div>
    </div>
  );
}
