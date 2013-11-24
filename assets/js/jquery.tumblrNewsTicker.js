(function($) {
	
	var defaults = {
		time:	5000,
		title:	'gif',
		tag:	'gif'
	};
	
	$.fn.tumblrNewsTicker = function(options) {
		
		// Handle the default settings
		var settings = $.extend({}, defaults, options);
		
		// Remove trailing slashes and Assemble the Tumblr API URL 
		var url = "http://api.tumblr.com/v2/tagged?tag="+ settings.tag;
		console.log(url);


		
		this.append('<div class="tn-container">\
						<h2 class="tn-header">'+ settings.title +'</h2>\
						<div class="tn-data"><ul></ul></div>\
						<div class="tn-footer"></div>\
					</div>');

		var postList = this.find('.tn-data ul');

		myJsonpCallback = function(data)
		{
		    console.log(data.response);


			$.each(data.response, function(i,response){ 
				
				var title = response['slug'].split("-").join(" ");
					if (title.length == 0){
					title = 'untitled';
					console.log("untitled produced");
				}
			

				
				// Remove any HTML tags
				

				// Calculate the human-readable relative time
				//var time = $.timeago( new Date( posts['unix-timestamp'] * 1000 ) );
				
				postList.append('<li class="tn-post">\
									<a href="' + response.short_url + '" target="_blank">'+title+' </a>\
								</li>');
			});


	
			// Show the first 5 news items
	
			postList.find('li')
					.slice(0,5)
					.show()
					.last()
					.addClass('no-border');

			   

			//Rotate posts every settings.time ms 
			//(only if they are more than the limit)
			
			if(data.response.length > 5) {
					
				setInterval(function() {
						
					var posts =  postList.find('li');
					
					posts.first().slideUp('slow', function() {
						$(this).appendTo(postList);
					})
					
					posts.eq(4).removeClass('no-border');
					posts.eq(5).slideDown('slow').addClass('no-border');
							
				}, settings.time);
				

			}
		  }
		
		//Get the posts as json	
		$.ajax({
		  dataType: "jsonp",
		  url: url,
		  data : {
		  	api_key:"pTMA1YP22XTOARqmcwHDNSJZmXMbwYNGqh4H6RBLlyuCWM06S3",
		  	callback : "myJsonpCallback"
		  }
		  
		  		
		});
		
	 	return this;
	 	
	};
})(jQuery);