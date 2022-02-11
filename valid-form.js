function validate() {
    var fname = 
        document.forms["survey"]["name"];
    var email = 
        document.forms["survey"]["email"];
    var age = 
        document.forms["survey"]["Age"];
    var location = 
        document.forms["survey"]["location"];
    
    
    if (fname.value == "") {
        window.alert("Please enter your full name");
        fname.focus();
        return false;}

    if (email.value == "") {
        window.alert("Please enter your E-mail");
        email.focus();
        return false;}

    if (age.value == "") {
        window.alert("Please enter your Age");
        age.focus();
        return false;}

    if (location.value == "") {
        window.alert("Please enter your Location");
        location.focus();
        return false;}
        alert("successfull");
    }