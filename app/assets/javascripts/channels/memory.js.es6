$(document).ready(function() {
	let choiceOne;
	let choiceTwo;
	let count = 0;
	let card = 1;
	let tries = 1;
	let wowClass = ['death_knight', 'death_knight',
									'demon_hunter', 'demon_hunter',
									'druid', 'druid',
									'hunter', 'hunter',
									'mage', 'mage',
									'monk', 'monk',
									'paladin', 'paladin',
									'priest', 'priest',
									'rogue', 'rogue',
									'shaman', 'shaman',
									'warlock', 'warlock',
									'warrior', 'warrior']

	// Array Shuffler
	function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
	}

	// Starts Game
	function newGame() {
		let mixedCards = shuffle(wowClass);
		$(mixedCards).each(function(index, value) {
			$('.add_cards').append("<div class='image col s2 card " + value +"'></div>");
		});
		// Game Logic
	  $('.card').on('click', $(this), function() {
	  	function flipBack() {
				let numberOfTries = $('.tries').text(tries);
				let randomFailedToast = ['NOPE', 'SORRY', 'TOO BAD', 'TRY AGAIN', 'GET BETTER', 'RANDY YOU SUCK', 'NHI YOU SUCK'];
				let rand = randomFailedToast[Math.floor(Math.random() * randomFailedToast.length)];
	  		Materialize.toast(rand, 4000);
	  		$(choiceOne.id).addClass('card');
	  		$(choiceTwo.id).addClass('card');
	  		count = 0;
	  		tries ++;
	  	}
	  	count ++;
	  	if(count > 2) {
	  		return;
	  	}
	  	$(this).removeClass('card');
	  	if(count === 1) {
	  		choiceOne = {
	  			value: $(this).attr("class"),
	  			id: $(this).attr("id", card)
	  		};
	  	}
	  	else if(count === 2) {
	  		choiceTwo = {
	  			value: $(this).attr("class"),
	  			id: $(this).attr("id", card)
	  		};
	  		if(choiceOne.value === choiceTwo.value) {
	  			let randomToast = ['NICE!', 'GOOD JOB!', 'NICE PICK', 'BRIT IS THE BEST']
	  			let rand = randomToast[Math.floor(Math.random() * randomToast.length)];
	  			Materialize.toast(rand, 4000);
	  			count = 0;
	  		}
	  		else {
	  			setTimeout(flipBack, 2000);
	  		}
	  	}
	  });
	}

	// Starts a new game
	$('.new_game').on('click', $(this), function() {
		$('.image').remove();
		tries = 1;
		count = 0;
		newGame();
	})
});

