$(Document).ready(function(){

    // Main Navigation Hover Effect
    $('.nav_home').hover(
        function(){
            $('.nav_home').children().css('color', '#f61f70')
        },
        function(){
            $('.nav_home').children().css('color', 'white')
        }
    );

    $('.nav_projects').hover(
        function(){
            $('.nav_projects').children().css('color', '#f61f70')
        },
        function(){
            $('.nav_projects').children().css('color', 'white')
        }
    );

    $('.nav_contact').hover(
        function(){
            $('.nav_contact').children().css('color', '#f61f70')
        },
        function(){
            $('.nav_contact').children().css('color', 'white')
        }
    );
    
    // Summary Contact Hover Effect
    $('.contact_here').hover(
        function(){
            $(this).animate({color :'#f61f70'}, 500)
        },
        function(){
            $(this).animate({color :'white'}, 0)
        }
    );

    // Contact Button Shake Effect
    $('.email_anchor').mouseenter(
        function(){
            $('.email_btn').effect('shake', { direction: 'up', times: 4, distance: 10}, 1000 );
        }
    );

    // Dynamic Navigation Render 
    $('.dynamic_nav').hide();

    var topOfDiv = $('.projects').offset().top;
    $(window).scroll(function(){
        if($(window).scrollTop() > topOfDiv){
            $('.dynamic_nav').fadeIn('slow','linear')
        }
        else {
            $('.dynamic_nav').hide()
        }
    });

    // Scroll Navigation Animations
    $('.nav_home, #dynamic_nav_home').click(function(){
        $('html, body').animate({
            scrollTop: $('.bg_image1').offset().top
        }, 1000)
    });

    $('.nav_projects, #dynamic_nav_projects').click(function(){
        $('html, body').animate({
            scrollTop: $('.projects').offset().top
        }, 1000)
    });
})