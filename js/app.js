$(document).ready(function(){
	/*setTimeout(function(){
		$(document).find('table.list').addClass('table table-hover table-striped');	
	},2000 )*/
	

	$('.col-esquerda').css('min-height', $(window).height()+'px');

	$(document).on('click', '.subsectiontoggle', function(){
		var $this = $(this);

		$this.next().slideToggle();

		$('select').select2();
	});


});