const timeSlots = [
    '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Total'
]

let CookieStands = function (name, min, max, avgSale) {
    this.name = name;
    this.min = min;
    this.max = max;
    this.avgSale = avgSale;
    this.hourlySales = [];
    for (let i = 0; i < timeSlots.length - 1; i++) {
        this.hourlySales.push(Math.floor(this.avgSale * this.generateRandom(this.min, this.max)));
    }
    this.calculateTotal();
}

CookieStands.prototype.calculateTotal = function () {
    let total = 0
    for (let j = 0; j < timeSlots.length - 1; j++) {
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
        // console.log(this.hourlySales)
        tdVal.textContent = this.hourlySales[i];
    }

}
seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();
grandTotal();

function grandTotal() {
    let totalHourlySales = []
    // totalHourlySales.push(hourlySales)
    let sum = 0;
    const totalElem = document.createElement('tr');
    tableElem.appendChild(totalElem);

    const totalTextElem = document.createElement('td')
    totalTextElem.textContent = "Total "
    totalElem.appendChild(totalTextElem);
    for (let i = 0; i < timeSlots.length; i++) {
        const sumTotal = document.createElement('td');
        let columnSum = seattle.hourlySales[i] + tokyo.hourlySales[i] + dubai.hourlySales[i] + paris.hourlySales[i] + lima.hourlySales[i];
        console.log(seattle.hourlySales[i], tokyo.hourlySales[i]);
        sumTotal.textContent = columnSum;
        totalElem.appendChild(sumTotal);
        sum += columnSum;

        // for (let j = 0; j < this.hourlySales.length; j++) {
        //     console.log(totalHourlySales[j][i])
        //     // sum = sum + totalHourlySales[j][i];
        // }
    }
    // const finalSum = document.createElement('td')
    // finalSum.textContent = sum;
    // totalElem.appendChild(finalSum);
}
// //make an array to hold all hoursly sales array
// let testArray = []
// //push all hourly sales array into this array
// testArray.push(hourlySales)

// testArray = [[1, 2, 3, 4, 5, 6, 7, 8],
//              [1, 2, 3, 4, 5, 6, 7, 8],
//              [1, 2, 3, 4, 5, 6, 7, 8],
//              [1, 2, 3, 4, 5, 6, 7, 8]]
// let sum = 0

// //since all hourly sales arrays are qual length you can calculate the sum by teh way you travrse your nested arrray/for loop
// for (let i = 0; i < testArray.length; i++) {
//     for (let j = 0; testArray[i].length; j++) {
//         console.log(testArray[j][i])
//         testArray[j][i]
//         sum = sum + tesArray[j][i]
//     }
// }

// CookieStands.prototype.GrandTotal = function () {
//         let totalHourlySales = []
//         // totalHourlySales.push(hourlySales)
//         const len = CookieStands[0].hourlySales.length
//     for (let i = 0; i < len; i++) {

//         const dailySales = calculateSalesForAllCookieStandsForGivenHour(CookieStands, i)

//     }
// }
// function calculateSalesForAllCookieStandsForGivenHour(CookieStands,i){
//     let salesPerHour = 0;

//     for (let j = 0; j < CookieStands[0]; j++) {
//         const currentCookieStand = CookieStands[j];

//         const hourlyTotal = currentCookieStand.hourlySales[i];

//         salesPerHour += hourlyTotal
//     }
//         return salesPerHour;
// }