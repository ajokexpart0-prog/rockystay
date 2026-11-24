import React from 'react';
import { MessageCircle } from 'lucide-react';
import { SITE_CONFIG } from '../data/apartments';

export const FloatingWhatsApp: React.FC = () => {
  const url = `${SITE_CONFIG.whatsappBaseUrl}?text=${encodeURIComponent(
    "Hello RockyStay Suites, I'd like to enquire about a short-let stay in Tanke, Ilorin."
  )}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with RockyStay Suites on WhatsApp"
      className="fixed bottom-4 right-4 z-30 inline-flex items-center gap-2 min-h-[46px] px-4 py-2.5 rounded-full bg-[#F5CC4C] hover:bg-[#EAC03B] text-[#1E4D8C] font-bold text-sm shadow-lg border border-[#3B82F6]/20 transition-transform hover:scale-[1.03]"
    >
      <MessageCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
      <span className="hidden sm:inline whitespace-nowrap">WhatsApp Desk</span>
    </a>
  );
};
