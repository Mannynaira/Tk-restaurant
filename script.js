const specialButton = document.querySelector("#special-button");
const specialMessage = document.querySelector("#special-message");

function showSpecial() {
  specialMessage.textContent = "Today's special is jollof rice and chicken.";
}

specialButton.addEventListener("click", showSpecial);