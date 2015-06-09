
$(document).ready(function() {
	// creating the initial variables
	var computerChoice;
	var guessNumber; 
	var lastDifference;

	// newGame function to renew game w/o refreshing page
	function newGame() {
		guessNumber = 0; // no guesses yet
		lastDifference = NaN; // if lastDifference is NaN then it will run the absolute conditions
		computerChoice = Math.floor(Math.random() * 101); //new computerChoice generation
		console.log(computerChoice);
		$('#count').html('0'); //resetting the counter
		$('.game>ul').html(''); // emptying out previous guess container
		$('#feedback').html('Make your Guess!'); //resetting the feedback
	}

	newGame(); //calling the function so it runs initially

	//On clicking new game on top right-hand side
	$('.new').on('click',function(){
		newGame();
	});


	$('#guessButton').on('click', function(e){ //submitting guess
		e.preventDefault();//preventing  javascripts default refreshes

		guessNumber++; // increasing counter by 1 each time user makes a guess
		$('#count').html(guessNumber); //replaces previous count with new one in the counter

		var userGuess = $('#userGuess').val();// get the value of the user guess
		console.log(userGuess);

		if (userGuess > 100) { // checking to see if guess is within 1 to 100 range

			alert("Not a valid entry");
		}

 		if (isNaN(userGuess)) { //checking to see if guess is a number
 			alert('Not a number! Please enter a number!');
 		} else { 
 			$('.game>ul').append('<li>' + userGuess + '</li>');
 			var currentDifference = Math.abs(computerChoice - userGuess); //dif between computerChoice and userGuess (in absolute, so no decimals)


 			if (currentDifference == 0){ //if there is no difference between cmputerChoice and userGuess
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
 			lastDifference = Math.abs(computerChoice - userGuess); //so we know whether it is hotter or colder than before
 		}
 	});	
});




	