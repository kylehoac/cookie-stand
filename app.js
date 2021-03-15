const seattle = {
    name: 'Seattle',
    hourlySales: [16, 20, 35, 48, 56, 77, 93, 144, 119, 84, 61, 23, 42, 57],
    getRandomInt: function(min,max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }
}
seattle.getRandomInt(23,65);
const tokyo = {
    name: 'Tokyo',
    hourlySales: [2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    getRandomInt: function(min,max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }
}
tokyo.getRandomInt(3,24)
const dubai = {
    name: 'Dubai',
    hourlySales: [2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    getRandomInt: function(min,max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }
}
dubai.getRandomInt(11,38)
const paris = {
    name: 'Paris',
    hourlySales: [2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    getRandomInt: function(min,max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }
}
paris.getRandomInt(20,38)
const lima = {
    name: 'Lima',
    hourlySales: [2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    getRandomInt: function(min,max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }
}
lima.getRandomInt(2,16)
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
