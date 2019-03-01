$(Document).ready(function(){

    // Main Navigation Hover Effect
    $('.nav_home, .nav_projects, .nav_contact').hover(
        function(){
            $(this).children().animate({color : '#f61f70'}, 200)
        },
        function(){
            $(this).children().animate({color : 'white'}, 200)
        }
    );
    
    // Summary Contact Hover Effect
    $('#contact_here').hover(
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
            $('.dynamic_nav').fadeIn('slow','linear');
            // Reset and Add Active Class for Projects Section Nav
            $('.active').removeClass('active');
            $('#dynamic_nav_projects').addClass('active');
        }
        else {
            $('.dynamic_nav').hide()
        }
    });

    // Dynamic Nav + Project_Link Hover Effect
    $('#dynamic_nav_home, #dynamic_nav_projects, #dynamic_nav_contact, .project_link').hover(
        function(){
            $(this).children().animate({color : '#f61f70'}, 200)
        },
        function(){
            $(this).children().animate({color : 'rgb(41, 41, 41)'}, 200)
        }
    );

    $('.repo_link').hover(
        function(){
            $(this).animate({fontSize : '13px'}, 200)
            $(this).addClass('shadow')
        },
        function(){
            $(this).animate({fontSize : '12px'}, 100)
            $(this).removeClass('shadow')
        }
    );

    // Scroll Navigation Animations
    $('.nav_home, #dynamic_nav_home').click(function(){
        $('html, body').animate({scrollTop: $('.bg_image1').offset().top}, 1000)
    });

    $('.nav_projects').click(function(){
        $('html, body').animate({scrollTop: $('.projects').offset().top}, 1000)
    });

    $('#dynamic_nav_projects').click(function(){
        $('html, body').animate({scrollTop: $('.projects').offset().top + 1}, 1000)
    });

    $('.nav_contact, #dynamic_nav_contact, #contact_here, #hire_btn').click(function(){
        $('html, body').animate({scrollTop: $('.bg_image2').offset().top}, 1000);
        $('#name').focus();
    });

    // Reset and Add Active Class for Contact Section Nav
    var top = $('.bg_image2').offset().top;
    $(window).scroll(function(){
        if($(window).scrollTop() > top - 60){
            $('.active').removeClass('active');
            $('#dynamic_nav_contact').addClass('active');
        }
    })

    // Send Button Effect
    $('#contact_form').on('mouseenter', 'button', function(){
        $(this).animate({backgroundColor: '#f61f70',color: 'white'},100);
    });

    $('#contact_form').on('mouseleave', '#send_btn', function(){
        $(this).animate({backgroundColor: 'transparent',color: '#f61f70'},100);
    });

    // Send Form w/out Refresh & Show Loading SVG
    var frm = $('#contact_form');
    frm.submit(function (ev) {
        $('#send_btn').replaceWith("<img id='svg' src='../img/svg_icon.svg'/>")
        $.ajax({
            type: frm.attr('method'),
            url: frm.attr('action'),
            data: frm.serialize(),
            success: function (data) {
                setTimeout(function(){
                    alert("Message Sent! I'll get back to you ASAP :)");
                    $('#contact_form').trigger('reset');
                    $('#svg').replaceWith("<button id='send_btn'>SEND</button>")
                }, 2000);
            }
        });

        ev.preventDefault();
    });

})