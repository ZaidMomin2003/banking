import React, { useEffect } from "react";

const AntiCapture = () => {
  useEffect(() => {
    // Disable right-click
    const handleContextMenu = (event) => event.preventDefault();
    document.addEventListener("contextmenu", handleContextMenu);

    // Disable keyboard shortcuts for copying and screenshots
    const handleKeyDown = (event) => {
      if (
        event.ctrlKey && (event.key === "c" || event.key === "u" || event.key === "s") || // Ctrl+C, Ctrl+U, Ctrl+S
        event.key === "PrintScreen" // Print Screen key
      ) {
        event.preventDefault();
      }
      // Disable Cmd+C on Mac
      if (event.metaKey && event.key === "c") {
        event.preventDefault();
      }
    };

    // Detect Print Screen and clear clipboard
    const handleKeyUp = (event) => {
      if (event.key === "PrintScreen") {
        navigator.clipboard.writeText(""); // Clear clipboard
        alert("Screenshots are disabled on this site.");
      }
    };

    // Add event listeners
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    // Cleanup listeners when the component unmounts
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return null; // No visible UI for this component
};

export default AntiCapture;
