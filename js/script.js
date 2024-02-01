$(document).ready(function () {
    const userName = "admin";
    const password = "123";
    let attempts = 0;
    $("#loginButton").click(function () {
        $(" #wrongUsername, #wrongPassword").hide();
        const enteredUsername = $("#userName").val();
        const enteredPassword = $("#password").val();
        if (enteredUsername === userName && enteredPassword === password) {
            $("body").html("Uspesno ste se ulogovali");
            $("#password, #userName, #loginButton").hide();
        } else {
            attempts++;
        }
        if (enteredUsername !== userName) {
            $("#wrongUsername").show();
        }
        if (enteredPassword !== password) {
            $("#wrongPassword").show();
        }
        if (attempts === 3) {
            $("#userName, #password, #loginButton").attr('disabled', true);
        }
    });
});