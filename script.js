		const state = {
			spinning: false,
			bigText: false,
			textGreen: false,
			audioPlaying: false
		};


		const spinDoggyFunction = () => {
			console.log('spinDoggy');
			document.getElementById('doggy-wrap').classList.toggle("invisible");
			state.spinning = !state.spinning;
			if (state.spinning) {
				document.getElementById('spinDoggyText').innerHTML = "Stop Doggy";
			} else {
				document.getElementById('spinDoggyText').innerHTML = "Spin Doggy";
			}
		};

		const changeColor = () => {
			document.getElementById('words').classList.toggle("green");
			state.textGreen = !state.textGreen;
		};

		const embiggen = () => {
			document.getElementById('words').classList.toggle("bigger");
			state.bigText = !state.bigText;
		};

		const playSound = (val) => {
				console.log(val);
		    var sound = document.createElement('audio');
		    sound.setAttribute('autoplay', 'autoplay');
		    sound.setAttribute('src', val);
		    sound.play();
		};


window.onload = function(){

		if (state.spinning) {
			document.getElementById('spinDoggyText').innerHTML = "Stop Doggy";
		} else {
			document.getElementById('spinDoggyText').innerHTML = "Spin Doggy";
		}

	}