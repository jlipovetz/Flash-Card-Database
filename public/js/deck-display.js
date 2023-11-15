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

document.querySelector('.previous-btn').addEventListener('click', prevBtnHandler);
document.querySelector('.next-btn').addEventListener('click', nextBtnHandler);


document.querySelector(".edit-btn").addEventListener("click", editBtnHandler);
