let input = document.querySelector('input');
document.querySelector('.contener').addEventListener('click', button => {
  let click = button.target.innerText; // в перменную кладем значения кнопок
  switch (click) {
    case 'AC':
      input.value = input.value.slice(0, -1);
      break;
    case 'C':
      input.value = '';
      break;
    case '=':
      try {
        input.value = +window.eval(input.value).toFixed(1);
      } catch (err) {
        input.value = 'error';
      }
      break;
    default:
      input.value += click;
  }
});
