let btnSubmit = document.querySelector("[ btn-submit]")
let fnameField = document.querySelector("[name=fname]")
let lnameField = document.querySelector("[name=lname]")
let emailField = document.querySelector("[name=fEmail]")
let phoneField = document.querySelector("[name=phone]")
let psswrField = document.querySelector("[name=passw]")
let psswrConfField = document.querySelector("[name=passwConf]");

let errorMsg = document.querySelector(".error-msg");
let errorMsg2 = document.querySelector(".error-msg2")
let errorMsg3 = document.querySelector(".error-msg3")
let errorMsg4 = document.querySelector(".error-msg4")
let errorMsg5 = document.querySelector(".error-msg5")
let errorMsg6 = document.querySelector(".error-msg6")




let inputs = document.querySelectorAll("[data-form]")

document.forms[0].onsubmit = function(e){
    
    let errorFirstName = [];
    let errorLastName = [];
    let errorEmail = [];
    let errorPhone = [];
    let errorPassw = [];
    let errorConfPassw = [];

    if(fnameField.value == ""){
        errorFirstName.push("this field can't be empty");

        //add error to the page
        addErrorsToPage(errorFirstName);

        fnameField.classList.add("err");
    }
    if(lnameField.value == ""){

        errorLastName.push("this field can't be empty");

        //add errors to the page
        addErrorsToPage2(errorLastName);

        lnameField.classList.add("err");

    }
    if(emailField.value == ""){
        errorEmail.push("this field can't be empty");

        addErrorsToPage3(errorEmail)

        emailField.classList.add("err");
    }
    if(phoneField.value == ""){
        errorPhone.push("this field can't be empty");

        addErrorsToPage4(errorPhone);

        phoneField.classList.add("err");
    }
    if(psswrField.value == ""){
        errorPassw.push("this field can't be empty");

        addErrorsToPage5(errorPassw)

        psswrField.classList.add("err");
    }else if(psswrField.value !== "" && psswrField.value.length < 8){
        errorPassw.push("must be 8 characters");


        addErrorsToPage5(errorPassw);

        psswrField.classList.add("err");
    }
    if(psswrConfField.value == ""){

        errorConfPassw.push("this field can't be empty");

        addErrorsToPage6(errorConfPassw);

        psswrConfField.classList.add("err");

    }else if(psswrConfField.value !== "" && psswrConfField.value !== psswrField.value){
        errorConfPassw.push("is not the same as the previous");

        addErrorsToPage6(errorConfPassw);

        psswrField.classList.add("err");
    }
    

    if(errorFirstName.length > 0 || errorLastName.length > 0){
        e.preventDefault();
    }
    if(errorEmail.length > 0 || errorPhone.length > 0){
        e.preventDefault();
    }
    if(errorPassw.length > 0 || errorConfPassw.length > 0){
        e.preventDefault();
    }
    
}







function addErrorsToPage(errorFirstName){
    errorMsg.innerHTML = "";

    errorFirstName.forEach(element => {
        errorMsg.innerHTML = element;
    });

    
}
function addErrorsToPage2(errorLastName){
    errorMsg2.innerHTML = "";

    errorLastName.forEach(element => {
        errorMsg2.innerHTML = element;
    });
}
function addErrorsToPage3(errorEmail){
    errorMsg3.innerHTML = "";

    errorEmail.forEach(element => {
        errorMsg3.innerHTML = element;
    });
}
function addErrorsToPage4(errorPhone){
    errorMsg4.innerHTML = "";

    errorPhone.forEach(element => {
        errorMsg4.innerHTML = element;
    });

    
}
function addErrorsToPage5(errorPassw){
    errorMsg5.innerHTML = "";

    errorPassw.forEach(element => {
        errorMsg5.innerHTML = element;
    });
}
function addErrorsToPage6(errorConfPassw){
    errorMsg6.innerHTML = "";

    errorConfPassw.forEach(element => {
        errorMsg6.innerHTML = element;
    });
}

