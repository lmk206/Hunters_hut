<?
//INSERT
    include_once
    $_SERVER["DOCUMENT_ROOT"]."/test/db.php";

    $num = $_POST['num'];
    $name = $_POST['name'];
    $email = $_POST['email'];
    $tel = $_POST['tel'];
    $job = $_POST['job'];

        
    $query = "INSERT INTO biz(
        name,email,tel,job) VALUES(
        '$name','$email','$tel','$job')";
    
    mq($query);

    page('list.php');

?>