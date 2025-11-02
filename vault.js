function saveMemory() {
  const memoryInput = document.getElementById('memoryInput');
  const savedMemoryDisplay = document.getElementById('savedMemory');
  if (memoryInput.value.trim() !== '') {
    savedMemoryDisplay.textContent = 'Memory saved: ' + memoryInput.value;
    memoryInput.value = '';
  } else {
    savedMemoryDisplay.textContent = 'Please enter a memory to save.';
    console.log("Memory saved!");
  }
 document.getElementById("uploadForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const fileInput = document.getElementById("selfieInput");
  const status = document.getElementById("uploadStatus");

  if (fileInput.files.length === 0) {
    status.textContent = "Please select a selfie to upload 💭";
    status.style.color = "red";
    return;
  }

  const file = fileInput.files[0];
  const reader = new FileReader();

  reader.onload = function() {
    localStorage.setItem("uploadedSelfie", reader.result);
    status.textContent = "Selfie uploaded securely 💘";
    status.style.color = "hotpink";
  };

  reader.readAsDataURL(file);
});
}




