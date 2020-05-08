<?
    $root = $_SERVER['DOCUMENT_ROOT'];
    include_once $root."/ex_join/db.php";

    $id = $_GET['id'];
    $pw = $_GET['pw'];
    $s = $_GET['s'];
    $city = $_GET['city'];
    $what = implode('/',$_GET['what']); //implode 배열값의 string을 묶어 보여주는 함수
    $content = $_GET['content'];

    echo "<pre>";
    echo $id."<br>";
    echo $pw."<br>";
    echo $s."<br>";
    echo $city."<br>";
    echo $what."<br>";
    echo nl2br($content);

    if(!isset($_GET['mode'])){
        $query = "INSERT INTO join_(
            id, pw, sex, city, what, content
            ) VALUES(
            '$id','$pw','$s','$city','$what','$content'
            )";    
    }else{
        $mode = $_GET['mode'];
        $num = $_GET['num'];
        //update 테이블이름 set 레코드 = 값..
        $query = "update join_ set 
        id='$id',pw='$pw',sex='$s',city='$city',what='$what',content='$content' where num='$num'";
    }
    

        mysqli_query($dbConnect, $query);

        echo "<script>location.href = 'index.php';</script>"

    // foreach($what as $value){
    //     $w .= $value."/";
    //     echo "<br>".$w;
    // }

?>