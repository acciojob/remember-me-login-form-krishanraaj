(function() {
  // Function to calculate DOM level
  function getDOMLevel(id) {
    const element = document.getElementById(id);
    if (!element) return null;

    let level = 0;
    let current = element;

    while (current) {
      level++;
      current = current.parentElement;
    }

    return level;
  }

  // Wait until the DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      const level = getDOMLevel("level");
      if (level === null) {
        alert("Element with id 'level' not found.");
      } else {
        alert(`The level of the element is: ${level}`);
      }
    });
  } else {
    const level = getDOMLevel("level");
    if (level === null) {
      alert("Element with id 'level' not found.");
    } else {
      alert(`The level of the element is: ${level}`);
    }
  }
})();