$(document).ready(function() {

	// detect mobile safari
	function isiPhone(){
	    return (
	        (navigator.platform.indexOf("iPhone") != -1) ||
	        (navigator.platform.indexOf("iPod") != -1)
	    );
	}

	// don't run waypoints plugin for mobile
	if ( isiPhone() ) {
		// do nothing
	} else {
		$('#nav-global').waypoint('sticky');
	}
	
	// pull menu for mobile
    
	var pull = $('#pull');  
	var menu = $('#nav-global ul');  
	var menuHeight = menu.height();  

	$(pull).on('click', function(e) {  
		e.preventDefault();  
		menu.slideToggle();  
	});  
	
	$(window).resize(function(){  
	    var w = $(window).width();  
	    if(w > 320 && menu.is(':hidden')) {  
	        menu.removeAttr('style');  
	    }  
	});   
	
});
