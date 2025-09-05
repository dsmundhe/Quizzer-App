import React, { useState } from "react";
import { ClipboardCopy, CheckCircle } from "lucide-react";

const QuizzPrompt = () => {
  const [topic, setTopic] = useState("");
  const [copied, setCopied] = useState(false);

  const promptText = `
I want you to generate a Quiz API in JSON format with the following structure:

{
  "title": "Quiz Title",
  "topic": "${topic}",
  "questions": [
    {
      "question": "Question text?",
      "options": ["Option1", "Option2", "Option3", "Option4"],
      "answer": "Correct Option"
    }
  ]
}

🔹 Strict Rules for the Quiz API:
1. The quiz MUST contain **exactly 30 questions**. No more, no less.
2. Each question MUST have **exactly 4 options**.
3. Only **one correct answer** is allowed per question.
4. The "answer" field must match one of the provided options exactly.
5. The JSON must be **valid**, with no comments, no trailing commas, and proper syntax.
6. Questions should be **unique**, clear, and cover a wide range of topics within "${topic}".
7. Use simple and precise wording so each question is easily understandable.
8. Include a variety of question types: definitions, concepts, applications, true/false, and multiple-choice scenarios.
9. Ensure that options are **plausible**, so only one option is clearly correct.
10. The JSON output should be ready to use in an API, without requiring any modification.

Now generate a **quiz of exactly 30 questions** for the topic: "${topic}" following all the rules above.
`;

  const handleCopy = () => {
    navigator.clipboard.writeText(promptText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6 py-10">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-xl p-8 border border-blue-200">
        {/* Header */}
        <h1 className="text-3xl font-extrabold text-blue-700 text-center mb-6">
          Quiz Prompt Generator
        </h1>

        {/* Copy Button at Top */}
        <div className="flex justify-end mb-6">
          <button
            onClick={handleCopy}
            disabled={!topic}
            className="flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-400 hover:from-blue-400 hover:to-blue-300 text-white font-semibold shadow-md transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {copied ? (
              <>
                <CheckCircle className="w-5 h-5" /> Copied!
              </>
            ) : (
              <>
                <ClipboardCopy className="w-5 h-5" /> Copy Prompt
              </>
            )}
          </button>
        </div>

        {/* Topic Input */}
        <div className="mb-6">
          <label className="block text-blue-700 mb-2 font-medium">
            Enter Topic
          </label>
          <input
            type="text"
            placeholder="e.g., Java, React, MongoDB"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="w-full p-4 rounded-xl bg-blue-50 text-blue-900 border border-blue-200 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
          />
        </div>

        {/* Prompt Preview */}
        <div className="mb-6">
          <label className="block text-blue-700 mb-2 font-medium">
            Generated Prompt
          </label>
          <textarea
            readOnly
            value={promptText}
            className="w-full h-64 p-4 rounded-xl bg-blue-50 text-blue-900 border border-blue-200 resize-none focus:outline-none shadow-inner"
          />
        </div>
      </div>
    </div>
  );
};

export default QuizzPrompt;
