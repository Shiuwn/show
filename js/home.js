// JavaScript Document
$(document).ready(function(){
	/*左侧弹窗实现*/
	var y=290;
	$("#lishow").hide;
	$(".liclass").hover(function(){
		
		$(this).mousemove(function(e){
			
			y=e.clientY;
			
			});
		y=y-230;
		var imgsrc=$(this).find("img").attr("src");
		var p=$(this).find("p").text();
		
		//$("#lishow").append(imgsrc);
		$("#lishow").append("<img src='"+imgsrc+"' style='width:180px;height:220px;border-radius:4px;box-shadow:0 5px 10px #e2827e'/>");
		
		$("#lishow").append("<p>"+p+"</p>");
		
			//alert(y);
			$("#lishow").css({"left":"200px","top":y+"px"});
		$("#lishow").show();
		
		},function(){
			$("#lishow").text("");
			$("#lishow").remove("img");
			$("#lishow").hide();
		});
	/*滑动实现*/
	var len=0;
	$("#cookbook").find(".rbutton").click(function(){
		len=len>(-516)?len-516:(-516);
		$(".cinner").animate({left:len},"slow");
		
		//alert("ok");
		});
	$("#cookbook").find(".lbutton").click(function(){
		
		len=len>=0?0:len+516;
		$(".cinner").animate({left:len},"slow");
		//alert("ok");
		});
	/*上下滑动实现*/
	var num=$("#rcontent").children(".rankinner").length,temp=0;
	
	$("#rbutton").click(function(){
		
		var $show=$("#rcontent").children().eq(temp),$shownext=$show.next();
		temp<num-1?$show.hide():0;
		//$shownext.length>0?
		$shownext.show(1000);
		temp=temp<num-1?temp+1:num-1;
		});
	$("#lbutton").click(function(){
		
		var $show=$("#rcontent").children().eq(temp),$shownext=$show.prev();
		temp>0?$show.hide():0;
		$shownext.show(1000);
		temp=temp>0?temp-1:0;
		});
	$("#search .linput").hide();
	$("#search .searchshow").click(function(){
		$(this).hide();
		$("#search .linput").show();
		});
	$("#search .hide").click(function(){
		$("#search .linput").hide();
		$("#search .searchshow").show();
		});
		
		var dd = setInterval(gd, 20);
            function gd() {
                 var position = $(".cinner0").scrollLeft();    //scrollLeft()是获取对象的水平偏移量
				//alert(position);
                if (position <1032) {
					
                    $(".cinner0").scrollLeft(position + 1);
					//alert($(".cinner").text());
                }
                else {
					
                    $(".cinner0").scrollLeft(0);
                }
               // $("span").html($("#icon .cinner").scrollLeft());    //显示水平偏移量的值
            }
            $(".cinner0").mouseleave(function () {
                dd = setInterval(gd, 20);
            });
 
            $(".cinner0").mouseenter(function () {
                clearInterval(dd);
            });
});