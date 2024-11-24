// Selecting elements from the DOM
const form = document.querySelector('form');
const us = document.querySelector('.username');
const em = document.querySelector('.email');
const pass = document.querySelector('.passw');
const Cpass = document.querySelector('.Cpass');

// Adding event listener for form submission
form.addEventListener('submit', (e) => {
    e.preventDefault(); //This prevent page reload on form submission
    validateForm(); 
});

const validateForm = ()=>{
    const usernameValue = us.value.trim();
    const emailValue = em.value.trim();
    const passwordValue = pass.value.trim();
    const confirmPasswordValue = Cpass.value.trim();

    if (usernameValue === '') {
        throwError(us,'Enter the user Name')
    }else if(usernameValue.length <3 || usernameValue.length >6){
        throwError(us,'UserName should be between 3-6 Character')
    }
     else {
        getSuccess(us)        
    }
    
    if (emailValue === '') {
        throwError(em,'Enter the Email ID')
    }else if(!isValidEmail(emailValue)){
        throwError(em, 'Enter a valid email address');
    }
     else {
        getSuccess(em)        
    }
    if (passwordValue === '') {
        throwError(pass,'Enter the Password')
    }else if (passwordValue.length <8) {
        throwError(pass,'Password Must contain at least 8 characters')        
    }
     else {
        getSuccess(pass)        
    }

    if (confirmPasswordValue ==='') {
        throwError(Cpass,'Configure your password')
    }else if(confirmPasswordValue != passwordValue){
        throwError(Cpass,"It doesn't match your previous password you entered")
    }
    else {
        getSuccess(Cpass) 
    }
    
    
}

const throwError= (ele,msg)=>{
    const inputControl = ele.parentElement
    const errorDisplay= inputControl.querySelector('.error')
    errorDisplay.innerText= msg
    
    inputControl.classList.add('error')
    inputControl.classList.remove('success')
}

const getSuccess = ele=>{
    const inputControl = ele.parentElement
    const errorDisplay= inputControl.querySelector('.error')
    errorDisplay.innerText=''
    inputControl.classList.remove('error')
    inputControl.classList.add('success')
}

const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    return emailRegex.test(email);
};