const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.getElementById("number");

let count = 0;
number.innerText = count;

// updating the count value (which is changed below)
const updateText = () => {
  number.innerText = count;
};

// changing the count value
const handleAdd = () => {
  count = count + 1;
  console.log(count);
  // update the changed count value
  updateText();
};
const handleMinus = () => {
  count = count - 1;
  console.log(count);
  // update the changed count value
  updateText();
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
