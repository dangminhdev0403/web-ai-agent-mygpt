"use client";

import { ChatContact } from "@/utils/types/chat";

interface ChatHeaderProps {
  contact: ChatContact | undefined;
}

export function ChatHeader({ contact }: ChatHeaderProps) {
  if (!contact) {
    return (
      <div className="h-16 bg-white border-b px-6 flex items-center justify-center">
        <p className="text-gray-500">Chọn một cuộc trò chuyện để bắt đầu</p>
      </div>
    );
  }

  const getStatusColor = (status: ChatContact["status"]) => {
    switch (status) {
      case "online":
        return "bg-green-500";
      case "away":
        return "bg-yellow-500";
      case "busy":
        return "bg-red-500";
      default:
        return "bg-gray-400";
    }
  };

  const getStatusText = (status: ChatContact["status"]) => {
    switch (status) {
      case "online":
        return "Trực tuyến";
      case "away":
        return "Vắng mặt";
      case "busy":
        return "Bận";
      default:
        return "Ngoại tuyến";
    }
  };

  return (
    <div className="h-16 bg-white border-b px-6 flex items-center justify-between shadow-sm">
      <div className="flex items-center gap-4">
        <div className="relative">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-medium">
            {contact.avatar}
          </div>
          <div
            className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white ${getStatusColor(
              contact.status
            )}`}
            title={getStatusText(contact.status)}
          />
        </div>

        <div>
          <h2 className="font-semibold text-gray-900 text-lg">
            {contact.name}
          </h2>
          <div className="flex items-center gap-2">
            <p className="text-sm text-gray-500 capitalize">
              {getStatusText(contact.status)}
            </p>
            {contact.isTyping && (
              <>
                <span className="text-gray-300">•</span>
                <p className="text-sm text-green-600 italic">Đang nhập...</p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
