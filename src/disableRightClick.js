// Disable right-click menu
document.addEventListener('contextmenu', (event) => {
    event.preventDefault();
    alert('Right-click is disabled on this site!');
  });
  
  // Disable F12, Ctrl+Shift+I, and other inspect key combinations
  document.addEventListener('keydown', (event) => {
    if (
      event.key === 'F12' ||
      (event.ctrlKey && event.shiftKey && event.key === 'I') ||
      (event.ctrlKey && event.shiftKey && event.key === 'J')
    ) {
      event.preventDefault();
      alert('Inspect Element is disabled!');
    }
  });
  