window.onload=function(){
	var calendar=document.getElementsByClassName('calendar-panel')[0];
	var day=document.getElementsByClassName('day')[0];
	var oH=document.getElementsByTagName('h6')[0];
	var oS1=document.getElementsByClassName('s1')[0];
	var oS2=document.getElementsByClassName('s2')[0];
	var year=0;
	var month = 0;
	var d = new Date();
	year = d.getFullYear();
	month = d.getMonth();
	month = month+1;

	var today = d.getDate();
	today = today-1;


	function tab(){
	
		if (month==13) {
			year=year+1;
			month=1;
			
		}
		if (month==0) {
			year=year-1;
			month=12;
		}
		
		var month1 = month;
		var d1 = new Date(year,month1+1,0);
		var daycount = d1.getDate();

		// 填充空格
		var d2 = new Date(year,month-1,1);
		var weekday = d2.getDay();
		
		for(var i=0;i<weekday;i++){
			var li=document.createElement('li')
			day.appendChild(li)	
		}
		//填充日历


		for(var i=0;i<daycount;i++){

			var li=document.createElement('li')
			li.innerHTML=i+1

			if (today==i) {
				li.setAttribute('class','pd');	
			}
			day.appendChild(li)	
		}


		oH.innerHTML=year+'年'+(month)+'月'
	};

	tab();
	oS1.onclick=function(){
		
		day.innerHTML='';
		month=month-1;
		tab();
	}

	oS2.onclick=function(){
		
		day.innerHTML='';
		month=month+1;
		tab();
	}

	//日程
	var calendar1=document.getElementsByClassName('my-calendar-panel')[0];
	var day1=document.getElementsByClassName('day1')[0];
	var oH1=document.getElementsByTagName('my-calendar-time')[0];
	var oS11=document.getElementsByClassName('btn1')[0];
	var oS21=document.getElementsByClassName('btn2')[0];
	var year1=0;

	var month1 = 0;
	var d1 = new Date();
	year1 = d1.getFullYear();
	month1 = d1.getMonth();
	month1 = month1+1;

	function tab1(){
	
		if (month1==13) {
			year1=year1+1;
			month1=1;
			
		}
		if (month1==0) {
			year1=year1-1;
			month1=12;
		}
		
		var month11 = month1;
		var d11 = new Date(year1,month11+1,0);
		var daycount1 = d11.getDate();

		// 填充空格
		var d21 = new Date(year1,month1-1,1);
		var weekday1 = d21.getDay();
		
		for(var i=0;i<weekday1;i++){
			var li=document.createElement('li')
			day1.appendChild(li)	
		}
		//填充日历


		for(var i=0;i<daycount1;i++){
			var li=document.createElement('li')
			li.innerHTML=i+1
			if (today==i) {
				li.setAttribute('class','pd');
			}
			day1.appendChild(li)	
		}
		var str = year1+'年'+month1+'月';
		
		$('.my-calendar-time').text(str);
	};

	tab1();

	oS11.onclick=function(){
	
		day1.innerHTML='';
		month1=month1-1;
		tab1();
	};
	oS21.onclick=function(){
		
		day1.innerHTML='';
		month1=month1+1;
		tab1()
	};


}
$(document).ready(function(){
	$('.my-calendar-create').on('click',function(){

		$('.buildmodal').css("display","block");
	})

	$('.add-more-select a').on('click',function(){

		$('.add-more-select a').css("display","none");
		$('.add-more-select-text').css("display","block");

	});

	$('.more-delec').on('click',function(){
		$('.more-delec-from1').css("display","none");
		$('.add-more-select').css("display","block");
		$('.add-more-select a').css("display","block");
	})

	$('.hide-more-slec').on('click',function(){
		$('.more-delec-from1').css("display","block");
		$('.add-more-select').css("display","none");
	})


	// 关闭新建日程
	$('.cancel1').on('click',function(){
		$('.buildmodal').css("display","none");
	})


	//确定新建日程
	$('.ensure').on('click',function(){
		
	})
	//创建新的日历
	$('.create-new-calendar').on('click',function(){
		$('.create-new-calendar-text').css("display","block");
	});


	$('.create-new-calendar-number').on('click',function(){
		$('.buildmodal-calendar').css("display","block");
		$('.create-new-calendar-text').css("display","none");
	});
	$('.cancel11').on('click',function(){
		$('.buildmodal-calendar').css("display","none");
	})


})


/*
$(function(){
	$('.my-calendar-create').on('click',function(){
		alert(1);

		$('.build-calendar').css("display","block");
	})

	$('.cancel').on('click',function(){
		$('.build-calendar').css("display","none");
	})

	$('.clear1 li').on('dblclick',function(){
		$('.build-calendar').css("display","block");
	})

	$('.add-more-select a').on('click',function(){

		$('.add-more-select a').css("display","none");
		$('.add-more-select-text').css("display","block");

	});

	$('.ensure').on('click',function(){
		
	})




})*/