<?
    $root = $_SERVER['DOCUMENT_ROOT'];
    include_once $root."/ex_join/db.php";
    $num = $_GET['num'];
    $query = "select *from join_ where num='$num'";
    // desc - 내림차순, asc - 오름차순
    // where num = '4'; (num값이 4인 것만 조회)
    $result = mysqli_query($dbConnect, $query);
    $row = mysqli_fetch_array($result);
?>
<?=$row['id']?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form name="join" action="request_ok.php" method="get"> <!-- method 기본값 : get enctype="multipart/form-data"-->
        <ul>
            <li><input type="text" name="id" placeholder="id" value="<?=$row['id']?>"></li>
            <li><input type="password" name="pw" placeholder="pw" value="<?=$row['pw']?>"></li>
            <li>

                <?
                    $sex = $row['sex'];
                    $sex == 'm' ? $m='checked' : $m="";
                    $sex == 'f' ? $f='checked' : $f="";
                ?>

                남<input type="radio" name="s" value="m" <?=$m?>>
                여<input type="radio" name="s" value="f" <?=$f?>>
            </li>
            <li>
                <select name="city" id="">

                <?
                    $city = ['서울','인천','경기'];
                    foreach($city as $value){
                        $value == $row['city'] ? $sel = 'selected' : 
                        $sel="";
                        //배열값  데이터베이스 값            
                ?>

                    <option <?=$sel?>><?=$value?></option>
                    <!-- <option>인천</option> -->
                <? } ?>
                </select>
            </li>
            <li>
           
                유입경로? <br>
                검색<input type="checkbox" value="검색" name="what[]">
                지인<input type="checkbox" value="지인" name="what[]">
                광고<input type="checkbox" value="광고" name="what[]">

                <script>
                    function entry(v){
                        var what = document.querySelectorAll("input[name='what[]'")
                        for(var i=0;i<what.length;i++){
                            if(v == what[i].value){
                                what[i].checked = 'checked';
                            }
                        }
                    }
                </script>
                <?
                    $what = explode('/',$row['what']); //검색 , 지인
                    foreach($what as $value){
                        echo "<script>entry(\"$value\");</script>";
                    }
                ?>
            </li>
            <li>
                <textarea name="content" id="" cols="30" rows="10">
                <?=$row['content']?>
                </textarea>
            </li>
            <li>
                <input type="submit" value="수정하기">
            </li>
        </ul>

        <input type="hidden" name="mode" value="modify">
        <input type="hidden" name="num" value="<?=$row['num']?>">
    </form>
</body>
</html>