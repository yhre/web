$(document).ready(function() {
    $("#loading").hide();
    $(window).scroll(function () {
        changeBack();
    });

    $("nav ul li a").mouseover(function () {
        $(this).css("color", "#9acf16");
        $(this).children(".sp2").css("color", "#9acf16");
    });
    $("nav ul li a").mouseout(function () {
        $(this).css("color", "#464646");
        $(this).children(".sp2").css("color", "#464646");

    });


    var scrolltopPart1=$(".part1").offset().top-86;
    var scrolltopPart3=$(".part3").offset().top-86;

    $('.bt1').click(function () {
        $("html, body").animate({
            scrollTop:scrolltopPart1
        }, { duration: 500, easing: "swing" });

    })
    $('.bt2').click(function () {
        console.log("1");
        $("html, body").animate({
            scrollTop:scrolltopPart3
        }, { duration: 500, easing: "swing" });

    })
    $('.logo').click(function () {
        $("html,body").animate({scrollTop:0},{duration:500,easing:"swing"});
    })
    window.onscroll=function(){
        var sl=-Math.max(document.body.scrollLeft,document.documentElement.scrollLeft);
        document.getElementById('header').style.left=sl+'px';

    };

})
    function changeBack() {
        
        var navHigh = $("nav .logo").height();
        var wScroll = $(window).scrollTop();  //获取当前滑动位置
        if (wScroll > navHigh) {
            // $("nav li").css("color","#3e3a3a");
            // $("nav li a").css("color","#3e3a3a");
             $("header").css("background-color", "rgba(256, 256,256, 1)");
              $("header").css("box-shadow", "0 1px 4px rgba(0, 0, 0, 0.10), 0 0 40px rgba(0, 0, 0, 0.06)");

        }else{
            $("header").css("background-color","");
            $("header").css("box-shadow","");
        }

    }
