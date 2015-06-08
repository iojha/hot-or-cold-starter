
$(document).ready(function() {

	var computerChoice;
	var guessNumber; 
	var lastDifference;

	function newGame() {
		guessNumber = 0;
		lastDifference = NaN;
		computerChoice = Math.floor(Math.random() * 101);
		console.log(computerChoice);
		$('#count').html('0');
		$('.game>ul').html('');
		$('#feedback').html('Make your Guess!');
	}

	newGame();

	//On clicking new game
	$('.new').on('click',function(){
		newGame();
	});

//	function newGame() {
//		computerChoice;
//	}

//  = Math.abs(); 

	$('#guessButton').on('click', function(e){
		e.preventDefault();

		guessNumber++;
		$('#count').html(guessNumber);

		var userGuess = $('#userGuess').val();
		console.log(userGuess);

		if (userGuess > 100) {

			alert("Not a valid entry");
		}

 		if (isNaN(userGuess)) {
 			alert('Not a number! Please enter a number!');
 		} else {
 			$('.game>ul').append('<li>' + userGuess + '</li>');
 			var currentDifference = Math.abs(computerChoice - userGuess);


 			if (currentDifference == 0){
 				$('#feedback').html('You got it!');
 			
 			} else if (currentDifference == lastDifference || isNaN(lastDifference)) {

 				// Absolute comparison
 				if (currentDifference <= 10) {
 					$('#feedback').html('Hot');
 				} else if (currentDifference <=30) {
 					$('#feedback').html('Warm');
 				} else {
 					$('#feedback').html('Cold');
 				}
 			} else {
	 			// Relative comparison
	 			if (currentDifference < lastDifference) {
	 				$('#feedback').html('Getting warmer');
	 			} else if (currentDifference > lastDifference) {
	 				$('#feedback').html('Getting colder');
	 			}
 			}
 			
 			$('#userGuess').val('');
 			lastDifference = Math.abs(computerChoice - userGuess);
 		}
 	});	
});




	