const acc = document.getElementsByClassName("accordion");
let i;


for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    const openButton = this.querySelector("button"); 
    openButton.classList.toggle("active");
    const panel = this.querySelector(".panel");
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
    // console.log(panel);
  });
}
