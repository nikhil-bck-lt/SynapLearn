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
        {
          title: "Variables and Data Types",
          description: "Learn about variables and different data types in programming.",
          content: "Variables are used to store data, and data types define the kind of data a variable can hold.",
          quiz: "What is a variable?",
          assignment: "Create a JavaScript program that declares variables of different data types.",
        },
        {
          title: "Control Structures",
          description: "Understand how to control the flow of a program.",
          content: "Control structures like if-else and loops help in decision-making and repeating tasks.",
          quiz: "What is the purpose of a loop?",
          assignment: "Write a JavaScript program that uses a loop to print numbers from 1 to 10.",
        }
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
        <h1 className="curriculum-title text-lg">📚 Curriculum</h1>

        {curriculum.map((module, index) => (
            <div key={index} className="module-box mb-4">
                <h2 className="text-md font-semibold">{module.module}</h2>

                <div className="lesson-list">
                    {module.lessons.map((lesson, i) => (
                        <div
                            key={i}
                            className="lesson-box p-2 border rounded mb-2 cursor-pointer"
                            onClick={() => setSelectedLesson(lesson)}
                        >
                            <h3 className="text-sm font-medium">{lesson.title}</h3>
                            <p className="text-xs text-gray-600">{lesson.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        ))}

        {/* Lesson Details Modal (Only One) */}
        {selectedLesson && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="bg-white p-4 rounded-lg max-w-sm w-full">
                    <h2 className="text-lg font-semibold">{selectedLesson.title}</h2>
                    <p className="text-sm text-gray-700 mt-2">{selectedLesson.content}</p>
                    <h3 className="mt-4 text-sm font-bold">Quiz:</h3>
                    <p className="text-xs text-gray-600">{selectedLesson.quiz}</p>
                    <h3 className="mt-2 text-sm font-bold">Assignment:</h3>
                    <p className="text-xs text-gray-600">{selectedLesson.assignment}</p>
                    <button
                        className="mt-4 px-3 py-1 bg-blue-500 text-white text-sm rounded"
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
