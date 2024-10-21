console.log("JS loaded")

function createPasswordPopup() {
    // Create the button to show the password input field
    const showPasswordBtn = document.createElement('button');
    showPasswordBtn.id = 'show-password-btn';
    showPasswordBtn.innerText = 'Click to Enter Password';

    // Create the overlay div (dark background behind the pop-up)
    const overlay = document.createElement('div');
    overlay.id = 'overlay';
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; // Semi-transparent black background
    overlay.style.display = 'none'; // Initially hidden
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';
    overlay.style.zIndex = '1000'; // Make sure the overlay is on top
    overlay.addEventListener("click", function (event){
        if (overlay.style.display === "flex") {
            overlay.style.display = "none"
        }
    })

    // Create the div to hold the password input and submit button (the pop-up window)
    const passwordDiv = document.createElement('div');
    passwordDiv.id = 'password-div';
    passwordDiv.style.backgroundColor = 'white';
    passwordDiv.style.padding = '20px';
    passwordDiv.style.borderRadius = '8px';
    passwordDiv.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    passwordDiv.style.textAlign = 'center';
    passwordDiv.style.minWidth = '300px'; // Set minimum width for the popup
    passwordDiv.style.pointerEvents = "auto";
    passwordDiv.style.zIndex = '1001';

    passwordDiv.addEventListener('click', function (event) {
        event.stopPropagation(); // Prevent the click from reaching the overlay
    });

    // Create the password input field
    const passwordInput = document.createElement('input');
    passwordInput.type = 'password';
    passwordInput.id = 'password';
    passwordInput.placeholder = 'Enter Password';
    passwordInput.style.marginBottom = '10px'; // Spacing below input field

    // Create the submit button
    const submitPasswordBtn = document.createElement('button');
    submitPasswordBtn.id = 'submit-password-btn';
    submitPasswordBtn.innerText = 'Submit';
    submitPasswordBtn.style.marginLeft = '10px';

    // Create the error message (initially hidden)
    const errorMessage = document.createElement('p');
    errorMessage.id = 'error-message';
    errorMessage.style.color = 'red';
    errorMessage.style.display = 'none'; // Initially hidden
    errorMessage.innerText = 'Incorrect password!';

    // Append the password input and submit button to the passwordDiv
    passwordDiv.appendChild(passwordInput);
    passwordDiv.appendChild(submitPasswordBtn);
    passwordDiv.appendChild(errorMessage);

    // Append the passwordDiv to the overlay
    overlay.appendChild(passwordDiv);

    // Append the showPasswordBtn and overlay to the body
    document.body.appendChild(showPasswordBtn);
    document.body.appendChild(overlay);
}

window.onload = function() {
  console.log("Running function")
  const dropdownButton = document.getElementById('dropdownMenu1');
  const dropdownButton2 = document.getElementById('instructor');
  const ddparent = document.getElementById('instructor-dropdown');
  const dd2parent = dropdownButton2.parentNode.parentNode.parentNode.parentNode.parentNode
  dropdownButton.disabled = true;
  dropdownButton2.disabled = true;
  dropdownButton2.style.pointerEvents = "none";
  const correctPassword = "D&DPython";  // Set your hardcoded password here
  let isPasswordCorrect = false;
  createPasswordPopup()
  console.log("FOOOOO")
  console.log(dropdownButton)
  console.log(ddparent)
  if (dropdownButton && dropdownButton.innerText.trim() === 'Learner View') {
    const buttons = document.querySelectorAll('.solution-button');
    buttons.forEach(button => {
      button.disabled = true;
      button.style.opacity = '0.5';
    });
  }

  const askPW = function (event) {
    if (!isPasswordCorrect) {
      console.log("asking for PW")// Only prompt for password if not correct yet
      //const password = prompt("Please enter the password:");
      overlay.style.display = 'flex';
    }
  }
  const passwordInput = document.getElementById('password')

  const pwSubmit = function () {
      const password = passwordInput.value;
      if (password === correctPassword) {
          isPasswordCorrect = true;
          dropdownButton.disabled = false;
          dropdownButton2.style.pointerEvents = "auto";
          dropdownButton2.disabled = false
          overlay.style.display = 'none';
      } else {
          alert("Incorrect password.");
      }

  }
  const submitPasswordBtn = document.getElementById('submit-password-btn')
  submitPasswordBtn.addEventListener('click', pwSubmit);
  dd2parent.style.pointerEvents = "auto"
  console.log(dd2parent)
  ddparent.addEventListener('click', askPW);
  dd2parent.addEventListener('click', askPW);
  dropdownButton2.addEventListener('click', askPW);

};
