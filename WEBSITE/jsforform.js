function check(){
		//alert("hi");
		var name = document.forms["newuserform"]["username"].value;
		//alert(name);
		var address = document.forms["newuserform"]["address"].value;
		var phone = document.forms["newuserform"]["phone"].value;
		var email = document.forms["newuserform"]["email"].value;
		var pasword = document.forms["newuserform"]["password"].value;
		var category = document.forms["newuserform"]["category"].value;
		
		if(name == "")
		{
			alert("please enter your name");
			//name.focus();
			return false;
		}
		if(address == "")
		{
			alert("please enter the address");
			//address.focus();
			return false;
		}
		if(email == "")
		{
			alert("please enter an email address");
			//email.focus();
			return false;
		}
		
		if(phone == "")
		{
			alert("please enter the phone number");
			//phone.focus();
			return false;
		}
		if(phone.length!=10)
		{
			alert("please ensure that your phone number has only 10 characters");
			//phone.focus();
			return false;
		}
		if(pasword == "")
		{
			alert("please enter your password");
			//pasword.focus();
			return false;
		}
		if(category=="farmer")
		{
			location.href="farmer.html";
		}
		return true;
}
function checkfile()
{
		//alert("hi");
		//var name = document.forms["newuserform"]["username"].value;
		//alert(name);
		var number = document.forms["newuserform"]["number"].value;
		//alert(number);
		var crops = document.forms["newuserform"]["crops"].value;
		//alert(crops);
		var yiel = document.forms["newuserform"]["yield"].value; 
		//alert(yiel);
		if(number == "")
		{
			alert("please fill in the acres box");
			//number.focus();
			return false;
		}
		if(crops == "")
		{
			alert("please fill in the crops box");
			//crops.focus();
			return false;
		}
		if(yiel == "")
		{
			alert("please fill in the yield box");
			//yiel.focus();
			return false;
		}
		
}
