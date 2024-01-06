$(document).ready(function(){
    
    var swiper = new Swiper(".bn", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
    });

    $("#morebest").hide();

    $("#more").click(function(){
		$(this).hide();
		$("#morebest").fadeIn();
	});



     // 하위메뉴1★
    /* $("#pop>ul>li").on("click", function(){
        $(this).children().slideToggle();
    });*/

    // 하위메뉴2(초기화/slideUp)
    
    
    $(".sub").hide();

    $("#section2>ul>li:nth-child(1)").on("click",function(){
        $(".sub").slideUp();
        $("#section2>ul>li:nth-child(1) .sub").slideDown();
    });
    $("#section2>ul>li:nth-child(2)").on("click",function(){
        $(".sub").slideUp();
        $("#section2>ul>li:nth-child(2) .sub").slideDown();
    });
    $("#section2>ul>li:nth-child(3)").on("click",function(){
        $(".sub").slideUp();
        $("#section2>ul>li:nth-child(3) .sub").slideDown();
    });
    $("#section2>ul>li:nth-child(4)").on("click",function(){
        $(".sub").slideUp();
        $("#section2>ul>li:nth-child(4) .sub").slideDown();
    });
    $("#section2>ul>li:nth-child(5)").on("click",function(){
        $(".sub").slideUp();
        $("#section2>ul>li:nth-child(5) .sub").slideDown();
    });
    $("#section2>ul>li:nth-child(6)").on("click",function(){
        $(".sub").slideUp();
        $("#section2>ul>li:nth-child(6) .sub").slideDown();
    });



    
   

    $(window).fadeThis({ reverse: false });
    $(window).fadeThis({ speed: 1000 });





// sub js
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        freeMode: true,
        pagination: {
        el: ".swiper-pagination",
        clickable: true,
        },


        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
          },
    });


    // $(".w2").hide();
    // $(".w1").show();

    // $(".w1").click(function(){
	// 	$(this).hide();
	// 	$(".w2").fadeIn();
	// });

    // $(".w2").click(function(){
	// 	$(this).hide();
	// 	$(".w1").fadeIn();
	// });


});