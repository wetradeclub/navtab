$(document).ready(function(){
    $("#tab2").click(function(){
        $(".content1").removeClass("show");
        $(".content2").addClass("show");
        $(".content3").removeClass("show");

        $("#tab1").removeClass("active");
        $("#tab2").addClass("active");
        $("#tab3").removeClass("active");
    }),
    $("#tab1").click(function(){
        $(".content1").addClass("show");
        $(".content2").removeClass("show");
        $(".content3").removeClass("show");

        $("#tab1").addClass("active");
        $("#tab2").removeClass("active");
        $("#tab3").removeClass("active");
    }),
    $("#tab3").click(function(){
        $(".content1").removeClass("show");
        $(".content2").removeClass("show");
        $(".content3").addClass("show");

        $("#tab1").removeClass("active");
        $("#tab2").removeClass("active");
        $("#tab3").addClass("active");
    })
});