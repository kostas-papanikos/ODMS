function addProduct() {
  const productList = document.getElementById('product-list');
  const newField = document.createElement('input');
  newField.type = 'text';
  newField.placeholder = 'π.χ. Κωδικός: ABC123 - Ποσότητα: 2';
  newField.required = true;
  productList.appendChild(newField);
}
