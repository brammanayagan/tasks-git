import React, { useState } from "react";
import EmployeeForm from "./components/Task1";
import ProductSearch from "./components/Task2";
import DarkModeToggle from "./components/Task4";
import PreviousSearch from "./components/Task5";
import "./index.css";
import UserFetch from "./components/Task3 copy";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const appStyle = {
    backgroundColor: isDarkMode ? "#121212" : "#ffffff",
    color: isDarkMode ? "#ffffff" : "#000000",
    minHeight: "100vh",
    padding: "40px 20px",
    fontFamily: "system-ui, -apple-system, sans-serif",
    transition: "background-color 0.3s ease, color 0.3s ease",
  };

  return (
    <div style={appStyle}>
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "30px",
        }}
      >
        <EmployeeForm />
        <ProductSearch />
        <UserFetch />
        <DarkModeToggle
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
        />

        <PreviousSearch />
      </div>
    </div>
  );
}

export default App;
