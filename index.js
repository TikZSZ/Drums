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
	// touch listner (Method -1)

// const btnArray = document.querySelectorAll('.drum');
// for (var i = 0; i < btnArray.length; i++) {
// 	btnArray[i].addEventListener('click', function () {
// 		document.querySelector('.input').innerHTML += this.innerHTML;
// 		play(this.innerHTML);
// 	});
// };

// Method 2 single event listern

document.querySelector('.set').addEventListener("click",function (event) {
	if(event.target!==event.currentTarget){
		document.querySelector('.input').innerHTML += event.path[0].innerHTML;
		play(event.path[0].innerHTML);
	};
	event.stopPropagation;
	},false);

// press listner
document.addEventListener('keydown', function (event) {
	document.querySelector('.input').innerHTML += event.key;
	play(event.key);
});
// player
function play(keyp) {

	switch (keyp) {
	case "w":
		var w = document.querySelector('.crash');
		addstyle(w);
		tutroial(w);
		var audio1 = new Audio();
        audio1.src = "sounds/crash.mp3";
        audio1.preload="auto"
        audio1.play()
		removestyle(w);
		break;
	case "a":
		var a = document.querySelector('.kick-bass');
		addstyle(a);
		tutroial(a);
		var audio2 = new Audio();
        audio2.src = "sounds/kick-bass.mp3";
        audio2.preload="auto"
		audio2.play();
		removestyle(a);
		break;
	case "s":
		var s = document.querySelector('.snare');
		addstyle(s);
		tutroial(s);
		var audio3 = new Audio();
        audio3.src = "sounds/snare.mp3";
        audio3.preload="auto"
		audio3.play();
		removestyle(s);
		break;
	case "d":
		var d = document.querySelector('.tom-1');
		addstyle(d);
		tutroial(d);
		var audio4 = new Audio();
        audio4.src = "sounds/tom-1.mp3";
        audio4.preload="auto"
		audio4.play();
		removestyle(d);
		break;
	case "j":
		var j = document.querySelector('.tom-2');
		addstyle(j);
		tutroial(j);
		var audio5 = new Audio();
        audio5.src = "sounds/tom-2.mp3";
        audio5.preload="auto"
		audio5.play();
		removestyle(j);
		break;
	case "k":
		var k = document.querySelector('.tom-3');
		addstyle(k);
		tutroial(k);
		var audio6 = new Audio();
        audio6.src = "sounds/tom-3.mp3";
        audio6.preload="auto"
		audio6.play();
		removestyle(k);
		break;
	case "l":
		var l = document.querySelector('.tom-4');
		addstyle(l);
		tutroial(l);
		var audio7 = new Audio();
        audio7.src = "sounds/tom-4.mp3";
        audio7.preload="auto"
		audio7.play();
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
                        if((count)===str.length){
    document.getElementById('tutorial').click()
    document.getElementById('tutorial').click()
                        };
		};
	};
};

function tutorialclick() {
	if (status === "false") {
		style[0].classList.remove("hidden");
        style[1].classList.remove("hidden");
        // var viewport = window.innerWidth;
        
		document.querySelector('#tutorial').innerHTML = "Stop Tutorial";
		
		status = "true";
	} else if (status === "true") {

		style[0].classList.add("hidden");
		style[1].classList.add("hidden");
        style[1].innerHTML = ":";
		document.querySelector('#tutorial').innerHTML = "Start Tutorial"
        document.querySelector('.users').innerHTML=`<span class="span">${span}</span>`
          	count = 0;
		status = "false";
	};
}
if(!(window.innerWidth>=990)){
    document.getElementsByClassName('tutorial-btn')[2].style.marginTop=0;

}

var is_history = "false"

function show() {
	if (is_history === "false") {
		document.querySelector('.input').classList.remove('hidden');
		is_history = "true";
		document.querySelector('#history').innerHTML = "Hide My History";
	} else if (is_history = "true") {
		document.querySelector('.input').classList.add('hidden');
		is_history = "false";
		document.querySelector('#history').innerHTML = "Show My History";
	};
};

var scroll_status=false;
function analyse(){
	console.log(scroll_status);
	if(!scroll_status){
		scroll_status=true;
		document.getElementById('analyse').innerHTML="Stop Long History";
	}else{
		scroll_status=false;
		document.getElementById('analyse').innerHTML="Long History";

	};
	
};

// function for scroll synchronization

var TopDiv = document.querySelector('.users');
var BottomDiv = document.querySelector('.user');
TopDiv.onscroll = function () {
	BottomDiv.scrollLeft = this.scrollLeft;
};
BottomDiv.onscroll = function () {
	TopDiv.scrollLeft = this.scrollLeft;
	

};

var el1 = document.querySelector('.user');
var el2 = document.querySelector('.input');


setInterval(autoScroll, 100);

function autoScroll() {
	// check if scrolled to right
	var scroll = checkScrolledToRight(el1);
	var scroll2 = checkScrolledToRight(el2);
	
		
	// if not scroll to right
	if (!scroll) {
		scrollToRight(el1);		
	};
	if(!scroll_status){
		if (!scroll2) {
			scrollToRight(el2);		
		};
	}

};

function checkScrolledToRight(el) {
	if(el.scrollLeft >= (el.scrollWidth - el.offsetWidth)){
		return true;
	} else {
		return false;
	};
};

function scrollToRight(el) {
	el.scrollLeft = (el.scrollWidth);
};


// function scrolldown() {
// 	setTimeout(
// 	  function()
// 	  {
// 		el1.scrollLeft=(el1.scrollWidth);
// 		console.log("hello 2");
// 		scrolldown();
// 	  }, 100
// 	)
//   }

// scrolldown()
  
 

console.log(document.getElementById('something').clientHeight);
console.log(document.getElementById('something').offsetHeight);
