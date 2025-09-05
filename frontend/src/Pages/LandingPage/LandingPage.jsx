import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const quizzes = [
  {
    id: 1,
    title: "JavaScript Basics",
    description: "Test your JS fundamentals.",
  },
  {
    id: 2,
    title: "React Mastery",
    description: "Check how well you know React.",
  },
  {
    id: 3,
    title: "Node.js Backend",
    description: "Challenge yourself with backend concepts.",
  },
  {
    id: 4,
    title: "MongoDB Essentials",
    description: "Database quiz for developers.",
  },
];

const LandingPage = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const filteredQuizzes = quizzes.filter((quiz) =>
    quiz.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white flex flex-col items-center py-10 px-4">
      {/* Header with Title + Buttons */}
      <div className="w-full max-w-6xl flex flex-col sm:flex-row justify-between items-center mb-10 gap-4 sm:gap-0">
        <h1 className="text-4xl sm:text-5xl font-bold text-indigo-700 text-center sm:text-left drop-shadow-md">
          Explore Quizzes
        </h1>
        <div className="flex gap-3">
          <button
            onClick={() => navigate("/addquiz")}
            className="bg-gradient-to-r from-green-500 to-green-600 text-white px-5 py-2 rounded-2xl font-semibold hover:from-green-600 hover:to-green-700 shadow-lg transition-transform transform hover:scale-105"
          >
            + Add Quiz
          </button>
          <button
            onClick={() => navigate("/quizeprompt")}
            className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-5 py-2 rounded-2xl font-semibold hover:from-indigo-500 hover:to-blue-600 shadow-lg transition-transform transform hover:scale-105"
          >
            Quiz Prompt
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="w-full max-w-2xl mb-10">
        <input
          type="text"
          placeholder="Search quizzes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-5 py-3 rounded-2xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none shadow-sm text-gray-700 placeholder-gray-400 transition"
        />
      </div>

      {/* Quiz Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {filteredQuizzes.length > 0 ? (
          filteredQuizzes.map((quiz) => (
            <div
              key={quiz.id}
              className="bg-white p-6 rounded-3xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 flex flex-col justify-between border border-gray-200"
            >
              <div>
                <h2 className="text-xl font-semibold text-indigo-800 mb-2">
                  {quiz.title}
                </h2>
                <p className="text-gray-600 mb-4">{quiz.description}</p>
              </div>
              <Link to="/quiz">
                <button className="mt-auto w-full bg-gradient-to-r from-indigo-500 to-blue-600 text-white px-4 py-2 rounded-2xl font-semibold hover:from-blue-500 hover:to-indigo-600 shadow-md transition-transform transform hover:scale-105">
                  Start Quiz
                </button>
              </Link>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-lg col-span-full text-center">
            No quizzes found
          </p>
        )}
      </div>
    </div>
  );
};

export default LandingPage;
