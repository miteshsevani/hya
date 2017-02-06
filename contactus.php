<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en-GB" lang="en-GB">
<head>
	<title>Hindu Youth Association - Contact Us</title>
	<?php include "includes/head.inc"; ?>
</head>
<body id ="contactus">
	<?php include "includes/header.inc"; ?>
	<?php include "includes/nav.inc"; ?>
	<?php include "includes/banner.inc"; ?>	

	
	<!--div id="breadcrumb">
		<div class="content">
			<p>You are here <span class="arrow">> </span> <a href="#">Contact Us</a></p>
		</div>
	</div-->

	<?php
		// define variables and set to empty values
		$nameErr = $emailErr = $messageErr = "";
		$name = $email = $number = $subject = $message = "";
	
		if ($_SERVER["REQUEST_METHOD"] == "POST") {	
			if (empty($_POST["name"]))
				{$nameErr = "Name is required";
			} else {
				$name = test_input($_POST["name"]);
				// check if name only contains letters and whitespace
				if (!preg_match("/^[a-zA-Z ]*$/",$name)) {
					$nameErr = "Only letters and space allowed"; 
				}		
			}
			
			if (empty($_POST["email"])) {
				$emailErr = "Email is required";
			} else {
				$email = test_input($_POST["email"]);
				// check if e-mail address syntax is valid
				if (!preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/",$email)) {
					$emailErr = "Invalid email format"; 
				}
			}
			
			if (empty($_POST["number"])) {
				$number = "";		
			} else {
				$number = test_input($_POST["number"]);
							
				$number=str_replace(' ', '', $number);
				$number=str_replace('-', '', $number);
				
				if (!ctype_digit($number)) {			
					$numberErr = "Only numbers and space allowed"; 
				}
			}
	
	
			if (empty($_POST["subject"]))
				{$subjectErr = "Subject is required";
			} else {
				$subject = test_input($_POST["subject"]);
				// check if name only contains letters and whitespace
				if (!preg_match("/^[a-zA-Z ]*$/",$subject)) {
					$subjectErr = "Only letters and space allowed"; 
				}		
			}		
			
			if (empty($_POST["message"])) {
				$messageErr = "Message is required";
			} else {
				$message = test_input($_POST["message"]);
			}		
	
	
			if ($nameErr == "" && $emailErr == "" && $messageErr == "" && $subjectErr == "" && $numberErr == "" ) {
	
	
				if (isset($_POST['email'])) {
					$name = $_POST['name'] ;
					$number = $_POST['number'] ;
					$email = $_POST['email'] ;
					$subject = $_POST['subject'] ;
					$message = $_POST['message'] ."\r\n\r\n From: ". $name . "\r\n\r\n Contact number: " . $number;
					$headers = 'From: '.$name." <".$email.">"."\r\n" . 'Reply-To: '.$email;
					
					if (mail("info@hyauk.org", $subject,$message,$headers)) {
						
						$sendmessage = "Namaste " . $name . ",\r\n\r\nThis is an auto reply, please do not respond.\r\n\r\nThank you for your enquiry. A volunteer will be in touch shortly. \r\n\r\nHYA Team";
						$sendheaders = "From: Hindu Youth Association <donotreply@hyauk.org>";
						mail($email, "Auto reply from Hindu Youth Association",$sendmessage,$sendheaders);
					}
				}
	  
				$feedback="Thank you for contacting us. We will be in touch soon.";
				$name = $email = $number = $subject = $message = "";
			}
		
		}
		
		function test_input($data) {
			$data = trim($data);
			$data = stripslashes($data);
			$data = htmlspecialchars($data);
			return $data;
		}	
	?>

	<div class="container">	
		<div class="row">
			<div class="col-sm-8">
				<section id="main">		
					<h1>Contact Us</h1>
		
					<?php if($feedback !=null) { 
					echo "<div class='alert alert-success'>$feedback</div>";
					}?>
					
					<p><span class="error">* Required Field</span></p>
		

						<form id="form-horizontal" method="POST" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>" role="form">			
							<div class="form-group">
								<div class="row">
									<label class="control-label col-sm-3" for="name">Name: <span class="error">*</span></label>
									<div class="col-sm-8">
										<input type="text" id="name" class="form-control" name="name" value="<?php echo $name;?>" /><span class="error"> <?php echo $nameErr;?></span>
									</div>
								</div>
							</div>		
							<div class="form-group">
								<div class="row">							
									<label class="control-label col-sm-3" for="email">Email: <span class="error">*</span></label>
									<div class="col-sm-8">								
										<input type="text" id="email" class="form-control" name="email" value="<?php echo $email;?>" /> <span class="error"><?php echo $emailErr;?></span>
									</div>								
								</div>								
							</div>
							<div class="form-group">
								<div class="row">							
									<label class="control-label col-sm-4" for="contact number">Contact Number:</label>
									<div class="col-sm-8 col-sm-pull-1">								
										<input type="text" id="number" class="form-control" name="number" value="<?php echo $number;?>"/><span class="error"> <?php echo $numberErr;?></span>
									</div>
								</div>								
							</div>		
							<div class="form-group">
								<div class="row">							
									<label class="control-label col-sm-3" for="subject">Subject: <span class="error">*</span></label>
									<div class="col-sm-8">								
										<input type="text" id="subject" class="form-control" name="subject" value="<?php echo $subject;?>" /><span class="error"> <?php echo $subjectErr;?></span>
									</div>
								</div>								
							</div>		
							<div class="form-group">
								<div class="row">							
									<label class="control-label col-sm-3" for="message">Message: <span class="error">*</span></label>
									<div class="col-sm-8">
										<textarea id="message" class="form-control" name="message" rows="8" cols="35"><?php echo $message;?></textarea> <span class="error"><?php echo $messageErr;?></span>
									</div>								
								</div>								
							</div>
							<div class="form-group">
								<div class="row">							
									<div class="col-sm-3 col-sm-push-3">							
										<input class="btn btn-warning" type="submit">
									</div>					
								</div>								
							</div>
						</form>
				</section>				
			</div>
			<?php include "includes/sidebar.inc"; ?>											
		</div>				
	</div>
	<?php include "includes/footer.inc"; ?>	
</body>
</html>