<?php

    include 'db.php';
    
    $name = $_GET["name"]; //url에서 가져오기
    $tel = $_GET["tel"];
    $email = $_GET["email"];
    $date = date("y-m-d");
    // echo $name;
    // echo $tel;
    // echo $email;
    // echo $date;

    //memeber라는 db에 값 집어넣기
   $query = "INSERT INTO member( 
       name, tel, email, date
   ) VALUES (
       '$name','$tel','$email','$date'
   )";
   mysqli_query($dbConnect,$query);
    //script로 불러오기
   echo "<script>location.href='index.php?name=$name';</script>"
?>

