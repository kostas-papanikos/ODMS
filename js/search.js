const data = {
  "order1": `
  <ul>
    <li>Τρέχουσα Τοποθεσία: Λιμάνι Σιγκαπούρης</li>
    <li>Αναμενόμενη παράδοση: 02/06/2025</li>
    <li>Προειδοποίηση για Καθυστερήσεις: Όχι</li>
  </ul>
  <p><a href="invoices/timologio_AB12345.pdf" target="_blank" class="invoice-link">📄 Τιμολόγιο Παραγγελίας (PDF)</a></p>
    `
  };
  
  document.getElementById("search").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const code = document.getElementById("code").value.trim();
    const results = document.getElementById("results");
  
    if (data[code]) {
      results.innerHTML = data[code];
    } else {
      results.textContent = "";
      alert("Δεν βρέθηκε κωδικός παραγγελίας");
    }
  });
  
  document.getElementById("neworder").addEventListener("click", () => {
    window.location.href = "NewOrder.html";
  });
  
  document.getElementById("invoicess").addEventListener("click", () => {
    window.location.href = "invoice.html";
  });
  
  document.getElementById("editt").addEventListener("click", function (e) {
    e.preventDefault();
    window.location.href = "EditOrder.html";
  });
  