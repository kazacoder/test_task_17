import {Worker} from "../modules/worker.js";

const agesTable = document.getElementById('ages');
const agesThead = document.getElementById('thead').childNodes[1];

const columnCount = 13
for (let i = 0; i < columnCount; i++) {
    let thIdx = document.createElement('th');
    thIdx.innerText = '#'
    agesThead.appendChild(thIdx);
    let thTitle = document.createElement('th');
    thTitle.innerText = 'age'
    agesThead.appendChild(thTitle);
}


let year = new Date().getFullYear() - 1
for (let i = 0; i < 10; i++) {
    let row = agesTable.insertRow();
    for (let j = 0; j < columnCount; j++) {
        let [age, title ] = new Worker('j', 'q', `01-01-${year}`, '').getAge().split(' ');

        let cellAge = row.insertCell()
        cellAge.innerText = age
        let cellTitle = row.insertCell()
        cellTitle.innerText = title
        year -= 10

        if (title === 'год') {
            cellAge.className = 'green'
            cellTitle.className = 'green'
        } else if (title === 'лет') {
            cellAge.className = 'yellow'
            cellTitle.className = 'yellow'
        }
    }
    year += columnCount * 10 - 1
}
