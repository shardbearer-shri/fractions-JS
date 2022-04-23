const imageBox = document.getElementsByClassName("image__box");
const btn = document.getElementsByClassName(".button__boxcreate");

function jsfunc() {
  let fractValOne = document.querySelector(".form__selectOne");
  let fractValTwo = document.querySelector(".form__selectTwo");
  let fractValThree = document.querySelector(".form__selectThree");
  let fractValFour = document.querySelector(".form__selectFour");
  //   storing the fract data
  let firstSet = [Number(fractValOne.value), Number(fractValTwo.value)];
  let secondSet = [Number(fractValThree.value), Number(fractValFour.value)];

  //   finding the largest value for box creation
  console.log(firstSet, secondSet);

  // setting the input data for calculation value
  const calcOneNum = document.querySelector(".calcVal__one--num");
  const calcOneDen = document.querySelector(".calcVal__one--deno");

  firstSet[0] > firstSet[1]
    ? (calcOneNum.innerText = firstSet[1]) &&
      (calcOneDen.innerText = firstSet[0])
    : firstSet[0] <= firstSet[1]
    ? (calcOneNum.innerText = firstSet[0]) &&
      (calcOneDen.innerText = firstSet[1])
    : "";

  // second frac calculation
  const calcTwoNum = document.querySelector(".calcVal__two--num");
  const calcTwoDen = document.querySelector(".calcVal__two--deno");

  secondSet[0] > secondSet[1]
    ? (calcTwoNum.innerText = secondSet[1]) &&
      (calcTwoDen.innerText = secondSet[0])
    : firstSet[0] <= firstSet[1]
    ? (calcTwoNum.innerText = secondSet[0]) &&
      (calcTwoDen.innerText = secondSet[1])
    : "";
  // if statements end here

  console.log(Math.max(...firstSet), "dasdadsadsadsad");
  let firstBoxSize = Math.max(...firstSet);
  console.log(Math.max(...secondSet), "dasdadsadsadsad");
  let secondBoxSize = Math.max(...secondSet);

  //   storing the number of colored boxes
  let firstBoxColor = Math.min(...firstSet);
  let secondBoxColor = Math.min(...secondSet);
  // TOTAL
  let totalBox = firstBoxSize * secondBoxSize;
  let totalColorBox = firstBoxColor * secondBoxColor;
  let totalValues = [totalBox, totalColorBox];
  //   creating divs with blue color based on the max number on each set
  const firstFractBox = document.querySelector(".firstFract__box");
  firstFractBox.innerHTML = "";
  for (let i = 0; i < firstBoxSize; i++) {
    firstFractBox.insertAdjacentHTML(
      "beforeend",
      '<div class="color__box first__fractColor"></div>'
    );
  }
  //   adding color to the first box
  const firstFractColor = document.querySelectorAll(".first__fractColor");
  for (let i = 0; i < firstBoxColor; i++) {
    firstFractColor[i].classList.add("red");
  }
  //   second fraction box
  const secondFractBox = document.querySelector(".secondFract__box");
  secondFractBox.innerHTML = "";
  for (let i = 0; i < secondBoxSize; i++) {
    secondFractBox.insertAdjacentHTML(
      "beforeend",
      '<div class="color__box second__fractColor"></div>'
    );
  }

  //   adding color to the second box
  const secondFractColor = document.querySelectorAll(".second__fractColor");
  for (let i = 0; i < secondBoxColor; i++) {
    secondFractColor[i].classList.add("red");
  }
  //   third fraction box
  const calcFractbox = document.querySelector(".calcFract__box");
  calcFractbox.innerHTML = "";
  for (let i = 0; i < totalBox; i++) {
    calcFractbox.insertAdjacentHTML(
      "beforeend",
      '<div class="color__box calc__fractColor"></div>'
    );
  }
  //   adding color to the second box
  const calcFractColor = document.querySelectorAll(".calc__fractColor");
  for (let i = 0; i < totalColorBox; i++) {
    calcFractColor[i].classList.add("red");
  }
}
const allFracs = document.querySelectorAll(".form-select");

allFracs.forEach(function (ele, ind) {
  ele.addEventListener("change", jsfunc);
});
