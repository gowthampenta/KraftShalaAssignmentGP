import React from "react";

function ToggleModeButton({ toggleDarkMode }) {
  return (
    <button id="toggleMode" className="btn-secondary" onClick={toggleDarkMode}>
      Dark Mode
    </button>
  );
}

export default ToggleModeButton;
