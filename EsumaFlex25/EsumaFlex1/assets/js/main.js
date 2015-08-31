jQuery(document).ready(function(){
    
    //hide all tabs first
    $('ul.expandables li').find('div.answer-wrap').hide();
    //$('ul.expandables li.list1').find('div.answer-wrap').show();
    
    //also doing same for the sublists
    $('ul.expandables li.child-list').find('.child-answer').hide();
    //$('ul.expandables li.child1').find('.child-answer').show();
    
	//$('.child1 .child-question span.bg').css('background','url(http://esuma.mobilizeme.ca/Esuma/assets/images/open-mini-triangle.png) 0 0 no-repeat');
        
        //$('.list1 .question span.bg-top').css('background','url(http://esuma.mobilizeme.ca/Esuma/assets/images/small-triangle.png) 0 0 no-repeat');
	
		
		
    //events
    $('ul.expandables li').find('p.question').click(function(){
        //$('ul.expandables li').find('div.answer-wrap').slideToggle('slow');
        $(this).parent().find('div.answer-wrap').slideToggle('slow');
        $(this).find('span.bg-top').toggleClass('closed');
		$(this).find('span.bg-top').toggleClass('opened');
                
                $('p.question').find('span.bg-top').not($(this).find('span.bg-top')).addClass('closed').removeClass('opened');
		$('div.answer-wrap').not($(this).parent().find('div.answer-wrap')).slideUp('slow');
        //$('p.question').find('span.bg-top').css('background','url(http://esuma.mobilizeme.ca/Esuma/assets/images/BigRedTriangle.png) 0 0 no-repeat');
		//$(this).find('span.bg-top').css('background','url(http://esuma.mobilizeme.ca/Esuma/assets/images/small-triangle.png) 0 0 no-repeat');
    });


    $('li.child-list').find('p.child-question').click(function(){
        
        //$('.child-answer').animate('slow').slideUp('slow');
        $(this).parent().find('.child-answer').slideToggle('slow');
        
        $(this).find('span.bg').toggleClass('closed-mini');
		$(this).find('span.bg').toggleClass('opened-mini');
		$('p.child-question').find('span.bg').not($(this).find('span.bg')).addClass('closed-mini').removeClass('opened-mini');
		$('p.child-answer').not($(this).parent().find('p.child-answer')).slideUp('slow');
		
	//$('p.child-question').find('span.bg').css('background','url(http://sapeginlabs.com/1welcome/assets/images/close-mini-triangle.png) 0 0 no-repeat');
	//$(this).find('span.bg').css('background','url(http://sapeginlabs.com/1welcome/assets/images/open-mini-triangle.png) 0 0 no-repeat');
    });
});