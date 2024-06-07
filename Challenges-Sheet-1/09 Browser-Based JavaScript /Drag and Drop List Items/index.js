function dragoverHandler(ev) {
  ev.preventDefault();
  ev.dataTransfer.dropEffect = "move";
}
function dropHandler(ev) {
  ev.preventDefault();
  // Get the id of the target and add the moved element to the target's DOM
  const data = ev.dataTransfer.getData("text/plain");
  console.log(data);
  console.log(document.getElementById(data));
  ev.target.appendChild(document.getElementById(data));
}

function dragstartHandler(ev) {
  // Add the target element's id to the data transfer object
  ev.dataTransfer.setData("text/plain", ev.target.id);
  console.log(ev.dataTransfer.getData("text/plain"));
}


function dropHandlerItem(ev) {
  ev.stopPropagation();
}
window.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll("li");

  elements.forEach((elem) => {
    elem.addEventListener("dragstart", dragstartHandler);
  });
});
