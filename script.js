let table = document.querySelector('#table');
let number = 1;

for (let i = 0; i < 10; i++) {
    let row = document.createElement('tr');
    row.classList.add('row');

    for (let j = 0; j < 10; j++) {
        let cell = document.createElement('td');
        cell.classList.add('cell');
        cell.textContent = number.toString();
        number++;
        row.appendChild(cell);
    }
    table.appendChild(row);
}