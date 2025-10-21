//your JS code here. If required.
document.addEventListener("DOMContentLoaded", () => {
  // Get the element with id "level"
  const target = document.getElementById("level");

  if (!target) {
    alert("Element with id 'level' not found.");
    return;
  }

  let level = 0;
  let current = target;

  // Traverse up the DOM tree
  while (current) {
    level++;
    current = current.parentElement; // Move to the parent element
  }

  alert(`The level of the element is: ${level}`);
});
