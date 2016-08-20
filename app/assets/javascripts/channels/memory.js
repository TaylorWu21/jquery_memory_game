$(document).ready(function() {
	let count = 0;
	let choiceOne;
	let choiceTwo;
	let card = 1;
	let tries = 1;
	let shuffle = []

	$('.shuffle').on('click', $(this), function() {
		
	})


  $('.card').on('click', $(this), function() {
  	function flipBack() {
			let numberOfTries = $('.tries').text(tries);
			let randomFailedToast = ['NOPE', 'SORRY', 'TOO BAD', 'TRY AGAIN', 'GET BETTER'];
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
  			let randomToast = ['NICE!', 'GOOD JOB!', 'SICK BRO', 'TIGHT']
  			let rand = randomToast[Math.floor(Math.random() * randomToast.length)];
  			Materialize.toast(rand, 4000);
  			count = 0;
  		}
  		else {
  			setTimeout(flipBack, 2000);
  		}
  	}
  });
});

