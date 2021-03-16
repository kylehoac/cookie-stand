const seattle = {
    name: 'Seattle',
    min: 23,
    max: 63,
    avgSale: 6.3,
    hourlySales: []
}

const tokyo = {
    name: 'Tokyo',
    min: 3,
    max: 24,
    avgSale: 1.2,
    hourlySales: []
}

const dubai = {
    name: 'Dubai',
    min: 11,
    max: 38,
    avgSale: 3.74,
    hourlySales: []
}

const paris = {
    name: 'Paris',
    min: 20,
    max: 38,
    avgSale: 2.3,
    hourlySales: []
}

const lima = {
    name: 'Lima',
    min: 2,
    max: 16,
    avgSale: 4.6,
    hourlySales: []
}

const timeSlots = [
    '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',
]

const storeContainerElem = document.getElementById('storeContainer');

fillArray(seattle)
fillArray(tokyo)
fillArray(dubai)
fillArray(paris)
fillArray(lima)

renderCookieStand(seattle);
renderCookieStand(tokyo);
renderCookieStand(dubai);
renderCookieStand(paris);
renderCookieStand(lima);

function renderCookieStand(cookieStand) {

    const sectionElem = document.createElement('section');
    storeContainerElem.appendChild(sectionElem);

    const nameHeaderElem = document.createElement('h2');
    sectionElem.appendChild(nameHeaderElem);
    nameHeaderElem.textContent = cookieStand.name;

    const ulElem = document.createElement('ul');
    sectionElem.appendChild(ulElem);

    for (let i = 0; i < timeSlots.length; i += 1) {

        const liElem = document.createElement('li');

        ulElem.appendChild(liElem);

        const currentTimeSlot = timeSlots[i];

        const currentSales = cookieStand.hourlySales[i];

        liElem.textContent = currentTimeSlot + ': ' + currentSales + ' cookies';


    }
    let total = 0;
    for (let j = 0; j < cookieStand.hourlySales.length; j += 1) {
        const currentSales = cookieStand.hourlySales[j];
        total += currentSales;

    }
    const totalItemElem = document.createElement('li');
    ulElem.appendChild(totalItemElem);
    totalItemElem.textContent = 'Total ' + total + ' cookies';
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function fillArray(city) {
    let min = city.min
    let max = city.max
    let average = city.avgSale
    let sales = city.hourlySales

    for (let i = 0; i < 14; i+=1) {
        let number = getRandomInt(min, max)
        number = number * average
        console.log(number)
        sales.push(Math.round(number))
    }
    console.log(sales)
    return sales
}
fillArray(seattle)
fillArray(tokyo)
fillArray(dubai)
fillArray(paris)
fillArray(lima)

