		<?php
			include("header.php");
		?>

<div id="contact_bg" class="main_bg"></div>
<div id="contact">
	<div id="contactInner" class="wrapInner">
		<h2>Contact</h2>
		<section>
			<form action="./complete" method="POST">
				<label for=""><input type="text" placeholder="Name" required="" /></label>
				<label for=""><input type="email" placeholder="Email" required="" /></label>
				<label for=""><input type="text" placeholder="Subject" /></label>
				<label for=""><textarea name="" id="" cols="30" rows="10" required=""></textarea></label>
				<input type="submit" value="Send" />
			</form>
		</section>
	</div>
</div>
<?php
	include("footer.php");
?>
