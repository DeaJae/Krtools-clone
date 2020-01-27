window.addEventListener('load', function(){

	// check if background-size is supported

	if (document.body.style.backgroundSize !== undefined){

		return;

	}

	// emulate background-size with an image tag

	document.body.style.background = 'none';

	var image = createElement('img', {

		position: 'absolute',

		width: '100%',

		hiehgt: '100%',

		zIndex: '-1',

		top: '0',

		left: '0',

		src: 'imgs/background.jpg'

	});

	document.body.appendChild(image);

}, false);
/*
     FILE ARCHIVED ON 18:01:11 Nov 16, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 15:03:37 Jul 22, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 433.367 (3)
  esindex: 0.013
  captures_list: 453.83
  CDXLines.iter: 14.916 (3)
  PetaboxLoader3.datanode: 1194.388 (5)
  exclusion.robots: 0.224
  exclusion.robots.policy: 0.211
  RedisCDXSource: 1.27
  PetaboxLoader3.resolve: 556.648 (3)
  load_resource: 1411.922
*/