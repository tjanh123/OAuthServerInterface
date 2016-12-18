$(document).ready(function(){
	$('#toggleMenuLeft').on('click',function(){
		var menu = $('.menu-left');
		if(menu.is(":visible")){
			menu.animate({ width: '0px' }, 300)
				.slideToggle();
			$('#lefter').prop('class','col-xs-1');
			$('#content').prop('class','col-xs-11');
		}
		else{
			menu.slideToggle()
				.animate({ width: '16.666667%' }, 300, function(){
					menu.removeAttr('style');
					$('#lefter').prop('class','col-xs-3');
					$('#content').prop('class','col-xs-9');
				}) 
		}

	})
})