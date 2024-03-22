import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyCjSWKop9h4C9iZHHaTVwhRA340Awbj0gY");



async function run(prompt) {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const result = await model.generateContent(prompt + " **ตอบไม่เกิน150ตัวอักษร");
  const response = await result.response;
  const text = response.text();
  return text;
}



export { run };
