function loginRedirect(){
		username = document.loginForm.userName.value;
		password = document.loginForm.password.value;
		if (username == "seejn" && password == "password") {

		}
		else
		{
			alert("Username or password is incorrect. Please try again.")
			return false;
		}
	}

function orderRedirect(){
		name = document.orderForm.Name.value;
		phone = document.orderForm.phone.value;
		if (name == "seejn" && phone == "9810010398") {

		}
		else
		{
			alert("Name or Phone Number is incorrect. Please try again.")
			return false;
		}
	}