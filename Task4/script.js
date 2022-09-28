const userText = prompt('Введите текст');
const link = document.querySelector('#link');
link.textContent = userText;
console.log('Текст в link изменён на', userText);