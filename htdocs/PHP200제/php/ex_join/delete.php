<?
    $root = $_SERVER['DOCUMENT_ROOT'];
    include_once $root."/ex_join/db.php";
    $num = $_GET['num'];
    $query = "delete *from join_ where num='$num'";
    // desc - 내림차순, asc - 오름차순
    // where num = '4'; (num값이 4인 것만 조회)
    $result = mysqli_query($dbConnect, $query);
    
    echo "<script>
        location.href='index.php';
    </script>";
?>

