// //自定义表单控件验证行为
//             var checkvalue = function(e){
//                 var el = e.target;
//                 var isvalid = el.checkValidity();
//                 if(isvalid){
//                     el.className= "";
//                     el.parentElement.getElementsByTagName("input")[0].className="form-control";
//                      el.parentElement.getElementsByTagName('div')[0].style.display="none";
//                 }else{
//                     el.className= "error";
//                     el.parentElement.getElementsByTagName("input")[0].className="error";
//                     el.parentElement.getElementsByTagName('div')[0].style.display="block";
//                 }
//                 e.stopPropagation();
//                 e.preventDefault();
//             }
//             //定义表单验证方法
//             function invalidHandler(evt) {
//                 checkvalue(evt);
//             }
//             function loadDemo() {
//                var myform = document.getElementById("register1");
//                //注册表单的oninvlid事件
//                myform.addEventListener("invalid", invalidHandler, true);
//                 for(var i=0;i< myform.elements.length-1;i++){
//                     //注册表单元素的onchange事件，优化用户体验
//                     myform.elements[i].addEventListener("change",checkvalue,false);
//                 }
//             }
//             //在页面初始化事件（onload）时注册的自定义事件
//             window.addEventListener("load", loadDemo, false);
