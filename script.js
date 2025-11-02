function checkPassword() {
  const input = document.getElementById("password").value;
  const error = document.getElementById("error");

  if (input === "zamzam") {
    window.location.href = "vault.html";
  } else {
    error.textContent = "Incorrect password. Try again 💔";
    error.style.color = "red";
  }
}




