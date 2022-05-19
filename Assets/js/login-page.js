const inputName = document.getElementById("name");
const inputEmail = document.getElementById("email");
const inputPassword = document.getElementById("password");
const logIn = document.getElementById("log-in");
const signUp = document.getElementById("sign-up");
const accountData = document.getElementById("list");
const verifyName = document.getElementById("verify-name");
const verifyEmail = document.getElementById("verify-email");
const verifyPassword = document.getElementById("verify-password");


let accountArray = [];

logIn.addEventListener("click", function () {
    if(inputName.value.length<=5){
        verifyName.textContent = "Invalid Name*";
        verifyName.style.color = "red"
    }
    else{
        verifyName.textContent = "Valid Name";
        verifyName.style.color = "green"
    }


    if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(inputEmail.value)){
        verifyEmail.textContent = "valid Email";
        verifyEmail.style.color = "green";
    }
    else{
        verifyEmail.textContent = "this is required*";
        verifyEmail.style.color = "red";
    }

    if(inputPassword.value.length<=8){
        verifyPassword.textContent = "Too Short*";
        verifyPassword.style.color = "red"
    }
    else{
        verifyPassword.textContent = "Valid Password";
        verifyPassword.style.color = "green"
        location.href = "index.html";
    }
    
    // accountData.innerText = inputName.value;
    // accountArray.push("inputName.value");


});



console.log(accountArray);
