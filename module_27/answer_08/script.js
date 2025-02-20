const inventory = [];

function createList() {
    const shoppingList = document.querySelector('.shopping-list');
    const getItem = document.querySelector('#item');

    shoppingList.innerHTML = '';

    const ShoppingItems = document.createElement('ul');
    ShoppingItems.classList.add('item-list'); 

    inventory.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = item;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';

        deleteButton.addEventListener('click', () => {
            inventory.splice(index, 1);
            createList();
        });

        listItem.appendChild(deleteButton);
        ShoppingItems.appendChild(listItem);
    });

    shoppingList.appendChild(ShoppingItems);

    getItem.value = '';
}

document.querySelector('#addBtn').addEventListener('click', () => {
    const getItem = document.querySelector('#item');
    if (getItem.value.trim() !== '') { 
        inventory.push(getItem.value.trim()); 
        createList();
    }
});