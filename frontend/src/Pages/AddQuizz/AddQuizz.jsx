import React, { useState } from "react";

const AddQuizz = () => {
  const [formData, setFormData] = useState({
    title: "",
    topic: "",
    testApis: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Quiz Data:", formData);
    alert("✅ Quiz submitted successfully!");
    setFormData({ title: "", topic: "", testApis: "" });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white shadow-xl rounded-3xl w-full max-w-lg p-8 border border-blue-200">
        {/* Header */}
        <h2 className="text-3xl font-bold text-blue-700 text-center mb-8">
          Add New Quiz
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Quiz Title */}
          <div>
            <label className="block text-blue-700 font-medium mb-2">
              Quiz Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter quiz title"
              className="w-full px-4 py-3 border border-blue-200 rounded-xl bg-blue-50 text-blue-900 focus:ring-2 focus:ring-blue-400 outline-none transition"
              required
            />
          </div>

          {/* Quiz Topic */}
          <div>
            <label className="block text-blue-700 font-medium mb-2">
              Quiz Topic
            </label>
            <input
              type="text"
              name="topic"
              value={formData.topic}
              onChange={handleChange}
              placeholder="Enter quiz topic"
              className="w-full px-4 py-3 border border-blue-200 rounded-xl bg-blue-50 text-blue-900 focus:ring-2 focus:ring-blue-400 outline-none transition"
              required
            />
          </div>

          {/* Test APIs */}
          <div>
            <label className="block text-blue-700 font-medium mb-2">
              Test of APIs
            </label>
            <textarea
              name="testApis"
              value={formData.testApis}
              onChange={handleChange}
              placeholder="Paste API response or URL here..."
              rows="5"
              className="w-full px-4 py-3 border border-blue-200 rounded-xl bg-blue-50 text-blue-900 focus:ring-2 focus:ring-blue-400 outline-none resize-none transition"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-blue-400 hover:from-blue-400 hover:to-blue-300 text-white py-3 rounded-xl font-semibold shadow-md transition"
          >
            Submit Quiz
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddQuizz;
