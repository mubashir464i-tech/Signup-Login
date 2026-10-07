function signup() {

    let username = document.getElementById("username").value
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let age = document.getElementById("age").value;
    let dob = document.getElementById("dob").value;

    if (
        username == "" ||
        email == "" ||
        password == "" ||
        age == "" ||
        dob == ""
    ) {
        alert("Please fill all fields");
        return;
    }

    let user = {
        username: username,
        email: email,
        password: password,
        age: age,
        dob: dob
    };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Signup Successful");

    window.location.href = "login.html";
}


function login() {

    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    let user = JSON.parse(localStorage.getItem("user"));

    if (user == null) {
        alert("Please Signup First");
        return;
    }

    if (email == user.email && password == user.password) {

        localStorage.setItem("loginUser", JSON.stringify(user));

        alert("Login Successful");

        window.location.href = "welcome.html";

    } else {

        alert("Invalid Email or Password");

    }
}


let loginUser = JSON.parse(localStorage.getItem("loginUser"));

let userData = document.getElementById("userData");

if (loginUser && userData) {

    userData.innerHTML = `
        <p>Username: ${loginUser.username}</p>
        <p>Email: ${loginUser.email}</p>
        <p>Password: ${loginUser.password}</p>
        <p>Age: ${loginUser.age}</p>
        <p>Date of Birth: ${loginUser.dob}</p>
    `;
}


function logout() {

    localStorage.removeItem("loginUser");

    alert("Logout Successful");

    window.location.href = "login.html";
}