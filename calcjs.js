// script.js

// Append a value to the input field
function appendValue(value) {
  const resultField = document.getElementById("result");
  resultField.value += value;
}

// Clear the input field
function clearResult() {
  document.getElementById("result").value = "";
}

// Delete the last character
function deleteLast() {
  const resultField = document.getElementById("result");
  resultField.value = resultField.value.slice(0, -1);
}

// Evaluate the expression
function calculateResult() {
  const resultField = document.getElementById("result");
  try {
    resultField.value = eval(resultField.value);
  } catch (error) {
    resultField.value = "انت شو يازلمة! حل عني!!";

  
  }
}
