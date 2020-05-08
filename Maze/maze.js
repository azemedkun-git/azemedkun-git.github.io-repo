$(document).ready(function () {
let old;
let count =1;

    old= $(".boundary").css("background-color");
    $("#start").click(_start);
    $("#end").mouseover(_end);
function _start() {
     if(count===1) {
         count=0;
        $(".boundary").mouseover(_mouseover);
         $("#maze").mouseleave(_mouseover);
    }
    else {
         count=0;
         $(".boundary").css("background-color", old);
    }
}
function _end() {
    const cur_bg = $(".boundary").css("background-color");
    if(old===cur_bg){
        count=1;
        $(".boundary").unbind("mouseover");
        $("#maze").off("mouseleave");
    }
}
function _mouseover() {
    $(".boundary").css("background-color", "rgb(235, 52, 91)");
}
function _mouseleave() {
    $(".boundary").css("background-color", "rgb(235, 52, 91)");
}
});