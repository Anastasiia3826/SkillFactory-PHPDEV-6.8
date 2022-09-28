const link = document.querySelector('#link');

link.addEventListener('click', function(event){
    //тело обработчика
const userText = prompt('Введите новый текст для ссылки:'); //Форма для ввода
link.textContent = userText; //присваивание 
event.preventDefault(); //сбрасывание в default
    //конец тела обработчика
})
