// handlebars route /deck-display

// convert this < a ></a > to a mouse - over non - anchor link that(fetches a GET request ? redirects to the deck - display page somehow ?) in the homepage.js file when clicked on

document.querySelector("body").addEventListener("click", (e) => {
  if (e.target.matches(".flip")) {
    const cardId = e.target.getAttribute("data-id");
    console.log(cardId);
  }
});
