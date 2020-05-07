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
            <li><input type="text" name="id" placeholder="id"></li>
            <li><input type="password" name="pw" placeholder="pw"></li>
            <li>
                남<input type="radio" name="s" value="m">
                여<input type="radio" name="s" value="f">
            </li>
            <li>
                <select name="city" id="">
                    <option>서울</option>
                    <option>인천</option>
                </select>
            </li>
            <li>유입경로? <br>
                검색<input type="checkbox" value="검색" name="what[]">
                지인<input type="checkbox" value="지인" name="what[]">
                광고<input type="checkbox" value="광고" name="what[]">
            </li>
            <li>
                <textarea name="content" id="" cols="30" rows="10"></textarea>
            </li>
            <li>
                <input type="submit" value="가입하기">
            </li>
        </ul>
    </form>
</body>
</html>