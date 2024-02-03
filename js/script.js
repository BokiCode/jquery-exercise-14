$(document).ready(function () {
    $("#inputWidth,#inputHeight,#inputColor,#inputBorderRadius").on("input", function () {
        $("#element").css({
            width: $("#inputWidth").val(),
            height: $("#inputHeight").val(),
            backgroundColor: $("#inputColor").val(),
            borderRadius: $("#inputBorderRadius").val() + "%"
        });
    });
});