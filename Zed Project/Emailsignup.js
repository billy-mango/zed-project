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
        alert("Please fill in all required fields."); 
        return; // Ensures that the user fills in all required fields
    }

    if (userData.password !== userData.confirmPassword) {
        alert("Passwords do not match.");
        return; // Ensures that the user enters the same password in both fields
    }

    if (userData.password.length < 8) {
        alert("Password must be at least 8 characters long.");
        return; // Ensures password length is at least 8 characters
    }

    if (!userData.checkbox) {
        alert("Please agree to the terms and conditions.");
        return; // Ensures that the user agrees to the terms and conditions
    }

    this.disabled = true; // Disables the button after the user has successfully created an account
    
    // Call the function to display the welcome message
     displayWelcomeMessage(userData.username, userData.email);
    
    // Call the function to initiate the redirect
     accountCreatedRedirect(); // Alerts user that account has been created successfully

    
});

// Function to redirect after account creation
function accountCreatedRedirect() {
    alert("Account created successfully! Redirecting to Sign In page in a few seconds.");
  
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

