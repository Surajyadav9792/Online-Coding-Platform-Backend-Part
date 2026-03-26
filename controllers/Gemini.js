
const { GoogleGenAI }= require("@google/genai");
const solveDout=async(req,res)=>{
    try{
      const { messages ,title,description,testCases,startCode}=req.body;
        const ai = new GoogleGenAI({apiKey:process.env.Gemni_Api_Key});
        async function main() {
        const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: "Explain how AI works in a few words",
        config: {
        systemInstruction: `Your role:
                           - Help users solve programming problems.
                           - Provide hints instead of full solutions unless the user explicitly asks for the full solution.
                           - Explain compiler errors, runtime errors, and logic mistakes clearly.
                           - Support multiple programming languages (C++, Java, Python, JavaScript).
                           - Encourage problem-solving instead of giving direct answers.
                           - If the user asks for approach, give step-by-step guidance.
                           - If the user asks for code, give clean and correct code.
                           - Always keep answers short, clear, and helpful.
                           - Do not give unrelated information.
                           - Focus only on programming, algorithms, and debugging.`
       }
    });
      res.status(201).json({ message:response.text});
      console.log(response.text);
     }
     main();
    }
    catch (err) {
    console.log(err.message);
     res.status(500).json({message:"Internal error in ChatBot"});
  }
}
module.exports=solveDout;