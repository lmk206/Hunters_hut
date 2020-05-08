<?
    $root = $_SERVER['DOCUMENT_ROOT'];
    include_once $root."/file/db.php";  

    //upload_ok.php
    $file = $_FILES['upload'];
    // echo "<pre>";
    // var_dump($file);
    // echo $file['name'][0];
    foreach($file['name'] as $key => $arr){
                 
            $fileName = $file['name'][$key];
            $tmp = $file['tmp_name'][$key];
            $uploadUrl ='./'.$file['name'][$key];

            move_uploaded_file($tmp,$uploadUrl);
            $name[$key] = $fileName; 
    }

    echo $name[0];
    $query = "insert into files (name,name2) values 
    ('$name[0]','$name[1]');";
    mysqli_query($dbConnect,$query);
    // move_uploaded_file($tmp,$uploadUrl);
    // if(move_uploaded_file($tmp,$uploadUrl)){
    //     echo "업로드 성공";
    // }else{
    //     echo "업로드 실패";
    // };

?>

<img src="<?=$fileName?>" alt="">
