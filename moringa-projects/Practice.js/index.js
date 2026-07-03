// Product Inventory Management System

// Array to store products
let inventory = [];

// Function to add a product
function addProduct(name, quantity, price) {
    let product = {
        name: name,
        quantity: quantity,
        price: price
    };
    inventory.push(product);
    console.log(`${name} added successfully!`);
}

// Function to update product quantity
function updateQuantity(name, newQuantity) {
    let product = inventory.find(p => p.name === name);
    if (product) {
        product.quantity = newQuantity;
        console.log(`${name} quantity updated to ${newQuantity}`);
    } else {
        console.log(`${name} not found in inventory.`);
    }
}

// Function to delete a product
function deleteProduct(name) {
    let index = inventory.findIndex(p => p.name === name);
    if (index !== -1) {
        inventory.splice(index, 1);
        console.log(`${name} removed from inventory.`);
    } else {
        console.log(`${name} not found.`);
    }
}

// Function to view all products
function viewInventory() {
    console.log("Current Inventory:");
    inventory.forEach(p => {
        console.log(`${p.name} - Qty: ${p.quantity}, Price: $${p.price}`);
    });
}

// Function to search for a product
function searchProduct(name) {
    let product = inventory.find(p => p.name === name);
    if (product) {
        console.log(`Found: ${product.name}, Qty: ${product.quantity}, Price: $${product.price}`);
    } else {
        console.log(`${name} not found.`);
    }
}

// Example usage
addProduct("Laptop", 10, 800);
addProduct("Phone", 25, 500);
viewInventory();

updateQuantity("Laptop", 15);
searchProduct("Phone");

deleteProduct("Laptop");
viewInventory();
