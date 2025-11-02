function unlockVault() {
  const passcode = document.getElementById("passcode").value;
  const error = document.getElementById("error");

  if (passcode === "2babies")
    window.location.href = "vault.html";
  } else {
    error.textContent = "Oops! That’s not our code 💔";
  }
}
