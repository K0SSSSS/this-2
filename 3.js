// # Завдання 3

// Створіть масив об'єктів "студентів", який містить властивості "ім'я", "вік" та
// "рейтинг". Додайте до масиву метод "вітатися", який буде повертати рядок з
// привітанням зі зазначенням імені студента.

// Використовуючи метод "map()", створіть новий масив, який містить привітання з
// кожним студентом з масиву "студентів". Використовуючи метод "filter()", створіть
// новий масив, який містить тільки ті об'єкти типу "студент", які мають рейтинг
// вище заданого значення.

// Створіть функцію "addRating", яка приймає один аргумент - кількість балів, на
// яку потрібно збільшити рейтинг студента. Викличте функцію "addRating" на кожному
// елементі масиву "студентів". Перевірте, що в контексті функції "addRating"
// значення "this" вказує на конкретний об'єкт "студент". Виведіть новий масив зі
// зміненими рейтингами в консоль.

let students = [
    { name: "Анна", age: 20, rating: 85 },
    { name: "Петро", age: 22, rating: 92 },
    { name: "Марія", age: 21, rating: 78 },
    { name: "Іван", age: 23, rating: 80 }
];

students.forEach(function(student) {
    student.greeting = function() {
        return (`Вітаю, я ${this.name}!`);
    };
});

let greetings = students.map(function(student) {
    return student.greeting();
});

console.log(greetings);

let highRatedStudents = students.filter(function(student) {
    return student.rating > 85;
});

console.log(highRatedStudents);

function addRating(points) {
    this.rating += points;
}

students.forEach(function(student) {
    addRating.call(student, 5); 
});

console.log(students); 
