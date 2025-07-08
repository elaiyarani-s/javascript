function validateForm(event) {
    event.preventDefault();
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (firstName === "" || lastName === "" || email === "" || password === "") {
        alert("All fields are required!");
        return false;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email.match(emailPattern)) {
        alert("Please enter a valid email address.");
        return false;
    }

    const pwdPattern  = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,16}$/;
    if (password.length < 6 || password.length > 16 ) {
        alert("Password must be at least 6 characters and maximum 16 characters.");
        return false;
    }
    if(!pwdPattern.test(password)) {
        alert("password should contain atleast Uppercase letter, one lowercase letter, one number and one special character");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}
