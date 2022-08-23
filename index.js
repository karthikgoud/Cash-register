const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#btn-check");
const errorMessage = document.querySelector("#error-message");
const positionOfNotes = document.querySelectorAll(".position");
const nextButton = document.querySelector("#btn-next");
const cashSection = document.querySelectorAll(".hide");

const billOutput = document.querySelector("#bill-display");
const cashOutput = document.querySelector("#cash-display");

nextButton.addEventListener("click", showSection);

checkButton.addEventListener("click", clickHandler);

const notesDinomination = [2000, 500, 100, 20, 10, 5, 1];

// ----------next button clicked-----------
function showSection() {
  const billValue = parseInt(billAmount.value, 10);

  if (
    billAmount &&
    billAmount.value &&
    billAmount.value >= 0 &&
    billAmount.value !== "string"
  ) {
    for (let i = 0; i < cashSection.length; i++) {
      cashSection[i].style.display = "flex";
    }
  } else {
    if (billValue < 0) {
      showMessage(" Invalid: Bill value can not be less than 0");
    } else {
      showMessage("Invalid: Please enter number");
    }
  }
}

//--------- check button clicked----------
function clickHandler() {
  const billValue = parseInt(billAmount.value, 10);
  const cashValue = parseInt(cashGiven.value, 10);
  billOutput.innerHTML = `Bill amount: <span class ="bill-color">Rs ${billValue}.</span>`;

  hideMessage();

  if (cashValue === billValue) {
    showMessage("Bill is paid. Thank you");
  } else if (cashValue >= billValue) {
    const amountToBeReturned = cashValue - billValue;
    changeToBeReturned(amountToBeReturned);
    cashOutput.innerHTML = `Amount to be returned: <span class ="bill-color">Rs ${amountToBeReturned}.</span>`;
  } else {
    showMessage(
      "Cash given should be greater than bill Amount or get ready to wash plates 🍽️🍽️🍽️"
    );
  }
}

// functions

function changeToBeReturned(amount) {
  for (let i = 0; i < notesDinomination.length; i++) {
    const numberOfNotes = Math.trunc(amount / notesDinomination[i]);
    amount = amount % notesDinomination[i];
    positionOfNotes[i].innerText = numberOfNotes;
  }
}

function hideMessage() {
  errorMessage.style.display = "none";
}

function showMessage(error) {
  errorMessage.style.display = "block";
  errorMessage.innerText = error;
}
