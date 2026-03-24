
const Problem=require("../model/problem");
const Submission=require("../model/submission")
const {getLanguageId,submitBatch,submitoken}=require("../utils/fetch_language_id")
const submitCode = async (req,res) => {

try{

 const userId=req.result._id;
 const problemId=req.params.problemId;

 let {code,language}=req.body;

 if(language==="cpp"){
   language="c++"
 }

 if(!userId||!problemId||!code||!language){
    return res.status(400).send("Some field is Missing");
 }

 const problem=await Problem.findById(problemId);

 if(!problem){
   return res.status(404).send("Problem not found");
 }

 if(!problem.hiddenTestCases){
   return res.status(400).send("No hidden testcases");
 }

 const submittedResult = await Submission.create({
  userId,
  problemId,
  code,
  language,
  testCasesPassed:0,
  status:"pending",
  testCasesTotal: problem.hiddenTestCases.length
 });

 const languageId=getLanguageId(language);
// making it in judge0 formate and In every test cases the loop is go  
 const submissions=problem.hiddenTestCases.map((testcase)=>({
   source_code:code,
   language_id:languageId,
   stdin:testcase.input,
   expected_output:testcase.output 
 }));

 //here we store all submission which have diff diff testCase in array which is called submission batch
 const submitResult=await submitBatch(submissions);
//judge0 give the token and here we fetch the token 
 const resultToken=submitResult.map(v=>v.token);
//here we fetch the result on the basis of token
 const testResult=await submitoken(resultToken);

 let testCasesPassed=0;
 let runtime=0;
 let memory=0;
 let status='accepted';
 let errorMessage='';

 for(const test of testResult){

   if(test.status_id==3){
      testCasesPassed++;
      runtime+=parseFloat(test.time||0);
      memory=Math.max(memory,test.memory||0);
   }
   else if(test.status_id==4){
      status="error";
      errorMessage=test.stderr;
   }
   else{
      status="wrong";
      errorMessage=test.stderr;
   }

 }

 submittedResult.status=status;
 submittedResult.testCasesPassed=testCasesPassed;
 submittedResult.errorMessage=errorMessage;
 submittedResult.runtime=runtime;
 submittedResult.memory=memory;

 await submittedResult.save();

 if(!req.result.problemSolved.includes(problemId)){
    req.result.problemSolved.push(problemId);
    await req.result.save();
 }

 res.status(201).send({
   accepted: status==="accepted",
   passedTestCases:testCasesPassed,
   totalTestCases:problem.hiddenTestCases.length,
   runtime,
   memory,
   error:errorMessage
 });

}
catch(err){
 res.status(500).send("Internal server error: "+err);
}

}
const runCode = async (req, res) => {
  try {

    const userId = req.result._id;
    const problemId = req.params.problemId;

    let { code, language } = req.body;

    if (!userId || !problemId || !code || !language) {
      return res.status(400).send("Some field is Missing");
    }

    if (language === "cpp") {
      language = "c++";
    }

    const problem = await Problem.findById(problemId);

    const languageId = getLanguageId(language);

    const submissions = problem.visibleTestCases.map((testcase) => ({
      source_code: code,
      language_id: languageId,
      stdin: testcase.input,
      expected_output: testcase.output
    }));

    const submitResult = await submitBatch(submissions);

    const resultToken = submitResult.map((v) => v.token);

    const testResult = await submitoken(resultToken);

    let success = true;
    let runtime = 0;
    let memory = 0;

    for (const test of testResult) {

      if (test.status_id != 3) {
        success = false;
      }

      runtime += parseFloat(test.time || 0);
      memory = Math.max(memory, test.memory || 0);

    }

    res.status(201).send({
      success,
      runtime,
      memory,
      testCases: testResult
    });

  }
  catch (err) {
    res.status(500).send("Internal server error: " + err);
  }
};
module.exports={submitCode,runCode};