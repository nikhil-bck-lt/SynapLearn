import React, { useState } from "react";

const Resources = () => {
    const [pdfs, setPdfs] = useState([
        {
            id: 1,
            name: "Introduction to React",
            subject: "Web Development",
            progress: 50,
            url: "https://example.com/react.pdf",
        },
        {
            id: 2,
            name: "Advanced JavaScript",
            subject: "Programming",
            progress: 30,
            url: "https://example.com/javascript.pdf",
        },
        {
            id: 3,
            name: "Machine Learning Basics",
            subject: "Artificial Intelligence",
            progress: 70,
            url: "https://example.com/ml-basics.pdf",
        },
        {
            id: 4,
            name: "Data Structures and Algorithms",
            subject: "Computer Science",
            progress: 40,
            url: "https://example.com/dsa.pdf",
        },
        {
            id: 5,
            name: "Introduction to Python",
            subject: "Programming",
            progress: 60,
            url: "https://example.com/python.pdf",
        },
        {
            id: 6,
            name: "Cloud Computing Essentials",
            subject: "Technology",
            progress: 20,
            url: "https://example.com/cloud.pdf",
        },
    ]);

    const handleCardClick = (url) => {
        window.open(url, "_blank");
    };

    return (
        <div style={{ padding: "40px" }}>
            <h1 style={{ fontSize: "36px", marginBottom: "20px" }}>Resources</h1>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gap: "30px",
                }}
            >
                {pdfs.map((pdf) => (
                    <div
                        key={pdf.id}
                        onClick={() => handleCardClick(pdf.url)}
                        style={{
                            border: "2px solid #ccc",
                            borderRadius: "12px",
                            padding: "24px",
                            cursor: "pointer",
                            boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
                            transition: "transform 0.2s",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                    >
                        <h3 style={{ fontSize: "24px", marginBottom: "10px" }}>{pdf.name}</h3>
                        <p style={{ fontSize: "18px", marginBottom: "15px" }}>Subject: {pdf.subject}</p>
                        <div style={{ marginTop: "15px" }}>
                            <div
                                style={{
                                    height: "14px",
                                    background: "#f3f3f3",
                                    borderRadius: "7px",
                                    overflow: "hidden",
                                }}
                            >
                                <div
                                    style={{
                                        width: `${pdf.progress}%`,
                                        height: "100%",
                                        background: "#4caf50",
                                    }}
                                ></div>
                            </div>
                            <p style={{ fontSize: "16px", marginTop: "8px" }}>
                                {pdf.progress}% read
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Resources;