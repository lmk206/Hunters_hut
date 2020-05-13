<?

    include_once
    $_SERVER["DOCUMENT_ROOT"]."/asset/inc/db.php";

    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $email = $_POST['email'];
    $contents = $_POST['contents'];    
    $date = date('y-m-d');

    // move_uploaded_file은 상대경로로만 가능하다...
    $query = "INSERT INTO contact(
            name, subject, email, contents, date
            ) VALUES(
            '$name','$subject','$email','$contents','$date'
            )";

    mq($query); //쿼리명령문 실행
    //mysqli_query(php내부 method를 호출)
    
    page('list.php');
?>