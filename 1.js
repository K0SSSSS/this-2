// Створіть об'єкт `person`, який містить властивості `name`, `age`, `gender` та
// метод `introduce()`, який повертає рядок зі словами
// `Мене звати {ім'я}, мені {вік} років я {стать}`.

// Додайте до об'єкту `person` метод `changeName(newName)`, який змінює властивість
// `name` на нове ім'я.

// Використайте ключове слово `this` для доступу до властивостей об'єкту.

let person = {
    name: "John",
    age: 22,
    gender: "чоловік",
    introduce: function() {
        return `Мене звати ${this.name}, мені ${this.age} роки, я ${this.gender}`;
    },
    changeName: function (newName) {
        this.name = newName;
    }
};

person.changeName("Frank");
console.log(person.name); // Виведе "Frank"
console.log(person.introduce()); // Виведе "Мене звати Frank, мені 22 роки, я male"
