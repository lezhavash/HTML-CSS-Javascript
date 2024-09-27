const numberInput = document.getElementById("number");
const convert = document.getElementById("convert-btn");
const output = document.getElementById("output");

function isvalid(input) {
  const err = "";
  if (input === " ") {
    err = "Please enter a valid number";
  } else if (input < 0) {
    err = "Please enter a number greater than or equal to 1";
  } else if (input > 4000) {
    err = "Please enter a number less than or equal to 3999";
  } else {
    return true;
  }

  output.innerHTML = err;
  console.log(err);

  return false;
}

convert.addEventListener("click", () => {
  isvalid(5);
  console.log(Number(numberInput.value));
});
