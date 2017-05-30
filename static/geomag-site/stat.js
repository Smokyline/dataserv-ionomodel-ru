$(document).ready( function(){
	$.ajax({
		url: "/stat/",
	}).done(function(){
	});
	$("[name=form1] [value=Submit]").click( function()
	{
		var event = '';
		if (location.pathname == '/dataprod-down.html')
		{
			event = 'download:' + $("#sel_obs").val();
		}else if (location.pathname == '/dataprod-plot.html')
		{
			event = 'plot:' + $("#sel_obs").val();
		}else if (location.pathname == '/dataserv-abs.html')
		{
			event = 'abs:' + $("#sel_obs").val();
		}
		$.ajax({
			url: "/stat/click.php",
			data: {
				event: event
			}
		}).done( function(){
		});
	});
	
});