<!DOCTYPE html>
<html>
<body>
<?php
	
	$server='localhost';
	$user='root';
	$pass='';
	
	$conn=mysqli_connect($server,$user,$pass);
	
	if($conn)
	{	echo "Connection successful <br>";
	}
	else
	{	echo "Connection not successful:";
		echo $conn->error;
	}
	
	$sql1="CREATE DATABASE CUSTOMER_DETAILS";
	if(mysqli_query($conn,$sql1))
	{	echo "Database created <br>";
	}
	else
	{	echo "Database not created ";
		echo $conn->error."<br>";
	}
?>
</body>
</html>