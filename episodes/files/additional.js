console.log("JS loaded")
window.onload = function() {
  console.log("Running function")
  const dropdownButton = document.getElementById('dropdownMenu1');
  const ddparent = document.getElementById('instructor-dropdown');
  dropdownButton.disabled = true;
  const correctPassword = "D&DPython";  // Set your hardcoded password here
  let isPasswordCorrect = false;

  console.log("FOOOOO")
  console.log(dropdownButton)
  if (dropdownButton && dropdownButton.innerText.trim() === 'Learner View') {
    const buttons = document.querySelectorAll('.solution-button');
    buttons.forEach(button => {
      button.disabled = true;
      button.style.opacity = '0.5';
    });
  }
  ddparent.addEventListener('click', function(event) {
    if (!isPasswordCorrect) {  // Only prompt for password if not correct yet
      const password = prompt("Please enter the password:");

      if (password === correctPassword) {
        isPasswordCorrect = true;
        dropdownButton.disabled = false;
        dropdownButton.click();  // Manually trigger the click after unlocking
      } else {
        alert("Incorrect password.");
      }
    }
  });
};
