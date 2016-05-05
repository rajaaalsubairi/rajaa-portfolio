$(document).ready(function(){       
    var scroll_pos = 0;
    $(document).scroll(function() { 
        scroll_pos = $(this).scrollTop();
        if(scroll_pos > 20) {
            $("div").removeClass().addClass('nav-white');
        } else {
            $("div").removeClass('nav-white').addClass('nav');
        }
    });
});
