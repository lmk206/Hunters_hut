// asset/js/admin_common.js
function request(){
    //editor start
    
    var oEditors = [];
    nhn.husky.EZCreator.createInIFrame({
        oAppRef: oEditors,
        elPlaceHolder: "ir1",
        sSkinURI: "/editor/SmartEditor2Skin.html",	
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

    function editor(e){
        e.preventDefault();
        oEditors.getById["ir1"].exec("UPDATE_CONTENTS_FIELD", []);
        popol.submit();
    }

    var submit = document.querySelector('input[type=submit]');
    submit.addEventListener('click',editor);
    //editor end
}