// 5-2 Создание программы на деление 2 чисел
// function checkDivisibility() {
//     let num1 = parseInt(prompt("Введите первое число:"));
//     let num2 = parseInt(prompt("Введите второе число:"));
//
//     if (isNaN(num1) || isNaN(num2) || num2 === 0) {
//         alert("Введите корректные числа (второе число не должно быть 0)");
//         return;
//     }
//
//     if (num1 % num2 === 0) {
//         alert("divisible");
//     } else {
//         alert("not divisible");
//     }
// }
//
// checkDivisibility();

// checkDivisibility();


//==========================
// Создайте программу, которая запрашивает у пользователя ввод имени, фамилии, города и возраста. В конце программа должна вывести результат через alert() в следующем формате:

// let name = prompt("Введите имя:");
// let surname = prompt("Введите фамилию:");
// let city = prompt("Введите город:");
// let age = prompt("Введите возраст:");
//
// alert(`Name: ${name}\nSurname: ${surname}\nCity: ${city}\nAge: ${age}`);


// ====================
// Напишите программу, которая запрашивает у пользователя количество баллов за семестр по предмету "Web Technologies". Программа должна вывести, какую буквенную оценку получил пользователь в зависимости от системы оценивания:

// let score = parseInt(prompt("Введите количество баллов за семестр:"));
// let grade;
// switch (true) {
//     case (score >= 90):
//         grade = "A";
//         break;
//     case (score >= 75):
//         grade = "B";
//         break;
//     case (score >= 60):
//         grade = "C";
//         break;
//     case (score >= 50):
//         grade = "D";
//         break;
//     default:
//         grade = "F";
// }
//
// alert(`Ваша оценка: ${grade}`);


// ==================================
// Создайте программу, которая поможет определить вашу будущую профессию на основе ваших предпочтений. Программа будет задавать вопросы, а затем предлагать возможные профессии.
// let branch = parseInt(prompt("Выберите вашу сферу:\n1 - Science\n2 - Humanitarian subjects\n3 - Art\n4 - Sport"));
//
// let profession;
//
// switch (branch) {
//     case 1:
//         let science = parseInt(prompt("1 - Math\n2 - Physics"));
//         profession = (science === 1) ? "Financier" : "Engineer";
//         break;
//     case 2:
//         let humanities = parseInt(prompt("1 - History\n2 - Foreign Languages"));
//         profession = (humanities === 1) ? "Historic or Diplomat" : "Translator";
//         break;
//     case 3:
//         let art = parseInt(prompt("1 - Drawing\n2 - Singing"));
//         profession = (art === 1) ? "Painter or Architect" : "Singer or Tamada";
//         break;
//     case 4:
//         let sport = parseInt(prompt("1 - Team\n2 - Individual"));
//         profession = (sport === 1) ? "Footballer or Basketball player" : "Boxer or Tennis player";
//         break;
//     default:
//         profession = "Invalid input!";
// }
//
// alert(`You are ${profession}`);


//======================
// Даны три натуральных числа a, b, c, введенные отдельно.
//  Напишите программу, которая проверяет, можно ли составить треугольник с такими сторонами.
// let a = parseInt(prompt("Введите сторону a:"));
// let b = parseInt(prompt("Введите сторону b:"));
// let c = parseInt(prompt("Введите сторону c:"));
//
// if (a + b > c && a + c > b && b + c > a) {
//     alert("YES");
// } else {
//     alert("NO");
// }

//  ========================

// У вас есть сумма денег в тенге, и вам нужно обменять её на доллары. Программа должна рассчитать, сколько долларов и центов вы получите по курсу 1 USD = 380 KZT.
//
// let amountKZT = prompt("Введите сумму в тенге:");
//
// let exchangeRate = 380;
//
// let totalUSD = amountKZT / exchangeRate; // Делим сумму
// let dollars = parseInt(totalUSD); // Берем целую часть (убираем дробную)
// let cents = Math.round((totalUSD - dollars) * 100); // Дробную часть переводим в центы
//
// if (cents === 0) {
//     alert("ONLY " + dollars + " USD"); // Если центов нет
// } else {
//     alert(dollars + " USD and " + cents + " cents"); // Если есть центы
// }


// Напишите программу, которая принимает количество минут и конвертирует их в часы и минуты.

// let totalMinutes = prompt("Введите количество минут:");
//
// let hours = parseInt(totalMinutes / 60);
// let minutes = totalMinutes % 60;
//
// if (minutes === 0) {
//     alert("ONLY " + hours + " HOURS");
// } else {
//     alert(hours + " HOURS and " + minutes + " MINUTES");
// }

