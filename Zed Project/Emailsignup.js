// Collection of user data
document.getElementById('createbtn').addEventListener('click', function() { 
    const userData = { 
        firstname: document.getElementById('fname').value, 
        lastname: document.getElementById('lname').value, 
        username: document.getElementById('uname').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value, 
        password: document.getElementById('password').value, 
        confirmPassword: document.getElementById('cpassword').value,
        checkbox: document.getElementById('checkbox').checked 
    };

    console.log(userData); // Display input collected in the console

    // Error handling and validations

    if (!userData.firstname || !userData.lastname || !userData.username || !userData.email || !userData.password || !userData.confirmPassword) {
        showToast("Please fill in all required fields."); 
        return; // Ensures that the user fills in all required fields
    }

    if (userData.password !== userData.confirmPassword) {
        showToast("Passwords do not match.");
        return; // Ensures that the user enters the same password in both fields
    }

    if (userData.password.length < 8) {
        showToast("Password must be at least 8 characters long.");
        return; // Ensures password length is at least 8 characters
    }

    if (!userData.checkbox) {
        showToast("Please agree to the terms and conditions.");
        return; // Ensures that the user agrees to the terms and conditions
    }

    this.disabled = true; // Disables the button after the user has successfully created an account
    
    // Call the function to display the welcome message
     displayWelcomeMessage(userData.firstname, userData.username, userData.email);
    
    // Call the function to initiate the redirect
     accountCreatedRedirect(); // Alerts user that account has been created successfully

    
});

// Function to redirect after account creation
function accountCreatedRedirect() {
    showToast("Account created successfully! Redirecting to Sign In page in a few seconds.");
  
    setTimeout(function() {
        window.location.href = "landingpage.html";
    }, 5000); // Redirects user to landing page after 5 seconds
}


// Create a new element to display the welcome message
function displayWelcomeMessage(firstname, username, email) {
    const p = document.createElement('p');
    p.innerHTML = `Welcome ${firstname}! Your username is ${username}! Your email is ${email}.`;
    document.getElementById('userDetails').appendChild(p);
}

// Toast function to display messages

function showToast(message) {
    const toastContainer = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerText = message;

    toastContainer.appendChild(toast);

    // Automatically remove the toast after 3 seconds
    setTimeout(() => {
        toast.classList.add('fade-out');
        setTimeout(() => {
            toastContainer.removeChild(toast);
        }, 500); // Wait for the fade-out transition to complete
    }, 3000);
}

document.addEventListener('DOMContentLoaded', function() {
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('cpassword');

    function togglePasswordVisibility(input) {
        if (input.type === 'password') {
            input.type = 'text';
            input.classList.add('visible'); // Add 'visible' class
        } else {
            input.type = 'password';
            input.classList.remove('visible'); // Remove 'visible' class
        }
    }

    passwordInput.addEventListener('click', function(event) {
        // Prevent click on input to trigger toggle when clicking on the icon
        if (event.offsetX > passwordInput.clientWidth - 20) {
            togglePasswordVisibility(passwordInput);
        }
    });

    confirmPasswordInput.addEventListener('click', function(event) {
        // Prevent click on input to trigger toggle when clicking on the icon
        if (event.offsetX > confirmPasswordInput.clientWidth - 20) {
            togglePasswordVisibility(confirmPasswordInput);
        }
    });
});
