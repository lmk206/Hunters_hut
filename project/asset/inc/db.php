<?

session_start();

$host = 'localhost';
$db_user = 'root';
$db_password ="";
$db_name = "lmk"; //user DB

$dbcon = new mysqli($host, $db_user, $db_password, $db_name);

/*class mysqli{
    this.query:function(){
        mysqli_query($sql)
    }
}*/

function mq($sql){
    global $dbcon;
    return $dbcon->query($sql);
}

function page($url){
    echo "<script>
            location.href=\"$url\";
          </script>";
}

function back($msg){
    echo "<script>
            alert(\"$msg\");
            history.back();
          </script>";
}

function fun($name){
    echo "<script>
            \"{$name}();\"
          </script>";
}

?>