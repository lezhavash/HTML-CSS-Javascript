const numberInput = document.getElementById("number");
const convert = document.getElementById("convert-btn");
const output = document.getElementById("output");

const convertRoman = (num) => {
  const roman = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1],
  ];

  const result = [];
  roman.forEach((arr) => {
    while (num >= arr[1]) {
      result.push(arr[0]);
      num -= arr[1];
    }
  });
  console.log(result);

  return result.join("");
};

isvalid = (string, int) => {
  let err = "";
  if (string === "") {
    err = "Please enter a valid number";
  } else if (int < 0) {
    err = "Please enter a number greater than or equal to 1";
  } else if (int > 4000) {
    err = "Please enter a number less than or equal to 3999";
  } else {
    return true;
  }

  output.innerHTML = err;
  return false;
};

clear = () => {
  numberInput.value = "";
};
function generateUI() {
  const string = numberInput.value;
  const int = Number(numberInput.value);

  output.classList.remove("hidden");

  if (isvalid(string, int)) {
    output.innerHTML = convertRoman(int);
  }

  clear();
}

convert.addEventListener("click", () => {
  generateUI();
});
