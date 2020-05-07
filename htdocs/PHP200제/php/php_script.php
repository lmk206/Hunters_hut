<script type ="text/javascript">
    function run(){
        alert("hello world");
    }
    <?="run();"?>
</script>

<?
    $str =10;
    // echo $str;
    function getfile(){
        global $str; //밖의 str이라는 변수를 내부의 str이라는 변수와 맞추어 주기 위해 global을 사용
        $str += 20;
        echo $str;
        // return $str;
    }
    echo "<script>run();</script>"
?>

<script language="javascript">
    function getfile(){
        document.getElementById('aa').innerHTML ="<?=getfile();?>";
    }
</script>
<div id="aa"></div>
<input type="button" value="click me" onclick="getfile()">