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

export { questions };
