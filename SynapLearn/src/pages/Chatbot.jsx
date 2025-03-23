import { useState } from "react";
import "./AIChatbot.css"; // Import the CSS file
import { AlignHorizontalCenter, AlignVerticalCenter } from "@mui/icons-material";

const ChatBot = () => {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hello! How can I assist you today?" },
    { role: "user", content: "Can you tell me about your features?" },
    { role: "assistant", content: "Sure! I can help you with various tasks like answering questions, providing recommendations, and more." },
    { role: "user", content: "That's great! Thank you." },
  ]);
  const [input, setInput] = useState("");
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center", // Center content vertically
    alignItems: "center", // Center content horizontally
    height: "100%", // Adjusted to prevent overflow
    boxSizing: "border-box", // Ensure padding and borders are included in height
  };
  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages([...messages, userMessage]);
    setInput("");
    
  };
  const messageBoxStyle = {
    alignSelf: "center", // Center the message box horizontally
    maxWidth: "60%", // Adjusted to keep messages readable
    margin: "10px auto", // Center the message box vertically with auto margins
    padding: "10px",
    borderRadius: "10px",
    backgroundColor: "#f8d7da",
    color: "#000", // Set font color to black
    // Ensure long words wrap properly
    wordBreak: "break-word",
    border: "1px solid black", // Set border color to black // Ensure font color is black
    textAlign: "center", // Center the text inside the message box
  };
  // Adjust styles for the message box and font color


  return (
    <div className="chatbot-container" style={{ display: "flex", flexDirection: "column", height: "100vh", justifyContent: "center", alignItems: "center", color: "#000" }}>
      <div className="chatbot-messages" style={{ flex: 1, overflowY: "auto", padding: "10px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", color: "#000" }}>
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`chatbot-message ${
              msg.role === "user" ? "chatbot-message-user" : "chatbot-message-assistant"
            }`}
            style={{
              alignSelf: "center",
              maxWidth: "60%",
              margin: "5px 0",
              padding: "10px",
              borderRadius: "10px",
              backgroundColor: msg.role === "user" ? "#d1e7dd" : "#f8d7da",
              textAlign: "center",
              color: "#000",
            }}
          >
            {msg.content}
          </div>
        ))}
      </div>

      <div className="chatbot-input-container" style={{ display: "flex", padding: "10px", borderTop: "1px solid #ccc", width: "100%", maxWidth: "600px", color: "#000" }}>
        <input
          type="text"
          className="chatbot-input"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          style={{ flex: 1, padding: "10px", borderRadius: "5px", border: "1px solid #ccc", marginRight: "10px", color: "#000" }}
        />
        <button
          className="chatbot-send-button"
          onClick={sendMessage}
          style={{ padding: "10px 20px", borderRadius: "5px", backgroundColor: "#007bff", color: "#fff", border: "none" }}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBot;
