$(document).ready(function(){
	
	$(document).on('click', '.triangle-shadow', function(){
		console.log($(this).position());
	});
	$(document).on('click', '.youtube', function() {
		var width = 500;
		var height = 500;
		var left = (screen.width / 2) - (width / 2);
		var top = (screen.height / 2) - (height / 2);
		window.open('https://www.youtube.com/embed/Elvh8WMFGII?autoplay=1', '', 'width=' + width + ', height=' + height + ', top=' + top + ', left=' + left);
	});
	
	var dropdownTimeout, 
		currentIndex,
		IndexCollect = new Array(),
		menuMap = { 0 : 4, 1 : 0, 2 : 8, 3 : 1, 4 : 2, 5 : 3, 6 : 5, 8 : 7 },
		contentWrapHeight = $('.content-wrap').height(),
		activeIndex = 0;
	
	$('#body').on('mouseenter click', '.triangle-wrap', function(){
		$(this).addClass('hover');
	}).on('mouseleave', '.triangle-wrap', function(){
		$(this).removeClass('hover');
	})
	
	$(document).on('click', '.arrow-right', function(e){
		var top = $('#'+$(this).data('id')).position().top;
		var offset = $('#'+$(this).data('id')).index();
		var duration = (2500 * offset) - (((offset * ( offset + 1 )) / 2) * 250);
		duration = duration/10;
		$('html, body').animate({
			scrollTop: top
		}, duration, 'easeOutCubic');
		e.preventDefault();
	});
	
	$('#dropdown-link').click(function(e){
		$('#menu-dropdown-wrap').toggleClass('mobile-visible');
		e.preventDefault();
	});
	
	/*
	$('#up-arrow').mouseenter(function(){
		$('#footer').addClass('expand');
		$(this).hide();
	});
	$('#black-bar').mouseleave(function(){
		$('#footer').removeClass('expand');
		$('#up-arrow').show();
	});
	*/
	
	$('#menu-dropdown, #menu-wrap').hover(function(){
		clearTimeout(dropdownTimeout);
		$('#menu-dropdown-wrap').addClass('hovering');
	}, function(){
		dropdownTimeout = setTimeout(function(){
			$('#menu-dropdown-wrap').removeClass('hovering');
		}, 500);
	});
	$('#menu-float > li > a').hover(function(){
		var text = $(this).text();
		var color = $(this).css('background-color');
		$(this).before('<div class="caption" style="color: '+color+'">'+text+'</div>');
		$(this).prev().fadeIn();
	}, function(){
		$(this).prev().remove();
	});
	$('#menu-float > li > a').click(function(e){
		$('html, body').stop(true, false);
		
		var index = $(this).parent().index();
		var currentIndex = $('#menu-float li.current-menu-item').index();
		var offset = Math.abs(currentIndex - index);
		
		var duration = (2500 * offset) - (((offset * ( offset + 1 )) / 2) * 250);
		
		if(duration == 0) duration = 1000;
		
		if($(window).width() < 501)
			duration = duration/10;
		
		var top = $('.content-wrap').eq(index).position().top;
		if($('body').hasClass('admin-bar'))
	    	top = top - 32;
		/*
		$('html, body').animate({
			scrollTop: top
		}, duration, 'easeOutCubic');
		*/
		$('html, body').animate({
			scrollTop: top
		}, 0, 'easeOutCubic');
		$('#menu-dropdown-wrap').removeClass('mobile-visible');
		$('#menu-float > li').removeClass("current-menu-item").removeClass("current_page_item");
		$(this).parent().addClass("current-menu-item").addClass("current_page_item");
		//console.log("menu_click");
		e.preventDefault();
	});
	$('#menu-navigation > li > a').click(function(e){
		var index = $(this).parent().index();
		$.each(menuMap, function(i, j) {
			if(j == index)
				$('#menu-float > li > a').eq(i).trigger('click');
		});
		e.preventDefault();
	});
	$('#mn-4 > a').click(function(e){
		$('#menu-float > li > a').eq(0).trigger('click');
		e.preventDefault();
	});
	$('#mn-6 > span').click(function(e){
		$('#menu-float > li > a').eq(7).trigger('click');
		e.preventDefault();
	});
	$('#down-arrow').click(function(e){
		var next = $('#menu-float li.current-menu-item').next();
		if(next.hasClass('menu-item'))
			next.find('a').trigger('click');
		e.preventDefault();
	});
	
	$(document).on('click', '#call-for-projects a.collapse', function(e){
		var parent = $(this).parent();
		
		if( ! parent.hasClass('expand')) {
			var current = $('#call-for-projects .bottom .content-main ul > li.expand');
			current.find('.content').stop(true, false).slideUp({start: function(){
				current.removeClass('expand');
			}});
		}
		
		$(this).next('.content').stop(true, false).slideToggle({start: function(){
			parent.toggleClass('expand');
		}});
		
		e.preventDefault();
	});
	$(document).on('click', '#call-for-projects a.sub-collapse', function(e){
		var parent = $(this).parent();
		
		if( ! parent.hasClass('expand')) {
			var current = $('#call-for-projects .bottom .content-main ul.content > li.expand');
			current.find('.sub-content').stop(true, false).slideUp({start: function(){
				current.removeClass('expand');
			}});
		}
		
		$(this).next('.sub-content').stop(true, false).slideToggle({start: function(){
			parent.toggleClass('expand');
		}});
		
		e.preventDefault();
	});
	/*
	$('#up-arrow').click(function(e){
		var prev = $('#menu-float li.current-menu-item').prev();
		if(prev.hasClass('menu-item'))
			prev.find('a').trigger('click');
		e.preventDefault();
	});
	*/
	
	/*
	$(document).on('mouseenter', '.triangle-contain', function(){
		$(this).find('.triangle-content').addClass('hovering');
	});
	$(document).on('mouseleave', '.triangle-contain', function(){
		$(this).find('.triangle-content').removeClass('hovering');
	});
	*/
	
	var scrollTimeOut;
	$(window).scroll(function(e){
		
		clearTimeout(scrollTimeOut);
		
		if($(window).scrollTop() > 30 ) {
			$('#menu-dropdown-wrap').removeClass('visible');
		} else
			$('#menu-dropdown-wrap').addClass('visible');
		
		// var activeIndex = Math.floor( ($(window).scrollTop()+300) / contentWrapHeight);
		
		$(IndexCollect).each(function(index, val){
			if($(window).scrollTop() >= val) {
				activeIndex = index;
			}
		});

		if(currentIndex != activeIndex) {
			var activeEl = $('#menu-float > li:eq('+activeIndex+') > a');
			
			$('#menu-float > .current-menu-item').removeClass('current-menu-item');
			$('#menu-float > li').eq(activeIndex).addClass('current-menu-item');
			$('#menu-navigation > .current-menu-item').removeClass('current-menu-item');
			$('#menu-navigation > li').eq(menuMap[activeIndex]).addClass('current-menu-item');
			
			currentIndex = activeIndex;
		}
		scrollTimeOut = setTimeout(function(){
			var activeEl = $('#menu-float > li:eq('+currentIndex+') > a');
			document.title = activeEl.html();
			//console.log("scroll");
			window.history.pushState({path:activeEl.attr('href')},'',activeEl.attr('href'));
		}, 600);
		
		/*
		if($(window).scrollTop()%contentWrapHeight != 0) {
			scrollTimeOut = setTimeout(function(){
				var top = activeIndex * 900;
				$('html, body').animate({
					scrollTop: top
				}, 1200);
			}, 1200);
		}
		*/
	});
	
	$(document).mousedown(function(e){
		if($(e.target).closest('.menu-item').length == 0)
			$('html, body').stop(true, false);
	}).keydown(function(){
		$('html, body').stop(true, false);
	});
	
	
	$(window).bind('DOMMouseScroll', function(e){
		$('html, body').stop(true, false);
	 }).bind('mousewheel', function(e){
		 $('html, body').stop(true, false);
	 });
	
	loadAllPages();
	customCheckbox();
	
	function customCheckbox() {
		$('.wpcf7-checkbox input').hide();
		$('.wpcf7-checkbox .wpcf7-list-item-label').click(function(){
			$(this).toggleClass('checked');
			$(this).prev().prop('checked', $(this).hasClass('checked'));
		});
	}
		
	function loadAllPages() {
		$.ajax({
			url: url.load_all_pages,
	        data: ({action  : 'load_all_pages'}),
	        success: function(data){
	        	var id = $('.content-wrap').attr('id');
	        	$('#body').html(data);
	        	var els = $('#body > .content-wrap');
	        	$.each(els, function(index) {
	        		if(id == $(this).attr('id')) {
	        			/*
	        			if($('body').hasClass('admin-bar'))
	        				$('html, body').scrollTop($(this).position().top - 32);
	        			else
	        				$('html, body').scrollTop($(this).position().top);
	        			*/
	        			$('#loading').fadeOut();
	        			currentIndex = index;
	        		}
	        	});
	        	
	        	if($(window).height() > 900) {
					contentWrapHeight = $(window).height() - 40;
					$('#body > .content-wrap').css({ 'min-height' : contentWrapHeight + 'px'});
				}
	        	else {
					$('#body > .content-wrap').css({ 'min-height' : '860px'});
					contentWrapHeight = 860;
				}
				
	        	IndexCollect = [];
	        	$('.content-wrap').each(function(){
	        		IndexCollect.push($(this).position().top - 200);
	        	});

	        	$('#menu-float > li > a').eq(currentIndex).click();

	        	/*
	        	var defaultTrianglePosition = $('#'+id+' .triangle-wrap').position();
	        	var defaultTop = defaultTrianglePosition.top;
	        	var defaultLeft = defaultTrianglePosition.left;
	        	
	        	var triangleHolder = $('<div id="triangle-holder" style="left: '+defaultLeft+'; top: '+defaultTop+'"></div>');
	        	$('.triangle-wrap').clone().appendTo(triangleHolder);
	        	$('.triangle-wrap').hide();
	        	$('#body').append(triangleHolder);
	        	triangleHolder.wrap('<div id="triangle-holder-wrap"></div>');
	        	$('#triangle-holder-wrap').wrap('<div id="triangle-holder-wrap-wrap"></div>');
	        	*/
	        }
		});
	}

	$(window).resize(function(){
		if($(window).height() > 900) {
			$('#body > .content-wrap').css({ 'min-height' : $(window).height() + 'px'});
			contentWrapHeight = $(window).height();
		}
		else {
			$('#body > .content-wrap').css({ 'min-height' : '900px'});
			contentWrapHeight = 900;
		}
		IndexCollect = [];
		$('.content-wrap').each(function(){
    		IndexCollect.push($(this).position().top - 200);
    	});
	});

	$('#close-popup').click(function(){
		$('#popup-wrap').removeClass('show');
	});
	$(document).on('click', '.popup-link', function(e){
		$('#popup-wrap').addClass('show');
		e.preventDefault();
	});
	$(document).on('click', '.img-preview', function(e){
	/*
		var sender = $("#postcard-form").find("input[name=sfirstname]").val() 
					+ " " 
					+ $("#postcard-form").find("input[name=slastname]").val();
		var reciever = $("#postcard-form").find("input[name=rfirstname]").val() 
						+ " " 
						+ $("#postcard-form").find("input[name=rlastname]").val();
		var message = $("#postcard-form").find("textarea[name=message]").val();
*/
		$(".postcard-from").html("");
		$(".postcard-to").html("");
		$(".postcard-message").html("");
		
		$('.popup-postcard-edit').hide();
		$('.popup-postcard-send').hide();
		$('#popup-wrap-postcard').addClass('show');
		e.preventDefault();
	});
	$(document).on('click', '.popup-postcard-close', function(e){
		$('#popup-wrap-postcard').removeClass('show');
		e.preventDefault();
	});
	$(document).on('click', '.popup-postcard-edit', function(e){
		$('#popup-wrap-postcard').removeClass('show');
		e.preventDefault();
	});
	$(document).on('click', '.popup-postcard-send', function(e){
		$('#popup-wrap-postcard').removeClass('show');
		//$('.btn-submit-postcard').click();
		$('#loading').fadeIn();
		if ( is_postcard_valid() ) {
			$.ajax({
				url: url.load_all_pages,
		        data: ({
		        	action 		: 'esuma_send_postcard',
		        	sFirstname 	: $("#postcard-form").find("input[name=sfirstname]").val(),
		        	sLastname 	: $("#postcard-form").find("input[name=slastname]").val(),
		        	sEmail 		: $("#postcard-form").find("input[name=semail]").val(),
		        	rFirstname 	: $("#postcard-form").find("input[name=rfirstname]").val(),
		        	rLastname 	: $("#postcard-form").find("input[name=rlastname]").val(),
		        	rEmail 		: $("#postcard-form").find("input[name=remail]").val(),
		        	message 	: $("#postcard-form").find("textarea[name=message]").val()
		        }),
		        type: "POST",
		        success: function(data){
		        	clear_postcard_form();
		        	if ( '1' === data ) {
		        		$("#popup-wrap-message").removeClass("error");
		        		$(".body-en #popup-message-content").html("Your card has been sent.  Thank you!");
		        		$(".body-fr #popup-message-content").html("Votre carte postale a été envoyée.  Merci!");
		        		$(".body-sy #popup-message-content").html("ᐃᓗᓪᓕᑐᒉᑦ ᐊᐅᓪᓚᐳᖅ.  ᓇᑯᕐᒦᒃ¡");
		        	} else {
		        		$("#popup-wrap-message").addClass("error");
		        		$("#popup-message-content").html("Error");
		        	}
		        	$('#loading').fadeOut();
					$("#popup-wrap-message").addClass('show');
		        }	        
			});
		}
		else
		{
			$("#popup-wrap-message").addClass("error");

    		$(".body-en #popup-message-content").html("Please fill out all the required fields");

			$(".body-fr #popup-message-content").html("There is invalid input");
			$("#popup-wrap-message").addClass('show');
			$('#loading').fadeOut();
		}<!--:-->
		e.preventDefault();
	});

	function is_postcard_valid ()
	{
		var flag = true;
		var input = $("#postcard-form").find("input");
		
		$(input).each(function(index) {
			if ( '' == $(this).val() )
			{
				$(this).removeClass("valid").addClass("error");
				flag = false;
			}
		});

		var textarea = $("#postcard-form").find("textarea");
		$(textarea).each(function(index) {
			if ( '' == $(this).val() )
			{
				$(this).removeClass("valid").addClass("error");
				flag = false;
			}
		});

		return flag;
	}

	function clear_postcard_form () 
	{
		var input = $("#postcard-form").find("input");
		
		$(input).each(function(index) {
			$(this).val("");
		});

		var textarea = $("#postcard-form").find("textarea");
		$(textarea).each(function(index) {
			$(this).val("");
		});
	}

	$(document).on('click', '.btn-submit-postcard', function(e){
		// show the preview
		if ( is_postcard_valid() ) {
			var sender = $("#postcard-form").find("input[name=sfirstname]").val() 
						+ " " 
						+ $("#postcard-form").find("input[name=slastname]").val();
			var reciever = $("#postcard-form").find("input[name=rfirstname]").val() 
							+ " " 
							+ $("#postcard-form").find("input[name=rlastname]").val();
			var message = $("#postcard-form").find("textarea[name=message]").val();

			$(".postcard-from").html(sender);
			$(".postcard-to").html(reciever);
			$(".postcard-message").html(message);
			
			$('.popup-postcard-edit').show();
			$('.popup-postcard-send').show();
			$('#popup-wrap-postcard').addClass('show');
		}
		else
		{
			$("#popup-wrap-message").addClass("error");
			$("#popup-message-content").html("There is invalid input");
			$("#popup-wrap-message").addClass('show');
			$('#loading').fadeOut();
		}
		e.preventDefault();
	});

	$(document).on('click', '.popup-message-close', function(e){
		$("#popup-wrap-message").removeClass('show');
		e.preventDefault();
	});

	$(document).on('click', '#ongoing-project-page .project-list .text', function(e){
		if ($(this).parent().hasClass("active")) {
			$(this).parent().removeClass("active");
		} else {
			$("#ongoing-project-page .project-item").filter(".active").removeClass("active");
			$(this).parent().addClass("active");
		}
	});

	setTimeout(function () {
		$('.carousel').carousel();
	}, 1000);
	
});

