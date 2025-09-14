import { ChatGoogleGenerativeAI } from "@langchain/google-genai";

// Suppress marketing/banner output from dotenv v17 by pre-setting the quiet flag
process.env.DOTENV_CONFIG_QUIET = "true";

// Dynamically import dotenv AFTER setting quiet flag so it takes effect
const { config } = await import("dotenv");


config();
const model = new ChatGoogleGenerativeAI({
    model: "gemini-2.5-flash",
    apiKey: process.env.GEMINI_API_KEY,
});

const res = await model.invoke("jaun elia ki shairi likho, write his orginal shairi  (max 2 lines, use emoji if possible)");
    console.log(res.content);


// Minimal invocation so the script does something visible
// try {
//     const res = await model.invoke("Greet user with a positive message. (in 5 words or less)");
//     // LangChain chat models usually return a BaseMessage-like object
//     console.log("Model response:", res?.content ?? res);
// } catch (err) {
//     console.error("Model invocation failed:", err);
//     process.exit(1);
// }
