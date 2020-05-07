<?php
    include $_SERVER['DOCUMENT_ROOT'].'/php/108-2-connectDB.php';

    $sql = "SELECT * FROM myMember";
    $result = $dbConnect->query($sql);

    $dataCount = $result->num_rows;

    $memberList = array();

    for($i = 0; $i < $dataCount; $i++){
        $memberInfo = $result->fetch_array(MYSQLI_ASSOC);
        array_push($memberList, $memberInfo);
    }

    echo json_encode(
        array(
            'data' => $memberList,
        )
    )
?>