<?php
session_start();
//$_SESSION['user'] = 'damianS7';
//unset($_SESSION['user']);
//echo $_SESSION['user'];
if(empty($_SESSION['user'])) {
	die('Invalid access!!!');
}


die('Welcome!');
?>