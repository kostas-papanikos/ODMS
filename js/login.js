document.getElementById("loginform").addEventListener("submit", function(event) {
    event.preventDefault(); 
  
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    if (username === "test" && password === "123456") {
      window.location.href = "menu.html"; 
    } else {
      alert("Λάθος όνομα χρήστη ή κωδικός πρόσβασης!");
    }
  });
  