<?

session_start();

$host = 'localhost';
$db_user = 'root';
$db_password ="";
$db_name = "sql-test"; //user DB

$dbcon = new mysqli($host, $db_user, $db_password, $db_name);

function mq($sql){
    global $dbcon;
    return $dbcon->query($sql);
}

function page($url){
    echo "<script>
            location.href=\"$url\";
          </script>";
}

function fun($name){
    echo "<script>{$name}</script>";
}
?>