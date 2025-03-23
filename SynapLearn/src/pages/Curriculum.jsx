import { useState } from "react";
import "./Curriculum.css";

const Curriculum = () => {
  // Sample curriculum structure
  const curriculum = [
    {
      module: "Introduction to Programming",
      lessons: [
        {
          title: "What is Programming?",
          description: "Learn the basics of programming and its real-world applications.",
          content: "Programming is the process of giving instructions to a computer to perform tasks.",
          quiz: "What is programming?",
          assignment: "Write a short paragraph on why programming is important.",
        },
        {
          title: "Introduction to JavaScript",
          description: "Understand the fundamentals of JavaScript.",
          content: "JavaScript is a versatile programming language used in web development.",
          quiz: "What is JavaScript used for?",
          assignment: "Write a simple JavaScript program to print 'Hello World'.",
        },
      ],
    },
    {
      module: "Frontend Development",
      lessons: [
        {
          title: "HTML Basics",
          description: "Learn the structure of a web page using HTML.",
          content: "<p>HTML stands for HyperText Markup Language.</p>",
          quiz: "What does HTML stand for?",
          assignment: "Create a basic HTML page with a heading and a paragraph.",
        },
        {
          title: "CSS Styling",
          description: "Enhance your web page with CSS styles.",
          content: "CSS is used to style HTML elements and make web pages visually appealing.",
          quiz: "What is CSS used for?",
          assignment: "Create a simple webpage with a styled heading and paragraph.",
        },
      ],
    },
  ];

  // State for showing lesson details
  const [selectedLesson, setSelectedLesson] = useState(null);

  return (
    <div className="curriculum-container">
      <h1 className="curriculum-title">📚 Curriculum</h1>
  
      {curriculum.map((module, index) => (
        <div key={index} className="module-box">
          <h2>{module.module}</h2>
  
          <div className="lesson-list">
            {module.lessons.map((lesson, i) => (
              <div
                key={i}
                className="lesson-box"
                onClick={() => setSelectedLesson(lesson)}
              >
                <h3>{lesson.title}</h3>
                <p>{lesson.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
  
      {/* Lesson Details Modal (Only One) */}
      {selectedLesson && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg max-w-md">
            <h2 className="text-xl font-semibold">{selectedLesson.title}</h2>
            <p className="text-gray-700 mt-2">{selectedLesson.content}</p>
            <h3 className="mt-4 font-bold">Quiz:</h3>
            <p className="text-gray-600">{selectedLesson.quiz}</p>
            <h3 className="mt-2 font-bold">Assignment:</h3>
            <p className="text-gray-600">{selectedLesson.assignment}</p>
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
              onClick={() => setSelectedLesson(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}  

export default Curriculum;
