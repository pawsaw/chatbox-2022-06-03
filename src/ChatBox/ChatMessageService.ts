import { ChatMessage } from './ChatMessage';

export interface Subscription {
  unsubscribe: () => void;
}

export interface OnMessages {
  (chat: ChatMessage[]): void;
}

export interface ChatMessageService {
  send(message: ChatMessage): Promise<void>;
  listenForMessages(onMessages: OnMessages): Subscription;
}
