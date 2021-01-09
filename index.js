var span = document.querySelector('.span').innerHTML;
// style functions
function addstyle(p) {
	p.classList.add("pressed");
	p.classList.remove("pink");
	p.classList.add("red");
};

function removestyle(p) {
	setTimeout(function () {
		p.classList.remove("red");
		p.classList.add("pink");
		p.classList.remove("pressed");
	}, 100);
};
// event listners
// touch listner
const btnArray = document.querySelectorAll('.drum');
for (var i = 0; i < btnArray.length; i++) {
	btnArray[i].addEventListener('click', function () {
		document.querySelector('.input').innerHTML += this.innerHTML;
		play(this.innerHTML);
	});
};
// press listner
document.addEventListener('keydown', function (event) {
	document.querySelector('.input').innerHTML += event.key;
	play(event.key);
});
// player
function play(keyp) {
	var audio = new Audio();
	switch (keyp) {
	case "w":
		var w = document.querySelector('.crash');
		addstyle(w);
		tutroial(w);
		audio.src = "sounds/crash.mp3";
		audio.play();
		removestyle(w);
		break;
	case "a":
		var a = document.querySelector('.kick-bass');
		addstyle(a);
		tutroial(a);
		audio.src = "sounds/kick-bass.mp3";
		audio.play();
		removestyle(a);
		break;
	case "s":
		var s = document.querySelector('.snare');
		addstyle(s);
		tutroial(s);
		audio.src = "sounds/snare.mp3";
		audio.play();
		removestyle(s);
		break;
	case "d":
		var d = document.querySelector('.tom-1');
		addstyle(d);
		tutroial(d);
		audio.src = "sounds/tom-1.mp3";
		audio.play();
		removestyle(d);
		break;
	case "j":
		var j = document.querySelector('.tom-2');
		addstyle(j);
		tutroial(j);
		audio.src = "sounds/tom-2.mp3";
		audio.play();
		removestyle(j);
		break;
	case "k":
		var k = document.querySelector('.tom-3');
		addstyle(k);
		tutroial(k);
		audio.src = "sounds/tom-3.mp3";
		audio.play();
		removestyle(k);
		break;
	case "l":
		var l = document.querySelector('.tom-4');
		addstyle(l);
		tutroial(l);
		audio.src = "sounds/tom-4.mp3";
		audio.play();
		removestyle(l);
		break;
	default:
		break;
	}
}
// tutorial
// variables related to tutorial
var count = 0;
var str = "jkjkjkjkkwdjdjdjdjdjw";
var status = "false";
var style = document.querySelectorAll('.style');
// functions related to tutorials
function tutroial(p) {
	if (status === "true") {
		if (p.innerHTML === str[count]) {
			count = count + 1;
			document.querySelector('.style').innerHTML = span.slice(0, count) + `<span class="span">${span.slice(count,span.length)}</span>`;
			document.querySelector('.user').innerHTML += p.innerHTML;
		};
	};
};

function tutorialclick() {
	if (status === "false") {
		style[0].classList.remove("hidden");
		style[1].classList.remove("hidden");
		document.querySelector('#tutorial').innerHTML = "Stop Tutorial";
		status = "true";
	} else if (status === "true") {
		style[0].classList.add("hidden");
		style[1].classList.add("hidden");
		style[1].innerHTML = "";
		document.querySelector('#tutorial').innerHTML = "Start Tutorial";
		count = 0;
		status = "false";
	};
}
var is_history = "false"

function show() {
	if (is_history === "false") {
		document.querySelector('.div').classList.remove('hidden');
		is_history = "true";
		document.querySelector('#history').innerHTML = "Hide My History";
	} else if (is_history = "true") {
		document.querySelector('.div').classList.add('hidden');
		is_history = "false";
		document.querySelector('#history').innerHTML = "Show My History";
	};
};
// function for scroll synchronization
var TopDiv = document.querySelector('.users');
var BottomDiv = document.querySelector('.user');
TopDiv.onscroll = function () {
	BottomDiv.scrollLeft = this.scrollLeft;
};
BottomDiv.onscroll = function () {
	TopDiv.scrollLeft = (this.scrollLeft);
};
var el = document.querySelector('.user');
var paragraph = document.querySelector('.style').innerHTML;
setInterval(autoScroll, 100);

function autoScroll() {
	// check if scrolled to right
	function checkScrolledToRight(el) {
		if (el.scrollLeft = (el.scrollWidth - el.offsetWidth)) {
			return true;
		} else {
			return false;
		};
	};
	var scroll = checkScrolledToRight(el);
	// if not scroll to right
	function scrollToRight(el) {
		el.scrollLeft = (el.scrollWidth - el.offsetWidth);
	};
	if (!scroll) {
		scrollToRight(el);
	};
};