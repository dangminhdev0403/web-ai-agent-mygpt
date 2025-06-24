export interface Message {
  id: string
  content: string
  sender: "user" | "bot"
  timestamp: Date
  status?: "sending" | "sent" | "delivered" | "read"
  type?: "text" | "image" | "file"
}

export interface ChatContact {
  id: string
  name: string
  avatar: string
  status: "online" | "offline" | "away" | "busy"
  lastMessage: string
  lastMessageTime: Date
  unreadCount: number
  isTyping?: boolean
}

export interface ChatRoom {
  id: string
  name: string
  type: "direct" | "group"
  participants: string[]
  messages: Message[]
  lastActivity: Date
}
