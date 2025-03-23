import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import "./Navbar.css";

const Navbar = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [drawerOpen, setDrawerOpen] = useState(false);

    // ✅ Keep track of login state
    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('userDetails'));
        setUser(storedUser);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('userDetails');
        setUser(null);
        navigate("/");
    };

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    const handleNavigation = (path) => {
        navigate(path);
        setDrawerOpen(false); // Close the drawer after navigating
    };

    const drawerContent = (
        <div role="presentation" onKeyDown={toggleDrawer(false)} style={{ width: 250 }}>
            <List>
                <ListItem button onClick={() => handleNavigation("/curriculum")}>
                    <ListItemText primary="Curriculum" />
                </ListItem>
                <ListItem button onClick={() => handleNavigation("/chatbot")}>
                    <ListItemText primary="AI Chatbot" />
                </ListItem>
                <ListItem button onClick={() => handleNavigation("/resources")}>
                    <ListItemText primary="Resources" />
                </ListItem>
                <ListItem button onClick={handleLogout}>
                    <ListItemText primary="Logout" />
                </ListItem>
            </List>
        </div>
    );

    return (
        <nav className="bg-blue-500 p-4 text-white flex justify-between items-center">
            {user && (
                <IconButton edge="start" color="inherit" onClick={toggleDrawer(true)}>
                    <MenuIcon />
                </IconButton>
            )}
            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
                {drawerContent}
            </Drawer>
            <span className="text-2xl font-bold">SynapLearn</span>
            <div className="text-lg">
                <Link to="/" className="px-1 hover:text-gray-300">Home</Link>
                <Link to="/about" className="px-1 hover:text-gray-300">About</Link>
                <Link to="/support" className="px-5 hover:text-gray-300">Support</Link>
                {user ? (
                    <button onClick={handleLogout} className="px-1 hover:text-gray-300">
                        Logout ({user.username})
                    </button>
                ) : (
                    <Link to="/login" className="px-1 hover:text-gray-300">
                        Login
                    </Link>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
