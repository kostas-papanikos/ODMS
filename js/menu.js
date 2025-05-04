 
  document.getElementById("new-order").addEventListener("click", () => {
    window.location.href = "new-order.html";
  });

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
  