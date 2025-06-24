"use client";

import { Send } from "lucide-react";
import { useRef, useState, type KeyboardEvent } from "react";

import TextField from "@mui/material/TextField";

interface MessageInputProps {
  onSendMessage: (message: string) => void;
  disabled?: boolean;
  placeholder?: string;
}

export function MessageInput({
  onSendMessage,
  disabled = false,
  placeholder = "Nhập tin nhắn... (Enter để gửi, Shift + Enter để xuống dòng)",
}: MessageInputProps) {
  const [message, setMessage] = useState("");
  const textareaRef = useRef<HTMLDivElement | null>(null);

  const handleSend = () => {
    if (message.trim() && !disabled) {
      onSendMessage(message.trim());
      setMessage("");
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="p-6 bg-white border-t">
      {/* Quick Actions */}
      <div className="flex items-center gap-2 mb-4">
        <div className="flex-1" />

        <span className="text-xs text-gray-500">{message.length}/2000</span>
      </div>

      {/* Input Area */}
      <div className="flex items-end gap-3">
        <div className="flex-1 relative">
          <TextField
            multiline
            maxRows={5}
            inputRef={textareaRef}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder={placeholder}
            disabled={disabled}
            fullWidth
            variant="outlined"
            size="small"
            sx={{
              "& .MuiOutlinedInput-root": {
                paddingRight: "40px",
              },
            }}
          />
        </div>

        <button
          onClick={handleSend}
          disabled={!message.trim() || disabled}
          className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 mb-2 rounded disabled:opacity-50"
          title="Gửi tin nhắn"
        >
          <Send className="w-5 h-5" />
        </button>
      </div>

      {/* Status Bar */}
      <div className="flex items-center justify-between mt-3 text-xs text-gray-500">
        <div className="flex items-center gap-4">
          <span>Nhấn Enter để gửi, Shift + Enter để xuống dòng</span>
        </div>
        <span>Đặt xe rẻ</span>
      </div>
    </div>
  );
}
