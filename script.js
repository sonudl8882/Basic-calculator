const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
const clear = document.getElementById('clear');
const equals = document.getElementById('equals');

let input = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.getAttribute('data-value');

    if (value) {
      input += value;
      display.value = input;
    }
  });
});

equals.addEventListener('click', () => {
  try {
    // Evaluate the expression safely
    const result = eval(input);
    display.value = result;
    input = result.toString();
  } catch (error) {
    display.value = 'Error';
    input = '';
  }
});

clear.addEventListener('click', () => {
  input = '';
  display.value = '';
});
