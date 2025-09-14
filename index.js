import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { PromptTemplate } from "@langchain/core/prompts";

// Suppress marketing/banner output from dotenv v17 by pre-setting the quiet flag
process.env.DOTENV_CONFIG_QUIET = "true";

// Dynamically import dotenv AFTER setting quiet flag so it takes effect
const { config } = await import("dotenv");

config();
const model = new ChatGoogleGenerativeAI({
    model: "gemini-2.5-flash",
    apiKey: process.env.GEMINI_API_KEY,
});

const promptTemplate = PromptTemplate.fromTemplate(`
    At the top Write {topic} in question form with a question mark at the end. Then below that,
    explain {topic} in very simple words Like I'm 5 years old,
    make sure it includes the core concepts and avoid jargon.
    use examples and analogies to make it relatable.
    make the answer as concise as possible.
`);

// Note: very Important
// thats why it name chain because we are chaining prompt and model because output of prompt is input to model
const chain = promptTemplate.pipe(model)

chain.invoke({ topic: "LangChain" }).then((response) => {
    console.log(response.content);
})

