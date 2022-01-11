// JavaScript Document

var headshot = document.getElementById('headshot');
var about = document.getElementById('about');
var faq = document.getElementById('faq');
var contact = document.getElementById('contact');
var vibecheck = document.getElementById('vibecheck');
var maintext = document.getElementById('maintext');
var block1 = document.getElementById('block1');
var progbar = document.getElementById('progbar');
		


		
	
		
		var shrinker = function() {
			  var wya = event.clientX;
       var b = document.body,
        st = wya,
        sh = document.body.clientWidth,
    	yo = (st / sh) * 100;
			gogo(yo);
		}
		
		var gogo = function(k) {
		var o = k / 6.25;
		var num = Math.round(o);
			chngpic(num);}
		
		
		
		var chngpic = function(m) {
			if (m <= 15) {
			var dumbo = "IMG/Frame " + m + ".png";
			headshot.setAttribute("src", dumbo);}
			else {
				headshot.setAttribute("src", "IMG/Frame 15.png");
			}
		}
		
function bringout(subj, one, two) {
		if (subj.className == 'hidden') {
			subj.setAttribute('class', 'visible');
		}
	else {
		subj.setAttribute('class', 'hidden');
	}
		if (one.className == 'visible') {
				one.setAttribute('class', 'hidden');
			}
		if (two.className == 'visible') {
			two.setAttribute('class', 'hidden');
		}
}



function checkit() {
	vibecheck.innerHTML = "<p>Please initialize vibe check for verification.</p><div id='progbar'></div><div id='result'></div>";
	window.setTimeout(progress, 1000);
}

function progress() {
	var result = document.getElementById('result');
	result.innerHTML = "<p>Vibe check: FAILED <br>Please check back later when you are truly just vibing.</p>";
	}


window.addEventListener("load", function() {
	var mainy = maintext.clientHeight;
	if (window.matchMedia("(max-width: 980px)").matches) {
		block1.style.height = mainy + "px";
	}
	else {
		block1.style.height = "auto";
	}
});


window.addEventListener("resize", function() {
	var mainy = maintext.clientHeight;
	if (window.matchMedia("(max-width: 980px)").matches) {
		block1.style.height = mainy + "px";
	}
	else {
		block1.style.height = "auto";
	}
});

window.addEventListener("load", function() {
	if (window.matchMedia("(max-width: 980px)").matches && window.matchMedia("(min-width: 781px)").matches) {
		headshot.setAttribute("src", "IMG/roseb-headshot.gif");
	}
	else {
		window.onmousemove = function() {shrinker()};
	}
});

window.addEventListener("load", function() {
	var dh = window.innerHeight;
	if (window.matchMedia("(max-width: 980px)").matches && window.matchMedia("(min-width: 781px)").matches) {
		var mobh = dh - 269;
		faq.style.maxHeight = mobh + "px";
	}
	else {
		var deskh = dh - 143;
		faq.style.maxHeight = deskh + "px";
	}
});