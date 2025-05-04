function addProduct() {
  const productList = document.getElementById('product-list');
  const newField = document.createElement('input');
  newField.type = 'text';
  newField.placeholder = 'π.χ. Κωδικός: ABC123 - Ποσότητα: 2';
  newField.required = true;
  productList.appendChild(newField);
}

document.getElementById("edit-order").addEventListener("click", function (e) {
  e.preventDefault();
  window.location.href = "edit-order.html";
});

document.getElementById("invoices").addEventListener("click", () => {
  window.location.href = "invoices.html";
});

document.getElementById("search-order").addEventListener("click", function (e) {
  e.preventDefault();
  window.location.href = "search-order.html";
});

document.getElementById("newarrivals").addEventListener("click", () => {
  window.location.href = "newarrivals.html";
});
