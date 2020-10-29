

const formSubmit = document.querySelector('form');
formSubmit.addEventListener('submit', function(e) {
    e.preventDefault();
    const qtyInput = formSubmit.elements.qty;
    const productInput = formSubmit.elements.product;
    const li = document.createElement('li');
    li.append(`${productInput.value}: ${qtyInput.value}`);
    const ul = document.querySelector('#list');
    ul.appendChild(li);
    qtyInput.value = ' ';
    productInput.value = ' ';
});



