const addBtnElem = $(".add-btn");
const deleteBtnElem = $(".delete-btn");
const undoBtnElem = $(".undo-btn");
const saveBtnElem = $(".save-btn");
const cardFieldsElem = $(".cards");
const cardFrontElem = $(".front");
const cardBackElem = $(".back");
const cardsElem = $(".notecards");
const deckSectionElem = $(".decksection");
const noSaveModal = $("#no-save-modal");

deckSectionElem.attr("style", "display: block");

// let cardIndex = 1;

// async function getNotecards() {
//   const response = await fetch('/edit/:id', {
//     method: 'GET',
//     headers: { 'Content-Type': 'application/json' },
//   });




//   console.log(response.body);
// }

function getDeckID() {
  const deckIDElem = cardsElem.map(function () {
    return this;
  }).get();

  // console.log(cardsElem.find("data-id"));

  const deckID = deckIDElem[0].id;

  // console.log(deckID);

  return deckID;
}

async function fetchRequests(info, model, deckID, method) {
  // const updateInfo = checkCardUpdates();
  // const putInfo = updateInfo[0];
  // const deckID = getDeckID();

  const response = await fetch(`/api/${model}/${deckID}`, {
    method: method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(info),
  })

  return (response);
}

// async function postRequest() {
//   const updateInfo = checkCardUpdates();
//   const postInfo = updateInfo[1];
//   const deckID = getDeckID();

//   const response = await fetch(`/api/notecard/${deckID}`, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(postInfo),
//   })

//   console.log(response);
// }

// async function deleteRequest() {

// }

function handleSave() {
  const updateInfo = checkCardUpdates();
  const deckID = getDeckID();
  const deckName = getDeckName();
  const deckInfo = {
    name: deckName
  };

  console.log(deckID);
  // updateInfo.deckID = deckID;

  var cardElems = $(".card-actions").not(".deleted").map(function () {
    return this.children;
  }).get();

  let questions = [];
  let answers = [];

  cardElems.forEach(elem => {
    const ques = elem[1].children[0].value;
    const ans = elem[2].children[0].value;


    questions.push(ques);
    answers.push(ans);
  }
  )

  console.log(deckInfo.name);
  console.log(questions);
  console.log(answers);

  console.log(!deckInfo.name);
  console.log(questions.length === 0);
  console.log(answers.length === 0);

  const questionInvalid = questions.length === 0 || questions[0] === "";
  const answerInvalid = answers.length === 0 || answers[0] === "";

  if (!deckInfo.name || questionInvalid || answerInvalid) {
    noSaveModal.modal("show");
  } else {
    console.log("Good to go!");
    fetchRequests(updateInfo.putInfo, "notecard", deckID, "PUT");
    fetchRequests(deckInfo, "deck", deckID, "PUT");
    fetchRequests(updateInfo.postInfo, "notecard", deckID, "POST");
    fetchRequests(updateInfo.deleteInfo, "notecard", deckID, "DELETE");

    setTimeout(function () {
      window.location.reload();
    }, 100);
  }


  // fetchRequests(updateInfo.putInfo, "notecard", deckID, "PUT");
  // fetchRequests(deckInfo, "deck", deckID, "PUT");
  // fetchRequests(updateInfo.postInfo, "notecard", deckID, "POST");
  // fetchRequests(updateInfo.deleteInfo, "notecard", deckID, "DELETE");

  // setTimeout(function () {
  //   window.location.reload();
  // }, 100);

}

function getDeckName() {
  const deckNameElem = $(".deck-name").get();
  const deckName = deckNameElem[0].value

  return deckName;
}

function getDeletedElems() {
  let deleteInfo = [];

  var deletedElems = $(".deleted").map(function () {
    return this.children;
  }).get();

  // console.log(deletedElems);

  deletedElems.forEach(elem => {
    const id = elem[0].id;

    deleteInfo.push(id);
  })

  return deleteInfo;
}

