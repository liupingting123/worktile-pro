function login(){  
    var url = "<%=request.getContextPath()%>/userAction/login";  
    $.ajax({  
        type : "POST",  
        url : url,  
        dataType : "json",  
        data : {  
            "username": $("input[name='login.username']").val(),  
            "password": $("input[name='login.password']").val()  
            },  
        success : function (data){
            if("error" == data){  
                $("#errMsg").html("<p>用户名或者密码错误，请重新输入！</p>");          
            }else{  
                $("input[type='button]").click();  
            }  
        }, 
        error : function (jqXHR, textStatus, errorThrown){  
            console.log(textStatus); 
        }  
    });  
}  








// function login(){  
//     var url = "<%=request.getContextPath()%>/userAction/login";  
//     $.ajax({  
//         type : "POST",  
//         url : url,  
//         dataType : "json",  
//         data : {  
//             "login.username": $("input[name='login.username']").val(),  
//             "login.password": $("input[name='login.password']").val()  
//             },  
//         success : function (data){  
//             if("error" == data){  
//                 $("#errMsg").html("<p>用户名或者密码错误，请重新输入！</p>");  
                  
//                 setTimeout("$('#errMsg').html('')",10000);  
//             }else{  
//                 $("input[type='button]").click();  
//             }  
//         },  
//         error : function (jqXHR, textStatus, errorThrown){  
//             alert(textStatus);  
//         }  
//     });  
// }  