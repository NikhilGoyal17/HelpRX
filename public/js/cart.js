const cartItems = [
    {
        name: "Paracetamol",
        image: "./img/donor.jpg",
        description: "Effective in fever and beneficial in pain relief.",
        price: 12.99,
        quantity: 1
    },
    {
        name: "Ibuprofen",
        image: "./img/donor.jpg",
        description: "Helps reduce pain and inflammation.",
        price: 10.49,
        quantity: 2
    },
    {
        name: "Amoxicillin",
        image: "./img/donor.jpg",
        description: "Used to treat bacterial infections.",
        price: 8.99,
        quantity: 1
    }
];

// Function to render cart items
function renderCartItems() {
    const cartContainer = document.getElementById("cartItems");
    cartContainer.innerHTML = "";
    let total = 0;

    // If cart is empty, display a message and Shop Now button
    if (cartItems.length === 0) {
        document.getElementById("cartTotal").textContent = 0.00;
        cartContainer.innerHTML = `
            <div class="text-center">
                <h3>Your cart is empty.</h3>
                <p>Start shopping now!</p>
                <a href="./card.html" class="btn btn-primary">Shop Now</a>
            </div>
        `;
    } else {
        // Render cart items if not empty
        cartItems.forEach((item, index) => {
            total += item.price * item.quantity;
            
            const cartItem = document.createElement("div");
            cartItem.classList.add("cart-item");

            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-details">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-description">${item.description}</div>
                    <div class="quantity-control">
                        <button class="btn btn-outline-primary btn-sm" onclick="updateQuantity(${index}, -1)">-</button>
                        <input type="text" value="${item.quantity}" readonly>
                        <button class="btn btn-outline-primary btn-sm" onclick="updateQuantity(${index}, 1)">+</button>
                        <span class="cart-item-remove" onclick="removeItem(${index})"><i class="fas fa-trash"></i></span>
                    </div>
                </div>
                <div class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</div>
            `;

            cartContainer.appendChild(cartItem);
        });

        document.getElementById("cartTotal").textContent = total.toFixed(2);
    }
}

// Function to update the quantity of items
function updateQuantity(index, change) {
    if (cartItems[index].quantity + change > 0) {
        cartItems[index].quantity += change;
        renderCartItems();
    }
}

// Function to remove an item from the cart
function removeItem(index) {
    cartItems.splice(index, 1); // Remove item from the array
    renderCartItems(); // Re-render the cart
}

// Initial render
renderCartItems();
