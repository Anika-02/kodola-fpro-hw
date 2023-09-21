let products = [{
    category: 'Make Up',
    product: [{
        productName: 'Mascara',
        productInfo: 'Mascara is a makeup product used to darken, lengthen, and volumize eyelashes, making them appear more defined and dramatic. It comes in various forms and colors and is applied with a wand brush.'
    },{
        productName: 'Blush',
        productInfo: 'Blush is a makeup product that adds a natural flush of color to the cheeks, enhancing the complexion and giving a healthy, radiant appearance. It comes in various forms, like powder, cream, and liquid, and is available in a range of colors to suit different skin tones and makeup looks. Blush is applied to the apples of the cheeks and can provide a subtle or bold effect, depending on preference.'
    },{
        productName: 'Lipstick',
        productInfo: 'Lipstick is a cosmetic product that adds color and texture to the lips, enhancing their appearance and often providing a matte or glossy finish.'
    }],
},{
    category: 'Hair Care',
    product: [{
        productName: 'Shampoo',
        productInfo: 'Shampoo is a liquid hair cleaning product used to remove dirt, oil, and impurities from the hair and scalp during bathing.'
    },{
        productName: 'Balm',
        productInfo: 'Balm is a hair care product used to condition, moisturize, and smooth the hair, reducing frizz and improving manageability.'
    },{
        productName: 'Hair conditioner',
        productInfo: 'Hair conditioner is a product that helps soften and detangle hair, making it smoother and more manageable after shampooing.'
    }],
},{
    category: 'Skin Care',
    product: [{
        productName: 'Micellar water',
        productInfo: 'Micellar water is a gentle cleansing solution composed of micelles (tiny oil molecules) suspended in water. It is used to remove makeup, dirt, and impurities from the face and skin without the need for rinsing, leaving the skin clean and refreshed.'
    },{
        productName: 'Face tonic',
        productInfo: 'Face tonic, also known as toner, is a liquid skincare product applied to the face after cleansing. It helps balance the skin\'s pH, remove any remaining impurities, and prepare the skin for the application of serums, moisturizers, or other skincare products. Toners can also provide hydration and a refreshed feeling to the skin.'
    },{
        productName: 'Face cream',
        productInfo: 'Face cream is a skincare product designed to hydrate and moisturize the skin on the face. It typically contains a combination of water, oils, and other beneficial ingredients to nourish the skin, improve its texture, and help maintain a healthy complexion. Face creams can come in various formulations, such as day creams for daytime use, night creams for overnight hydration, and specialized creams for specific skin concerns like anti-aging or acne.'
    }],
}];

let categoriesList = document.querySelector('#categories-items');
let productsList = document.querySelector('#products-items');
let infoName = document.querySelector('#info-name');
let infoDescription = document.querySelector('#info-description');
let productsContainer = document.querySelector('#products');
let infoContainer = document.querySelector('#info');

let buyBtn = document.createElement('button');
buyBtn.textContent = 'Buy';
buyBtn.classList.add('button');
infoContainer.appendChild(buyBtn);
infoContainer.style.display = 'none';

buyBtn.addEventListener('click', () => {
    alert('You have successfully purchased ' + infoName.textContent + '!');
    infoContainer.style.display = 'none';
    productsContainer.style.display = 'none';
});

productsContainer.style.display = 'none';
infoContainer.style.display = 'none';
products.forEach((categoryItem) => {
    let categoryElement = document.createElement('div');
    let categoryTitle = document.createElement('h3');
    categoryTitle.textContent = categoryItem.category;
    categoryElement.classList.add('block');
    categoryElement.appendChild(categoryTitle);
    categoriesList.appendChild(categoryElement);

    categoryElement.addEventListener('click', () => {
        productsContainer.style.display = 'flex';
        infoContainer.style.display = 'none';
        productsList.innerHTML = '';
        infoName.innerHTML = '';
        infoDescription.innerHTML = '';


        categoryItem.product.forEach((productItem) => {
            let productElement = document.createElement('div');
            let productTitle = document.createElement('h3');
            productTitle.textContent = productItem.productName;
            productElement.classList.add('block-item');
            productElement.appendChild(productTitle);
            productsList.appendChild(productElement);

            productElement.addEventListener('click', () => {
                infoName.textContent = productItem.productName;
                infoDescription.textContent = productItem.productInfo;

                infoContainer.style.display = 'flex';
            });
        });
    });
});