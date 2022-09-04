/*
Try submitting your form — it should refuse
to submit until the above constraints are followed,
and give suitable error messages. To help, you might want
to consider adding some simple
CSS to show when a form field is valid or invalid.
*/

let username = document.getElementById('uname');
let email = document.getElementById('email');
let phone = document.getElementById('phone');

username.addEventListener('input', validationHandler);
email.addEventListener('input', validationHandler);
phone.addEventListener('input', validationHandler);

function validationHandler(event){
	if(event.target.id == 'uname'){
		//empty input
		if(event.target.value.length == 0){
			event.target.setCustomValidity("You must insert your username");
			event.target.reportValidity();
		}

		//tooShort
		else if(event.target.validity.tooShort){
			event.target.setCustomValidity("Your username must contain 5 or more characters");
			event.target.reportValidity();
		}

		else{
			event.target.setCustomValidity("");
		}
	}

	else if(event.target.id == 'email'){
		//empty input
		if(event.target.value.length == 0){
			event.target.setCustomValidity("You must insert your email");
			event.target.reportValidity();
		}

		//input is not an email
		else if(event.target.validity.typeMismatch){
			event.target.setCustomValidity("You must be a valid email");
			event.target.reportValidity();
		}

		else{
			event.target.setCustomValidity("");
		}
	}

	else if(event.target.id == 'phone'){
		//empty input
		if(event.target.value.length == 0){
			event.target.setCustomValidity("You must insert your phone number");
			event.target.reportValidity();
		}

		//input is not a phone
		else if(event.target.validity.patternMismatch){
			event.target.setCustomValidity("It must be a valid phone number");
			event.target.reportValidity();
		}

		else{
			event.target.setCustomValidity("");
		}
	}
}

