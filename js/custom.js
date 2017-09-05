!(function($){
	// homepage
	const features = $('#featuresSlider'),
		howto = $('#howtoSlider'),
		toggle = $('.toggle-box .toggle'),
		timing = 300;
	
	features.owlCarousel({
	    loop:true,
	    nav:false,
	    mouseDrag:false,
	    touchDrag:false,
	    items:1,
	    animateIn: 'slideInUp',
	    animateOut: 'slideOutUp'
	});

	howto.owlCarousel({
	    loop:true,
	    nav:false,
	    mouseDrag:false,
	    touchDrag:false,
	    items:1
	});
	
	toggle.first().addClass('selected').prev().addClass('noBorder');		
	toggle.first().find('.toggle-body').css({height:toggle.first().find('.inner').outerHeight()});
	
	toggle.on('click', function(e){
		const 
		el = $(this),
		index = el.index(),
		innerHeight = el.find('.inner').outerHeight();
		toggle.removeClass('selected noBorder');
		toggle.find('.toggle-body').animate({height:0},{duration:timing,queue:false});
		el.addClass('selected').prev().addClass('noBorder');		
		el.find('.toggle-body').animate({height:innerHeight},{duration:timing,queue:false});
		features.trigger('to.owl.carousel',[index,timing]);
	});

})(jQuery);