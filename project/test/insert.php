<?

    include_once
    $_SERVER["DOCUMENT_ROOT"]."/test/db.php";

?>
   
<!DOCTYPE html>
<html>
<head>
<title>SQL</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
</head>
<body>
<style>
    *{box-sizing: border-box;}
    ul,li{list-style:none;margin:0;padding:0;}
    article{width:600px; margin:100px auto;}
    li{padding:10px 0; border-top:1px solid #ddd;}
    input{background:#eee;padding:10px;border:1px solid #ddd; width:100%;}
    .btn{background:#000; color:#fff;}
</style>

<form name='act' action="insert_res.php" method="post">
    <article>
        <h2>연애인 프로필 등록</h2>
        <ul>
            <li><input type="text" name="name" placeholder="Name"></li>
            <li><input type="text" name="email" placeholder="Email"></li>
            <li><input type="text" name="tel" placeholder="Tel"></li>
            <li><input type="text" name="job" placeholder="Job"></li>
            <li><input type="submit" value="등록" class="btn"></li>
        </ul>
    </article>    
</form>

</body>
</html>