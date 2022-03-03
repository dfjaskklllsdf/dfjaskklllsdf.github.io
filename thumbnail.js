document.addEventListener("DOMContentLoaded", function(event) {
    // 你的所有代码都应该写在这里
    window.onload=function(){
				
				var img=document.getElementById("img1");
				
				   var abc=["https://img1.baidu.com/it/u=1814956473,1144875991&fm=253&fmt=auto&app=138&f=JPEG?w=793&h=471",
				   
				   "https://img1.baidu.com/it/u=1541426783,2026221505&fm=253&fmt=auto&app=138&f=JPEG?w=753&h=471",
				   "https://img1.baidu.com/it/u=2192659519,1780860903&fm=253&fmt=auto&app=138&f=JPEG?w=753&h=471",
				   "https://img0.baidu.com/it/u=2032143419,108966659&fm=253&fmt=auto&app=138&f=JPEG?w=753&h=471",
				   "https://img0.baidu.com/it/u=1363317911,1707273015&fm=253&fmt=auto&app=138&f=JPEG?w=753&h=471"]
				    var num=0;
				    setInterval(function(){
				    	num++
				    	if(num>=abc.length)
				    	{
				    		num=0;
				    	}
				    	img.src=abc[num];
				    },3000)
				
				
			};
});

