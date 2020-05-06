let button = document.getElementById('button');
let answer = document.getElementById('answer');
let loris = 'Images/loris.jpeg';
let skandou = 'Images/skandou.jpeg';
let raptor = 'Images/raptor.jpeg';
let risk = 'Images/risk.jpeg';
let bavarde = 'Images/Bavard.jpeg';
let answerImage = document.getElementById('answer-photo');
let allPics = [ loris, skandou, raptor, risk, bavarde ];
let thanksImage = document.getElementById('thanksImage');
let thanksMessage = document.getElementById('thanksMessage');
let confirmationSorryButton = document.getElementById('confirmSorryButton');
let choice = [
	'She likes milk and woman can be crazy... You should forgive her',
	'What a fucking bitch ! But I love bitch, great mocking source!',
	"Don't worry I'll only give her no valiant soldiers for next game, it's enough as punishment!",
	'I still need you two fighting to win, forget her madness!',
	'She just miss your burger night together, it plays with her nerve you know'
];
let drawPlace = document.getElementById('drawPlace');
let displayDraw = document.getElementById('displayDraw');
let draw = 'Images/draw.jpeg';
let lastResult = 6;

function getAChoice(choice) {
	let result = Math.floor(Math.random() * 5);
	while (lastResult === result) {
		result = Math.floor(Math.random() * 5);
	}
	lastResult = result;

	return choice[result];
}

confirmationSorryButton.onclick = () => {
	if (document.getElementById('yesToForgive').checked) {
		thanksMessage.innerHTML = "➡️ Thanks, you're DA best 😽😽😽";
	} else if (document.getElementById('noToForgive').checked) {
		thanksMessage.innerHTML = "❌ That so mean... I'm crying 😿😿😿";
	} else {
		thanksMessage.innerHTML = "🧐 It seems like you didn't answer little 😈";
	}
};

button.onclick = () => {
	answer.innerHTML = getAChoice(choice);
	if (answer.innerHTML === choice[0]) {
		answerImage.src = loris;
	} else if (answer.innerHTML === choice[1]) {
		answerImage.src = raptor;
	} else if (answer.innerHTML === choice[2]) {
		answerImage.src = risk;
	} else if (answer.innerHTML === choice[3]) {
		answerImage.src = skandou;
	} else if (answer.innerHTML === choice[4]) {
		answerImage.src = bavarde;
	}
};

displayDraw.onmouseover = () => {
	drawPlace.src = draw;
};

displayDraw.onmouseout = () => {
	drawPlace.src = '';
};

var newParticle = {
	particles: {
		number: {
			value: 80,
			density: {
				enable: true,
				value_area: 800
			}
		},
		color: {
			value: '#007bff'
		},
		shape: {
			type: 'circle',
			stroke: {
				width: 0,
				color: '#000000'
			},
			polygon: {
				nb_sides: 5
			},
			image: {
				src: 'img/github.svg',
				width: 100,
				height: 100
			}
		},
		opacity: {
			value: 0.5,
			random: false,
			anim: {
				enable: false,
				speed: 1,
				opacity_min: 0.1,
				sync: false
			}
		},
		size: {
			value: 3,
			random: true,
			anim: {
				enable: false,
				speed: 40,
				size_min: 0.1,
				sync: false
			}
		},
		line_linked: {
			enable: true,
			distance: 150,
			color: '#007bff',
			opacity: 0.4,
			width: 1
		},
		move: {
			enable: true,
			speed: 6,
			direction: 'none',
			random: false,
			straight: false,
			out_mode: 'out',
			bounce: false,
			attract: {
				enable: false,
				rotateX: 600,
				rotateY: 1200
			}
		}
	},
	interactivity: {
		detect_on: 'canvas',
		events: {
			onhover: {
				enable: true,
				mode: 'repulse'
			},
			onclick: {
				enable: true,
				mode: 'push'
			},
			resize: true
		},
		modes: {
			grab: {
				distance: 400,
				line_linked: {
					opacity: 1
				}
			},
			bubble: {
				distance: 400,
				size: 40,
				duration: 2,
				opacity: 8,
				speed: 3
			},
			repulse: {
				distance: 200,
				duration: 0.4
			},
			push: {
				particles_nb: 4
			},
			remove: {
				particles_nb: 2
			}
		}
	},
	retina_detect: true
};

var jsonUri = 'data:text/plain;base64,' + window.btoa(JSON.stringify(newParticle));

particlesJS.load('particles-js', jsonUri, function() {
	console.log('callback - particles.js config loaded');
});
