import { useState } from "react";
import "./AIChatbot.css"; // Import the CSS file

const ChatBot = () => {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hello! How can I assist you today?" },
    { role: "user", content: "Can you tell me about your features?" },
    { role: "assistant", content: "Sure! I can help you with various tasks like answering questions, providing recommendations, and more." },
    { role: "user", content: "That's great! Thank you." },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages([...messages, userMessage]);
    setInput("");
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-messages">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`chatbot-message ${
              msg.role === "user" ? "chatbot-message-user" : "chatbot-message-assistant"
            }`}
          >
            {msg.content}
          </div>
        ))}
      </div>

      <div className="chatbot-input-container">
        <input
          type="text"
          className="chatbot-input"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button className="chatbot-send-button" onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBot;
