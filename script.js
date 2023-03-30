const calculateBtn = document.getElementById("calculateBtn");
const nameInput = document.getElementById("nameInput");
const weightInput = document.getElementById("weightInput");
const heightInput = document.getElementById("heightInput");
const result = document.getElementById("result");

calculateBtn.addEventListener("click", () => {
  const name = nameInput.value;
  const weight = Number(weightInput.value);
  const height = Number(heightInput.value) / 100;
  const bmi = (weight / (height * height)).toFixed(2);
  result.innerHTML = `${name}, your BMI is: ${bmi}`;
});
