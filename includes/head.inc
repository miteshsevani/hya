    <meta charset="utf-8"> 
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">

	<!-- Optional theme -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap-theme.min.css">
  
  	<meta name="Description" content="Supplementary classes in English, Maths, Gujarati, Sanskrit and Yoga in the Royal Borough of Greenwich." />
	<link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon">      
	<link rel="stylesheet" href="css/hya.css">  	

	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
	
	<script>	
	
		$(document).ready(function(){
			$("ul.subnav").hide();
	
			$("li.about").hover(function() {
				$("ul.subnav").show();
			});
	
			$("li.about").mouseleave(function() {
				$("ul.subnav").hide();
			});
			
		});

		// Show tooltips
		$(document).ready(function(){
			$('[data-toggle="tooltip"]').tooltip(); 
		});
		
	</script>