function checkPassword() {
  const input = document.getElementById("password").value;
  if (input === "zamzam") {
    window.location.href = "vault.html";
  } else {
    alert("Oops! That’s not our code 💔");
  }
}


