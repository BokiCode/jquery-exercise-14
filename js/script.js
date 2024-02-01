$(document).ready(function () {
    const userName="admin";
    const password = "123";
    $("#loginButton").click(function () {
        const enteredUsername = $("#userName").val();
        const enteredPassword = $("#password").val();
        if(enteredUsername === userName && enteredPassword === password) {
            $("body").html("Uspesno ste se ulogovali");
            $("#password, #userName, #loginButton").hide();
        } else {
            alert("Nalog ne postojii");
        }
    });
});