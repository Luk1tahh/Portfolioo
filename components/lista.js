document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("toggle-button");
    const expandableList = document.getElementById("expandable-list");
  
    toggleButton.addEventListener("click", () => {
      expandableList.classList.toggle("active");
    });
  });
  