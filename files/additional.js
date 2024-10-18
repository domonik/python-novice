console.log("JS loaded")

window.onload = function() {
  console.log("Running function")
  const dropdownButton = document.getElementById('dropdownMenu1');
  dropdownButton.disabled = true;

  console.log("FOOOOO")
  console.log(dropdownButton)
  if (dropdownButton && dropdownButton.innerText.trim() === 'Learner View') {
    const buttons = document.querySelectorAll('.solution-button');
    buttons.forEach(button => {
      button.disabled = true;
      button.style.opacity = '0.5';
    });
  }
};
