const buttons = document.querySelectorAll(".card button");
const modalOuter = document.querySelector(".modal-outer");
const modalInner = document.querySelector(".modal-inner");

function handleOpenModelButtonClick(e) {
  const clickedBtn = e.target;
  const clickedBtnCard = clickedBtn.closest(".card");

  const imgSrc = clickedBtnCard.querySelector("img").src;
  const heading = clickedBtnCard.querySelector("h2").textContent;

  modalInner.innerHTML = `
  <img src="${imgSrc.replace("200", "600")}" />
  <p>${heading}</p>
  <button onClick="closeModal()">Close</button>
`;

  modalOuter.classList.add("open");
}

function closeModal() {
  modalOuter.classList.remove("open");
}

buttons.forEach((btn) => {
  btn.addEventListener("click", handleOpenModelButtonClick);
});

modalOuter.addEventListener("click", function (event) {
  //   console.log(event.target);
  //   console.log(event.currentTarget);

  const isOutside = event.target.closest(".modal-inner");
//   console.log(isOutside);
  if(!isOutside){
    closeModal()
  }
});
