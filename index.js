
let color = [];
let colors = {
    color1: 'red',
    color2: 'blue',
    color3: 'green',
    color: ["white", "silver", "grey", "black"]
};

let carMakes = [];
let makes = {
    make1: 'BMW',
    make2: 'Mercedes',
    make3: 'Alfa Romeo',
    carMakes: ["Bugatti", "Pagani", "Lamborghini", "Ferarri"]
};

let cities = [];
let countries = {
    country1: 'Switzerland',
    country2: 'Finland',
    country3: 'Iceland',
    cities: ["Reykjavík", "Dublin", "Oslo", "Tokyo"]
};

let objectArray = [colors, makes, countries];

console.log(countries.country1);

objectArray.forEach(objectArray => {
    console.log();
});