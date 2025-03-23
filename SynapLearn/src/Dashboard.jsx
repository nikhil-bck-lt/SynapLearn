import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemText, CssBaseline, colors } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Dashboard = () => {
    const navigate = useNavigate();
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
        const storedUser = JSON.parse(localStorage.getItem('userDetails'));
        const dummyCurriculum = {
            currentModule: "Introduction to AI",
            progress: "75%",
            resources: [
            { title: "AI Basics", link: "https://example.com/ai-basics" },
            { title: "Machine Learning Overview", link: "https://example.com/ml-overview" }
            ],
            funFacts: [
            "The term 'Artificial Intelligence' was coined in 1956.",
            "AI can analyze data much faster than humans."
            ]
        };
        localStorage.setItem('dummyCurriculum', JSON.stringify(dummyCurriculum));

        if (!isAuthenticated || !storedUser) {
            alert("You must log in first.");
            navigate('/login');
        } else {
            setUser(storedUser);
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('userDetails');
        setUser(null);
        navigate('/login');
    };

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    return (
        <>
            {/* ✅ Updated Dashboard Title Position */}
            <div style={{ padding: '10px 20px', position: 'bottom',  left: '20px', color: 'white' }}>
                <h2>SynapLearn Dashboard</h2>
                {user && (
                    <div>
                        <p><strong>Username:</strong> {user.username}</p>
                        <p><strong>Email:</strong> {user.email || 'No email provided'}</p>
                    </div>
                )}
            </div>
        </>
    );
};

export default Dashboard;
