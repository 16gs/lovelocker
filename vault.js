function saveMemory() {
  const memory = document.getElementById("memoryInput").value;
  const output = document.getElementById("savedMemory");

  if (memory.trim() !== "") {
    output.textContent = 💖 Saved: ${memory};
    output.style.color = "hotpink";
  } else {
    alert("Please enter a memory before saving 💭");
  }
}
