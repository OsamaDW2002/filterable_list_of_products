import products from './products.js';  // Import the products array

function createCard(name, category, price) {
    const card = document.createElement('div');
    card.className = 'card';

    const nameDiv = document.createElement('div');
    nameDiv.className = 'name';
    nameDiv.textContent = name;

    const footerCardDiv = document.createElement('div');


    const priceSpan = document.createElement('span');
    priceSpan.textContent = `Price: ${price}$`;

    const categorySpan = document.createElement('span');

    const categoryDiv = document.createElement('div');
    categoryDiv.textContent = category;

    footerCardDiv.appendChild(priceSpan);
    categorySpan.appendChild(categoryDiv)
    footerCardDiv.appendChild(categorySpan);
    card.appendChild(nameDiv);
    card.appendChild(footerCardDiv);

    return card;
}

function displayCards(filteredProducts) {
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = '';  // Clear the existing cards

    filteredProducts.forEach(product => {
        const card = createCard(product.name, product.category, product.price);
        cardContainer.appendChild(card);
    });
}

function filterProducts(category) {
    if (category === 'All') {
        return products;
    } else {
        return products.filter(product => product.category === category);  // Filter by category
    }
}

function setupFilterButtons() {
    const buttons = document.querySelectorAll('ul button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            buttons.forEach(btn => btn.classList.remove('active'));
            button.className='active';
            const category = button.textContent;
            const filteredProducts = filterProducts(category);
            displayCards(filteredProducts);
        });
    });
}

displayCards(products);

setupFilterButtons();
