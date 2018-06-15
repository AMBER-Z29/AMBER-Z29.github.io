
//		window.onload = function(){
//
//			var aImg = document.getElementById("clock").getElementsByTagName("img");
//			var now = new Date();
//			var prevtime = toZero( now.getHours() ) + toZero( now.getMinutes() ) + toZero( now.getSeconds() );
//			var nexttime = "";
//			var arr = [];
//			var timer = null;
// 
//			
//			for( var i=0; i<aImg.length; i++ ){
//
//				aImg[i].src = "clock/images/" + prevtime.charAt(i) +".png";
//			}
//
//			setInterval( toChange,1000);
//
//			function toChange(){
//
//				var date = new Date();
//				nexttime =  toZero(date.getHours()) + toZero(date.getMinutes()) + toZero(date.getSeconds());
//				toCom( prevtime,nexttime );
//				prevtime = nexttime;
//			}
//
//			function toCom( str1, str2 ){
//				//每次清空数组里面的数据
//				arr = [];
//				for( var i =0; i<str1.length; i++ ){
//					if( str1.charAt(i) != str2.charAt(i) ){
//						arr.push(i);
//					}
//				}
//				startMove();
//			}
//			//上下翻转效果：利用数字高度减少至0再增加回来实现视觉差翻转
//			function startMove(){
//				var speed = -4;
//
//				timer = setInterval(function(){
//
//					for( var i=0; i<arr.length; i++ ){
//						if( aImg[arr[i]].offsetHeight == 0 ){
//							speed = 4;
//							aImg[arr[i]].src = "clock/images/" + nexttime.charAt( arr[i] ) + ".png"
//						}
//						//改变数字高度时默认向底线减少，所以手动改变数字的top向上移动
//						aImg[arr[i]].style.height = aImg[arr[i]].offsetHeight + speed + "px";
//						aImg[arr[i]].style.top = aImg[arr[i]].offsetHeight/2 - 18 + "px";
//
//						if( aImg[arr[i]].offsetHeight ==36 ){
//							clearInterval( timer );
//						}
//					}
//				},10);
//			}
//			//补0操作，保证数字一直为六位数
//			function toZero( num ){
//				if( num<10 ){
//					return num = "0" + num;
//				}else{
//					return num = num + "";
//				}
//			}
//
//		}

        
        
        
        
        
        
        
        
        
        
        
        
        
        window.onload=function(){
		
		var list=document.getElementById("list");
		var hour=document.getElementById("hour");
		var mins=document.getElementById("min");
		var sec=document.getElementById("sec");
		var css=document.getElementById("css");
		
		var lis="";
		 
		for( var i=0;i<60;i++ ){
			
			lis+=" <li></li> ";
			
			css.innerHTML+="#list li:nth-of-type("+(i+1)+"){ transform:rotate( "+i*6+"deg );-moz-transform:rotate( "+i*6+"deg );-webkit-transform:rotate( "+i*6+"deg );-o-transform:rotate( "+i*6+"deg ); }";
			
		}
		
		list.innerHTML=lis;
		toTime();
		setInterval( toTime,1000 );
		
		function toTime(){
			
			var date=new Date();
			var s=date.getSeconds();
			var m=date.getMinutes()+s/60;
			var h=date.getHours()+m/60;
			
			hour.style.WebkitTransform=" rotate( "+ h*30 +"deg ) ";
			mins.style.WebkitTransform=" rotate( "+ m*6 +"deg ) ";
			sec.style.WebkitTransform=" rotate( "+ s*6 +"deg ) ";
			
		}
		
		
	}
        
        
        
        
        
        
        
        
        
        
        
        
        
            var swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });