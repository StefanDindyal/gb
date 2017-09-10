!(function($){

	// homepage
	const features = $('#featuresSlider'),
		howto = $('#howtoSlider'),
		toggle = $('.toggle-box .toggle'),
		howtoCount = howto.find('img').length,
		timing = 300;

	// features slider Start
	features.bxSlider({
		mode: 'vertical',
		pager: false,
		controls: false,
		touchEnabled: false		
	});
	toggle.first().addClass('selected').prev().addClass('noBorder');		
	toggle.first().find('.toggle-body').css({height:toggle.first().find('.inner').outerHeight()});
	toggle.on('click', function(e){
		const 
		el = $(this),
		selected = $('.toggle.selected').index(),
		index = el.index(),
		innerHeight = el.find('.inner').outerHeight();
		features.goToSlide(index);
		toggle.removeClass('selected noBorder');
		toggle.find('.toggle-body').animate({height:0},{duration:timing,queue:false});
		el.addClass('selected').prev().addClass('noBorder');		
		el.find('.toggle-body').animate({height:innerHeight},{duration:timing,queue:false});						
	});
	// features slider End

	// howto slider Start
	howto.parent().append('<div class="dot-nav"><div class="inner"></div><div class="navOver"><div class="inner"></div></div><div class="bar"><div class="inner"></div></div></div>');
	for(i=0; i< howtoCount; i++){
		$('.dot-nav > .inner, .dot-nav .navOver .inner').append('<div class="dot-dot"><span></span></div>');	
	}
	howto.bxSlider({
		mode: 'horizontal',
		pager: false,
		controls: false,
		touchEnabled: false,
		auto: true,
		pause: 4000,
		onSliderLoad: function(){
			$('.dot-dot').eq(0).addClass('active');
		},
		onSlideBefore: function($slideElement, oldIndex, newIndex){
			moveBar($slideElement, oldIndex, newIndex);
		}
	});
	$('.dot-dot').on('click', function(e){
		const el = $(this),
			index = el.index();
		howto.goToSlide(index);
	});
	function moveBar($slideElement, oldIndex, newIndex){
		const el = howto,
    		item = newIndex,
    		dots = $('.dot-nav'),
    		bar = $('.bar');
    	if(item == 0){
    		$('.dot-dot').removeClass('active');
    		dots.find('.dot-dot').eq(0).addClass('active');
    		bar.css('width','0%');
    	} else if(item == 1){
    		$('.dot-dot').removeClass('active');
    		dots.find('.dot-dot').eq(0).addClass('active');
    		dots.find('.dot-dot').eq(1).addClass('active');
    		bar.css('width','42%');
    	} else if(item == 2){
    		$('.dot-dot').removeClass('active');
    		dots.find('.dot-dot').eq(0).addClass('active');
    		dots.find('.dot-dot').eq(1).addClass('active');
    		dots.find('.dot-dot').eq(2).addClass('active');
    		bar.css('width','72%');
    	} else if(item == 3){
    		$('.dot-dot').removeClass('active');
    		dots.find('.dot-dot').eq(0).addClass('active');
    		dots.find('.dot-dot').eq(1).addClass('active');
    		dots.find('.dot-dot').eq(2).addClass('active');
    		dots.find('.dot-dot').eq(3).addClass('active');
    		bar.css('width','100%');
    	}
	}
	// howto slider End

})(jQuery);