$(Document).ready(function(){
    
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

    $('.contact_here').hover(
        function(){
            $(this).animate({color :'#f61f70'}, 500)
        },
        function(){
            $(this).animate({color :'white'}, 0)
        }
    );

    $('.email_anchor').mouseenter(
        function(){
            $('.email_btn').effect('shake', { direction: 'up', times: 4, distance: 10}, 1000 );
        }
    );

    $('.dynamic_nav').hide();

    var topOfDiv = $('.projects').offset().top;
    $(window).scroll(function(){
        if($(window).scrollTop() > topOfDiv){
            $('.dynamic_nav').fadeIn('slow','linear')
        }
        else {
            $('.dynamic_nav').hide()
        }
    })
})