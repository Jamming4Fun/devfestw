$(function() {
	
	// Boxes dimensions
	// #mainWrapper
    var mwhh = $('#header').height();
    var mwch = $('#contentWrapper').height();
    var mwnbh = $('#navbar').height();
    var mwboxesH = (mwhh + mwch + mwnbh);
    // #aboutWrapper
    var awiwh = $('#abInfoWrapper').height();
    var awswh = $('#abSiteWrapper').height();
    
    //Window Dimensions
    var wh = $(window).height();
    var ww = $(window).width();
    var mww = $('#middleWrapper').innerWidth();
    
    //#middleWrapper width for resolution 1024x768
    if (ww > 900 && ww < 1024){
    	//$('#middleWrapper').width(960);
    	$('#middleWrapper').css('width', 960);
    }
    
    if (mww < 960){
    	//$('#middleWrapper').width(960);
    	$('#middleWrapper').css('width', 960);
    }
     
    //Boxes Calculations
    //#mainWrapper pre dimension assignment calculations
    if (mwboxesH < wh && ww > 900) {
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
    if (mwboxesH > wh && ww > 900){
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
	//#mainWrapper dimension assignment
	$('#mainWrapper').css('height', wh);
	
	//#mainWrapper post dimension assignment calculations
	
	
	//#aboutWrapper pre dimension assignment calculations
	
    //#aboutWrapper dimension assignment
    $('#aboutWrapper').css('height', wh * 1.5);
    //#aboutWrapper post dimension assignment calculations
    var awh = $('#aboutWrapper').height();
    var aww = $('.abSiteBox').width();
    var awiwh = $('#abInfoWrapper').height();
    var awiww = $('#abInfoWrapper').width();
    var awswh = $('#abSiteWrapper').height();
    var awsww = $('#abSiteWrapper').width();
    
    var awBoxesH = awiwh + awswh;
    //var awBoxesW = awiww + awsww;
    var mCanvasH = (awh * 1.5) - awBoxesH - (awh * .35);
    $('#map_canvas').css({ 
    	height: mCanvasH,
    	width: aww
    });
        
    var mapOptions = {
      zoom: 15,
      center: new google.maps.LatLng(-23.586938, -46.682153),
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      streetViewControl: false,
      panControl: false,
      scrollwheel: false,
      mapTypeControl: false,
      zoomControl: true,
      draggable: false,
      scaleControl: false
    };
    
    var map = new google.maps.Map(document.getElementById("map_canvas"),
        mapOptions);
        
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(-23.586938, -46.682153),
        map: map,
    });

if (ww > 900) {
    //#programWrapper dimension assignment
    $('#programWrapper').css('height', wh);
    
    //#navbar dimension assignment
    var nbw = $('#middleWrapper').width() - 2;
    $('#navbar').css('width', nbw);
    
    
    //start fixed at scroll nav
    var top = $('#navbar').offset().top - parseFloat($('#navbar').css('marginTop').replace(/auto/,0));
    $(window).scroll(function (event) {
        var y = $(this).scrollTop();
        
        if (y < wh) {
        	removeActive();
        }
        else if (y >= wh && y < (wh * 2.5)){
        	removeActive();
        	$('#about').addClass('active');
        }
        else {
        	removeActive();
        	$('#program').addClass('active');
        }
        
        if (y >= top) {
          $('#navbar').addClass('fixed');
        } else {
          $('#navbar').removeClass('fixed');
        }
    });
    
    function removeActive() {
        $('#about').removeClass('active');
        $('#program').removeClass('active');
    }
    
    //scroll links
    $("#about").click(function(){
        removeActive();                  
        $('html, body').animate({
            scrollTop: $("#aboutWrapper").offset().top
        }, 800);
        $('#about').addClass('active');
        
    });
    $("#program").click(function(){
        removeActive();
        $('html, body').animate({
            scrollTop: $("#programWrapper").offset().top
        }, 800);
        $('#program').addClass('active');
    });
    
    //scroll arrow
    $("#arrow").click(function(){
        removeActive();
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
}
else {
	$('nav').css('display', 'none');
	$('#mainWrapper, #aboutWrapper, #programWrapper').css('height', 'auto');
	$('#abInfoWrapper, #abSiteWrapper, #progInfoWrapper').css({
		'top': 0,
		'margin-bottom': 30
	});
}
    //send paper link. Will open a new window.
    $("#activity").click(function(){
        window.open("http://goo.gl/L9VxK", '_blank');
    });
    //link to registration. Will open a new window.
    $("#register").click(function(){
        window.open("http://devfestwsampa.eventbrite.pt/", '_blank');
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