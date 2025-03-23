import { useState } from "react";
import axios from "axios";

const AIChatbot = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { text: input, sender: "user" }];
    setMessages(newMessages);
    setInput("");

    try {
      const { data } = await axios.post("http://localhost:5000/chat", { message: input });
      setMessages([...newMessages, { text: data.reply, sender: "bot" }]);
    } catch (error) {
      console.error("Error:", error);
      setMessages([...newMessages, { text: "Error connecting to AI server", sender: "bot" }]);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-b from-green-200 to-green-500 p-4">
      <div className="flex-1 overflow-y-auto bg-white rounded-lg shadow-md p-4">
        {messages.map((msg, i) => (
          <div key={i} className={`p-2 my-2 max-w-xs rounded-lg ${msg.sender === "user" ? "bg-blue-500 text-white self-end ml-auto" : "bg-gray-300 text-black self-start"}`}>
            {msg.text}
          </div>
        ))}
      </div>

      <div className="mt-4 flex">
        <input
          type="text"
          className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          onClick={handleSend}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default AIChatbot;
