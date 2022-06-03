import React from 'react';
import './App.css';
import { ChatBox } from './ChatBox';
import { ChatServiceProvider } from './ChatBox/ChatServiceContext';

function App() {
  return (
    <div className="App">
      <h1>ChatBox</h1>
      <ChatServiceProvider>
        <ChatBox />
      </ChatServiceProvider>
    </div>
  );
}

export default App;
