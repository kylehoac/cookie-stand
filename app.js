const seattle = {
    name: 'Seattle',
    hourlySales: fillArray(23, 63, 6.3),
    min: 23,
    max: 63,
    avgSale: 6.3,
}

const tokyo = {
    name: 'Tokyo',
    hourlySales: fillArray(3, 24, 1.2),
    min: 3,
    max: 24,
    avgSale: 1.2,
}

const dubai = {
    name: 'Dubai',
    hourlySales: fillArray(11, 38, 3.7),
    min: 11,
    max: 38,
    avgSale: 3.7,
}

const paris = {
    name: 'Paris',
    hourlySales: fillArray(20, 38, 2.3),
    min: 20,
    max: 38,
    avgSale: 2.3,
}

const lima = {
    name: 'Lima',
    hourlySales: fillArray(2, 16, 4.6),
    min: 2,
    max: 16,
    avgSale: 4.6,
}

const timeSlots = [
    '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',
]



const storeContainerElem = document.getElementById('storeContainer');
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

function fillArray(min, max, average) {
    values = []
    for (let i = 0; i < 14; i += 1) {

        let number = getRandomInt(min, max)
        number = number * average
       
        console.log(number)
        values.push(Math.round(number))
    }
    return values
}



