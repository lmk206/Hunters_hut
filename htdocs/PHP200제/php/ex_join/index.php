<?
    $root = $_SERVER['DOCUMENT_ROOT'];
    include_once $root."/ex_join/db.php";

    $query = "select *from join_ order by num desc ";
    // desc - 내림차순, asc - 오름차순
    // where num = '4'; (num값이 4인 것만 조회)
    $result = mysqli_query($dbConnect, $query);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <a href="request.php">가입하기</a>
    <article>
        <h2>회원리스트</h2>
        <table>
            <thead>
                <th>NUM</th>
                <th>ID</th>
                <th>PW</th>
                <th>SEX</th>
                <th>CITY</th>
                <th>WHAT</th>
                <th>CONTENT</th>
                <th></th>
            </thead>
            <tbody>
            <?
                while($row = mysqli_fetch_array($result)){
                        
            ?>
                <tr>
                    <td><?=$row['num']?></td>
                    <td><?=$row['id']?></td>
                    <td><?=$row['pw']?></td>
                    <td><?=$row['sex']?></td>
                    <td><?=$row['city']?></td>
                    <td><?=$row['what']?></td>
                    <td><?=$row['content']?></td>
                    <td><a href="modify.php?num=<?=$row['num']?>">[수정]</a></td>
                    <td><a href="delete.php?num=<?=$row['num']?>">[삭제]</a></td>                                                                 >[삭제]</a></td>

                </tr>
            <? } ?> <!-- 중괄호를 tr이 끝나는 데서 닫아, while문이 tr을 작성하게 한다. -->
            </tbody>
        </table>
    </article>
</body>
</html>