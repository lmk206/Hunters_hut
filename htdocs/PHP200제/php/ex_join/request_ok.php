<?
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


    // foreach($what as $value){
    //     $w .= $value."/";
    //     echo "<br>".$w;
    // }

?>