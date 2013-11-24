$(function() {
	
	// Call the plugin

	
	$('#main').tumblrNewsTicker({
		time: 5000,
		title:  '#Team1',
		tag: ' '
	});	

	$('#main2').tumblrNewsTicker({
		time: 5000,
		title:  '#Team2',
		tag: ' '
	});

	
				
});

$(document).ready(function(){
	$('#Group1-Btn').click(function(){
		var GroupOneName = $('#Group1-Input').val();
		console.log(GroupOneName);

		var tumblrUrl="http://api.tumblr.com/v2/tagged?tag=gif";
		console.log(tumblrUrl);

		$("#main .tn-container").remove();

		$('#main').tumblrNewsTicker({
			time: 5000,
			title:  GroupOneName,
			tag: GroupOneName
		});	


	});

		$('#Group2-Btn').click(function(){
		var GroupTwoName = $('#Group2-Input').val();
		console.log(GroupTwoName);

		var tumblrUrl="http://api.tumblr.com/v2/tagged?tag=gif";
		console.log(tumblrUrl);

		$("#main2 .tn-container").remove();


		$('#main2').tumblrNewsTicker({
			time: 5000,
			title:  GroupTwoName,
			tag: GroupTwoName
		});

	});


});