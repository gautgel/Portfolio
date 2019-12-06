<?php 
session_start();
$_SESSION["connexion"]=0;
$_SESSION["erreur"]=false;



if(isset($_POST["user"]) AND isset($_POST["mdp"])){
    if($_POST["user"] == "gautgel" AND $_POST["mdp"] == "ghfrctyf346"){
        $_SESSION["connexion"]=1;
        header("Location:heyheyhoho.php");
    }
    else{
        $_SESSION["erreur"]=true;
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="css/style.css" rel="stylesheet">
    <link href="css/mediaquerries.css" rel="stylesheet">
    

    <title>Login page</title>
</head>
<body>

    <main class="background">
        <form action="session.php" class="formulaire" method="POST">
            <h1>S'identifier</h1>
            <?php 
                    if($_SESSION["erreur"] == true){
                    echo "<p class='erreur'>Veuillez réessayer, mot de passe ou nom incorrect.</p>";
                }
            ?>
            <h2>Votre nom</h2>
            <input class="login" name="user" type="textarea"/>
            <h2>Votre mot de passe</h2>
            <input class="login" name="mdp" type="password"/>
            <input class="boutton" type="submit" value="Connectez-Vous"/>
        </form>
        
    </main>
    
</body>
</html>