// Checkoff specific ToDo after clicking
$("ul").on("click", "li", function(){
	// Turn the li back to black
	// if li is gray
	// if($(this).css("color") === "rgb(128, 128, 128)"){
	// 	// turn it black
	// 	$(this).css({
	// 		color: "black",
	// 		textDecoration: "none"
	// 	});
	// } else {
	// 	$(this).css({
	// 		color: "gray",
	// 		textDecoration: "line-through"
	// 	});
	// }
	$(this).toggleClass("completed");
});

// Click on X to delete Todo
$("ul").on("click", "span", function(e){
	$(this).parent().fadeOut(750, function(){
		$(this).remove();
	});
	e.stopPropagation();
	// alert("Clicked");
});

// Listener on the input
$("input[type='text']").keypress(function(e){
	if(e.which === 13){
		// grabbing new todo text from input
		let todoText = $(this).val();
		$(this).val("");
		// Create a new li and to ul
		$("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + todoText + "</li>");
	};
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle(300);
});