const button = document.getElementById("myButton");
button.addEventListener("click", () => {
  if (button.textContent === "Click Me!") {
    button.textContent = "Clicked!";
  } else {
    button.textContent = "Click Me!";
  }
});

const colorList = document.querySelectorAll("#colorList");

colorList.forEach(() => {
  addEventListener("click", (event) => {
    const clickedItem = event.target;
    if (clickedItem.tagName === "LI") {
      console.log("Selected color:", clickedItem.textContent);
    }
  });
});
