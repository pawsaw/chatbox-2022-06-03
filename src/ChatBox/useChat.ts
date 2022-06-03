import { useState, useEffect } from 'react';
import { ChatMessage } from './ChatMessage';
import { useChatService } from './ChatServiceContext';

export const useChat = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const chatService = useChatService();

  useEffect(() => {
    const sub = chatService.listenForMessages((chat) => {
      setMessages(chat);
    });

    return () => {
      sub.unsubscribe();
    };
  }, [chatService]);

  return messages;
};
