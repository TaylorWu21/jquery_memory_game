$(document).ready(function() {
	let count = 0
	let choiceOne
	let choiceTwo
  $('.card').on('click', $(this), function() {
  	function flipBack() {
  	}
  	count ++;
  	if(count > 2) {
  		return;
  	}
  	$(this).removeClass('card');
  	if(count === 1) {
  		let something = $(this).html();
  		alert(something);
  		choiceOne = {
  			value: $(this),
  			id: $(this).attr('id')
  		};
  	}
  });
});

