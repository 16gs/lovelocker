function unlockVault() {
  const passcode = document.getElementById("passcode").value;
  if (passcode === "2babies"){
    window.location.href = "vault.html";
  } else {
    error.textContent = "Oops! That’s not our code 💔";
  }
}