function getPutAndPostElems() {
  let putInfo = [];
  let postInfo = [];

  var cardElems = $(".card-actions").not(".deleted").map(function () {
    return this.children;
  }).get();

  // console.log(cardElems[0]);

  cardElems.forEach(elem => {
    const id = elem[0].id;
    const ques = elem[1].children[0].value;
    const ans = elem[2].children[0].value;

    const obj = {
      id: id,
      question: ques,
      answer: ans
    }

    if (id) {
      putInfo.push(obj);
    } else {
      postInfo.push(obj);
    }
  })

  const updateInfo = {
    putInfo: putInfo,
    postInfo: postInfo
  };

  console.log(updateInfo);

  return updateInfo;
}

function checkCardUpdates() {
  let updateInfo = getPutAndPostElems();
  const deleteInfo = getDeletedElems();

  updateInfo.deleteInfo = deleteInfo;

  console.log(updateInfo);

  return updateInfo;
}

function addCardFields() {
  console.log("Card added.");
  cardFieldsElem.append(`
  <div class="row card-actions m-1">
          <div class="col-2 card-num text-center"></div>
          <div class="col-1 d-block d-sm-none">Q:</div>
          <div class="col-9 col-sm-4">
            <input type="text" class="form-control card-question" value="Question">
          </div>
          <div class="col-2 d-block d-sm-none"></div>
          <div class="col-1 d-block d-sm-none">A:</div>
          <div class="col-9 col-sm-4">
            <input type="text" class="form-control card-answer" value="Answer">
          </div>
          <div class="col-3 d-block d-sm-none"></div>
          <button type="button" class="btn btn-outline-danger col-9 col-sm-2 delete-btn">
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
          <button type="button" class="btn btn-warning col-2 undo-btn" style="display: none">Undo</button>
        </div>
  `);

  // cardIndex++;
  checkCardNum();
}

function undoDelete() {
  const card = $(this).parent();
  console.log(card);
  const quesInput = card.children().eq(2).children();
  const ansInput = card.children().eq(5).children();
  const deleteBtn = card.children().eq(7);


  $(this).attr("style", "display: none");
  quesInput.removeAttr("disabled");
  quesInput.removeClass("opacity-25")
  ansInput.removeAttr("disabled");
  ansInput.removeClass("opacity-25")
  deleteBtn.removeAttr("style");
  // deleteBtn.addClass("opacity-100");

  // const test2 = test.map(function () {
  //   return this.find(".form-control");
  // })

  card

  console.log(card.children());

  // console.log(test);

  // test.forEach(item => {
  //   item.addClass("disabled");
  // })

  card.removeClass("deleted"); // Change maybe depending on what I want
  // card.addClass("deleted");

  // cardIndex--;
  checkCardNum();
}

function deleteCardFields() {
  console.log("Card deleted.")
  // console.log($(this).parent());


  const card = $(this).parent();
  const quesInput = card.children().eq(2).children();
  const ansInput = card.children().eq(5).children();
  const undoBtn = card.children().eq(8);


  $(this).attr("style", "display: none");
  quesInput.attr("disabled", "disabled");
  quesInput.addClass("opacity-25")
  ansInput.attr("disabled", "disabled");
  ansInput.addClass("opacity-25")
  undoBtn.removeAttr("style");
  // undoBtn.addClass("opacity-100");

  // const test2 = test.map(function () {
  //   return this.find(".form-control");
  // })



  console.log(card.children());

  // console.log(test);

  // test.forEach(item => {
  //   item.addClass("disabled");
  // })

  card.addClass("deleted"); // Change maybe depending on what I want
  // card.addClass("deleted");

  // cardIndex--;
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

// getNotecards();

addBtnElem.on("click", addCardFields);
cardFieldsElem.on("click", ".delete-btn", deleteCardFields);
cardFieldsElem.on("click", ".undo-btn", undoDelete);
cardFieldsElem.on("click", ".card-question, .card-answer", showPreview);
cardFieldsElem.on("keyup", ".card-question, .card-answer", showPreview);
saveBtnElem.on("click", handleSave);

