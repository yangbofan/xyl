/*
 * http://tianji.me/loveme
 */

// variables
var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

$(window).resize(function() {
    var newWidth = $win.width();
    var newHeight = $win.height();
    if (newWidth != clientWidth && newHeight != clientHeight) {
        location.replace(location);
    }
});

(function($) {
	$.fn.typewriter = function() {
		this.each(function() {
			var $ele = $(this), str = $ele.html(), progress = 0;
			$ele.html('');
			var timer = setInterval(function() {
				var current = str.substr(progress, 1);
				if (current == '<') {
					progress = str.indexOf('>', progress) + 1;
				} else {
					progress++;
				}
				$ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
				if (progress >= str.length) {
					clearInterval(timer);
				}
			}, 75);
		});
		return this;
	};
})(jQuery);

function timeElapse(date){
	var day = Math.floor(new Date().getTime() / 1000) - (new Date('2021-02-16 19:34:12').getTime() / 1000),
	day2 = Math.floor(day / (24 * 3600)),
	day3 = day2 * 24 * 3600,
	day4 = day - day3,
	day5 = Math.floor(day4 / 3600),
	day6 = day4 - day5 * 3600,
	day7 = Math.floor(day6 / 60),
	day8 = day6 - day7 * 60;
	var result = "第 <span class=\"digit\">" + day2 + "</span> 天 <span class=\"digit\">" + day5 + "</span> 时 <span class=\"digit\">" + day7 + "</span> 分 <span class=\"digit\">" + day8 + "</span> 秒"; 
	$("#clock").html(result);
}