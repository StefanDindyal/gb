!(function($){
	// homepage
	const features = $('#featuresSlider'),
		howto = $('#howtoSlider'),
		toggle = $('.toggle-box .toggle'),
		howtoCount = howto.find('img').length,
		timing = 300;
	
	features.owlCarousel({
	    loop:false,
	    nav:false,
	    mouseDrag:false,
	    touchDrag:false,
	    items:1,
	    animateIn: 'slideInUp',
	    animateOut: 'slideOutUp'
	});

	howto.parent().append('<div class="dot-nav"><div class="inner"></div></div>');
	for(i=0; i< howtoCount; i++){
		$('.dot-nav .inner').append('<div class="dot-dot"><span></span></div>');	
	}
	$('.dot-nav').append('<div class="bar"><div class="inner"></div></div>');
	$('.dot-dot').on('click', function(e){
		const el = $(this),
			index = el.index();
		howto.trigger('to.owl.carousel',[index, 300]);
	});

	howto.owlCarousel({
	    loop:true,
	    nav:false,
	    dots:false,
	    mouseDrag:true,
	    touchDrag:true,
	    items:1,
	    autoplay:true,
	    autoplayTimeout:4000,
	    onInitialized: function(event){
	    	console.log(event);
	    	$('.dot-dot').eq(0).addClass('active');
	    },
	    onTranslate: moveBar,
	    onTranslated: function(event){

	    }
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

	function moveBar(event){
		const el = howto,
			items = event.item.count,
    		item = event.item.index,
    		dots = $('.dot-nav'),
    		bar = $('.bar');
    	console.log(item);
    	if(item == 2){
    		$('.dot-dot').removeClass('active');
    		dots.find('.dot-dot').eq(0).addClass('active');
    		bar.css('width','0%');
    	} else if(item == 3){
    		$('.dot-dot').removeClass('active');
    		dots.find('.dot-dot').eq(0).addClass('active');
    		dots.find('.dot-dot').eq(1).addClass('active');
    		bar.css('width','42%');
    	} else if(item == 4){
    		$('.dot-dot').removeClass('active');
    		dots.find('.dot-dot').eq(0).addClass('active');
    		dots.find('.dot-dot').eq(1).addClass('active');
    		dots.find('.dot-dot').eq(2).addClass('active');
    		bar.css('width','72%');
    	} else if(item == 5){
    		$('.dot-dot').removeClass('active');
    		dots.find('.dot-dot').eq(0).addClass('active');
    		dots.find('.dot-dot').eq(1).addClass('active');
    		dots.find('.dot-dot').eq(2).addClass('active');
    		dots.find('.dot-dot').eq(3).addClass('active');
    		bar.css('width','100%');
    	}
	}

})(jQuery);