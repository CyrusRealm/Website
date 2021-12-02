window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

function copyContract(){
    var text   = "0xd970a3279815e08aeb9efd0ede8f12403b1ac031";
    var el = document.getElementById('copy_contract');
    navigator.clipboard.writeText(text)
    .then(() => {
    })
    .catch((error) => { alert(`Copy failed! ${error}`) })
    
}



const heightOutput = document.querySelector('#height');
const widthOutput = document.querySelector('#width');



var w = $(window).width();
var h = $(window).height();
if(w < 992){
    if(w>768){
        $("#circ1").attr("r", "48.5");
        $("#circ2").attr("r", "48.5");
        $('.box .percent svg circle:nth-child(2)').css('stroke-dashoffset', "10000");
        $('.box .percent .num h2').css("font-size", "40px");
        $('.box .percent .num h2 span').css("font-size", "35px");
    }else{
        $("#circ1").attr("r", "39");
        $("#circ2").attr("r", "39"); 
        $('.box .percent svg circle:nth-child(2)').css('stroke-dashoffset', "10000");
        $('.box .percent .num h2').css("font-size", "30px");
        $('.box .percent .num h2 span').css("font-size", "25px");
    }
}else{
    $("#circ1").attr("r", "70");
    $("#circ2").attr("r", "70");
    $('.box .percent svg circle:nth-child(2)').css('stroke-dashoffset', "616");
    $('.box .percent .num h2').css("font-size", "48px");
    $('.box .percent .num h2 span').css("font-size", "24px");
}

function resize_func(){
    var w = $(window).width();
    var h = $(window).height();

    if(w < 992){
        if(w>768){
            $("#circ1").attr("r", "48.5");
            $("#circ2").attr("r", "48.5");
            $('.box .percent svg circle:nth-child(2)').css('stroke-dashoffset', "10000");
            $('.box .percent .num h2').css("font-size", "40px");
            $('.box .percent .num h2 span').css("font-size", "15px");
        }else{
            $("#circ1").attr("r", "39");
            $("#circ2").attr("r", "39"); 
            $('.box .percent svg circle:nth-child(2)').css('stroke-dashoffset', "10000");
            $('.box .percent .num h2').css("font-size", "30px");
            $('.box .percent .num h2 span').css("font-size", "20px");
        }
    }else{
        $("#circ1").attr("r", "70");
        $("#circ2").attr("r", "70");
        $('.box .percent svg circle:nth-child(2)').css('stroke-dashoffset', "616");
        $('.box .percent .num h2').css("font-size", "48px");
        $('.box .percent .num h2 span').css("font-size", "24px");
    }
}

setTimeout(function(){
    $('body').addClass('loaded');
    $('loader-wrapper').css('visibility', 'hidden !important');
}, 5000);
