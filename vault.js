function saveMemory() {
  const memoryInput = document.getElementById('memoryInput');
  const savedMemoryDisplay = document.getElementById('savedMemory');
  if (memoryInput.value.trim() !== '') {
    savedMemoryDisplay.textContent = 'Memory saved: ' + memoryInput.value;
    memoryInput.value = ''; // Clear the input after saving
  } else {
    savedMemoryDisplay.textContent = 'Please enter a memory to save.';
  }
}


