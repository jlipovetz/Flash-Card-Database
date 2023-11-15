function prevBtnHandler(e) {
  const splitURL = document.location.href.split("/");

  const cardId = Number(splitURL.pop()) - 1;
  const deckId = Number(splitURL.pop());

  document.location.href = `/${deckId}/${cardId}`;
}

function nextBtnHandler(e) {
  const splitURL = document.location.href.split("/");

  const cardId = Number(splitURL.pop()) + 1;
  const deckId = Number(splitURL.pop());

  document.location.href = `/${deckId}/${cardId}`;
}

function editBtnHandler(e) {
  const splitURL = document.location.href.split("/");
  splitURL.pop();

  document.location.href = `/api/notecard/${splitURL.pop()}`
}

document.querySelector("body").addEventListener("click", (e) => {
  if (e.target.matches('.previous-btn'))
    prevBtnHandler();
  else if (e.target.matches('.next-btn'))
    nextBtnHandler();
  else if (e.target.matches(".edit-btn"))
    editBtnHandler();
})
