// let amount = document.querySelector("#amount");
// amount.addEventListener("change", (e) => {
//   console.log(e.target.value); // you get the amount here
// });
// let years = document.querySelector("#years");
// years.addEventListener("change", (e) => {
//   console.log(e.target.value);
// });

// let min = document.getElementById("min-max");
// let slideValue = document.getElementById("slideValue");

// min.oninput = function () {
//   slideValue.innerHTML = this.value + "%";
//   console.log(slideValue.innerHTML);
// };

const amount = document.getElementById("amount");

const year = document.getElementById("years");
const form = document.getElementById("form");

let min = document.getElementById("min-max");
let slideValue = document.getElementById("slideValue");

min.oninput = function () {
  slideValue.innerHTML = this.value + "%";
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(amount.value);
  console.log(slideValue.innerHTML);
  console.log(year.value);
  compute(amount.value, slideValue.innerHTML, year.value);
});

function compute(a, r, y) {
  if (a <= 0 || isNaN(a)) {
    alert("Enter a positive number");
    return;
  }
  a = parseInt(a);
  r = parseInt(r);
  y = parseInt(y);
  let intrest = (a * r * y) / 100;
  console.log(intrest);
  let year = new Date().getFullYear() + y;
  let val = document.getElementById("val");
  val.innerHTML =
    "If you deposit <strong>$" +
    a +
    "</strong>,<br>at an interest rate of <strong>" +
    r +
    "%</strong><br>You will receive an amount of <strong>$" +
    intrest +
    "</strong>,<br>in the year <strong>" +
    year +
    "</strong><br>";
  val.style.display = "block";
}
