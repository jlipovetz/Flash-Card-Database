document.querySelector("body").addEventListener("click", async (e) => {
  if (e.target.matches(".flip")) {
    const deckId = e.target.getAttribute("data-id");

    document.location.href = `/${deckId}/0`;
  }
});
