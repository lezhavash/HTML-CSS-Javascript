const checkBtn = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const resultBox = document.getElementById("result-div");
const resultText = document.getElementById("result");

function checkPalindrom(value) {
  const regex = /[^a-z0-9]/g;
  let userInputValue = value.toLowerCase().replace(regex, "");
  let reverceUserInputValue = userInputValue.split("").reverse().join("");
  return userInputValue === reverceUserInputValue;
}

checkBtn.addEventListener("click", () => {
  const value = textInput.value;
  if (value.length === 0) {
    alert("Please input a value");
    textInput.value = "";
  }

  const isPolindrom = checkPalindrom(value);
  resultText.innerHTML = isPolindrom
    ? `<strong>${value}</strong> is a palindrome`
    : `<strong>${value}</strong> is not a palindrome`;
  resultBox.hidden = false;
  textInput.value = "";
});
