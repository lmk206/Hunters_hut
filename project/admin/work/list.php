<?

include_once
    $_SERVER["DOCUMENT_ROOT"]."/admin/head.php";

?>
<!--리스트-->

<article class="work_list">
    <h2>프로젝트 리스트</h2>
    <ul>
        <li>
            <!--num, img, title, date, state
            update/delete-->
            <input type="checkbox">
            <a href="#">
            <code>num</code>
            <img src="/admin/upload/thum/bg_johnwick10.png">
            <code>title</code>
            <code>date</code>
            <code>state</code>
            </a>
            <a href="#">[수정]</a>
            <a href="#">[삭제]</a>
        </li>
    </ul>
    <div class="page">
        <a href="">&lt;</a>
        <a href="">1</a>
        <a href="">2</a>
        <a href="">3</a>
        <a href="">4</a>
        <a href="">&gt;</a>
    </div>
    <a href="request.php" class="btn">프로젝트등록</a>
</article>
<?
include_once
    
    $_SERVER["DOCUMENT_ROOT"]."/admin/foot.php";

?>