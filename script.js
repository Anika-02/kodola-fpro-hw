let purchasedProducts = JSON.parse(localStorage.getItem('purchasedProducts')) || [];
function addOrderToLocalStorage(order) {
    let product = null;
    for (let categoryItem of products) {
        for (let productItem of categoryItem.product) {
            if (productItem.productName === order.productName) {
                product = productItem;
                break;
            }
        }
        if (product) {
            break;
        }
    }

    if (!product) {
        console.error(`Product ${order.productName} not found in the list of products.`);
        return;
    }

    order.price = product.productPrice;
    order.total = order.price * order.quantity;

    let existingOrderIndex = purchasedProducts.findIndex((existingOrder) => existingOrder.productName === order.productName);

    if (existingOrderIndex !== -1) {
        purchasedProducts[existingOrderIndex].quantity += order.quantity;
        purchasedProducts[existingOrderIndex].total += order.total;
    } else {
        purchasedProducts.push(order);
    }

    localStorage.setItem('purchasedProducts', JSON.stringify(purchasedProducts));
}

let products = [{
    category: 'Make Up',
    product: [{
        productName: 'Mascara',
        productPrice: 300,
        productInfo: 'Mascara is a makeup product used to darken, lengthen, and volumize eyelashes, making them appear more defined and dramatic. It comes in various forms and colors and is applied with a wand brush.'
    },{
        productName: 'Blush',
        productPrice: 150,
        productInfo: 'Blush is a makeup product that adds a natural flush of color to the cheeks, enhancing the complexion and giving a healthy, radiant appearance. It comes in various forms, like powder, cream, and liquid, and is available in a range of colors to suit different skin tones and makeup looks. Blush is applied to the apples of the cheeks and can provide a subtle or bold effect, depending on preference.'
    },{
        productName: 'Lipstick',
        productPrice: 200,
        productInfo: 'Lipstick is a cosmetic product that adds color and texture to the lips, enhancing their appearance and often providing a matte or glossy finish.'
    }],
},{
    category: 'Hair Care',
    product: [{
        productName: 'Shampoo',
        productPrice: 100,
        productInfo: 'Shampoo is a liquid hair cleaning product used to remove dirt, oil, and impurities from the hair and scalp during bathing.'
    },{
        productName: 'Balm',
        productPrice: 250,
        productInfo: 'Balm is a hair care product used to condition, moisturize, and smooth the hair, reducing frizz and improving manageability.'
    },{
        productName: 'Hair conditioner',
        productPrice: 200,
        productInfo: 'Hair conditioner is a product that helps soften and detangle hair, making it smoother and more manageable after shampooing.'
    }],
},{
    category: 'Skin Care',
    product: [{
        productName: 'Micellar water',
        productPrice: 100,
        productInfo: 'Micellar water is a gentle cleansing solution composed of micelles (tiny oil molecules) suspended in water. It is used to remove makeup, dirt, and impurities from the face and skin without the need for rinsing, leaving the skin clean and refreshed.'
    },{
        productName: 'Face tonic',
        productPrice: 150,
        productInfo: 'Face tonic, also known as toner, is a liquid skincare product applied to the face after cleansing. It helps balance the skin\'s pH, remove any remaining impurities, and prepare the skin for the application of serums, moisturizers, or other skincare products. Toners can also provide hydration and a refreshed feeling to the skin.'
    },{
        productName: 'Face cream',
        productPrice: 300,
        productInfo: 'Face cream is a skincare product designed to hydrate and moisturize the skin on the face. It typically contains a combination of water, oils, and other beneficial ingredients to nourish the skin, improve its texture, and help maintain a healthy complexion. Face creams can come in various formulations, such as day creams for daytime use, night creams for overnight hydration, and specialized creams for specific skin concerns like anti-aging or acne.'
    }],
}];

let categoriesList = document.querySelector('#categories-items');
let productsList = document.querySelector('#products-items');
let infoName = document.querySelector('#info-name');
let infoDescription = document.querySelector('#info-description');
let productsContainer = document.querySelector('#products');
let infoContainer = document.querySelector('#info');
let orderBtn = document.querySelector('#order-btn');
let ordersList = document.querySelector('#orders-items');

let buyBtn = document.createElement('button');
buyBtn.textContent = 'Buy';
buyBtn.classList.add('button');
infoContainer.appendChild(buyBtn);
infoContainer.style.display = 'none';
let orderForm = document.getElementById('order-form');
let orderDetailsForm = document.getElementById('order-details-form');
let orderList = document.getElementById('orders-items');

buyBtn.addEventListener('click', () => {
    orderForm.style.display = 'flex';

    let productItem = null;
    for (let categoryItem of products) {
        for (let product of categoryItem.product) {
            if (product.productName === infoName.textContent) {
                productItem = product;
                break;
            }
        }
        if (productItem) {
            break;
        }
    }

    if (!productItem) {
        console.error(`Product ${infoName.textContent} not found in the list of products.`);
        return;
    }

    let order = {
        productName: infoName.textContent,
        date: new Date().toLocaleDateString(),
        price: productItem.productPrice,
        quantity: 1,
        total: productItem.productPrice,
    };

    addOrderToLocalStorage(order);

    infoContainer.style.display = 'none';
    productsContainer.style.display = 'none';
});

