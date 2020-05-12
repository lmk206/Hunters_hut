<?
    include_once $_SERVER['DOCUMENT_ROOT']."/admin/head.php";
?>
<!-- 글쓰기 -->
<!-- 1. 썸네일
2. 제목
3. 상세설명 (editor)
4. 프로젝드 url
5. 날짜 -->
<script type="text/javascript" src="/admin/upload/editor/js/HuskyEZCreator.js" charset="utf-8"></script>
<article class="request">
    <h2>프로젝트 등록</h2>
    <form action="request_res.php" name="popol" enctype="multipart/form-data" method="post">
        <ul>
            <li><input type="text" name="title"></li>
            <li><input type="text" name="url"></li>
            <li><input type="date" name="date"></li>
            <li><input type="file" name="upload"></li>
            <li>
                <textarea name="contents" id="ir1"></textarea>
                
            </li>
            <li><input type="checkbox" name="state" checked></li>
            <li><input type="submit" value="ADD PROJECT" class="btn"></li>
        </ul>
    </form>
</article>
<?
    fun('request()');
    include_once
    $_SERVER['DOCUMENT_ROOT']."/admin/foot.php";
?>

