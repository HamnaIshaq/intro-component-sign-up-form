// form entries
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.getElementById('form');
const errorELement = document.getElementById('error');

// Event Listeners
form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  checkInputs();    
});

function checkInputs(){
    
  const fistNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  
  if(fistNameValue === ''){
    setErrorFor(firstName, 'First Name cannot be empty');
    firstName.style.marginBottom = '30px';
    firstName.placeholder = "";
  }
  else{
    correctInput(firstName);
    firstName.style.marginBottom = '17px';
  }
  
  if(lastNameValue === ''){
    setErrorFor(lastName, 'Last Name cannot be empty');
    lastName.style.marginBottom = '30px';
    lastName.placeholder = "";
  }
  else{
    correctInput(lastName);
    lastName.style.marginBottom = '17px';
  }

  if(emailValue === ''){
    setErrorFor(email, 'Looks like this is not an email');
    email.style.marginBottom = '30px';
    email.placeholder= "example@example.com";
    
  }
  else if (!emailVerification(emailValue)){
    setErrorFor(email, 'Not a valid email')
    email.style.marginBottom = '30px';
    email.placeholder = "example@example.com";
  }
  else{
    correctInput(email);
    email.style.marginBottom = '17px';
  }
  
  if(passwordValue === ''){
    setErrorFor(password, 'Password cannot be empty');
    password.style.marginBottom = '30px';
    password.placeholder = "";
  }
  else{
    correctInput(password);
    password.style.marginBottom = '17px';
  }
}

function setErrorFor(input, message){
  const formInput = input.parentElement;
  const small = formInput.querySelector('small');
  
  //add error message inside the small tag
  small.innerText = message;
  
  //add error class
  formInput.className = 'form-input form-error' 
    
}

function correctInput (input){
  const formInput = input.parentElement;
	formInput.className = 'form-input success';
}

function emailVerification (email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}