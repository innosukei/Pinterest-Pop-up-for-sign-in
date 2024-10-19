document.querySelector(".toggle-password").addEventListener("click", function() {
  
    // Toggle the class on the element (assuming it's an icon like font-awesome eye/eye-slash)
    this.classList.toggle("fa-eye");
    this.classList.toggle("fa-eye-slash");
  
    // Get the input element associated with the toggle (using the 'toggle' attribute)
    var input = document.querySelector(this.getAttribute("toggle"));
    
    // Toggle the input type between 'password' and 'text'
    if (input.getAttribute("type") === "password") {
      input.setAttribute("type", "text");
    } else {
      input.setAttribute("type", "password");
    }
  });