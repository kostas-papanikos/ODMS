const data = {
  "6986986986": `
    <b> Παραγγελία Εργοστασίου:  Ε1001 </b>
  <ul>
    <li>Τρέχουσα Τοποθεσία: <b>Λιμάνι Σιγκαπούρης</b></li>
    <li>Αναμενόμενη παράδοση: <b>02/06/2025</b></li>
    <li>Προειδοποίηση για Καθυστερήσεις: <b>Όχι</b></li>
    <li>Tελευταία ενημέρωση: 2 μέρες πριν </li>
  </ul>
  <p><a href="invoices/timologio_AB12345.pdf" target="_blank" class="invoice-link">📄 Τιμολόγιο Παραγγελίας (PDF)</a></p>
  
   <b> Παραγγελία Εργοστασίου:  Ε1002 </b>
  <ul>
    <li>Τρέχουσα Τοποθεσία: <b>Λιμάνι Πειραια</b></li>
    <li>Αναμενόμενη παράδοση: <b>15/05/2025</b></li>
    <li>Προειδοποίηση για Καθυστερήσεις: <b>Όχι</b></li>
    <li>Tελευταία ενημέρωση: Σήμερα </li>
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
  
  document.getElementById("new-order").addEventListener("click", () => {
    window.location.href = "new-order.html";
  });
  
  document.getElementById("invoices").addEventListener("click", () => {
    window.location.href = "invoices.html";
  });
  
  document.getElementById("edit-order").addEventListener("click", function (e) {
    e.preventDefault();
    window.location.href = "edit-order.html";
  });

  document.getElementById("newarrivals").addEventListener("click", () => {
    window.location.href = "newarrivals.html";
  });
