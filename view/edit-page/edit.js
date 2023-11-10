const addBtnElem = $(".add-btn");
const deleteBtnElem = $(".delete-btn");
const cardFieldsElem = $(".cards");
const cardFrontElem = $(".front");
const cardBackElem = $(".back");

let cardIndex = 1;

async function getNotecards() {
  const response = await fetch('/notecards', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: { 'Content-Type': 'application/json' },
  });
}

function addCardFields() {
  console.log("Card added.");
  cardFieldsElem.append(`
  <div class="row card-actions m-1">
        <div class="col-2 card-num text-center">
          ${cardIndex}
        </div>
        <div class="col-4">
          <input type="text" class="form-control card-question" value="Question ${cardIndex}">
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
  checkCardNum();
}

function deleteCardFields() {
  console.log("Card deleted.")
  // console.log($(this).parent());
  const card = $(this).parent();
  card.remove();

  cardIndex--;
  checkCardNum();

  cardFrontElem.text("");
  cardBackElem.text("");
}

function showPreview() {

  let formParent = $(this).parent().parent().find(".form-control");
  formParent.toArray();

  const quesFormArray = [...formParent[0].classList];
  const ansFormArray = [...formParent[1].classList];

  // console.log(formParent);
  // console.log(quesFormArray);
  // console.log(ansFormArray);

  if (quesFormArray.includes("card-question") || ansFormArray.includes("card-answer")) {
    cardFrontElem.text(formParent[0].value);
    cardBackElem.text(formParent[1].value);
  }

}

console.log("Program running");
console.log(addBtnElem);

function checkCardNum() {
  let index = 1;

  var nums = $(".card-num").map(function () {
    this.innerText = index;
    index++;
    return this.innerText;
  }).get();

  console.log(nums);
}

addBtnElem.on("click", addCardFields);
// cardFieldsElem.on("click", ".delete-btn", function () {
//   const card = $(this).parent();
//   card.remove();
// });
cardFieldsElem.on("click", ".delete-btn", deleteCardFields);
cardFieldsElem.on("click", ".card-question, .card-answer", showPreview);
cardFieldsElem.on("keyup", ".card-question, .card-answer", showPreview);