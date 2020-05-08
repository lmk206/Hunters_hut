<?
    $root = $_SERVER['DOCUMENT_ROOT'];
    include_once $root."/file/db.php";  

    $query = "select *from files order by num desc";
    $result = mysqli_query($dbConnect, $query);

    while($row = mysqli_fetch_array($result)){
        $data = "<li><img src="{$row['name']}"></li>"; // {}를 이용하여 문자를 바로 연결해 쓸 수 있다. 
    }
?>
<style>
    img{width:100px;}
</style>
<ul>
    <?=$data?>
</ul>