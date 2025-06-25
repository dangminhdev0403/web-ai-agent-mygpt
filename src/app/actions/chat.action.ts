"use server";

import api from "@/libs/axios";
import { sessionOptions } from "@/libs/sessionOptions";
import { getIronSession, IronSession, IronSessionData } from "iron-session";
import { cookies } from "next/headers";
import { v4 as uuidv4 } from "uuid";

export async function sendChatBox(query: string) {
  const session: IronSession<IronSessionData> = await getIronSession(
    await cookies(),
    sessionOptions
  );

  // ✅ Không cần ép kiểu, TypeScript sẽ tự nhận đúng IronSessionData nếu cấu hình đúng
  session.userId ??= uuidv4();

  const payload = {
    query: query,
    conversation_id: session.conversation_id,
    userId: session.userId,
  };
  const res = await api.post("/chat", payload);

  // ✅ Lưu conversation_id nếu có
  const conversation_id = res.data?.conversation_id;
  if (conversation_id && !session.conversation_id) {
    session.conversation_id = conversation_id;
    await session.save();
  }

  return res.data;
}

export async function getHistory() {
  const session: IronSession<IronSessionData> = await getIronSession(
    await cookies(),
    sessionOptions
  );
  if (!session.conversation_id || !session.userId) return [];

  const payload = {
    conversation_id: session.conversation_id,
    userId: session.userId,
  };
  const res = await api.post("/chat/conversations", payload);
  return res.data ?? [];
}
