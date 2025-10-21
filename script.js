// Wait for the DOM to be fully loaded
window.addEventListener("load", () => {
  // Find the element with id "level"
  const target = document.getElementById("level");

  if (!target) {
    alert("Error: Element with id 'level' not found in the DOM.");
    return;
  }

  let level = 0;
  let current = target;

  // Traverse up the DOM tree counting parent elements
  while (current) {
    level++;
    current = current.parentElement; // move up to parent
  }

  alert(`The level of the element is: ${level}`);
});
