<?php
session_start();
$json = file_get_contents('php://input');
$post = json_decode($json, true);

if(!isset($post['username']) || !isset($post['password'])) {
	$arr = array('error' => 'no username or password received');
}

if($post['username'] == "damianS7" && $post['password'] == '123456') {
	$_SESSION['user'] = 'damianS7';
	$arr = array('success' => 'Login sucess');
} else {
	$arr = array('error' => 'Invalid login');
}	
echo json_encode($arr);
?>