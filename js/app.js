
$(document).ready(function(){

	var computerChoice = Math.floor(Math.random() * 101);
		console.log(computerChoice);
	
//	function newGame() {
//		computerChoice;
//	}

	$('#guessButton').on('click', function(){
		var userGuess = $('input').val();
			console.log(userGuess);

 		if (isNaN(userGuess)) {
 			alert('Not a number! Please enter a number!');
 		} else {
 			$('.game>ul').append('<li>' + userGuess + '</li>');
 			if (userGuess ===  computerChoice){
 				$('#feedback').append('YAY - You got it!');
 			} else if (userGuess < computerChoice + 10){
 				$('#feedback').append('YAY - You got it!');
 			} else if (userGuess < computerChoice + 30){
 				$('#feedback').append('YAY - You got it!');
 		//	} else (userGuess < computerChoice + 50){
 		//		console.log('very cold');
 			}
 		}
 	})
});




	/*
	//Changing userGuess value to interger
	function userGuesss() {
		return parseInt('input');
	}

	var uG = userGuess();
	console.log(uG);

	//Make sure userGuess is a number
	if (isNaN(uG)) {
		alert('Not a number! Please enter a number!');
	};

	//On clicking button
	$('#guessButton').on('click', function(){

		$('#guessList').append('<p>' + uG + '</p>');

		if (value == '') {
			   	alert("You haven't entered anything to add");
		} else if (uG == computerChoice) {
			console.log("BINGO!");
		} else if (uG <= computerChoice + 10) {
			console.log("Very Warm");
		} else if (uG <= computerChoice + 20) {
			console.log("Warm");
		} else if (uG <= computerChoice + 40) {
			console.log("Cold");
		} else (uG <= computerchoice + 50) {
			console.log("Very cold!");
		}
	});
*/

	/*Display information modal box
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);
  	});

  	/*--- Hide information modal box ---
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});
	*/