function displayError(message) {
    let errorElement = document.createElement('div');
    errorElement.classList.add('error-message');
    errorElement.textContent = message;

    orderForm.insertBefore(errorElement, orderDetailsForm);
}

function clearErrors() {
    let errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach((errorMessage) => {
        errorMessage.remove();
    });
}

orderDetailsForm.addEventListener('submit', function (event) {
    event.preventDefault();
    clearErrors();

    let name = document.getElementById('name').value;
    let surname = document.getElementById('surname').value;
    let city = document.getElementById('city').value;
    let shippingLocation = document.getElementById('shipping-location').value;
    let paymentType = document.getElementById('payment-type').value;
    let newQuantity = document.getElementById('quantity').value;
    let comment = document.getElementById('comment').value;

    if (!name || !surname || !city || !shippingLocation || !paymentType || !newQuantity) {
        displayError('Please fill in all required fields.');
        return;
    }

    let productName = infoName.textContent;

    purchasedProducts.forEach((order) => {
        if (order.productName === productName) {
            order.quantity = newQuantity;
            order.total = order.price * newQuantity;
        }
    });

    localStorage.setItem('purchasedProducts', JSON.stringify(purchasedProducts));

    let quantityElement = document.querySelector(`#order-${productName} .quantity`);
    if (quantityElement) {
        quantityElement.textContent = `Quantity: ${newQuantity}`;
    }

    let orderDetailsMessage = `
        Order Details:
        Product Name: ${infoName.textContent}
        Name: ${name}
        Surname: ${surname}
        City: ${city}
        Nova Poshta: ${shippingLocation}
        Payment Type: ${paymentType}
        Quantity of Products: ${newQuantity}
        Order Comments: ${comment}
    `;

    alert(orderDetailsMessage);
    orderForm.style.display = 'none';

    orderDetailsForm.reset();
});

productsContainer.style.display = 'none';
infoContainer.style.display = 'none';

let signupButton = document.getElementById('registration-btn');

signupButton.addEventListener('click', function() {
    window.location.href = 'registration.html';
});

let categoriesButton = document.getElementById('categories-btn');
let ordersContainer = document.getElementById('orders');
let orderDetailsContainer = document.getElementById('order-details');

categoriesButton.addEventListener('click', function() {
    ordersContainer.style.display = 'none';

    let categoriesElement = document.querySelector('#categories');

    if (categoriesElement) {
        categoriesElement.style.display = 'flex';
    }

    orderDetailsContainer.style.display = 'none';
});

orderBtn.addEventListener('click', () => {
    let categoriesElement = document.querySelector('#categories');

    if (categoriesElement) {
        categoriesElement.style.display = 'none';
    }

    let ordersContainer = document.getElementById('orders');
    ordersContainer.style.display = 'block';

    ordersList.innerHTML = '';

    purchasedProducts = JSON.parse(localStorage.getItem('purchasedProducts')) || [];

    purchasedProducts.forEach((order, index) => {
        let orderElement = document.createElement('div');
        orderElement.classList.add('order-block');
        orderElement.id = `order-${index}`;

        let orderDetailsContainer = document.createElement('div');
        orderDetailsContainer.classList.add('order-details-container');

        orderDetailsContainer.innerHTML = `Order ${index + 1}:<br>Product: ${order.productName}<br>Date: ${order.date}<br>Unit price: ${order.price}`;

        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('order-btn');

        deleteButton.addEventListener('click', () => {
            let indexToDelete = purchasedProducts.findIndex((orderToDelete) => orderToDelete.productName === order.productName);

            if (indexToDelete !== -1) {
                purchasedProducts.splice(indexToDelete, 1);

                localStorage.setItem('purchasedProducts', JSON.stringify(purchasedProducts));

                let orderElementToRemove = document.getElementById(`order-${index}`);
                if (orderElementToRemove) {
                    orderElementToRemove.remove();
                }
            }
        });

        orderElement.appendChild(orderDetailsContainer);
        orderElement.appendChild(deleteButton);

        let moreButton = document.createElement('button');
        moreButton.textContent = 'More';
        moreButton.classList.add('order-btn');

        moreButton.addEventListener('click', () => {
            let orderDetailsContainer = document.getElementById('order-details');
            let productInfoBlock = document.createElement('div');
            productInfoBlock.classList.add('product-info-block');

            let productNameHeading = document.createElement('h3');
            productNameHeading.textContent = order.productName;

            let quantityAndTotal = document.createElement('p');
            quantityAndTotal.innerHTML = `Quantity: ${order.quantity}<br>Total: ${order.total}`;

            let hideButton = document.createElement('button');
            hideButton.textContent = '✖';
            hideButton.classList.add('button', 'close-details');

            hideButton.addEventListener('click', () => {
                productInfoBlock.style.display = 'none';
            });

            productInfoBlock.appendChild(productNameHeading);
            productInfoBlock.appendChild(quantityAndTotal);
            productInfoBlock.appendChild(hideButton);

            orderDetailsContainer.innerHTML = '';
            orderDetailsContainer.appendChild(productInfoBlock);
            orderDetailsContainer.style.display = 'block';
        });

        orderElement.appendChild(orderDetailsContainer);
        orderElement.appendChild(deleteButton);
        orderElement.appendChild(moreButton);
        ordersList.appendChild(orderElement);
    });

    productsContainer.style.display = 'none';
    infoContainer.style.display = 'none';
});

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