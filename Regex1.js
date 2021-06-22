const name=document.getElementById('name');
const email=document.getElementById('email');
const phone=document.getElementById('phone');

let validUser=false;
let validEmail=false;
let validPhone=false;

// Name Validation
name.addEventListener("blur",()=>{
    let regex = /^[a-zA-Z]([0-9a-zA-Z\s+]){5,15}$/gi;
    let str = name.value;
    if(regex.test(str)){
        name.classList.add('is-valid');
        name.classList.remove('is-invalid');
        validUser=true;

    }else{
        name.classList.add('is-invalid');
        validUser=false;
    }
});

// Email Validation
email.addEventListener("blur",()=>{
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/gi;
    let str = email.value;
    if(regex.test(str)){
        console.log("It is Matched",str);
        email.classList.add('is-valid');
        email.classList.remove('is-invalid');
        validEmail=true;
    }else{
        console.log("It is Not Matched");
        email.classList.add('is-invalid');
        validEmail=false;
    }
});

// Phone Validation
phone.addEventListener("blur",()=>{
    let regex = /^[0-9]{10}$/gi;
    let str = phone.value;
    if(regex.test(str)){
        console.log("It is Matched",str);
        phone.classList.add('is-valid');
        phone.classList.remove('is-invalid');
        validPhone=true;
    }else{
        console.log("It is Not Matched");
        phone.classList.add('is-invalid');
        validPhone=false;
    }
});


// Submit Form

let submit=document.getElementById('submit');
submit.addEventListener("click",(e)=>{
    e.preventDefault();
    var alertMsg=document.getElementById('success');;
    var failureMsg = document.getElementById('failure');;
    if(validUser && validEmail && validPhone){
        alertMsg.classList.add('show');
        failureMsg.classList.remove('show');
        //$('failureMsg').alert('close');
    }else{
        failureMsg.classList.add('show');
        alertMsg.classList.remove('show');
        //$('alertMsg').alert('close');
    }
    
});