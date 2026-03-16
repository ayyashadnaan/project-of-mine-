const eyeicon = document.querySelector(".togglepass");
const password = document.getElementById("password");



eyeicon.onclick = function () {
    if (password.type === "password") {
        password.type = "text";

        eyeicon.classList.replace("fa-eye-slash", "fa-eye"); // icon change
    } else {
        password.type = "password";

        eyeicon.classList.replace("fa-eye", "fa-eye-slash");
    }
}


//form validation codes


document.querySelector(".btn").addEventListener("click", (e) => {
    e.preventDefault();

 let isvalid=true;
 ///for errors
document.querySelectorAll(".error-message").forEach(el=>el.textContent="")
    //values 
const username = document.getElementById("username").value.trim();
const email = document.getElementById("email").value.trim();
const phnum = document.getElementById("phone").value.trim();
const password1 = document.getElementById("password").value.trim();
const password2 = document.getElementById("confirm-password").value.trim();
//RegEx codes

const usernameRegex = /^[A-Za-z0-9 ]{3,20}$/;
const emailRegex = /^[A-Za-z0-9]+(?:[.%_+][A-Za-z0-9]+)*@[A-Za-z0-9]+\.[A-Za-z]{2,}$/;
const phoneRegex = /^[6-9][\d]{9}$/;
const password1Regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])(?=.*[\W_]).{8,}$/;
const password2Regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])(?=.*[\W_]).{8,}$/;




 // 1. Username Validation
    if(!usernameRegex.test(username)){
        document.getElementById('username-error').textContent = "Username must be 3-20 chars (alphanumeric).";
        isvalid = false;
    }

    //Email validation
    if(!emailRegex.test(email)){
        document.getElementById("email-error").textContent="please enter a valid mail.";
        isvalid=false;
        isvalid=false;
    }

    //phone validation
    if(!phoneRegex.test(phnum)){
        document.getElementById("phone-error").textContent="Enter a valid number.";
        isvalid=false;
    }

    //pass-validation
    if(!password1Regex.test(password1)){
        document.getElementById("password-error").textContent="Enter a valid password.";
        isvalid=false;

    }
    if(password1===""){
        document.getElementById("confirm-password-error").textContent="Confirm password"
        isvalid=false;
    }
    else if (password1!==password2){
        document.getElementById("confirm-password-error").textContent="Passwod not matching"
        isvalid=false;

    }

    if(isvalid){
        alert("Registration Succesfull")
        document.querySelector(".registration-form").reset();
    }
});

