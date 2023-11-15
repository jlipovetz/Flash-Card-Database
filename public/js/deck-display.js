function previousBtnHandler() {
  console.log("PREV")
}

function nextBtnHandler() {
  console.log("NEXT")
}

document.querySelector('.previous-btn').addEventListener('click', previousBtnHandler);
document.querySelector('.next-btn').addEventListener('click', nextBtnHandler);

