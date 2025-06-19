import { useState, useEffect } from 'react';
import '../styles/Navigation.css';

const Toggle = () => {
    // 🌙 Dark mode state
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem('darkMode') === 'true';
    });

    useEffect(() => localStorage.setItem('darkMode', darkMode), [darkMode]); // 🌙 Save dark mode

    return (
        <button
            className='modebtn'
            onClick={() => setDarkMode(prev => !prev)}
        >
            {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
        </button>
    );
};

export default Toggle;