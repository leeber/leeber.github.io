$(function(){
	hashtag = "#";
	$(".fbhid").hide();
	$(".navbutton").click(function() {
		event.preventDefault();
		run = true
		if($(".fbvis").is(':animated')) {
			run = false;
		}
		if( run === true){
			
			name = this.className.split(' ')[1];
			name2 = hashtag + name;

			if($(name2).hasClass("fbhid")){
				$(".fbvis").fadeOut(500).toggleClass("fbhid").toggleClass("fbvis");
				$(name2).delay(500).fadeIn(500).toggleClass("fbhid").toggleClass("fbvis");
			}
		}
	});
	$(".isHidden").hide();



	
	$(".calday").click(function() {
		event.preventDefault();
		idname = this.className.split(' ')[1];
		idname2 = hashtag + idname;
		if($(idname2).hasClass("isHidden")){
			if(!$(idname2).is(':animated')){
				$(this).animate({"border-bottom-right-radius": "0px","border-bottom-left-radius": "0px"},150);
				$(idname2).delay(100).slideToggle(500).toggleClass("isHidden").toggleClass("isVisible");
			}
		}
		else{
			$(idname2).slideToggle(500).toggleClass("isVisible").toggleClass("isHidden");
			$(this).delay(450).animate({"border-bottom-right-radius": "25px","border-bottom-left-radius": "25px"},150);
		}
	})
});