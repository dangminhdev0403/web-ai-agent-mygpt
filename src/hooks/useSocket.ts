// hooks/useSocket.ts
import { EVENTS_SOCKET } from "@/utils/event.socket";
import { useEffect, useRef } from "react";
import { io, Socket } from "socket.io-client";

export const useSocket = () => {
  const socketRef = useRef<Socket | null>(null);
  const urlBackend = process.env.NEXT_PUBLIC_BACKEND_URL;
  useEffect(() => {
    socketRef.current = io(urlBackend);

    socketRef.current.on("connect", () => {
      console.log("Connected to socket.io server");
    });

    socketRef.current.on(EVENTS_SOCKET.MESSAGE_TO_CLIENT, (message) => {
      console.log("Received:", message);
    });

    return () => {
      socketRef.current?.disconnect();
    };
  }, [urlBackend]);

  const sendMessage = (msg: string) => {
    socketRef.current?.emit(EVENTS_SOCKET.MESSAGE_TO_SERVER, msg);
    
  };

  return { sendMessage };
};
