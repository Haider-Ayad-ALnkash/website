$(document).ready(()=>{
    //Show navbar when click on icon
    $('i.icon').click(()=>{
        $('.nav-list').slideToggle();
    })

    $(window).scroll(()=>{
        var sc=$(this).scrollTop();
        if (sc > 100) {
            $('header').addClass('sticky');
        } else {
            $('header').removeClass('sticky');
        }
       
        if (sc >500) {
            $('.scrollUp').fadeIn();
        } else {
            $('.scrollUp').fadeOut();
        }
         //Count numer 
         if (sc > 1160) {
            $('.time').countTo();
            // $(window).off('scroll');
        }
    })
    // Click on btn scrollUp body scroll to top 
    $('.scrollUp').click(()=>{
        $('body,html').animate({
            scrollTop:0
        },300)
    });

    $('.buttons button').click(function(){
        $(this).addClass('active_btn').siblings().removeClass('active_btn');
        var idFillter=$(this).attr('id');
        if (idFillter === 'all') {
               $('.part-image > div ').fadeIn(); 
        }else{
            $('.part-image > div').fadeOut(); 
            $('.part-image').contents().filter('.'+ idFillter).fadeIn();
        }
    })

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })
      //click on nav choose panel 
      $('.c_panel li').click(function () {
        var p=$(this).data('role');
        $('.content > div').fadeOut();
        $('.content').contents().filter('#' + p).fadeIn();
    });

    // Scrol wher click on link 
$('.nav-list a').click(function(){
    $('body,html').animate({
        screenTop:$($(this).attr('href'))-80   
    }) 
});
})

