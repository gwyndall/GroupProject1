$(document).ready(function () {
    function main(){
        $(".body").addClass("page-top");
        buildNavPage();
    }
    function buildNavPage(){
        $(".body").append($("<nav>").addClass("navbar navbar-expand-lg navbar-light fixed-top").attr("id","mainNav"));
        $("#mainNav").append($("<div>").addClass("container").attr("id","navBarContainer"));

    }
});
