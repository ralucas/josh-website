'use strict';

var app = (function(document, $) {
	var docElem = document.documentElement,
		_userAgentInit = function() {
			docElem.setAttribute('data-useragent', navigator.userAgent);
		},
		_init = function() {
			$(document).foundation();
            // needed to use joyride
            // doc: http://foundation.zurb.com/docs/components/joyride.html
            $(document).on('click', '#start-jr', function () {
                $(document).foundation('joyride', 'start');
            });
			_userAgentInit();
		};
	return {
		init: _init
	};
})(document, jQuery);

(function() {
	app.init();
 
  $('a[href^="#"]').click(function() {
    var main = $(this).closest('#main');
    var id = $(this).attr('href');
    main.find('.show').addClass('hide').removeClass('show');
    main.find(id).removeClass('hide').addClass('show');
  });

 })();
