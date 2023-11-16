function prevBtnHandler(e) {
  const splitURL = document.location.href.split("/");

  const cardId = Number(splitURL.pop()) - 1;
  const testId = Number(splitURL.pop());

  document.location.href = `/test/${testId}/${cardId}`;
}

function nextBtnHandler(e) {
  const splitURL = document.location.href.split("/");

  const cardId = Number(splitURL.pop()) + 1;
  const testId = Number(splitURL.pop());

  document.location.href = `/test/${testId}/${cardId}`;
}


document.querySelector("body").addEventListener("click", (e) => {
  if (e.target.matches('.previous-btn'))
    prevBtnHandler();
  else if (e.target.matches('.next-btn'))
    nextBtnHandler();
})
