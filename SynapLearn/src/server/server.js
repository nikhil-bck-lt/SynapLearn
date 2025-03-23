require("dotenv").config(); // Load environment variables
const express = require("express");
const cors = require("cors");
const axios = require("axios"); // For making API calls
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// ✅ Test Route to Check Server
app.get("/", (req, res) => {
    res.send("Server is running...");
});

// ✅ Simple "Hello World" Route
app.get("/hello", (req, res) => {
    res.status(200).send("Hello World");
});

// ✅ Chatbot API Endpoint
app.post("/chat", async (req, res) => {
    const userMessage = req.body.message;
    
    if (!userMessage) {
        return res.status(400).json({ error: "Message is required" });
    }

    try {
        // Call OpenAI API (Example: Replace with your AI model)
        const botResponse = `You said: ${userMessage}`;

        res.json({ reply: botResponse });
    } catch (error) {
        console.error("Error generating chatbot response:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

// ✅ Start the Server
app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
});
