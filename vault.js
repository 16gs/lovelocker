function saveMemory() {
  const memory = document.getElementById("memoryInput").value;
  const vibe = document.getElementById("vibeTag").value;

  if (memory.trim() === "") return;

  const entry = { memory, vibe };
  let vault = JSON.parse(localStorage.getItem("loveVault")) || [];
  vault.push(entry);
  localStorage.setItem("loveVault", JSON.stringify(vault));
  displayVault();
  document.getElementById("memoryInput").value = "";
}

function displayVault() {
  const vault = JSON.parse(localStorage.getItem("loveVault")) || [];
  const container = document.getElementById("memoryVault");
  container.innerHTML = "";

  vault.forEach(entry => {
    const div = document.createElement("div");
    div.className = "memory-entry";
    div.innerHTML = <strong>${entry.vibe}</strong><br>${entry.memory};
    container.appendChild(div);
  });
}

window.onload = displayVault;