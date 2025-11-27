// src/pages/Chat.jsx
import React, { useEffect, useRef, useState } from 'react';
import './Chat.css';

const initialChats = [
  { id: '1', name: 'Vaibhav (Field Agent)' },
  { id: '2', name: 'North Zone Group' },
  { id: '3', name: 'Supervisors' },
];

const initialMessages = {
  '1': [
    { id: 1, from: 'agent', text: 'Reached Site 21.', time: '10:15' },
    { id: 2, from: 'supervisor', text: 'Share photos when ready.', time: '10:16' },
  ],
  '2': [{ id: 1, from: 'agent', text: 'Anyone at Site 45?', time: '09:40' }],
  '3': [{ id: 1, from: 'supervisor', text: 'Weekly review at 5 PM.', time: '08:00' }],
};

const Chat = () => {
  const [selectedChatId, setSelectedChatId] = useState('1');
  const [messagesByChat, setMessagesByChat] = useState(initialMessages);
  const [input, setInput] = useState('');
  const bottomRef = useRef(null);

  const messages = messagesByChat[selectedChatId] || [];

  const handleSend = () => {
    if (!input.trim()) return;
    const newMsg = {
      id: Date.now(),
      from: 'supervisor',
      text: input.trim(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessagesByChat((prev) => ({
      ...prev,
      [selectedChatId]: [...(prev[selectedChatId] || []), newMsg],
    }));
    setInput('');
  };

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, selectedChatId]);

  return (
    <div className="chat-root">
      <aside className="chat-list">
        <h3>Chats</h3>
        <ul>
          {initialChats.map((chat) => (
            <li
              key={chat.id}
              className={chat.id === selectedChatId ? 'active' : ''}
              onClick={() => setSelectedChatId(chat.id)}
            >
              {chat.name}
            </li>
          ))}
        </ul>
      </aside>

      <section className="chat-conversation">
        <header className="chat-header">
          <h3>
            {
              initialChats.find((c) => c.id === selectedChatId)?.name
            }
          </h3>
        </header>

        <div className="chat-messages">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`chat-message ${msg.from === 'supervisor' ? 'outgoing' : 'incoming'}`}
            >
              <div className="chat-bubble">
                <p>{msg.text}</p>
                <span className="chat-time">{msg.time}</span>
              </div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        <footer className="chat-input-bar">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSend();
            }}
          />
          <button onClick={handleSend}>Send</button>
        </footer>
      </section>
    </div>
  );
};

export default Chat;
