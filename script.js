const changeColor = () => {
	document.getElementById('words').classList.toggle("green");
}

const embiggen = () => {
	document.getElementById('words').classList.toggle("bigger");
}

const playSound = (val) => {
		console.log(val);
    var sound = document.createElement('audio');
    sound.setAttribute('autoplay', 'autoplay');
    sound.setAttribute('src', val);
    sound.play();
}