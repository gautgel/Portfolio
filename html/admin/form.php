<?php

session_start();

$rootUser = "gautgel";
$rootPass = "2IygQG425UhDwpR";

try
{
    $bdd = new PDO('mysql:host=db;dbname=gautgel;charset=utf8', $rootUser, $rootPass);
    $bdd->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);
}
catch (Exception $e)
{
    die('Erreur : ' . $e->getMessage());
}


foreach($_POST as $post => $value){
    $_SESSION[$post]=htmlspecialchars($value);
}

$last = $_SESSION['last_name'];
$first = $_SESSION['first_name'];
$email = $_SESSION['e_mail'];
$mess = $_SESSION['message'];


if(preg_match("#^[a-zA-Z\d._-]+@[a-zA-Z0-9]{3,}.[a-zA-Z]{2,5}$#", $_SESSION['e_mail']) && isset($last) && isset($first) && isset($mess))
{
    $sql = "INSERT INTO mess (last_name, first_name, email, mess) VALUES (?,?,?,?)";
    $stmt= $bdd->prepare($sql);
    $stmt->execute([$last, $first, $email, $mess]);
    $_SESSION['last_name']=null;
    $_SESSION['first_name']=null;
    $_SESSION['e_mail']=null;
    $_SESSION['message']=null;
    $_SESSION["correct"]="Message Envoyé";
    header("Location: /index.php#contact");
}
else
{
    $_SESSION["error"]="Veuillez verifier vos champs";
    header("Location:/index.php#contact");
}


?>
