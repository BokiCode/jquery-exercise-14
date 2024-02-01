$(document).ready(function () {
    $("#inputWidth,#inputHeight,#inputColor,#inputBorderRadius").on("input", function () {
        let customWidth = $("#inputWidth").val();
        let customHeight = $("#inputHeight").val();
        let customColor = $("#inputColor").val();
        let customBorderRadius = $("#inputBorderRadius").val() + "%";
        $("#element").css({
            width: customWidth,
            height: customHeight,
            backgroundColor: customColor,
            borderRadius: customBorderRadius
        });
    });
});