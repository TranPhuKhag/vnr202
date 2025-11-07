// src/pages/ChatbotPage.tsx
import React from "react";
// Không cần motion ở đây nữa
import VoiceChatbot from "../components/VoiceChatbot";

const ChatbotPage: React.FC = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-[#f4f7ff] py-10 px-2">
    {/* Đã loại bỏ thẻ div "w-full max-w-2xl bg-white/90..."
      và tiêu đề motion.h2 khỏi đây.
      Chúng ta để component VoiceChatbot tự quản lý thẻ (card) của nó.
    */}
    <VoiceChatbot />
  </div>
);

export default ChatbotPage;
