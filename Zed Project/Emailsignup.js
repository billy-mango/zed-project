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

    //Error handling

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
        return; //  Ensures password length is at least 8 characters
    }

    if (!document.getElementById('checkbox').checked) {
        alert("Please agree to the terms and conditions.");
        return;
    }


    // Disables the button after the user has successfully created an account
    this.disabled = true;

    console.log(userData); //Display input collected in the console

    setTimeout(function() {
        window.location.href = "landingpage.html";
    }, 5000); // Redirects user to landing page after 5 seconds

    alert("Account created successfully!Redirecting to Sign In page in a few"); // Alerts user that account has been created successfully
});

//Create a new element

const p = document.createElement('p');
document.getElementById('userDetails').appendChild(p);

//Display function on the div created

document.getElementById('createbtn').addEventListener('click', function() {
    p.innerHTML = `Welcome ${document.getElementById('uname').value}!`;
});
