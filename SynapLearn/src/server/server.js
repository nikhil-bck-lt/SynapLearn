import OpenAI from "openai";
const client = new OpenAI();
const express = require("express");
const OpenAI = require("openai");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors()); // Allows frontend to access backend

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

app.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;
    
    const model = "gpt-4-turbo";  // Change this to "gpt-3.5-turbo" if needed
    console.log(`🔍 Using model: ${model}`);

    const response = await openai.chat.completions.create({
      model: model,
      messages: [{ role: "user", content: message }],
    });

    res.json({ reply: response.choices[0].message.content, model: model });
  } catch (error) {
    console.error("❌ Error:", error);
    res.status(500).json({ error: error.message });
  }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));

const completion = await client.chat.completions.create({
    model: "gpt-4o",
    messages: [
        {
            role: "user",
            content: "Write a one-sentence bedtime story about a unicorn.",
        },
    ],
});

console.log(completion.choices[0].message.content);