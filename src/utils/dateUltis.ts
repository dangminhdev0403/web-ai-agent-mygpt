export function formatTime(date: Date): string {
  const now = new Date();
  const diff = now.getTime() - date.getTime();

  // Less than 1 minute
  if (diff < 60000) return "Vừa xong";

  // Less than 1 hour
  if (diff < 3600000) {
    const minutes = Math.floor(diff / 60000);
    return `${minutes} phút trước`;
  }

  // Same day
  if (diff < 86400000) {
    return date.toLocaleTimeString("vi-VN", {
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  // Different day
  return date.toLocaleDateString("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  });
}

export function formatLastMessageTime(date: Date): string {
  const now = new Date();
  const diff = now.getTime() - date.getTime();

  if (diff < 60000) return "Vừa xong";
  if (diff < 3600000) return `${Math.floor(diff / 60000)}p`;
  if (diff < 86400000)
    return date.toLocaleTimeString("vi-VN", {
      hour: "2-digit",
      minute: "2-digit",
    });
  if (diff < 604800000) return `${Math.floor(diff / 86400000)} ngày`;

  return date.toLocaleDateString("vi-VN", { day: "2-digit", month: "2-digit" });
}
