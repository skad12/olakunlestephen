import React, { useState } from "react";

function DarkModeToggle() {
  // create a state variable to keep track of the theme
  const [theme, setTheme] = useState("light");

  // function to toggle the theme
  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <div>
      <button onClick={toggleTheme}>
        {theme === "light" ? "Enable Dark Mode" : "Enable Light Mode"}
      </button>
    </div>
  );
}

export default DarkModeToggle;
