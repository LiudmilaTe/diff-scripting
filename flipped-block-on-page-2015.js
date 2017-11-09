ready=function(){
	$('.pink, .blue').each(function() {
		$(this).click(function(el) {
			$(el).flip({
				direction: rl,
				speed: 500,
			});
		});
	});

	$('area').each(function() {
		$(this).click(function() {
			var id = $(this).attr('id');
			$('.'+id+'.active,.'+id+'.hidden').toggle();
			return false;
		});
		$(this).on('mouseenter', function(){
			var id = $(this).attr('id');
			console.log(id);
			$('.'+id+'.active,.'+id+'.hidden').toggle();
		});
		$(this).on('mouseleave', function(){
			var id = $(this).attr('id');
			$('.'+id+'.active,.'+id+'.hidden').toggle();
		});
	});

	$('.pink, .blue').each(function() {
		$(this).click(function() {
		   $('.active, .hidden', this).toggle();
		});
		$(this).on('mouseenter', function(){
			$('.active, .hidden', this).toggle();
		});
		$(this).on('mouseleave', function(){
			$('.active, .hidden', this).toggle();
		});
	});
};
