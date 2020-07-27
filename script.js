// Input Getting Function

function getInputValue(product) {
    const productInput = document.getElementById(product + '-count');
    const productCount = parseInt(productInput.value);
    return productCount;
}

// Product Increase And Decrease

function handleProductChange(product, isAdd) {
    const productCount = getInputValue(product);

    let productNewCount = productCount;
    if (isAdd == true) {
        productNewCount = productCount + 1;  
    }
    if (isAdd == false && productCount > 0) {
        productNewCount = productCount - 1;
    }
    document.getElementById(product + '-count').value = productNewCount;

    let productNewPrice = 0;
    if (product == 'phone') {
        productNewPrice = productNewCount * 749;
    }
    if (product == 'case') {
        productNewPrice = productNewCount * 39;
    }

    const productPrice = document.getElementById(product + '-price');
    productPrice.innerText = productNewPrice;
    calculateTotal();
}

// Total Calculation Function

function calculateTotal() {
    const phoneCount = getInputValue('phone');
    const caseCount = getInputValue('case');

    const totalPrice = phoneCount * 749 + caseCount * 39;
    document.getElementById('total-price').innerText = totalPrice;

    const totalTax = (totalPrice * 0.05).toFixed(0);
    document.getElementById('total-tax').innerText = totalTax;

    const grandPrice = totalTax + totalPrice;
    console.log(grandPrice);
    document.getElementById('grand-price').innerText = grandPrice;
}

// Remove product

const removeBtn = document.getElementById('phone-remove');
removeBtn.addEventListener("click", function (event) {
    const removeArea = document.getElementById('phone');
    removeArea.style.display = "none";
})
