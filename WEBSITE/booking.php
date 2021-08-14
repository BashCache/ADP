<!doctype html>
<html>
<body>
<?php
	$carrot=$_POST["carrot"];
	$banana=$_POST["banana"];
	$potato=$_POST["potato"];
	$orange=$_POST["orange"];
	$tomato=$_POST["tomato"];
	
	echo $carrot." ".$banana." ".$potato." ".$orange." ".$tomato;
	
	$conn_db=mysqli_connect($server,$user,$pass,"CUSTOMER_DETAILS");
	$sql5="CREATE TABLE IF NOT EXISTS CUSTOMERORDER (S.NO. AUTO_INCREMENT ,LIST varchar(20),QUANTITY varchar(15),PRICE INT)";
	if(mysqli_query($conn_db,$sql5))
	{	echo "Table created";
	}
	else
	{	echo "Table not created";
		echo $conn_db->error."<br>";
	}
?>
</body>
</html>
