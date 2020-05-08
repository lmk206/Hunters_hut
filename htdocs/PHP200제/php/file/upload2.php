<?
    $root = $_SERVER['DOCUMENT_ROOT'];
    include_once $root."/file/db.php";  
?>

<form action="upload_ok2.php" 
    method="post" 
    enctype="multipart/form-data">
    <input type="file" name="upload[]">
    <input type="file" name="upload[]">
    <input type="submit" name="업로드">
</form>