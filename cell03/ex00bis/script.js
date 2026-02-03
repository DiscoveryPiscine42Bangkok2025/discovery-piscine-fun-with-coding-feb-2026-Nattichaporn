$(document).ready(function () {
    $("#change").click(function () {
        let colors = ["red", "green", "blue", "yellow", "pink", "purple"];
        let random = Math.floor(Math.random() * colors.length);
        $("body").css("background-color", colors[random]);
    });
});
