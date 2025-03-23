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
        <div style={{ padding: "20px" }}>
            <h1 style={{ fontSize: "28px", marginBottom: "15px" }}>Resources</h1>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gap: "20px",
                }}
            >
                {pdfs.map((pdf) => (
                    <div
                        key={pdf.id}
                        onClick={() => handleCardClick(pdf.url)}
                        style={{
                            border: "1px solid #ccc",
                            borderRadius: "8px",
                            padding: "16px",
                            cursor: "pointer",
                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                            transition: "transform 0.2s",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
                        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                    >
                        <h3 style={{ fontSize: "20px", marginBottom: "8px" }}>{pdf.name}</h3>
                        <p style={{ fontSize: "16px", marginBottom: "10px" }}>Subject: {pdf.subject}</p>
                        <div style={{ marginTop: "10px" }}>
                            <div
                                style={{
                                    height: "10px",
                                    background: "#f3f3f3",
                                    borderRadius: "5px",
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
                            <p style={{ fontSize: "14px", marginTop: "6px" }}>
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