		const state = {
			spinning: false,
			bigText: false,
			textGreen: false,
			audioPlaying: false
		};

		let sound;

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
			if (state.bigText) {
				document.getElementById('embiggenText').innerHTML = "Smallify";
			} else {
				document.getElementById('embiggenText').innerHTML = "Embiggen";
			}
		};

		const playSound = (val) => {
				if (state.audioPlaying) {
					sound.pause();
					sound.currentTime = 0;
					document.getElementById('soundText').innerHTML = "Listen up";
					state.audioPlaying = !state.audioPlaying;
				} else {
					sound = document.createElement('audio');
			    sound.setAttribute('autoplay', 'autoplay');
			    sound.setAttribute('src', val);
			    sound.play();
			    document.getElementById('soundText').innerHTML = "Shut up";
			    state.audioPlaying = !state.audioPlaying;
				}
		};


window.onload = function(){

		if (state.spinning) {
			document.getElementById('spinDoggyText').innerHTML = "Stop Doggy";
		} else {
			document.getElementById('spinDoggyText').innerHTML = "Spin Doggy";
		}

		if (state.bigText) {
			document.getElementById('embiggenText').innerHTML = "Smallify";
		} else {
			document.getElementById('embiggenText').innerHTML = "Embiggen";
		}

		if (state.audioPlaying) {
			document.getElementById('soundText').innerHTML = "Shut up";
		} else {
			document.getElementById('soundText').innerHTML = "Listen up";
		}

	}