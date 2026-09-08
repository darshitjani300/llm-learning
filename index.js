require("dotenv").config();
const { GoogleGenAI } = require("@google/genai");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Hello, World!");

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

rl.question("Ask Something: ", async (question) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3.1-flash-lite",
      contents: question,
    });
    console.log("REsponse  TExt", response.text);
  } catch (error) {
    console.error(error);
  } finally {
    rl.close();
  }
});
