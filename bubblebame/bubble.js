$(function(){
    $("#start").on("click", () => {
        let numberOfCircle = parseInt($("#numCircle").val());
        for (let i = 0; i < numberOfCircle; i++) {
            addCircle();
        }
        $("#container").on("click", ".circle", function() {$(this).hide()});
        $("#container").on("mouseover", ".circle", function() {$(this).css("opacity", "0.3")});
        $("#container").on("mouseleave", ".circle", function() {$(this).css("opacity", "1")});
    });

    function addCircle() {
        let color ="rgb(" + Math.floor(Math.random() * 255)+","
                    + Math.floor(Math.random() * 255)+","
                    + Math.floor(Math.random() * 255) +")";
        let width = $("#width").val();
        var $e = $("<div />").css("width", width + "px")
            .css("height", width + "px")
            .css("background-color", color)
            .css("position", "absolute")
            .css("border-radius", width + "px")
            .css("top", Math.floor(Math.random() * 600) + "px")
            .css("left", Math.floor(Math.random() * 1000) + "px");

        $e.addClass("circle");
        $("#container").append($e);
        let rate = parseInt($("#rate").val());
        let growAmt = $("#growAmt").val();
        setInterval(function() {
            let w = parseInt($e.css("width")) + parseInt(growAmt);
            $e.css("width", w + "px")
                .css("height", w + "px")
                .css("border-radius", w + "px");
        },rate);
    }
});
