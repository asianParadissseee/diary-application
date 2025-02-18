/**
 *
 * Создайте простую программу, которая выполняет поиск книг по имени автора. У нас есть массив книг, каждая из которых содержит следующие параметры:
 *
 * Наименование
 * Автор
 * ISBN
 * Цена
 *
 * */
// const books = [
//     { title: "Harry Potter and the Philosopher's Stone", author: "Joanne Rowling", ISBN: "1233123", price: "50$" },
//     { title: "Harry Potter and the Chamber of Secrets", author: "Joanne Rowling", ISBN: "222332", price: "40$" },
//     { title: "Harry Potter and the Prisoner of Azkaban", author: "Joanne Rowling", ISBN: "452323", price: "55$" },
//     { title: "The Hobbit", author: "J.R.R. Tolkien", ISBN: "987654", price: "35$" },
//     { title: "The Lord of the Rings", author: "J.R.R. Tolkien", ISBN: "123987", price: "60$" }
// ];
//
// function findBooksByAuthor(authorName) {
//     return books.filter(book => book.author.toLowerCase() === authorName.toLowerCase());
// }
//
// const authorToSearch = "Joanne Rowling";
// const foundBooks = findBooksByAuthor(authorToSearch);
//
// if (foundBooks.length > 0) {
//     foundBooks.forEach(book => {
//         console.log(`${book.title} - ${book.author} - ${book.ISBN} - ${book.price}`);
//     });
// } else {
//     console.log("Книги данного автора не найдены.");
// }

// ============================================================
//Создайте программу, в которой хранится список пользователей (логин и пароль) в виде массива объектов. При запуске браузера программа запрашивает у пользователя логин и пароль. Если введенные данные соответствуют существующему пользователю в массиве, программа выводит сообщение

// const users = [
//     { login: "ilyas", password: "qwerty" },
//     { login: "eldar", password: "qqqqq" },
//     { login: "assylkhan", password: "qwqew" },
//     { login: "anel", password: "asdasd" },
//     { login: "alibek", password: "aaaaaa" }
// ];
//
// function authenticateUser(login, password) {
//     const user = users.find(user => user.login === login && user.password === password);
//     return user ? "Welcome, you are authenticated" : "User not found";
// }
//
// const userLogin = "ilyas"; // prompt("Введите логин:")
// const userPassword = "qwerty"; // prompt("Введите пароль:")
//
// const message = authenticateUser(userLogin, userPassword);
// console.log(message);


// ================================================
// const cars = [
//     { name: "Toyota", year: 2015, volume: 2.2, price: 12000000 },
//     { name: "Mercedes", year: 2018, volume: 3.8, price: 70000000 },
//     { name: "Toyota", year: 2013, volume: 2.0, price: 7000000 },
//     { name: "BMW", year: 2011, volume: 3.0, price: 11000000 },
//     { name: "Lexus", year: 2017, volume: 5.7, price: 60000000 }
// ];
//
// function searchCarsByName(name) {
//     return cars.filter(car => car.name.toLowerCase() === name.toLowerCase());
// }
//
// function searchCarsByYear(startYear, endYear) {
//     return cars.filter(car => car.year >= startYear && car.year <= endYear);
// }
//
// function searchCarsByEngineVolume(startVolume, endVolume) {
//     return cars.filter(car => car.volume >= startVolume && car.volume <= endVolume);
// }
//
// function searchCarsByPrice(startPrice, endPrice) {
//     return cars.filter(car => car.price >= startPrice && car.price <= endPrice);
// }
//
// console.log(searchCarsByName("Toyota"));
// console.log(searchCarsByYear(2010, 2015));
// console.log(searchCarsByEngineVolume(2.8, 3.0));
// console.log(searchCarsByPrice(10000000, 11000000));