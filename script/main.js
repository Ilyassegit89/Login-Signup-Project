


class UI{
    constructor(){
        
        this.fnameField = document.querySelector("[name=fname]");
        this.lnameField = document.querySelector("[name=lname]");
        this.emailField = document.querySelector("[name=fEmail]");
        this.phoneField = document.querySelector("[name=phone]");
        this.psswrField = document.querySelector("[name=passw]");
        this.psswrConfField = document.querySelector("[name=passwConf]");
        this.errorMsg = document.querySelector(".error-msg");
        this.errosValue = [];
        
    }

    conditionInputs(e){
        
    const firstName = this.fnameField.value;
    const lastName = this.lnameField.value;
    const emailfield = this.emailField.value;
    const phonefield = this.phoneField.value;
    const passwField = this.psswrField.value;
    const passwrconffield = this.psswrConfField.value;

    let fnameValid = false;
    let lnameValid = false;
    let emalValid = false;
    let phnValid = false;
    let psswValid = false;
    let confpsValid = false;

    //----firstname Field
    if(firstName === ''){
        this.emptyFieldError(this.fnameField);
    }else{
        this.removeError(this.fnameField);
        fnameValid = true;
    }
    //----lastname Field
    if( lastName === ''){
        this.emptyFieldError(this.lnameField);

    }else{
        this.removeError(this.lnameField);
        lnameValid = true;
    }
    //----email Field

     if( emailfield === ''){
        this.emptyFieldError(this.emailField);

    }else if(emailfield !== ""){
        let regph = /\w+@\w+.(com|net)/g;
        let validationResult = regph.test(emailfield);
        if(validationResult === false){
            let messageofField = "must be email@gmail.com..";
            this.errosValue.push(messageofField);
            this.notEmptyFieldError(this.emailField, messageofField);
        }else{
            this.removeError(this.emailField);
            emalValid = true;
        }
    }
    
    //----phone Field

    if( phonefield === ''){
        this.emptyFieldError(this.phoneField);

    }
    else if(phonefield !== "" ){
        let regph = /\d{10}/g;
        let validationResult = regph.test(phonefield);
        if(validationResult === false){
            let messageogField = "must be phone number";
            this.errosValue.push(messageogField);
            this.notEmptyFieldError(this.phoneField, messageogField)
    }else{
        this.removeError(this.phoneField);
        phnValid = true;
    }

}
    //----passwrd Field

    if( passwField === ''){
        
        this.emptyFieldError(this.psswrField);

    }
    else if(passwField.length < 8){

        let messageogField = "must be 8 character";

        this.errosValue.push(messageogField);

        this.notEmptyFieldError(this.psswrField, messageogField)

    }else{
        this.removeError(this.psswrField);
        psswValid = true;
    }
    //----passwrdConf Field

    if( passwrconffield === ''){
        this.emptyFieldError(this.psswrConfField);
    }else if(passwrconffield.length < 8){

        let messageogField = "must be 8 character";

        this.errosValue.push(messageogField);

        this.notEmptyFieldError(this.psswrConfField, messageogField)

    }else if(passwField !== passwrconffield){

        let messageofField = "must be the same";

        this.errosValue.push(messageofField);

        this.notEmptyFieldError(this.psswrConfField, messageofField)

    }
    else{
        this.removeError(this.psswrConfField);
        confpsValid = true;
    }

    if(fnameValid === false || lnameValid === false){
        e.preventDefault();
    }
    if(emalValid === false || phnValid === false){
        e.preventDefault();
    }
    if(psswValid === false || confpsValid === false){
        e.preventDefault();
    }
    }

    //Emptyy fieldError function

    emptyFieldError(element){
    this.errosValue.push("can't be empty");
        let mySet = new Set(this.errosValue);
        let err = Array.from(mySet)

        let filterError = err.filter(function(ele){
            return ele.includes("can't be empty")
        })

        this.adderror(element,filterError)
    }

    //addError function
    adderror(element,error){
    const inputControl = element.parentElement.parentElement;
    let er = inputControl.querySelector(".error-msg");

    //add error to Page
    er.innerHTML =  error;

    //add redborder to input
    element.classList.add("err");
}

    //not Empty fieldError function
    notEmptyFieldError(element, message){

    let mySet = new Set(this.errosValue);
    let err = Array.from(mySet);

    let filterError = err.filter(function(ele){
        return ele.includes(message)
    });
    this.adderror(element,filterError)
}

    //removeError function

    removeError(element){
    const inputControl = element.parentElement.parentElement;
    let er = inputControl.querySelector(".error-msg");

    er.innerHTML = "";
    //add greenborder to input
    element.classList.add("gren");
    

}
    

}



function eventListener(){
        document.getElementById("form").addEventListener("submit", function(e){

            
            validateInputs(e);

        })
    }

const validateInputs = (e) => {

    let ui = new UI();
    ui.conditionInputs(e);
    
}








document.addEventListener("DOMContentLoaded", function(){
    eventListener();

})
