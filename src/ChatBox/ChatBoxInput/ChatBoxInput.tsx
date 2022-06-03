import { CSSProperties, useState } from 'react';
import { ChatMessage } from '../ChatMessage';

export interface OnMessageSubmitTriggered {
  (message: ChatMessage): void;
}

export interface ChatBoxInputProps {
  containerStyle?: CSSProperties;
  onMessageSubmitTriggered: OnMessageSubmitTriggered;
}

export const ChatBoxInput: React.FC<ChatBoxInputProps> = ({
  containerStyle = {},
  onMessageSubmitTriggered,
}) => {
  const [messageInput, setMessageInput] = useState('');

  const onSubmitButtonClicked = () => {
    onMessageSubmitTriggered({
      author: 'me',
      data: messageInput,
    });
    setMessageInput('');
  };

  return (
    <div style={{ ...style.container, ...containerStyle }}>
      <input
        type="text"
        placeholder="Your message"
        style={style.input}
        value={messageInput}
        onChange={(event) => setMessageInput(event.target.value)}
      />
      <button onClick={onSubmitButtonClicked}>Submit</button>
    </div>
  );
};

const style: Record<string, CSSProperties> = {
  container: {
    width: '100%',
    padding: '0.3em 0.5em',
    display: 'flex',
    gap: 10,
  },
  input: {
    flex: 1,
  },
};
