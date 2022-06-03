import { ChatMessage } from './ChatMessage';
import { ChatMessageService, OnMessages, Subscription } from './ChatMessageService';

export class MockChatMessageService implements ChatMessageService {
  private _listener: OnMessages | null = null;
  private _messages: ChatMessage[] = [];

  constructor() {
    setInterval(() => {
      this.send({
        author: 'peer',
        data: 'Hallo, bist du noch da?',
      });
      this.notifyAll();
    }, 3000);
  }

  async send(message: ChatMessage): Promise<void> {
    this._messages = [...this._messages, message];
    this.notifyAll();
  }

  listenForMessages(onMessages: OnMessages): Subscription {
    this._listener = onMessages;
    return {
      unsubscribe: () => {
        this._listener = null;
      },
    };
  }

  private notifyAll(): void {
    if (this._listener) {
      this._listener(this._messages);
    }
  }
}
