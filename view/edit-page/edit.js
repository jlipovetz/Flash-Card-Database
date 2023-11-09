const addBtnElem = $(".add-btn");
const deleteBtnElem = $(".delete-btn");
const cardFieldsElem = $(".cards");

let cardIndex = 1;

function addCardFields() {
  console.log("Card added.");
  cardFieldsElem.append(`
  <div class="row card-actions m-1">
        <div class="col-2 card-num text-center">
          ${cardIndex}
        </div>
        <div class="col-4">
          <input type="text" class="form-control card-question">
        </div>
        <div class="col-4">
          <input type="text" class="form-control card-answer">
        </div>
        <button type="button" class="btn btn-outline-danger col-2 delete-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" fill="currentColor" class="bi bi-trash"
            viewBox="0 0 16 16">
            <path
              d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z">
            </path>
            <path
              d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z">
            </path>
          </svg>
        </button>
      </div>
  `);

  cardIndex++;
  check();
}

function deleteCardFields() {
  console.log("Card deleted.")
  // console.log($(this).parent());
  const card = $(this).parent();
  card.remove();

  cardIndex--;
}

console.log("Program running");
console.log(addBtnElem);

function check() {
  var all = $(".card-num");

  //   .map(function () {
  //   return this.innerHTML;
  // }).get();

  // for (var i = 0; i < all.length; i++) {
  //   all[i] = `\n          ${i + 1}\n        `;
  // }

  console.log(all);
}

addBtnElem.on("click", addCardFields);
// cardFieldsElem.on("click", ".delete-btn", function () {
//   const card = $(this).parent();
//   card.remove();
// });
cardFieldsElem.on("click", ".delete-btn", deleteCardFields);