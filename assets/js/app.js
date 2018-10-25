var jumpButton = document.getElementById('btnJump');
var jake = document.getElementById('jakeImage');
var fitnessText = document.getElementById('fitness');
var pickName = document.getElementById('pickName');
var fitness = 0;


pickName.onclick = function(e) {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
	    	document.getElementById("randomName").innerHTML = this.responseText;
	 	}
	};
	
	xhttp.open('GET', '../src/tamagochi.php', true);
	xhttp.send();
}

jumpButton.onclick = function(e) {
	jake.style.marginTop = '70px';
	
	fitness += 10;

	if (fitness > 100) {
		jake.style.marginTop = '100px';
		alert('Jake is too healthy now.');
		return;
	} else {
		fitnessText.innerHTML = fitness;
		setTimeout(function() {
			jake.style.marginTop = '100px';
		}, 100);
		clearInterval();
	}
}