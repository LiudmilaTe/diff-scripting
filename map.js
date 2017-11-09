
ready = function() {
     $('.hidden').each(function() {
            var id = $(this).attr('id');
                  $(this).parent().parent().mouseover(function() {
                  $('#'+id).show();
			$('#'+id+'-link, #'+id+'-term').addClass('hover');
           	  });

           	  $(this).mouseout(function() {
                	$('#'+id).hide();
			$('#'+id+'-link, #'+id+'-term').removeClass('hover');
            	  });

    });
}


//yan's version with onmouseenter
ready = function() {
     $('.hidden').each(function() {
            var id = $(this).attr('id');
                  $(this).parent().parent().mouseenter(function() {
			$('.hover').removeClass('hover');      //new
			$('.hidden').hide();                  //new
                  $('#'+id).show();
			$('#'+id+'-link, #'+id+'-term').addClass('hover');
           	  });

           	  $(this).mouseleave(function() {
                	$('#'+id).hide();
			$('#'+id+'-link, #'+id+'-term').removeClass('hover');
            	  });

    });
}


//veeam-on-tour variant


ready = function() {
	$('.city').each(function() {
		$(this).click(function() {
			var id = $(this).attr('id');
			var framContent = ($('#'+id+'-locat').show());
			tpl.popup.trigger.iframeform(framContent);
		});
	});
}