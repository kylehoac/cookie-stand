// const seattle = {
//     name: 'Seattle',
//     min: 23,
//     max: 63,
//     avgSale: 6.3,
//     hourlySales: []
// }

// const tokyo = {
//     name: 'Tokyo',
//     min: 3,
//     max: 24,
//     avgSale: 1.2,
//     hourlySales: []
// }

// const dubai = {
//     name: 'Dubai',
//     min: 11,
//     max: 38,
//     avgSale: 3.74,
//     hourlySales: []
// }

// const paris = {
//     name: 'Paris',
//     min: 20,
//     max: 38,
//     avgSale: 2.3,
//     hourlySales: []
// }

// const lima = {
//     name: 'Lima',
//     min: 2,
//     max: 16,
//     avgSale: 4.6,
//     hourlySales: []
// }

// const timeSlots = [
//     '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',
// ]

// const storeContainerElem = document.getElementById('storeContainer');

// fillArray(seattle)
// fillArray(tokyo)
// fillArray(dubai)
// fillArray(paris)
// fillArray(lima)

// renderCookieStand(seattle);
// renderCookieStand(tokyo);
// renderCookieStand(dubai);
// renderCookieStand(paris);
// renderCookieStand(lima);

// function renderCookieStand(cookieStand) {

//     const sectionElem = document.createElement('section');
//     storeContainerElem.appendChild(sectionElem);

//     const nameHeaderElem = document.createElement('h2');
//     sectionElem.appendChild(nameHeaderElem);
//     nameHeaderElem.textContent = cookieStand.name;

//     const ulElem = document.createElement('ul');
//     sectionElem.appendChild(ulElem);

//     for (let i = 0; i < timeSlots.length; i += 1) {

//         const liElem = document.createElement('li');

//         ulElem.appendChild(liElem);

//         const currentTimeSlot = timeSlots[i];

//         const currentSales = cookieStand.hourlySales[i];

//         liElem.textContent = currentTimeSlot + ': ' + currentSales + ' cookies';


//     }
//     let total = 0;
//     for (let j = 0; j < cookieStand.hourlySales.length; j += 1) {
//         const currentSales = cookieStand.hourlySales[j];
//         total += currentSales;

//     }
//     const totalItemElem = document.createElement('li');
//     ulElem.appendChild(totalItemElem);
//     totalItemElem.textContent = 'Total ' + total + ' cookies';
// }

// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min) + min);
// }

// function fillArray(city) {
//     let min = city.min
//     let max = city.max
//     let average = city.avgSale
//     let sales = city.hourlySales

//     for (let i = 0; i < 14; i+=1) {
//         let number = getRandomInt(min, max)
//         number = number * average
//         console.log(number)
//         sales.push(Math.round(number))
//     }
//     console.log(sales)
//     return sales
// }
// fillArray(seattle)
// fillArray(tokyo)
// fillArray(dubai)
// fillArray(paris)
// fillArray(lima)

const timeSlots = [
    '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm','Total'
]

let CookieStands = function (name, min, max, avgSale,) {
    this.name = name;
    this.min = min;
    this.max = max;
    this.avgSale = avgSale;
    this.hourlySales = [];
    for (let i = 0; i < timeSlots.length-1; i++) {
        this.hourlySales.push(this.generateRandom(this.min, this.max));
    }
    this.calculateTotal();
}

CookieStands.prototype.calculateTotal = function(){
    let total = 0
    for (let j = 0; j < timeSlots.length-1; j++){
        total = total + this.hourlySales[j]
    }
    this.hourlySales.push(total)
}

CookieStands.prototype.generateRandom = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let seattle = new CookieStands('Seattle', 23, 63, 6.3);
let tokyo = new CookieStands('Tokyo', 3, 24, 1.2);
let dubai = new CookieStands('Dubai', 11, 38, 3.74);
let paris = new CookieStands('Paris', 20, 38, 2.3);
let lima = new CookieStands('Lima', 2, 16, 4.6);


const storeContainerElem = document.getElementById('storeContainer');

const sectionElem = document.createElement('section');
storeContainerElem.appendChild(sectionElem);

const tableElem = document.createElement('table');
sectionElem.appendChild(tableElem);

const trElem = document.createElement('tr')
tableElem.appendChild(trElem);

const blankElem = document.createElement('th');
trElem.appendChild(blankElem);

for (i = 0; i < timeSlots.length; i++) {
    const thElem = document.createElement('th');
    trElem.appendChild(thElem);
    thElem.textContent = timeSlots[i];
}

CookieStands.prototype.render = function () {
    const trElem = document.createElement('tr');
    tableElem.appendChild(trElem);

    const tdElem = document.createElement('td')
    trElem.appendChild(tdElem);
    tdElem.textContent = this.name;

    for (i = 0; i < this.hourlySales.length; i++) {
        const tdVal = document.createElement('td');
        trElem.appendChild(tdVal);
        console.log(this.hourlySales)
        tdVal.textContent = Math.round(this.hourlySales[i] * this.avgSale);
    }
        // let total = 0;
        // for (let i = 0; i < timeSlots.length; i += 1){
        //     total += this.hourlySales[i] * this.avgSale;
        //     const thElem = document.createElement('th')
        //     trElem.appendChild(thElem);
        //     thElem.textContent = "Total: " + total;
        // }

        // const sectionElem = document.createElement('section');
        // storeContainerElem.appendChild(sectionElem);

        // const nameHeaderElem = document.createElement('h2');
        // sectionElem.appendChild(nameHeaderElem);
        // nameHeaderElem.textContent = this.name;

        // const tableElem = document.createElement('table');

        // sectionElem.appendChild(tableElem);

        //     let trElem = document.createElement('tr')

        //     tableElem.appendChild(trElem);

        //     let total = 0;
        //     for (let i = 0; i < timeSlots.length; i += 1) {
        //         let thElem = document.createElement('th')

        //         trElem.appendChild(thElem);
        //         thElem.textContent = timeSlots[i]

        //     }
        //     trElem = document.createElement('tr')
        //     tableElem.appendChild(trElem);

        //     tdElem = document.createElement('td')
        //     trElem.appendChild(tdElem);
        //     tdElem.textContent = this.name


        //     for (let i = 0; i < timeSlots.length; i += 1) {

        //         total += this.hourlySales[i] * this.avgSale;

        //         const tdElem = document.createElement('td');

        //         trElem.appendChild(tdElem);

        //         const currentTimeSlot = timeSlots[i];

        //         const currentSales = this.hourlySales[i] * this.avgSale;

        //         tdElem.textContent = currentSales + ' cookies';
        //     }
        //     const totalElem = document.createElement('td');

        //     tableElem.appendChild(totalElem);

        //     totalElem.textContent = 'Daily Total: ' + total;
    }


    seattle.render();
    tokyo.render();
    dubai.render();
    paris.render();
    lima.render();