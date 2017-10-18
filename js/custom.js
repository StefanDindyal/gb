!(function($){

	const 	
	timing = 300;

	// homepage Start
	if($('.homePage').length){		
		const 
		slideTimer = [12000,0,0,0],
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
			autoStart: false,		
			onSlideBefore: function($slideElement, oldIndex, newIndex){
				transit(newIndex, [features], toggle);
			},
			onSlideAfter: function($slideElement, oldIndex, newIndex){
				pauseForVid(newIndex, features, slideTimer);
			},
			onSliderLoad: function(currentIndex){			
				autoPlay(currentIndex);
				pauseForVid(0, features, slideTimer);				
			}
		});		
		setUp([features], toggle);		
		function pauseForVid(current, slider, wait) {
	    	const
	    	vid = current;
	    	slider.stopAuto();
	    	if(slider.find('li[aria-hidden="false"] video').length){
	    		console.log('stop'+wait[vid]);	    		
	    		setTimeout(function(){
					slider.startAuto();
				}, wait[vid]);
	    	} else {
	    		slider.startAuto();
	    	}
	    }
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
				if($('.modeA .toggle-box .toggle.selected').next().length == 0){					
					topicSwitch();
				}
				transit(newIndex, [featuresA, mobileA], toggleA);
			},
			onSlideAfter: function($slideElement, oldIndex, newIndex){
								
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
			auto: false,
			pause: 4000,
			autoHover: true,		
			onSlideBefore: function($slideElement, oldIndex, newIndex){
				if($('.modeB .toggle-box .toggle.selected').next().length == 0){
					topicSwitch();
				}
				transit(newIndex, [featuresB, mobileB], toggleB);
			},
			onSlideAfter: function($slideElement, oldIndex, newIndex){
								
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
		$('.switchA, .switchB, .moveText').on('click', function(e){
			topicSwitch();
		});		
		function topicSwitch(){
	    	if($('.transition, .moveText').hasClass('out')){
	    		$('.transition, .moveText').removeClass('out');
	    		featuresB.stopAuto();
				featuresA.startAuto();
	    		transit(0, [featuresA, mobileA], toggleA);	
	    	} else {
	    		$('.transition, .moveText').addClass('out');
	    		featuresA.stopAuto();
				featuresB.startAuto();
	    		transit(0, [featuresB, mobileB], toggleB);
	    	}		
	    }
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

})(jQuery);