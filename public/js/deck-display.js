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

document.querySelector('.previous-btn').addEventListener('click', prevBtnHandler);
document.querySelector('.next-btn').addEventListener('click', nextBtnHandler);

