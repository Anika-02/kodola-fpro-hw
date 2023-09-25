function generateList (array) {
    let numberList = document.createElement('ul');

    array.forEach(item => {
        let listElement = document.createElement('li');
        Array.isArray(item)? listElement.appendChild(generateList(item)): listElement.textContent = item;
        numberList.appendChild(listElement);
    });

    return numberList;
}

let numArray = [1, 2, 3 , [1, 2, 3], 4];
document.body.appendChild(generateList(numArray));