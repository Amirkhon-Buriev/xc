// Создаем объект для хранения данных
let userData = {};

// Запрашиваем имя, ID и пароль у пользователя
userData.name = prompt("Введите ваше имя:");
userData.ID = prompt("Введите ваш spaceId:");
userData.password = prompt("Введите ваш spacePassword:");

// Выводим объект в консоль
console.log(userData);