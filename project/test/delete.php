<?
    include_once
    $_SERVER["DOCUMENT_ROOT"]."/test/db.php";

//DELETE
    $num = $_GET['num'];
    //삭제
    $query = "delete from biz where num ='$num'";
    mq($query);
   
?>