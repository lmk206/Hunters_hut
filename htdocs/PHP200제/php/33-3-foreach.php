<?php
    $memberList = ['name' => '미우','id' => 'miu'];
    $memberList["name"]
    foreach($memberList as $index => $value){
        echo "인덱스 {$index}의 값 : {$value}";
        echo '<br>';
    }

    foreach($memberList as $ml){
        echo $ml;
        echo '<br>';
    }
?>