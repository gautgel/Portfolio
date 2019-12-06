<?php 
session_start();

if($_SESSION["connexion"] == 0){
    header("Location:session.php");
    exit();
}

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

$sql = "SELECT id, first_name, last_name, email, mess FROM mess";
$result = $bdd->query($sql);

$result->setFetchMode(PDO::FETCH_OBJ);

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <title>Admin</title>
</head>
<body>
<style>
    body
    {
        background: rgba(244, 244, 244);
    }
    p
    {
        text-align: center;
        color: #3f51b5;
        font-weight: 600;
        font-size: 30px;
    }
    table,td,th
    {
        color: #3f51b5;
        border: 2px solid #3f51b5;
        border-collapse: collapse;
    }
    .button
    {
        position: absolute;
        margin-top: 50px;
    }
</style>
    <div class="container">
        <p>
            Liste des messages et coordonnées
        </p>
        <table class="highlight striped responsive-table">
            <thead>
                <tr>
                    <th>
                        id
                    </th>
                    <th>
                        Name
                    </th>
                    <th>
                        Email
                    </th>
                    <th>
                        Message
                    </th>
                </tr>
            </thead>
            <tbody>
                <?php
                    while($row = $result->fetch()) {
                    echo "<tr><td>" . $row->id. "</td><td>" . $row->first_name . " " . $row->last_name . "</td><td>". $row->email . "</td><td>" . $row->mess ."</td></tr>";
                    }
                ?>
            </tbody>
        </table>
        <a class="button indigo btn waves-effect" href="logout.php">Déconnexion</a>
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
</body>
</html>
