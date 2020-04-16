// JavaScript Document

var headshot = document.getElementById('headshot');

window.onmousemove = function() {shrinker()};
		
		
		
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