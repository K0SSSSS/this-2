// Створіть об'єкт `car`, який містить властивості марка, модель, рік випуску,
// швидкість.

// Створіть ще один обʼєкт `location`, який містить властивість `city` та
// `distance`

// Створіть метод обʼєкта car `showInfo()`, який виводить інформацію про автомобіль
// на екран у форматі
// `Марка: <марка>; Модель: <модель>; Рік випуску: <рік випуску>; `.

// Створіть функцію `showTime()`, яка буде вираховувати за який час автомобіль
// доїде до міста `city` та виводити в консоль повідомлення в форматі
// `Автомобіль {brand}, марки {model} дістанеться міста {city} за {time}`

// Використовуйте обєднання обʼєктів, метод forEach та ключове слово this для
// доступу до властивостей об'єкту.

const car = {
    brand: "Volkswagen",
    model: "Golf",
    year: 2004,
    speed: 200,
    showInfo: function(){
        console.log(`Марка: ${this.brand}; Модель: ${this.model}; Рік випуску: ${this.year};`); 
    }
}

const location = {
    city: "Kyiv",
    distance: 200
}

function showTime(){
    let time = location.distance / car.speed
    console.log(`Автомобіль ${car.brand}, марки ${car.model} дістанеться міста ${location.city} за ${time} годину`);
}

car.showInfo()
showTime()