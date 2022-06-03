import { CSSProperties, useCallback } from 'react';
import { ChatBoxInput, OnMessageSubmitTriggered } from './ChatBoxInput/ChatBoxInput';
import { ChatBoxOutput } from './ChatBoxOutput/ChatBoxOutput';
import { useChatService } from './ChatServiceContext';
import { useChat } from './useChat';

export interface ChatBoxProps {}

export const ChatBox: React.FC<ChatBoxProps> = () => {
  const messages = useChat();
  const chatService = useChatService();

  const onMessageSubmitTriggered: OnMessageSubmitTriggered = useCallback((message) => {
    chatService.send(message);
  }, []);

  return (
    <div style={style.container}>
      Box
      <ChatBoxOutput containerStyle={style.output} messages={messages} />
      <ChatBoxInput
        containerStyle={style.input}
        onMessageSubmitTriggered={onMessageSubmitTriggered}
      />
    </div>
  );
};

const style: Record<string, CSSProperties> = {
  container: {
    width: 300,
    height: 600,
    boxSizing: 'border-box',
    border: '1px solid blue',
    display: 'flex',
    flexDirection: 'column',
  },
  output: {
    flex: 1,
    boxSizing: 'border-box',
    borderBottom: '1px solid blue',
  },
  input: {
    boxSizing: 'border-box',
  },
};
