<?php
    session_start();

    //2개의 세션생성
    $_SESSION['mySession1'] = 'everdevel';
    $_SESSION['mySession2'] = 'beanscent';
    $_SESSION['mySession3'] = 'tomodevel';

    //생성된 세션 확인
    echo "<pre>";
    var_dump($_SESSION);
    echo '</pre>';
    //session_destroy() -> 문서 세션에 기록된 내용을 모두 삭제

    //세션 파괴
    if(session_destroy()){
        echo "세션 삭제 완료";
    } else {
        echo "세션 삭제 실패";
    }
?>