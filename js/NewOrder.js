function addProduct() {
  const productsDiv = document.getElementById("products");
  const newRow = document.createElement("div");
  newRow.classList.add("product-row");

  newRow.innerHTML = `
    <input type="text" name="productCode[]" placeholder="Κωδικός" required>
    <input type="number" name="quantity[]" placeholder="Ποσότητα" required>
  `;

  productsDiv.appendChild(newRow);
}
