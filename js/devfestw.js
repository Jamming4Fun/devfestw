$(function() {
	
	// Boxes Variebles
	// #mainWrapper boxes
    var mwhh = $('#header').height();
    var mwch = $('#contentWrapper').height();
    var mwnbh = $('#navbar').height();
    var mwboxesH = (mwhh + mwch + mwnbh);
    // #aboutWrapper boxes
    
    
    
    var wh = $(window).height();
    var ww = $(window).width();
     
    //Boxes Calculations
    //#mainWrapper boxes
    if (mwboxesH < wh) {
        var mwbottomBoxH = wh - (mwhh + mwch);
        
        if (mwbottomBoxH > mwnbh) {
            var mwBlankSpace = mwbottomBoxH - mwnbh;
            var mwContentMargin = mwBlankSpace / 2;
            
            $('#contentWrapper').css({
                'margin-top': mwContentMargin,
                'margin-bottom': mwContentMargin 
            });
        }                    
    }
    if (mwboxesH > wh){
        var smallerHH = mwhh - mwnbh;
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
        
        mwhh = $('#header').height();
        mwch = $('#contentWrapper').height();
        mwnbh = $('#navbar').height();
        mwboxesH = (mwhh + mwch + mwnbh);
        
        var leftSpace = wh - mwboxesH;
        if (leftSpace > 0) {
            $('#contentWrapper').css('margin-bottom', leftSpace);
        }  
    }
    
    $('#mainWrapper').css('height', wh);
    $('#aboutWrapper').css('height', wh * 1.5);
    
    map_canvas
    $('#programWrapper').css('height', wh);
    
    
    //start fixed at scroll nav
    var top = $('#navbar').offset().top - parseFloat($('#navbar').css('marginTop').replace(/auto/,0));
    $(window).scroll(function (event) {
        var y = $(this).scrollTop();
        
        if (y < wh) {
        	removeAtive();
        }
        else if (y >= wh && y < (wh * 2)){
        	removeAtive();
        	$('#about').addClass('active');
        }
        else {
        	removeAtive();
        	$('#program').addClass('active');
        }
        
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
        else if (nbPosition > (wh - 60)) {
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
    //link to gdg +page. Will open a new window.
    $("#gdgospAd, #opensampa").click(function(){
        window.open("http://goo.gl/X4VCb", '_blank');
    });
    //link to DevFestW World website. Will open a new window.
    $("#devfestAd").click(function(){
        window.open("http://devfest.info", '_blank');
    });
});