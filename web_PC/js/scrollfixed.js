// JavaScript Document
$(document).ready(function(){
	var loaded = true;
	var top = $("#scrollfixed").offset().top;
	function Add_Data()
	{              
		var scrolla=$(window).scrollTop();
		var cha=parseInt(top)-parseInt( scrolla);
		if(loaded && cha<=0)
		{                
			$("#scrollfixed").removeClass("scrollBefore").addClass("scrollAfter");
			
			loaded=false;
		}
		if(!loaded && cha>0)
		{
			$("#scrollfixed").removeClass("scrollAfter").addClass("scrollBefore");
			
			loaded=true;
		}
	}
	$(window).scroll(Add_Data);
});

$(document).ready(function(){
	var loaded = true;
	var top = $("#con_tab").offset().top;
	function Add_Data()
	{
		var scrolla=$(window).scrollTop();
		var cha=parseInt(top)-parseInt( scrolla);
		if(loaded && cha<=0)
		{
			$("#con_tab").removeClass("content_tab").addClass("content_tabAfter");

			loaded=false;
		}
		if(!loaded && cha>0)
		{
			$("#con_tab").removeClass("content_tabAfter").addClass("content_tab");

			loaded=true;
		}
	}
	$(window).scroll(Add_Data);
});