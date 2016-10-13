$(document).ready(function(){

    	var menu = $('.navbar');
    	$(window).bind('scroll', function(e){
    		if($(window).scrollTop() > 140){
    			if(!menu.hasClass('open')){
    				menu.addClass('open');
    			}
    		}else{
    			if(menu.hasClass('open')){
    				menu.removeClass('open');
    			}
    		}
    	});
  

  $(".scroll").click(function(event){		
  	event.preventDefault();
  	$('html,body').animate({scrollTop:$(this.hash).offset().top}, 800);
  	
  });
  

  wow = new WOW(
        {
          boxClass:     'wow',      
          animateClass: 'animated', 
          offset:       0,         
          mobile:       false      
        }
      );
      wow.init();


  
});
