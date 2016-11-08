 $(function(){
  $('.title').click(function (event) {  
         event.stopPropagation();  
         $('#dialogue').toggle();  
          return false;
     });  
       $(document).click(function(event){
      var _con = $('#dialogue'); 
      if(!_con.is(event.target) && _con.has(event.target).length === 0){
        $('#dialogue').hide(); 

      }
  });

  $('#dialogue').click(function(){
    $('#dialogue').hide();
  
})
   
   $('.selectize-input').click(function(){
    if($('#typical-example').css("display")=='none'){
       $('#typical-example').show();
       $('.ui-select-choices-group').show();
       $('#no-bao').hide();
       $('#input').show();
       $('#click').hide();
    }else{
       $('#typical-example').hide();
       $('.ui-select-choices-group').hide();
       $('#no-bao').show();
       $('#input').hide();
       $('#click').hide();
    }
     
     
   })
   $('.none-has').click(function(){
        $('#no-bao').show();
        $('#typical-example').hide();
        $('#input').hide();

   })
});

$(function(){
    $("#Stick").click(function(){
            $(this).hide();
            $("#cancel").show();
            if($("this").css({"display":"none"})){
                  $("#cancel").click(function(){
                    $(this).hide();
                         $("#Stick").show();
                  })
            }
    })

     $('#typical-example').click(function(){
       $('#selective-listing').show();
       $('#sure').show();
      if($('#typical-example').css("display")=='block'){
        $('#typical-example').hide();
         $('#click').show();
          $('#input').hide();

      }
  })
  })

 


 $(function(){
    $('.but2').click(function (event) {  
         event.stopPropagation();  
         $('#Group-members').toggle();  
          return false;
     });  
       $(document).click(function(event){
      var _con = $('#Group-members'); 
      if(!_con.is(event.target) && _con.has(event.target).length === 0){
        $('#Group-members').hide(); 

      }
  });
       $('.modal-close').click(function(){        
           $('#Group-members').hide();
        
       })
 })


 $(function(){

        $('.but1').click(function (event) {  
         event.stopPropagation();  
         $('.modal-md').toggle();  
          return false;
     });  
    $(document).click(function(event){
      var _con = $('.modal-md'); 
      if(!_con.is(event.target) && _con.has(event.target).length === 0){
        $('.modal-md').hide(); 

      }
  });

     $('.lc-close').click(function(){
       	  $('.modal-md').hide();
       })


    $('.btn-dis').click(function(){
          $('.modal-md').hide();
       })
 })


$(function(){
 
  $('.but3').click(function (event) {  
         event.stopPropagation();  
         $('#video').toggle();  
          return false;
     });  
       $(document).click(function(event){
      var _con = $('#video'); 
      if(!_con.is(event.target) && _con.has(event.target).length === 0){
        $('#video').hide(); 

      }
  });
      $('.lc-close').click(function(){
          $('#video').hide();
       })
    $('.btn-dis').click(function(){
          $('#video').hide();
       })
 })


 $(function(){
     $('.but4').click(function (event) {  
         event.stopPropagation();  
         $('#information').toggle();  
          return false;
     });  
       $(document).click(function(event){
      var _con = $('#information'); 
      if(!_con.is(event.target) && _con.has(event.target).length === 0){
        $('#information').hide(); 

      }
  });

    $('.lc-close').click(function(){
          $('#information').hide();
       })
 })

 $(function(){
   $('.but5').click(function (event) {  
         event.stopPropagation();  
         $('.slide-show').toggle();  
          return false;
     });  
       $(document).click(function(event){
      var _con = $('.slide-show'); 
      if(!_con.is(event.target) && _con.has(event.target).length === 0){
        $('.slide-show').hide(); 

      }
  });
  $('.lc-close').click(function(){
         $('.slide-show').hide();
    })
})

 $(function(){
      $('#but6').click(function (event) {  
         event.stopPropagation();  
         $('#alerts').toggle(); 
         $('#dialogue').hide(); 
          return false;
     });  
       $(document).click(function(event){
      var _con = $('#alerts'); 
      if(!_con.is(event.target) && _con.has(event.target).length === 0){
        $('#alerts').hide(); 

      }
  });

    $('.lc-close').click(function(){
          $('#alerts').hide();
       })
 })
 


 $(function(){
    $('#but7').click(function (event) {  
         event.stopPropagation();  
         $('#join-group').toggle(); 
          return false;
     });  
       $(document).click(function(event){
      var _con = $('#join-group'); 
      if(!_con.is(event.target) && _con.has(event.target).length === 0){
        $('#join-group').hide(); 

      }
  });
    $('.hu').click(function(){
          $('#join-group').hide();
       })
 })


 // $(function(){
 //   $('#add-mem').click(function(){
 //        if($('#add-me').css("display")=='none'){
 //             $('#add-me').show();
 //        }else{
 //             $('#add-me').hide();
 //       }

 //       $('.hu').click(function(){
 //          $('#ee').hide();
 //       })
 //  })
 // })



 $(function(){
     $('#button-add').click(function (event) {  
         event.stopPropagation();  
         $('#create-schedule').toggle(); 
          return false;
     });  
       $(document).click(function(event){
      var _con = $('#create-schedule'); 
      if(!_con.is(event.target) && _con.has(event.target).length === 0){
        $('#create-schedule').hide(); 

      }
  });



 })


