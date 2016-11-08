$(".trash-text").keyup(function(){
    if(event.keyCode == 13){
      $("#trash-save").bind('input propertychange', function () {  
      var inputVal = ($("input[name=trash-save]").val());  
      $("#trash-save").attr("value", inputVal);  
  });  
        var text3 = $('#trash-save');  
        var div1 ='<div class="task-item slide-trigger pbox-trigger ng-scope ng-isolate-scope">'+
        '<div class="task-item-wrapper lc-item">'+
          '<div class="task-cell-check">'+
              '<a href="javascript:;" class="task-check">'
                +'<i class="lcfont lc-check-square">'+'</i>'
              +'</a>'
          +'</div>'
          +'<div class="task-cell-title ng-scope">'
             +'<span class="task-title ng-binding">'+text3.val()+'</span>'
          +'</div>'
        +'</div>'+
      '</div>' ;
        $('.trash-list ').prepend(div1).show();
   }  
})