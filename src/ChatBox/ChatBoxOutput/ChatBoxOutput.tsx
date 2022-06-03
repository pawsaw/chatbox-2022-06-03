import { CSSProperties } from 'react';
import { ChatMessage } from '../ChatMessage';

export interface ChatBoxOutputProps {
  containerStyle?: CSSProperties;
  messages: ChatMessage[];
}

export const ChatBoxOutput: React.FC<ChatBoxOutputProps> = ({ containerStyle = {}, messages }) => {
  return (
    <div style={{ ...style.container, ...containerStyle }}>
      {messages.map((message, i) => (
        <div
          key={i}
          style={{
            ...style.message,
            ...(message.author === 'me' ? style.messageMe : style.messagePeer),
          }}
        >
          {message.data}
        </div>
      ))}
    </div>
  );
};

const style: Record<string, CSSProperties> = {
  container: {
    width: '100%',
    padding: '0.3em 0.5em',
    overflowY: 'scroll',
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },
  message: {
    maxWidth: '80%',
    boxSizing: 'border-box',
    padding: '0.3em 0.5em',
    border: '1px solid',
    display: 'flex',
    borderRadius: 3,
  },
  messageMe: {
    borderColor: 'blue',
    alignSelf: 'flex-end',
  },
  messagePeer: {
    borderColor: 'red',
    alignSelf: 'flex-start',
  },
};