$(function(){
     $('#leaguer').click(function (event) {  
         event.stopPropagation();  
         $('#edit').toggle(); 
         $(this).hide(); 
          return false;

     });  
       $(document).click(function(event){
      var _con = $('#department'); 
      if(!_con.is(event.target) && _con.has(event.target).length === 0){
        $('#edit').hide(); 

      }
  });
 })

 $(function(){
  //  $('.lc-avatar-40 ').click(function(){
  //       if($('#material').css("display")=='none'){
  //            $('#material').show();
  //       }else{
  //            $('#material').hide();
  //      }

       
  // })


       $('.lc-avatar-40').click(function (event) {  
         event.stopPropagation();  
         $('#material').toggle(); 
          return false;

     });  
       $(document).click(function(event){
      var _con = $('#material'); 
      if(!_con.is(event.target) && _con.has(event.target).length === 0){
        $('#material').hide(); 

      }
  });
 })

 $(function(){
   $('.member-more').click(function(){
        if($('#leaguer').css("display")=='none'){
             $('#leaguer').show();
        }else{
             $('#leaguer').hide();
       }

       
  })
 })


$(function(){
  $('#three').click(function (event) {  
         event.stopPropagation();  
         $('#create-task').toggle(); 
          return false;

     });  
       $(document).click(function(event){
      var _con = $('#create-task'); 
      if(!_con.is(event.target) && _con.has(event.target).length === 0){
        $('#create-task').hide(); 
     }
  });

   $('.lc-close').click(function(){
      $('#create-task').hide();
    })

   $('.btn-dis').click(function(){
      $('#create-task').hide();
   })

   $('#department').click(function(){
       $('#create-task').css({"display":"block"});
    
  })


 })

 $(function(){
   $('#smlie').click(function (event) {  
         event.stopPropagation();  
         $('#picture').toggle(); 
          return false;
     });  
       $(document).click(function(event){
      var _con = $('#picture'); 
      if(!_con.is(event.target) && _con.has(event.target).length === 0){
        $('#picture').hide(); 

      }
  });
})

  $(function(){

    $('.one').click(function(){
       $('.first').show();
       $('.second').hide();
       $('.fourth').hide();
       $('.fifth').hide();
       $('.sixth').hide();
       $('.seventh').hide();
       $('.eighth').hide();
        $('.nineth').hide();
       $('.tenth').hide();
        $('.eleventh').hide();
       $('.twelfth').hide();
        $('.one-o').css({
          'background-color':'#8F8F8F',
          'border-color':'#8F8F8F'
        })
         $('.two-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
        $('.six-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
         $('.four-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
          $('.five-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
         $('.seven-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
         $('.eight-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
          $('.nine-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
          $('.ten-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
         $('.eleven-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
          $('.twelve-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })


    })

    $('.two').click(function(){
      
      $('.second').show();
      $('.first').hide();
      $('.fourth').hide();
      $('.fifth').hide();
       $('.sixth').hide();
       $('.seventh').hide();
       $('.eighth').hide();
        $('.nineth').hide();
       $('.tenth').hide();
        $('.eleventh').hide();
       $('.twelfth').hide();
        $('.two-o').css({
          'background-color':'#8F8F8F',
          'border-color':'#8F8F8F'
        })
         $('.one-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
        $('.six-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
         $('.four-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
          $('.five-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
         $('.seven-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
         $('.eight-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
          $('.nine-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
          $('.ten-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
         $('.eleven-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
          $('.twelve-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
    
           
    })

    $('.four').click(function(){
       $('.fourth').show();
       $('.second').hide();
       $('.first').hide();
       $('.fifth').hide();
       $('.sixth').hide();
       $('.seventh').hide();
       $('.eighth').hide();
        $('.nineth').hide();
       $('.tenth').hide();
        $('.eleventh').hide();
       $('.twelfth').hide();

        $('.four-o').css({
          'background-color':'#8F8F8F',
          'border-color':'#8F8F8F'
        })
         $('.two-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
        $('.six-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
         $('.one-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
          $('.five-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
         $('.seven-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
         $('.eight-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
          $('.nine-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
          $('.ten-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
         $('.eleven-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
          $('.twelve-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })

           
    })

     $('.five').click(function(){
       $('.fifth').show();
       $('.second').hide();
       $('.fourth').hide();
       $('.first').hide();
       $('.sixth').hide();
       $('.seventh').hide();
       $('.eighth').hide();
        $('.nineth').hide();
       $('.tenth').hide();
        $('.eleventh').hide();
       $('.twelfth').hide();

        $('.five-o').css({
          'background-color':'#8F8F8F',
          'border-color':'#8F8F8F'
        })
         $('.two-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
        $('.six-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
         $('.four-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
          $('.one-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
         $('.seven-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
         $('.eight-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
          $('.nine-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
          $('.ten-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
         $('.eleven-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
          $('.twelve-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })

           
    })

      $('.six').click(function(){
       $('.sixth').show();
       $('.second').hide();
       $('.fourth').hide();
       $('.first').hide();
       $('.fifth').hide();
       $('.seventh').hide();
       $('.eighth').hide();
        $('.nineth').hide();
       $('.tenth').hide();
        $('.eleventh').hide();
       $('.twelfth').hide();


        $('.six-o').css({
          'background-color':'#8F8F8F',
          'border-color':'#8F8F8F'
        })
         $('.two-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
        $('.one-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
         $('.four-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
          $('.five-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
         $('.seven-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
         $('.eight-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
          $('.nine-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
          $('.ten-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
         $('.eleven-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
          $('.twelve-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })

           
    })

       $('.seven').click(function(){
       $('.seventh').show();
       $('.second').hide();
       $('.fourth').hide();
       $('.first').hide();
       $('.sixth').hide();
       $('.fifth').hide();
       $('.eighth').hide();
        $('.nineth').hide();
       $('.tenth').hide();
        $('.eleventh').hide();
       $('.twelfth').hide();

        $('.seven-o').css({
          'background-color':'#8F8F8F',
          'border-color':'#8F8F8F'
        })
         $('.two-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
        $('.six-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
         $('.four-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
          $('.five-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
         $('.one-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
         $('.eight-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
          $('.nine-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
          $('.ten-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
         $('.eleven-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
          $('.twelve-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })

           
    })

    $('.eight').click(function(){
       $('.eighth').show();
       $('.second').hide();
       $('.fourth').hide();
       $('.first').hide();
       $('.sixth').hide();
       $('.seventh').hide();
       $('.fifth').hide();
        $('.nineth').hide();
       $('.tenth').hide();
        $('.eleventh').hide();
       $('.twelfth').hide();

        $('.eight-o').css({
          'background-color':'#8F8F8F',
          'border-color':'#8F8F8F'
        })
         $('.two-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
        $('.six-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
         $('.four-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
          $('.five-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
         $('.seven-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
         $('.one-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
          $('.nine-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
          $('.ten-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
         $('.eleven-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
          $('.twelve-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })

           
    })

   $('.nine').click(function(){
       $('.nineth').show();
       $('.second').hide();
       $('.fourth').hide();
       $('.first').hide();
       $('.sixth').hide();
       $('.seventh').hide();
       $('.eighth').hide();
        $('.fifth').hide();
       $('.tenth').hide();
        $('.eleventh').hide();
       $('.twelfth').hide();

        $('.nine-o').css({
          'background-color':'#8F8F8F',
          'border-color':'#8F8F8F'
        })
         $('.two-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
        $('.six-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
         $('.four-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
          $('.five-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
         $('.seven-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
         $('.eight-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
          $('.one-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
          $('.ten-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
         $('.eleven-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
          $('.twelve-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })

           
    })

    $('.ten').click(function(){
       $('.tenth').show();
       $('.second').hide();
       $('.fourth').hide();
       $('.first').hide();
       $('.sixth').hide();
       $('.seventh').hide();
       $('.eighth').hide();
        $('.nineth').hide();
       $('.fifth').hide();
        $('.eleventh').hide();
       $('.twelfth').hide();

        $('.ten-o').css({
          'background-color':'#8F8F8F',
          'border-color':'#8F8F8F'
        })
         $('.two-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
        $('.six-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
         $('.four-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
          $('.five-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
         $('.seven-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
         $('.eight-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
          $('.nine-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
          $('.one-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
         $('.eleven-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
          $('.twelve-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })

           
    })

     $('.eleven').click(function(){
       $('.eleventh').show();
       $('.second').hide();
       $('.fourth').hide();
       $('.first').hide();
       $('.sixth').hide();
       $('.seventh').hide();
       $('.eighth').hide();
        $('.nineth').hide();
       $('.tenth').hide();
        $('.fifth').hide();
       $('.twelfth').hide();

        $('.eleven-o').css({
          'background-color':'#8F8F8F',
          'border-color':'#8F8F8F'
        })
         $('.two-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
        $('.six-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
         $('.four-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
          $('.five-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
         $('.seven-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
         $('.eight-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
          $('.nine-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
          $('.ten-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
         $('.one-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
          $('.twelve-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })

           
    })

      $('.twelve').click(function(){
       $('.twelfth').show();
       $('.second').hide();
       $('.fourth').hide();
       $('.first').hide();
       $('.sixth').hide();
       $('.seventh').hide();
       $('.eighth').hide();
        $('.nineth').hide();
       $('.tenth').hide();
        $('.eleventh').hide();
       $('.fifth').hide();

        $('.twelve-o').css({
          'background-color':'#8F8F8F',
          'border-color':'#8F8F8F'
        })
         $('.two-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
        $('.six-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
         $('.four-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
          $('.five-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
         $('.seven-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
         $('.eight-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
          $('.nine-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
          $('.ten-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
         $('.eleven-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
          $('.one-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })

           
    })
  })

$(function(){
   $('#tame-t').click(function(){
      $('#li-left').show();
      $('#mine').hide();
      $(this).css({"color":"#6F8092"});
      $('#tame-a').css({"color":"#B5BCBE"});
     
   })
   $('#tame-a').click(function(){
      $('#mine').show();
      $('#li-left').hide();
      $(this).css({"color":"#6F8092"});
      $('#tame-t').css({"color":"#B5BCBE"});
     
   })
   $('#lonly').click(function(){
      if($('#bottom').css("display")=='block'){
         $('#bottom').hide();
         $('#triangle').css({
            '-webkit-transform':'rotate(-90deg)',
            '-moz-transform':'rotate(-90deg)'
      })
      }else{
        $('#bottom').show();
        $('#triangle').css({
            '-webkit-transform':'rotate(0deg)',
            '-moz-transform':'rotate(0deg)'
        })
      }
   })



  $('#creak').click(function (event) {  
         event.stopPropagation();  
         $('#department').toggle();  
          return false;
     });  
       $(document).click(function(event){
      var _con = $('#department'); 
      if(!_con.is(event.target) && _con.has(event.target).length === 0){
        $('#department').hide(); 

      }
  });
 



 
  $('#last-time').click(function (event) {  
         event.stopPropagation();  
         $('#calendar').toggle();  
          return false;
     });  
       $(document).click(function(event){
      var _con = $('#calendar'); 
      if(!_con.is(event.target) && _con.has(event.target).length === 0){
        $('#calendar').hide(); 

      }
  });
  

  $('#clear').click(function(){
     $('#calendar').hide();
  })

  $('.setting-t').click(function(){
    
       $('.setting-time').show();
       $('#setting-up').hide();

     
  })
  $('.fixed-margin button').click(function(){
     $('#calendar').hide();
      $('.setting-time').hide();
       $('#setting-up').show();
  })


})




$(function(){
    $('#add-schedule').click(function (event) {  
         event.stopPropagation();  
         $('#li-create-schedule').toggle();
         $('#create-schedule').hide();
          return false;
     });  
       $(document).click(function(event){
      var _con = $('#li-create-schedule'); 
      if(!_con.is(event.target) && _con.has(event.target).length === 0){
        $('#li-create-schedule').hide(); 

      }
  });
  $('#close-schedule').click(function(){
      $('#li-create-schedule').hide(); 
  })

  $('#disk').click(function (event) {  
         event.stopPropagation();  
         $('#network-disk').toggle();
          $('#create-schedule').hide();  
          return false;
     });  
       $(document).click(function(event){
      var _con = $('#network-disk'); 
      if(!_con.is(event.target) && _con.has(event.target).length === 0){
        $('#network-disk').hide(); 

      }
  });
       $('.modal-close').click(function(){
           $('#network-disk').hide(); 
       })
       $('.none-disk').click(function(){
           $('#network-disk').hide();
       })

   $('#file-fragment').click(function (event) {  
         event.stopPropagation();  
         $('#document').toggle();
          $('#create-schedule').hide();
          return false;
     });  
       $(document).click(function(event){
      var _con = $('#document'); 
      if(!_con.is(event.target) && _con.has(event.target).length === 0){
        $('#document').hide(); 

      }
  });


})

$(function(){
   $('#chose-input').click(function(){
     
     if($('#chose-group').css("display")=='none'){
       $('#chose-group').show();
       $('#tall-all').hide();
     }else{
        $('#chose-group').hide();
        $('#tall-all').show();
     }

     if($('#public-group').css("display")=='none'){
        $('#public-group').show();
     }else{
       $('#public-group').hide();
     }

   })

   // var sh=$('.text-overflow').text();
  
   $('.text-overflow').click(function(){
     var sh=$(this).html();
     $('#public-group').hide();
      // alert("值为:"+sh1);
       $('#chose-input').text(sh).css({
            "line-height": "40px"
       });
   })


   $('#preserve,#delete-fragment,#close-text').click(function(){
       $('#document').hide();
   })
})