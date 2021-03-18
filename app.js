const timeSlots = [
    '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Total'
]

let CookieStands = function (name, min, max, avgSale,) {
    this.name = name;
    this.min = min;
    this.max = max;
    this.avgSale = avgSale;
    this.hourlySales = [];
    for (let i = 0; i < timeSlots.length - 1; i++) {
        this.hourlySales.push(this.generateRandom(this.min, this.max));
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
// let total = new CookieStands('Total',[])

CookieStands.prototype.GrandTotal = function() {
    let gTotal = []
    for (let i = 0; i < timeSlots.length - 1; i++) {
        gTotal =  + seattle[0] + tokyo[0] + dubai[0] + paris[0] + lima [0]
    }
}


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

}
seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();