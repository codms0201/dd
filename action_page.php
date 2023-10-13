<?php
    $word = $_POST['word'];
    $meaning = $_POST['meaning'];
    $level = $_POST['level'];
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h3>입력하신 데이터는 다음과 같습니다. </h3>
    <div>Word : <?=$word?> </div>
    <div>Meaning : <?=$meaning?> </div>
    <div>Level : <?=$level?> </div>
</body>
</html>