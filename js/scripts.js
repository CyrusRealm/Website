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
        $('#copied-icon').html('<svg width="22px" height="22px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="filter-green"><path fill-rule="evenodd" clip-rule="evenodd" d="M1 1.5C1 0.671573 1.67157 0 2.5 0H10.7071L14 3.29289V13.5C14 14.3284 13.3284 15 12.5 15H2.5C1.67157 15 1 14.3284 1 13.5V1.5ZM7.02439 10.2315L10.8763 5.82928L10.1237 5.17078L6.97568 8.76857L5.35359 7.14648L4.64648 7.85358L7.02439 10.2315Z" fill="black"/></svg>');
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
        $('.box .percent svg circle:nth-child(2)').css('stroke-dashoffset', "380");
        $('.box .percent .num h2').css("font-size", "40px");
        $('.box .percent .num h2 span').css("font-size", "35px");
    }else{
        $("#circ1").attr("r", "39");
        $("#circ2").attr("r", "39"); 
        $('.box .percent svg circle:nth-child(2)').css('stroke-dashoffset', "400");
        $('.box .percent .num h2').css("font-size", "30px");
        $('.box .percent .num h2 span').css("font-size", "25px");
    }
}else{
    $("#circ1").attr("r", "70");
    $("#circ2").attr("r", "70");
    $('.box .percent svg circle:nth-child(2)').css('stroke-dashoffset', "550");
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
            $('.box .percent svg circle:nth-child(2)').css('stroke-dashoffset', "380");
            $('.box .percent .num h2').css("font-size", "40px");
            $('.box .percent .num h2 span').css("font-size", "15px");
        }else{
            $("#circ1").attr("r", "39");
            $("#circ2").attr("r", "39"); 
            $('.box .percent svg circle:nth-child(2)').css('stroke-dashoffset', "400");
            $('.box .percent .num h2').css("font-size", "30px");
            $('.box .percent .num h2 span').css("font-size", "20px");
        }
    }else{
        $("#circ1").attr("r", "70");
        $("#circ2").attr("r", "70");
        $('.box .percent svg circle:nth-child(2)').css('stroke-dashoffset', "550");
        $('.box .percent .num h2').css("font-size", "48px");
        $('.box .percent .num h2 span').css("font-size", "24px");
    }
}

setTimeout(function(){
    $('body').addClass('loaded');
    $('loader-wrapper').css('visibility', 'hidden !important');
}, 5000);

$('copy_contract').on('click', function(){
    $()
})
