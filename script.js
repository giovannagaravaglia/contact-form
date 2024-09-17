let form = document.getElementById('form');
let inputEmail = document.getElementById('email');
let messageEmailInvalid = document.querySelector('.label-hidden__emailvalid');
let messageEmailEmpty = document.querySelector('.label-hidden__emailempty');
let messageFName = document.querySelector('.label-hidden__fname');
let messageLName = document.querySelector('.label-hidden__lname');
let messageTextArea = document.querySelector('.label-hidden__textarea');
let messageConsent = document.querySelector('.label-hidden__consent');
let messageQuery = document.querySelector('.label-hidden__query');

let messageALL = document.querySelectorAll('.label-hidden');

let queryType = document.querySelectorAll('#query-type')


let inputFName = document.getElementById('first-name')
let inputLName = document.getElementById('last-name')
let inputMessage = document.getElementById('message');
let successMessage = document.querySelector('.success-wrapper')

let AllValid = true;

function validateEmail(email){
    let validate = /\S+@\S+\.\S+/;
    return validate.test(email);
}

function formSubmit(e){
    e.preventDefault();

    AllValid = true;

    resetError();

    let email = document.getElementById('email').value;
    let FName = document.getElementById('first-name').value;
    let LName = document.getElementById('last-name').value;
    let Message = document.getElementById('message').value;
    let consent = document.getElementById('consent');



    let inputQueryType = document.getElementsByName('query-type')
    let queryTypeChecked = false;
  
    if(FName.length === 0){
        showAlert(messageFName, inputFName);
        AllValid = false;
    }   

    if (LName.length === 0){
        showAlert(messageLName, inputLName);
        AllValid = false;
    }

    if (email.length === 0){
        showAlert(messageEmailEmpty, inputEmail);
        AllValid = false;
    }

    else if (validateEmail (email) == false) {
        showAlert(messageEmailInvalid, inputEmail);
        AllValid = false;
    }

    for (let i =0; i< inputQueryType.length; i++){
        if(inputQueryType[i].checked){
            queryTypeChecked = true;
            break
        }
    }

    if(!queryTypeChecked){
        showMessage(messageQuery)
        AllValid = false;
    }

    if(Message.length === 0){
        showAlert(messageTextArea, inputMessage)
        AllValid = false;
    }

    if (!consent.checked){
        showMessage(messageConsent)
        AllValid = false;
    }

    if (AllValid){

        successMessage.style.display='flex';

        setTimeout(function() {
            location.reload();
        }, 10000);   
    }





}

function resetError(){
    messageFName.style.visibility = 'hidden'
    messageLName.style.visibility = 'hidden'
    messageEmailEmpty.style.visibility = 'hidden'
    messageEmailInvalid.style.visibility = 'hidden'
    messageQuery.style.visibility = 'hidden'
    messageTextArea.style.visibility = 'hidden'
    messageConsent.style.visibility = 'hidden'

    inputFName.style.border = '1px solid hsl(169, 82%, 27%)'
    inputLName.style.border = '1px solid hsl(169, 82%, 27%)'
    inputEmail.style.border = '1px solid hsl(169, 82%, 27%)'
    inputMessage.style.border = '1px solid hsl(169, 82%, 27%)'
    
}

function showAlert(messageFName, inputFName){
    messageFName.style.visibility = 'visible';
    inputFName.style.border = '1px solid hsl(0, 66%, 54%)';
}

function showMessage (messageQuery){
    messageQuery.style.visibility = 'visible';
}


form.addEventListener('submit', formSubmit);






