$(document).ready(function() {
    //Part 1
    console.log("jQuery is ready!");

    $('#dark-btn').click(function() {
        $('body').addClass('dark-theme');
    });
    $('#light-btn').click(function() {
        $('body').removeClass('dark-theme');
    });
    $('#update-greeting-btn').click(function() {
        $('#part1 p').html('Hello, world! Welcome to my dynamic page.');
        $('.intro-text').css('color', '#007bff'); 
    });

    //Part 2
    $('#hide-btn').click(function() { $('#status-box').hide(); });
    $('#show-btn').click(function() { $('#status-box').show(); });
    $('#toggle-btn').click(function() { $('#status-box').toggle(); });

    $('#fade-out-btn').click(function() { $('.gallery img').fadeOut(); });
    $('#fade-in-btn').click(function() { $('.gallery img').fadeIn(); });
    $('#fade-toggle-btn').click(function() { $('.gallery img').fadeToggle(); });

    $('.heading-btn').click(function() {
        $(this).next('.panel').slideToggle();
    });

    //Part 3
    $('#add-skill').click(function() {
        let skill = $('#new-skill').val().trim();
        if(skill !== "") { $('#skill-list').append('<li>' + skill + '</li>'); }
        $('#new-skill').val('');
    });
    
    $('#prepend-skill').click(function() {
        let skill = $('#new-skill').val().trim();
        if(skill !== "") { $('#skill-list').prepend('<li>' + skill + '</li>'); }
        $('#new-skill').val('');
    });

    $('#remove-skill').click(function() {
        $('#skill-list li:last-child').remove();
    });

    $('#change-link-btn').click(function() {
        let currentHref = $('#social-link').attr('href');
        
        if (currentHref === 'https://github.com/tamikrom1') {
            $('#social-link').attr('href', 'https://linkedin.com').text('LinkedIn');
            $(this).text('Change to GitHub');
        } else {
            $('#social-link').attr('href', 'https://github.com/tamikrom1').text('My GitHub');
            $(this).text('Change to LinkedIn');
        }
    });

    $('#form-name, #form-email').on('input', function() {
        let name = $('#form-name').val();
        let email = $('#form-email').val();
        $('#live-preview').text(name + (email ? ' (Email: ' + email + ')' : ''));
    });

    //Part 4
    let isAnimated = false;
    $('#animate-skills').click(function() {
        if (!isAnimated) {
            $('.skill-bar').each(function() {
                let targetWidth = $(this).data('target');
                $(this).animate({ width: targetWidth }, 1000);
            });
            isAnimated = true;
        } else {
            $('.skill-bar').animate({ width: '0' }, 1000);
            isAnimated = false;
        }
    });
});