<?
    $root = $_SERVER['DOCUMENT_ROOT'];
    include_once $root."/ex_editer/index.php";
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script type="text/javascript" src="/ex_editer/js/HuskyEZCreator.js" charset="utf-8"></script>    
    <title>Document</title>
</head>
<body>
    <form action="request.php">
    <textarea name="" id="ir1" cols="30" rows="10"></textarea>
    <input type="submit" value="확인">
</form>
    <script type="text/javascript">
        var oEditors = [];
        nhn.husky.EZCreator.createInIFrame({
            oAppRef: oEditors,
            elPlaceHolder: "ir1",
            sSkinURI: "/ex_editer/SmartEditor2Skin.html",	
            htParams : {bUseToolbar : true,
                fOnBeforeUnload : function(){
                    //alert("아싸!");	
                }
            }, //boolean
            fOnAppLoad : function(){
                //예제 코드
                //oEditors.getById["ir1"].exec("PASTE_HTML", ["로딩이 완료된 후에 본문에 삽입되는 text입니다."]);
            },
            fCreator: "createSEditor2"
        });
    </script>
</body>
</html>