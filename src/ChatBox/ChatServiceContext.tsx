import React, { useContext } from 'react';
import { ReactNode } from 'react';
import { ChatMessageService } from './ChatMessageService';
import { MockChatMessageService } from './MockChatMessageService';

const defaultService = new MockChatMessageService();

const ChatServiceContext = React.createContext<ChatMessageService>(defaultService);

export const ChatServiceProvider: React.FC<{
  children: ReactNode;
  service?: ChatMessageService;
}> = ({ children, service = defaultService }) => (
  <ChatServiceContext.Provider value={service}>{children}</ChatServiceContext.Provider>
);

export const useChatService = () => useContext(ChatServiceContext);
