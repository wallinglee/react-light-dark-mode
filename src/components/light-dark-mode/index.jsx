import { useState, useEffect } from 'react';
import './styles.css';

const LightDarkMode = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="light-dark-mode" data-theme-mode={theme}>
      <div className="wrapper">
        <div>Current theme: {theme}</div>
        <button onClick={toggleTheme}>Toggle {theme === "light" ? "dark" : "light"} theme</button>
      </div>
    </div>
  );
}

export default LightDarkMode