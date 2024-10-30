const form = document.getElementById('form');
const firstname = document.getElementById('fname');
const lastname = document.getElementById('lname');
const email = document.getElementById('email');
const radios = document.getElementsByClassName('radio');
const message = document.getElementById('message');
const submit = document.getElementById('submit');
const firstnameError = document.getElementById('firstname-error')
const lastnameError = document.getElementById('lastname-error')
const emailError = document.getElementById('email-error')
const radioError = document.getElementById('radio-error')
const messageError = document.getElementById('message-error')
const checkboxError = document.getElementById('checkbox-error')
const success = document.querySelector('.success');





success.style.display = "none";


form.addEventListener('submit', (e)=> {
    let allVal = [];
    let firstnameMessages = [];
    if(firstname.value == '' || firstname.value == null){
        firstnameMessages.push('First Name field can not be empty');
    }else {
        input = document.getElementById('fname');
        const firstnameVal = input.value
        allVal += firstnameVal;
        success.style.display = "flex"; 
       //alert(allVal);
    }
    if(firstnameMessages.length > 0){
        e.preventDefault()
       firstnameError.textContent = firstnameMessages
    }
   

    let lastnameMessages = [];
    if(lastname.value == '' || lastname.value == null){
        lastnameMessages.push('Last Name field can not be empty');
    }else {
        input = document.getElementById('lname');
        const lastnameVal = input.value
        allVal += lastnameVal;
        success.style.display = "flex"; 
       //alert(allVal);
    } 
    if(lastnameMessages.length > 0){
        e.preventDefault()
       lastnameError.textContent = lastnameMessages
    }



    let emailMessages = [];
    if(email.value == '' || email.value == null){
        emailMessages.push('Please enter a valid email address');
    }else {
        input = document.getElementById('email');
        const emailVal = input.value
        allVal += emailVal;
        success.style.display = "flex"; 
       // alert(allVal);
    } 
    if(emailMessages.length > 0){
        e.preventDefault()
       emailError.textContent = emailMessages
    }


    if (document.getElementById('enquery-radio').checked == false && document.getElementById('support-radio').checked == false) {
        document.getElementById("radio-error").innerHTML
            = "Please select one option";
    } else {
        input = document.getElementById('enquery-radio','support-radio');
        const radioVal = input.value
        allVal += radioVal;
        success.style.display = "flex"; 
        //alert(allVal);
    }




    let messagesError = [];
    if(message.value == '' || message.value == null){
        messagesError.push('This field is required');
    }else {
        input = document.getElementById('message');
        const messageVal = input.value
        allVal += messageVal;
        success.style.display = "flex"; 
       //alert(allVal);
    }
    if(messagesError.length > 0){
        e.preventDefault()
       messageError.textContent = messagesError
    }



    let checkboxMessages = [];
    if(checkbox.checked === false){
        checkboxMessages.push('This fild is required');
    } else {
        input = document.getElementById('checkbox');
        const checkboxVal = input.value
        allVal += checkboxVal;
        
        //alert(allVal);
    }
    if(checkboxMessages.length > 0){
        e.preventDefault()
        checkboxError.textContent = checkboxMessages
        
    }

        success.style.display = 'flex';
 
       
        
  

   
   

    //alert(allVal);
   
    
});








