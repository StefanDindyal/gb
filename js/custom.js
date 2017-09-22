!(function($){

	const 	
	timing = 300;

	// homepage Start
	if($('.homePage').length){		
		const 
		features = $('#featuresSlider'),
		toggle = $('.toggle-box .toggle');
		features.bxSlider({
			mode: 'vertical',
			pager: false,
			controls: false,
			touchEnabled: false,
			video: true,
			auto: true,
			pause: 4000,
			autoHover: true,		
			onSlideBefore: function($slideElement, oldIndex, newIndex){
				transit(newIndex, [features]);
			},
			onSliderLoad: function($slideElement, oldIndex, newIndex){			
				autoPlay($slideElement, oldIndex, newIndex);
			}
		});
		setUp([features]);		
	}
	// home page End

	// platform page Start
	if($('.platformPage').length){
		const 
		featuresA = $('.modeA #featuresASlider'),
		mobileA = $('.modeA #mobileASlider'),
		featuresB = $('.modeB #featuresBSlider'),
		mobileB = $('.modeB #mobileBSlider'),
		toggleA = $('.modeA .toggle-box .toggle'),
		toggleB = $('.modeB .toggle-box .toggle');
		featuresA.bxSlider({
			mode: 'vertical',
			pager: false,
			controls: false,
			touchEnabled: false,
			video: true,
			auto: true,
			pause: 4000,
			autoHover: true,		
			onSlideBefore: function($slideElement, oldIndex, newIndex){
				transit(newIndex, [featuresA, mobileA], toggleA);
			},
			onSliderLoad: function($slideElement, oldIndex, newIndex){			
				autoPlay($slideElement, oldIndex, newIndex);
			}
		});
		mobileA.bxSlider({
			mode: 'vertical',
			pager: false,
			controls: false,
			touchEnabled: false,
			video: true,
		});
		featuresB.bxSlider({
			mode: 'vertical',
			pager: false,
			controls: false,
			touchEnabled: false,
			video: true,
			auto: true,
			pause: 4000,
			autoHover: true,		
			onSlideBefore: function($slideElement, oldIndex, newIndex){
				transit(newIndex, [featuresB, mobileB], toggleB);
			},
			onSliderLoad: function($slideElement, oldIndex, newIndex){			
				autoPlay($slideElement, oldIndex, newIndex);
			}
		});
		mobileB.bxSlider({
			mode: 'vertical',
			pager: false,
			controls: false,
			touchEnabled: false,
			video: true,
		});
		setUp([featuresA], toggleA);
		setUp([featuresB], toggleB);
		$('.switchA').on('click', function(e){
			$('.transition, .moveText').addClass('out');
			transit(0, [featuresB, mobileB], toggleB);
		});
		$('.switchB').on('click', function(e){
			$('.transition, .moveText').removeClass('out');
			transit(0, [featuresA, mobileA], toggleA);
		});
	}
	// platform page End

	function setUp(slider, cap){
		const
		toggle = cap;
		toggle.first().addClass('selected').prev().addClass('noBorder');		
		toggle.first().find('.toggle-body').css({height:toggle.first().find('.inner').outerHeight()});
		toggle.on('click', function(e){
			const 
			el = $(this),
			index = el.index();
			transit(index, slider, cap, 1);								
		});
	}
	function transit(index, slider, cap, click){
		const 
		toggle = cap,
		el = toggle.eq(index),
		features = slider,		
		innerHeight = el.find('.inner').outerHeight();
		features.forEach(function(feature){
			feature.goToSlide(index);
			if(click){
				feature.stopAuto();
				setTimeout(function(){
					feature.startAuto();
				}, 7000);
			}
		})
		toggle.removeClass('selected noBorder');
		toggle.find('.toggle-body').animate({height:0},{duration:timing,queue:false});
		el.addClass('selected').prev().addClass('noBorder');		
		el.find('.toggle-body').animate({height:innerHeight},{duration:timing,queue:false});
	}
	function autoPlay($ele, from, to) {
      const 
      vid = document.querySelector('#vid');
      if (vid) {
        vid.play();
      }
    }

	// howto slider Start
	// const howtoCount = howto.find('img').length, howto = $('#howtoSlider');
	// howto.parent().append('<div class="dot-nav"><div class="inner"></div><div class="navOver"><div class="inner"></div></div><div class="bar"><div class="inner"></div></div></div>');
	// for(i=0; i< howtoCount; i++){
	// 	$('.dot-nav > .inner, .dot-nav .navOver .inner').append('<div class="dot-dot"><span></span></div>');	
	// }
	// howto.bxSlider({
	// 	mode: 'horizontal',
	// 	pager: false,
	// 	controls: false,
	// 	touchEnabled: false,
	// 	auto: true,
	// 	pause: 4000,
	// 	onSliderLoad: function(){
	// 		$('.dot-dot').eq(0).addClass('active');
	// 	},
	// 	onSlideBefore: function($slideElement, oldIndex, newIndex){
	// 		moveBar($slideElement, oldIndex, newIndex);
	// 	}
	// });
	// $('.dot-dot').on('click', function(e){
	// 	const el = $(this),
	// 		index = el.index();
	// 	howto.goToSlide(index);
	// });
	// function moveBar($slideElement, oldIndex, newIndex){
	// 	const el = howto,
 //    		item = newIndex,
 //    		dots = $('.dot-nav'),
 //    		bar = $('.bar');
 //    	if(item == 0){
 //    		$('.dot-dot').removeClass('active');
 //    		dots.find('.dot-dot').eq(0).addClass('active');
 //    		bar.css('width','0%');
 //    	} else if(item == 1){
 //    		$('.dot-dot').removeClass('active');
 //    		dots.find('.dot-dot').eq(0).addClass('active');
 //    		dots.find('.dot-dot').eq(1).addClass('active');
 //    		bar.css('width','42%');
 //    	} else if(item == 2){
 //    		$('.dot-dot').removeClass('active');
 //    		dots.find('.dot-dot').eq(0).addClass('active');
 //    		dots.find('.dot-dot').eq(1).addClass('active');
 //    		dots.find('.dot-dot').eq(2).addClass('active');
 //    		bar.css('width','72%');
 //    	} else if(item == 3){
 //    		$('.dot-dot').removeClass('active');
 //    		dots.find('.dot-dot').eq(0).addClass('active');
 //    		dots.find('.dot-dot').eq(1).addClass('active');
 //    		dots.find('.dot-dot').eq(2).addClass('active');
 //    		dots.find('.dot-dot').eq(3).addClass('active');
 //    		bar.css('width','100%');
 //    	}
	// }
	// howto slider End

})(jQuery);