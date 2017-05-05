$(function(){
	var x = 0;
	var count = 0;
	var prevElem = "";
	var nextElem = "";
	var imgElemChild = "";

	/*$("#valentine-greetings").hide();
	setInterval(function(){
		$("#arrow").animate({
			top: "30px"
		});
		$("#arrow").animate({
			top: "-30px"
		});
	}, 500);*/
	
		music.volume = 0.80;
		music.loop = true;
		music.play();
	
		//$("body").addClass("gif-background");
		imgElemChild = $("#slide-pictures .image-circle:nth-child(1)");
		imgElemChild.fadeIn("slow");
		//$("#valentine-greetings").fadeIn();
		//$("#volume").fadeIn();
		$("#bday-greetings").animate({
			zoom: "90%"
		});
		$("#bday-greetings").animate({
			zoom: "100%"
		});
		prevElem = imgElemChild;
		x++;
	
	setInterval(function(){
		prevElem.fadeOut(400, function(){
			$("#bday-greetings").animate({
				zoom: "90%"
			});
			$("#bday-greetings").animate({
				zoom: "100%"
			});
			if(x === 9){
				nextElem = $("#slide-pictures .image-circle:nth-child(1)");
				x = 1;
			}
			else
			{
				nextElem = prevElem.next();
			}
			nextElem.fadeIn();
			prevElem = nextElem;
			x++
			count++;
		});
	}, 10000);

});