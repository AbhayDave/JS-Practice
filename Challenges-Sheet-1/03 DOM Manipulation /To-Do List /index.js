const tasks = [];



function addTask() {
  const taskInput = document.getElementById("task");
  const taskValue = taskInput.value.trim();

  const noTask = document.querySelector(".emptyMessage")

  console.log(noTask);

  if(tasks.length >= 0){
    noTask.style.display = "none";
  }

  if (taskValue !== "") {
    const task = {
      content: taskValue,
      completed: false,
    };
    tasks.push(task);
    renderTasks();
    taskInput.value = "";
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

function toggleTaskCompletion(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

function renderTasks() {
  const tasksList = document.querySelector(".tasks-list");
  tasksList.innerHTML = "";

  tasks.forEach((task, index) => {
    const taskElement = document.createElement("div");
    taskElement.classList.add("task");

    const taskContentElement = document.createElement("div");
    taskContentElement.classList.add("task-content");
    taskContentElement.textContent = task.content;

    const taskContainerElement = document.createElement("label");
    taskContainerElement.classList.add("container");

    const taskCheckbox = document.createElement("input");
    taskCheckbox.type = "checkbox";
    taskCheckbox.checked = task.completed;
    taskCheckbox.onchange = () => toggleTaskCompletion(index);

    const taskSVG = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    taskSVG.setAttribute("viewBox", "0 0 64 64");
    taskSVG.style.height = "2em";
    taskSVG.style.width = "2em";

    const taskPath = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    taskPath.setAttribute(
      "d",
      "M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
    );
    taskPath.setAttribute("pathLength", "575.0541381835938");
    taskPath.classList.add("path");

    taskSVG.appendChild(taskPath);
    taskContainerElement.appendChild(taskCheckbox);
    taskContainerElement.appendChild(taskSVG);

    const taskDeleteButton = document.createElement("button");
    taskDeleteButton.classList.add("task-delete", "bin-button");
    taskDeleteButton.onclick = () => deleteTask(index);

    const binTop = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    binTop.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    binTop.setAttribute("fill", "none");
    binTop.setAttribute("viewBox", "0 0 39 7");
    binTop.classList.add("bin-top");

    const binTopLine1 = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "line"
    );
    binTopLine1.setAttribute("stroke-width", "4");
    binTopLine1.setAttribute("stroke", "white");
    binTopLine1.setAttribute("y2", "5");
    binTopLine1.setAttribute("x2", "39");
    binTopLine1.setAttribute("y1", "5");

    const binTopLine2 = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "line"
    );
    binTopLine2.setAttribute("stroke-width", "3");
    binTopLine2.setAttribute("stroke", "white");
    binTopLine2.setAttribute("y2", "1.5");
    binTopLine2.setAttribute("x2", "26.0357");
    binTopLine2.setAttribute("y1", "1.5");

    binTop.appendChild(binTopLine1);
    binTop.appendChild(binTopLine2);

    const binBottom = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    binBottom.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    binBottom.setAttribute("fill", "none");
    binBottom.setAttribute("viewBox", "0 0 33 39");
    binBottom.classList.add("bin-bottom");

    const binBottomMask = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "mask"
    );
    binBottomMask.setAttribute("id", "path-1-inside-1_8_19");
    binBottomMask.setAttribute("fill", "white");

    const binBottomPath = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    binBottomPath.setAttribute(
      "d",
      "M0 0H33V35C33 37.2091 31.2091 39 29 39H4C1.79086 39 0 37.2091 0 35V0Z"
    );
    binBottomMask.appendChild(binBottomPath);

    const binBottomPathInside = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    binBottomPathInside.setAttribute("mask", "url(#path-1-inside-1_8_19)");
    binBottomPathInside.setAttribute("fill", "white");
    binBottomPathInside.setAttribute(
      "d",
      "M0 0H33H0ZM37 35C37 39.4183 33.4183 43 29 43H4C-0.418278 43 -4 39.4183 -4 35H4H29H37ZM4 43C-0.418278 43 -4 39.4183 -4 35V0H4V35V43ZM37 0V35C37 39.4183 33.4183 43 29 43V35V0H37Z"
    );

    const binBottomLines = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    binBottomLines.setAttribute("stroke-width", "4");
    binBottomLines.setAttribute("stroke", "white");
    binBottomLines.setAttribute("d", "M12 6L12 29");
    const binBottomLines2 = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    binBottomLines2.setAttribute("stroke-width", "4");
    binBottomLines2.setAttribute("stroke", "white");
    binBottomLines2.setAttribute("d", "M21 6V29");

    binBottom.appendChild(binBottomMask);
    binBottom.appendChild(binBottomPathInside);
    binBottom.appendChild(binBottomLines);
    binBottom.appendChild(binBottomLines2);

    const binGarbage = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    binGarbage.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    binGarbage.setAttribute("fill", "none");
    binGarbage.setAttribute("viewBox", "0 0 89 80");
    binGarbage.classList.add("garbage");

    const binGarbagePath = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    binGarbagePath.setAttribute("fill", "white");
    binGarbagePath.setAttribute(
      "d",
      "M20.5 10.5L37.5 15.5L42.5 11.5L51.5 12.5L68.75 0L72 11.5L79.5 12.5H88.5L87 22L68.75 31.5L75.5066 25L86 26L87 35.5L77.5 48L70.5 49.5L80 50L77.5 71.5L63.5 58.5L53.5 68.5L65.5 70.5L45.5 73L35.5 79.5L28 67L16 63L12 51.5L0 48L16 25L22.5 17L20.5 10.5Z"
    );

    binGarbage.appendChild(binGarbagePath);
    taskDeleteButton.appendChild(binTop);
    taskDeleteButton.appendChild(binBottom);
    taskDeleteButton.appendChild(binGarbage);

    taskContainerElement.appendChild(taskCheckbox);
    taskContainerElement.appendChild(taskSVG);
    taskElement.appendChild(taskContentElement);
    taskElement.appendChild(taskContainerElement);
    taskElement.appendChild(taskDeleteButton);
    tasksList.appendChild(taskElement);
  });
}

renderTasks();
