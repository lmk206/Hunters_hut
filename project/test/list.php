<?
    include_once $_SERVER["DOCUMENT_ROOT"]."/test/db.php";
    
?>

<!DOCTYPE html>
<html>
<head>
<title>Min Test</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <link href="asset/css/main.css" type=text/css rel=stylesheet>
</head>
<body>

<article class="talentList">
    <h2>연예인 리스트</h2>
    <ul>
       <?
            $query = "select * from biz order by num desc";
            $result = mq($query);
            while($row = mysqli_fetch_array($result)){
        ?>
        <li>
            <code><?=$row['num']?></code>
            <code><?=$row['name']?></code>
            <code><?=$row['email']?></code>
            <code><?=$row['tel']?></code>
            <code><?=$row['job']?></code>
            <a href="delete.php?num=<?=$row['num']?>" class=del>[삭제]</a>    
        </li>
   <? } ?>
    </ul>
    <a href="insert.php" class="btn">[등록]</a>
</article>

</body>
</html>