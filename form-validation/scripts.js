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
		if(event.target.validity.valueMissing){
			event.target.setCustomValidity("You must insert your username");
			event.target.reportValidity();
		}

		//input doesnt follow the provided pattern
		else if(event.target.validity.patternMismatch){
			event.target.setCustomValidity("The username must contain a single letter followed by a dot, followed by three or more letters of numbers. Should be lowercase");
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
		if(event.target.validity.valueMissing){
			event.target.setCustomValidity("You must insert your email");
			event.target.reportValidity();
		}

		//input is not an email
		else if(event.target.validity.typeMismatch){
			event.target.setCustomValidity("You must insert a valid email from @bigcorp.eu");
			event.target.reportValidity();
		}

		//input is too short
		else if(event.target.validity.tooShort){
			event.target.setCustomValidity("The entered email address is too short");
			event.target.reportValidity();
		}

		//input doesnt follow the provided pattern
		else if(event.target.validity.patternMismatch){
			event.target.setCustomValidity("Your email must consis of 1 or more letters, or numbers followed by @bigcorp.eu");
			event.target.reportValidity();
		}

		else{
			event.target.setCustomValidity("");
		}
	}

	else if(event.target.id == 'phone'){
		console.log(event.target.validity)
		//empty input
		if(event.target.validity.valueMissing){
			event.target.setCustomValidity("You must insert your phone number");
			event.target.reportValidity();
		}

		//input doesnt follow the pattern
		else if(event.target.validity.patternMismatch){
			event.target.setCustomValidity("Your phone number must contain either 10 digits in a row, or 3 digits followed by a space, a dash, or a dot, followed by another 3 digits, followed by a space, a dash, or a dot, followed by 4 digits");
			event.target.reportValidity();
		}

		//input is too short
		else if(event.target.validity.tooShort){
			event.target.setCustomValidity("Your phone number must contains 10 digits");
			event.target.reportValidity();
		}

		else{
			event.target.setCustomValidity("");
		}
	}
}

