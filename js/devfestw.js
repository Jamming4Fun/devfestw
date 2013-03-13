$(function() {
    var hh = $('#header').height();
    var ch = $('#contentWrapper').height();
    var nbh = $('#navbar').height();
    var boxesH = (hh + ch + nbh);
    var wh = $(window).height();
     
    if (boxesH < wh) {
        var bottomBoxH = wh - (hh + ch);
        
        if (bottomBoxH > nbh) {
            var blankSpace = bottomBoxH - nbh;
            var ContentMargin = blankSpace / 2;
            
            $('#contentWrapper').css({
                'margin-top': ContentMargin,
                'margin-bottom': ContentMargin 
            });
        }                    
    }
    
    if (boxesH > wh){
        var smallerHH = hh - nbh;
        var devfestwH = $('#devfestw').height();
        var devfestwPercent = (100 * smallerHH) / devfestwH;
        $('#devfestw').css({
                height: smallerHH,
                width: 'auto' });
        var opensampaH = $('#devfestw').height();
        var opensampaNewH = (opensampaH * devfestwPercent) / 100;
        $('#opensampa').css({
                height: opensampaNewH,
                width: 'auto',
                top: (18 * devfestwPercent) / 100 });
        $('#header').css('height', smallerHH);
        
        hh = $('#header').height();
        ch = $('#contentWrapper').height();
        nbh = $('#navbar').height();
        boxesH = (hh + ch + nbh);
        
        var leftSpace = wh - boxesH;
        if (leftSpace > 0) {
            $('#contentWrapper').css('margin-bottom', leftSpace);
        }  
    }
    
    $('#mainWrapper').css('height', wh);
    $('#aboutWrapper').css('height', wh);
    $('#programWrapper').css('height', wh);
    
    
    //start fixed at scroll nav
    var top = $('#navbar').offset().top - parseFloat($('#navbar').css('marginTop').replace(/auto/,0));
    $(window).scroll(function (event) {
        var y = $(this).scrollTop();
        if (y >= top) {
          $('#navbar').addClass('fixed');
        } else {
          $('#navbar').removeClass('fixed');
        }
    });
    
    function removeAtive() {
        $('#about').removeClass('active');
        $('#program').removeClass('active');
    }
    
    //scroll links
    $("#about").click(function(){
        removeAtive();                  
        $('html, body').animate({
            scrollTop: $("#aboutWrapper").offset().top
        }, 800);
        $('#about').addClass('active');
        
    });
    $("#program").click(function(){
        removeAtive();
        $('html, body').animate({
            scrollTop: $("#programWrapper").offset().top
        }, 800);
        $('#program').addClass('active');
    });
    
    //scroll arrow
    $("#arrow").click(function(){
        removeAtive();
        var nbPosition = $("#navbar").offset().top;
        if (nbPosition < wh) {
            $('html, body').animate({
                scrollTop: $("#aboutWrapper").offset().top
            }, 800);
            $('#about').addClass('active');
        }
        else if (nbPosition > wh) {
            $('html, body').animate({
                scrollTop: $("#header").offset().top
            }, 800);
        }
        
    });
    
    //send paper link. Will open a new window.
    $("#activity").click(function(){
        window.open("http://goo.gl/L9VxK", '_blank');
    });
    //link to registration. Will open a new window.
    $("#register").click(function(){
        window.open("http://goo.gl/mxdAg", '_blank');
    });
    //link to registration. Will open a new window.
    $("#gdgospAd").click(function(){
        window.open("http://goo.gl/X4VCb", '_blank');
    });
});