// JQuery anonymous function
$(function() {
	$(".hidden").hide();
	$(".button").click(function(e){
		idname ="#" + this.className.split(' ')[1];
		if($(idname).hasClass("hidden")){
			$(".visible").addClass("hidden").slideToggle(500).removeClass("visible");
			$(idname).removeClass("hidden").addClass("visible").slideToggle(500);
		}
		else{
			$(".visible").addClass("hidden").slideToggle(500).removeClass("visible");
		}
		e.preventDefault();
	});
	$(".exhidden").hide();
	$(".exercise").click(function(e){
		idname ="#" + this.className.split(' ')[1];
		if($(idname).hasClass("exhidden")){
			$(".exvisible").addClass("exhidden").slideToggle(500).removeClass("exvisible");
			$(idname).removeClass("exhidden").addClass("exvisible").slideToggle(500);
		}
		else{
			$(".exvisible").addClass("exhidden").slideToggle(500).removeClass("exvisible");
		}
		e.preventDefault();
	});







	//Hashtag Triangle Ch2Ex1
	function triangle(x){
		abc = "";
		for(i = 0; i < x; i++){
			abc += "#";
			$(".triangle").append("<p>" + abc + "</p>");
		}
	}
	triangle(7);

	//Fizz Buzz Ch2Ex2
	function fizzbuzz(){
		fb = "";
		for (i = 0; i < 100; i++) {
			a = i + 1;
			fb = "";
			numb = true;
			if(a % 3 ===0) {fb = "Fizz"; numb = false}
			if(a % 5 ===0) {fb += "Buzz"; numb = false}
			if(numb === true){fb = a;}
			else{fb += " " + a;}
			$(".fizzbuzz").append("<p>" + fb + "</p>");
		};
	}
	fizzbuzz();

	//Chess Board Ch2Ex3
	function chessboard(x){
		size = x;
		for(h = 0; h < size; h++){
			board = "";
			for(w = 0; w < size; w++){
				if((w + h) % 2 === 0){
					board = board + "#";
				}
				else{board = board + "_";}
			}
			$(".chessboard").append("<p>" + board + "</p>");
		}
	}
	chessboard(8);

	//Minimum Ch3Ex1
	function minimum(x, y){
		if(x < y){return "for " + x + " and " + y + ", " + x + " is the smaller number"};
		if(x > y){return "for " + x + " and " + y + ", " + y + " is the smaller number"};
		if(x === y){return "for " + x + " and " + y + ", the two numbers are equal"};
	}
	$(".minimum").append("<p>" + minimum(0, 10) + "</p>");
	$(".minimum").append("<p>" + minimum(0, -10) + "</p>");
	$(".minimum").append("<p>" + minimum(5, 5) + "</p>");

	//Recursion Ch3Ex2
	function isEven(x){
		y = x;
		if(y < 0){y = y * (-1);}
		if(y === 0){return ("is Even");}
		else if(y === 1){return ("is Odd");}
		else{return isEven(y-2);}
	}
	$(".recursion").append("<p>The Number 50 " + isEven(50) + "</p>");
	$(".recursion").append("<p>The Number 75 " + isEven(75) + "</p>");
	$(".recursion").append("<p>The Number -25 " + isEven(-25) + "</p>");

	//Character Counting Ch3Ex3
	function countChar(x, y){
		count = 0;
		for(i = 0; i < x.length; i++){
			if(x.charAt(i) === y){count++;}
		}
		temp = "There are " + count + " " + y + "'s in '" + x + "'";
		return temp;
	}
	$(".beans").append("<p>" + countChar("BBC", "B") + "</p>");
	$(".beans").append("<p>" + countChar("kakkerlak", "k") + "</p>");
});





















