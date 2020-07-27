
function handleProductChange(product, isAdd) {
    const productNumber = document.getElementById(product + '-count');
    const productCount = parseInt(productNumber.value);

    let productNewCount = productCount;
    if (isAdd == true) {
        productNewCount = productCount + 1;  
    }
    if (isAdd == false && productCount > 0) {
        productNewCount = productCount - 1;
    }

    productNumber.value = productNewCount;

    let productNewPrice = 0;
    if (product == 'phone') {
        productNewPrice = productNewCount * 749;
    }
    if (product == 'case') {
        productNewPrice = productNewCount * 39;
    }

    const productPrice = document.getElementById(product + '-price');
    productPrice.innerText = productNewPrice;
}

