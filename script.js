function validate() {
    var x = document.forms["myform"]["name"].value;
    var y = document.forms["myform"]["email"].value;
    if (x == "") {
        window.alert("Fill your name");
        return false;
    }
    if (y == "") {
        window.alert("Fill your email");
        return false;
    }
    if (y.indexOf('@') == -1) {
        window.alert('Enter you email correctly');
        return false;
    }
    window.alert("Thanks " + x + ", I received your message successfully");
    return false;
}