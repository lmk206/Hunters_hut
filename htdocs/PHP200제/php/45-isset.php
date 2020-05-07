<?php
    //isset -> 값을 파악하여 그 여부를 true/false로 보내준다.
    if (isset($str)) {
        echo "변수 str이 존재합니다.";
    } else {
        echo "변수 str이 존재하지 않습니다.";
    }

    echo "<br>";

    $str = "0"; //0 값을 넣어도 isset은 true로 파악한다.(값이 존재하기 때문.)

    if (isset($str)) {
        echo "변수 str이 존재합니다.";
    } else {
        echo "변수 str이 존재하지 않습니다.";
    }
?>