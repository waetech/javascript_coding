/*
//Factory function
function createCircle(radius){
    return{
        radius,
        draw: function(){
            console.log('draw');
        }
    };
}

const circle = createCircle(1);

//Constructor function
function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }

}

const another = new Circle(1);

*/

//Arrays

/*
 
const numbers = new Array(1,2,3);

console.log(numbers);

const fruits = ['apples', 'oranges', 'pears'];

fruits.push = 'mangos'; //to add to the end of the array

fruits.unshift('strawberries'); // to add value to the beginning

fruits.indexOf('oranges');

console.log(fruits);

*/
/*
const person = {
    firstName: 'john',
    lastName: 'Smith',
    age: 30,
    hobbies: ['music', 'reading'],
    address: {
        street: '50 Main st',
        city: 'Boston',
        State: 'MA'
    }
}

console.log(person.hobbies[1]);

person.email = 'john@gmail.com';

console.log(person);

*/


//Making variables accessed only by parent
//Closure example -- Access to only the functions, but not the variables
//Thus keeping it private

/*

function Circle(radius) {
    this.radius = radius;

    let defaultLocation = { x: 0, y: 0};

    let computeOptimumLocation = function(factor){

    }

    this.draw = function() {
        let x, y;

        computeOptimumLocation(0.1);
        this.defaultLocation();

        console.log('draw');
    };
}

const circle = new Circle(10);
circle.draw();
circle.radius();

*/

const companies = [

    {name: "Ace Financial", category: "Finance", start: 1981, end: 2000},
    {name: "Covenant tech", category: "tech", start: 1982, end: 2006},
    {name: "Sears", category: "Retail", start: 1955, end: 2012},
    {name: "Vince consultants", category: "Services", start: 1984, end: 2018},
    {name: "Seal Productions", category: "Production", start: 1989, end: 2019},
    {name: "Honda", category: "Auto", start: 1958, end: null},
    {name: "Greg's Staffing", category: "Admin", start: 1979, end: 2001},
    {name: "Met", category: "Finance", start: 1980, end: 2009},
    {name: "Bank of America", category: "Finance", start: 1950, end: 2018},
];


companies.push({name: "Nissan", category: "Auto", start: 1952, end: null});
companies.push({name:"Toyota", category: "Auto", start: 1950, end: null});

console.log(companies);

console.log(companies.name);

const ages = [30, 21, 30, 25, 22, 16, 20, 40, 23, 18, 17, 33, 24];

ages.push(90);

console.log(ages);
/*
for(let i = 0; i < companies.length; i++){
    console.log(companies[i]);
}

*/
//higher order arrays
//foreach loop
companies.forEach(function(company){
    console.log(company.name, company.category);
});


//filter
/*
let canDrink = [];

for(let i =0; i < ages.length; i++){
    if(ages[i] >= 21){
        canDrink.push(ages[i]);
    }
}

console.log(canDrink);

*/
/*
const canDrink = ages.filter(function(age){
    if(age > 21){
        return true;
    }
});

*/

/*
const canDrink = ages.find(function(ages){
    if(ages > 30){
        return true;
    }
});

*/
//filter es6 method
//get 21 or older
const canDrink = ages.filter(age => age >= 21);

console.log(canDrink);


//filter
const retailCompanies = companies.filter(function(company){
    if(company.category === 'Retail'){
        return true;
    }
});

console.log(retailCompanies);


const financeCompanies = companies.filter(function(company){
    if(company.category === 'Finance'){
        return true;
    }
});

console.log(financeCompanies);


const finance = companies.filter(function(company){
    if(company.category === 'finance'){
        return true;
    }
});

console.log(finance);


const auto = companies.filter(function(company){
    if(company.category === 'Auto'){
        return true;
    }
});

console.log(auto);


const retailStores = companies.filter(company => company.category === 'Retail');

console.log(retailStores);


const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990));

//get companies that lasted 10 years or more
const lastedTenYears = companies.filter(company => company.end - company.start >= 10);

console.log(lastedTenYears);

//Map

//Create array of company categories
const companyCategories = companies.map(function(company){
    return company.category;
});

console.log(companyCategories);

//Create array of company names
const companyNames = companies.map(function(company){
    return company.name;
});

console.log(companyNames);

//Map Create array of company start dates and company names
const companyDatesandNames = companies.map(function(company){
    return Array(company.name, company.start);
});

console.log(companyDatesandNames);

//Map Create array of company names, start and end dates
const companyNamesandDates = companies.map(function(company){
    return `${company.name} [${company.start} - ${company.end}]`;

});

console.log(companyNamesandDates);


//sort
//sort the companies to earliest companies started

const sortedCompanies = companies.sort(function(company1, company2){
    if(company1.start > company2.start){
        return 1;
    } else {
        return -1;
    }
});

console.log(sortedCompanies);


let animals = [
    {name: 'Fluffykins', species: 'rabbit'},
    {name: 'Caro',       species: 'dog'},
    {name: 'Hamilton',   species: 'dog'},
    {name: 'Harold',     species: 'fish'},
    {name: 'Ursula',     species: 'cat'},
    {name: 'Jimmy',      species: 'fish'},
    {name: 'Benny',      species: 'fish'},
    {name: 'Tobias',     species: 'rabbit'}
]

let dogs = animals.filter(function(animal){
    return animal.species === 'dog'
});

console.log(dogs);

let fish = animals.filter(function(animal){
    return animal.species === 'fish';
});

console.log(fish);


animals.forEach(function(animal){
    return animal.name, animal.species;
});

console.log(animals);


//Map - transform the array
var names = animals.map((animal) => animal.name)
   console.log(names);

 //foreach
animals.forEach(function(animal){
    return animal.name, animal.species;
});

console.log(animals);


//Reduce
var orders = [
    {amount: 250},
    {amount: 400},
    {amount: 100},
    {amount: 325}
]


var totalAmount = orders.reduce(function(sum, order){
    return sum + order.amount;
}, 0)

console.log(totalAmount);


//Closures

















