<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <?
        echo $_GET['name'];
    ?>
    
    <form action="insert.php">
        <input type="text" name="name">
        <input type="text" name="tel">
        <input type="text" name="email">
        
        <input type="submit" value="save">
    </form>
    
    <!--    
        index.php (정보입력창) 
        insert.php (정보수신, DB접속하여 insert 쿼리명령으로 값 추가 
            -->
</body>
</html>
