const questions = [
  //answerType:["any":can answer any one correct answer,"all":must answer all correct answers]
  // answer: ["Red", "White", "Blue"] :Array of correct answers
  {
    question: "PPB ย่อมาจากคำภาษาอังกฤษว่า",
    answerType: "all",
    answer: ["Parts", "per", "Billion"],
  },
  {
    question:
      "ความเข้มข้น 1 PPB (1 ส่วนในพันล้านส่วน) กับ 1 PPM (1 ส่วนในล้านส่วน) ความเข้มข้นใด มีความเข้มข้นมากกว่า",
    answerType: "any",
    answer: [
      "1 PPM",
      "PPM",
      "Ppm",
      "หนึ่งในล้านส่วน",
      "หนึ่งส่วนในล้านส่วน",
      "1/ล้าน",
    ],
  },
  {
    question: "Arsenic เข้าสู่ร่างกายทางอวัยวะส่วนใดได้บ้าง",
    answerType: "any",
    answer: [
      "ผิวหนัง",
      "การสัมผัส",
      "การหายใจ",
      "จมูก",
      "ปาก",
      "การรับประทานอาหารที่ปนเปื้อน",
      "การดื่มน้ำที่ปนเปื้อน",
    ],
  },
  {
    question: "Arsenic ในธรรมชาติมาจากอะไรได้บ้าง",
    answerType: "any",
    answer: [
      "ตอบอันใดอันหนึ่งต่อไปนี้",
      "การชะล้างของหิน",
      "ภูเขาไฟ",
      "เปลือกโลก",
      "การทำแหมืองเร่",
      "โรงงานอุตสาหกรรม",
      "การใช้ปุ๋ยและยาฆ่าแมลง",
      "การผสมในอาหาร",
      "การผลิตยา",
    ],
  },
];

const aiChatBot = ["hi1", "hi2", "hi4", "hi3", "hi5", "hi6"];

const chatPrompt = {
  Variations1: [
    "ไม่",
    "ไม่มี",
    "ไม่มีครับ",
    "ไม่ครับ",
    "ไม่มีคับ",
    "ไม่คะ",
    "ไม่มีคะ",
    "ไม่มี",
    "ไม่ค่า",
    "ไม่มีค่า",
  ],
  Variations2: [
    "มี",
    "มีครับ",
    "มีคับ",
    "มีคะ",
    "มีค่า",
    "ครับ",
    "คับ",
    "คะ",
    "ค่า",
  ],
};

export { questions };
