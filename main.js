document.addEventListener("DOMContentLoaded", function() {
	var $button = document.querySelector("button");
	var $target = document.querySelector(".target");
	var insult = document.querySelector(".insult");
	var $phrases = ["No one cares.", "Well fold it up, put it in an envelope, and mail it to yo mama cause we don't care!", "You need help. With apathy. We don't care.", "::gives you some serious side-eye::", "The only thing more powerful than ignorance is apathy. Which I have. A lot of. For you.", "Go get some tissues and call the wahmbulance!", "Did you really fill this form out? Do you understand satire?"];
	var $phrasesClone = $phrases.slice(0);
	function randomPhrase() {
		return $phrases[Math.floor(Math.random() * 9)];
	}


	$button.addEventListener('click', function() {
		$target.innerHTML = "";
		event.preventDefault();
		$target.appendChild(createPTag(randomPhrase()));
	});
});

function createPTag(text) {
	var docFragment = document.createDocumentFragment();
	var $p = document.createElement('p');
	$p.textContent = text;
	docFragment.appendChild($p);
	return docFragment;
}
