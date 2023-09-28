function checkProtocol(link) {
    let href = link.getAttribute('href');

    if (!href.startsWith("http://") && !href.startsWith("https://")) {
        link.setAttribute('href', 'http://' + href);
    }
}

let firstLink = document.querySelector('#first-button');
let secondLink = document.querySelector('#second-button');

checkProtocol(firstLink);
checkProtocol(secondLink);