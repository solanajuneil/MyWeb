if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded')
}
else {
    ready()
}

function ready() {
    var removeCartItemButton = document.getElementsByClassName('btn-danger')
    for (var i = 0; i < removeCartItemButton.length; i++) {
        var button = removeCartItemButton[i];
        button.addEventListener('click', removeCartItems)
    }

    var quantityButton = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityButton.length; i++) { 
        var input = quantityButton[i]
        input.addEventListener('change', quantityChange)
    }

    var addCartButton = document.getElementsByClassName('btn-popular-picture')
    for (var i = 0; i < addCartButton.length; i++) { 
        var add = addCartButton[i]
        add.addEventListener('click', addToCart)
    }
    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}

function purchaseClicked() {
    var cartItems = document.getElementsByClassName('cart-items')[0]
    if (!cartItems.hasChildNodes()) { 
        alert('Please select items to purchase')
    }
    else {
        while (cartItems.hasChildNodes()) {
            cartItems.removeChild(cartItems.firstChild)
        }
        alert('Thank you for purchase')
    }
    updateCartTotal()
}
function addToCart(event) {
    var addButton = event.target 
    var shopItem = addButton.parentElement.parentElement
    var title = shopItem.getElementsByClassName('popular-picture-item-title')[0].innerText
    var price = shopItem.getElementsByClassName('popular-picture-price')[0].innerText
    var image = shopItem.getElementsByClassName('popular-picture-image')[0].src
    addItemToCart(title, price, image)
    updateCartTotal()
}

function addItemToCart(title, price, image) { 
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItem = document.getElementsByClassName('cart-items')[0]
    var cartItemName = cartItem.getElementsByClassName("cart-item-title")
    for (var i = 0; i < cartItemName.length; i++) { 
        if (cartItemName[i].innerText == title) {
            alert('You already added to the cart')
            return
        }
    }
    var cartRowContent = `
            <div class="cart-item cart-column">
                <img class="cart-item-image"src="${image}" width="100" height="100">
                <span class="cart-item-title">${title}</span>
            </div>
                <span class="cart-price cart-column">${price}</span>
                            
            <div class="cart-quantity cart-column">
                <input class="cart-quantity-input" type="number" value="1">
                <button class="btn btn-design btn-danger " role="button">Remove</button>
            </div>`
    cartRow.innerHTML = cartRowContent
    cartItem.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItems)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChange)

}




function quantityChange(event) { 
    var quantity = event.target
    if (isNaN(quantity.value) || quantity.value <= 0){
        quantity.value = 1
    }
    updateCartTotal()
}

function removeCartItems(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
 }

const updateCartTotal = () => {
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartRow = cartItems.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRow.length; i++) { 
        var cartRowChange = cartRow[i]
        var priceElement = cartRowChange.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRowChange.getElementsByClassName('cart-quantity-input')[0]
        
        var price = parseFloat(priceElement.innerText.replace('P', ''))
        var quantity = quantityElement.value
        console.log(price * quantity)
        total = total + price * quantity
    }
    total = Math.round(total * 100) / 100 
    document.getElementsByClassName('cart-total-price')[0].innerText = (`P${total}`)
}