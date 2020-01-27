/**

 * DOM Compatibility Script

 * @author : Christopher Powe

 * @site : http://pastebin.com/GH6YWNzR

 * @date : July 08, 2011

 *

 * This script has only been briefly tested and i do not guarantee that this 

 * script will work very well, if at all.

 *

 * The following stuff is added:

 *

 * - addEventListener

 * - removeEventListener

 * - event.preventDefault

 * - event.stopPropagation

 * - event.pageX / event.pageY

 * - xmlhttprequest

 * - getElementsByClassName

 * - classList

 * - querySelector

 * - string.trim

 *

 * Tested in:

 *

 * IE 5.5, 6, 7, 8, 9

 * FF 4

 * OP 10.50

 * CR 14

 *

**/

(function(){

	"use strict";

	var stuffToAdd = [];

	

	// add trim method if missing

	if (String.trim === undefined){

		String.prototype.trim = function(){

			return this.replace(/^\s+|\s+$/g, '');

		}

	}

	

	// add indexof method

	if (([]).indexOf === undefined){

		Array.prototype.indexOf = function(searchElement){

			if (this === void 0 || this === null){

				throw new TypeError();

			}

			var t = Object(this);

			var len = t.length >>> 0;

			if (len === 0){

				return -1;

			}

			var n = 0;

			if (arguments.length > 0){

				n = Number(arguments[1]);

				if (n !== n){ // shortcut for verifying if it's NaN

					n = 0;

				}

				else if (n !== 0 && n !== (1 / 0) && n !== -(1 / 0)){

					n = (n > 0 || -1) * Math.floor(Math.abs(n));

				}

			}

			if (n >= len){

				return -1;

			}

			var k = n >= 0 ? n : Math.max(len - Math.abs(n), 0);

			for (; k < len; k++){

				if (k in t && t[k] === searchElement){

					return k;

				}

			}

			return -1;

		};

	}

	

	// add the w3c way to add events

	if (window.addEventListener === undefined){

		window.addEventListener = function(type, handler, capture){

			// create an object to store all this event

			var e = {};

			e.type = 'on' + type;

			e.element = this;

			e.handler = handler;

			e.capture = capture;

			// in some cases, use the document object instead of the window

			if (e.element.setInterval !== undefined && (

				e.type !== 'onload' && e.type !== 'unload' && e.type !== 'blur' && e.type !== 'focus'

			)){

				e.element = document;

			}

			// set event capture if requested

			if (e.capture === true){

				e.element.setCapture();

			}

			// create a wrapper for the event handler

			e.wrapper = function(event){

				// add some missing event properties

				event.pageX = event.clientX + document.documentElement.scrollLeft;

				event.pageY = event.clientY + document.documentElement.scrollTop;

				event.preventDefault = function(){

					this.returnValue = false;

				}

				event.stopPropagation = function(){

					this.cancelBubble = true;

				}

				// call the handler

				return e.handler.call(e.element, event);

			};

			// save to object

			if (e.element.events === undefined) e.element.events = [];

			e.element.events.push(e);

			// attach the event

			e.element.attachEvent(e.type, e.wrapper);

		};

		stuffToAdd.push({

			name: 'addEventListener',

			value: window.addEventListener

		});

	}

	

	// add the w3c way to remove events

	if (window.removeEventListener === undefined){

		window.removeEventListener = function(type, handler){

			var e = {}, i;

			e.type = 'on' + type;

			e.element = this;

			e.handler = handler;

			// in some cases, use the document object instead of the window

			if (e.element.setInterval !== undefined && (

				e.type !== 'onload' && e.type !== 'unload' && e.type !== 'blur' && e.type !== 'focus'

			)){

				e.element = document;

			}

			// check for the event stack

			if (e.element.events === undefined) return false;

			// search for the wrapper associated with this handler

			i = e.element.events.length;

			while (i--){

				if (e.element.events[i].type !== e.type || e.element.events[i].handler !== e.handler) continue;

				e.wrapper = e.element.events[i].wrapper;

				e.element.events.splice(i, 1);

				break;

			}

			if (e.wrapper === undefined) return false;

			e.element.detachEvent(e.type, e.wrapper);

		};

		stuffToAdd.push({

			name: 'removeEventListener',

			value: window.removeEventListener

		});

	}

	

	// get elements by class

	if (document.getElementsByClassName === undefined){

		document.getElementsByClassName = function(className){

			var className = ' ' + className + ' ', results = [], i = document.all.length;

			while (i--){

				if ((' ' + document.all[i].className + ' ').indexOf(className) !== -1){

					results.push(document.all[i]);

				}

			}

			return results;

		};

		stuffToAdd.push({

			name: 'getElementsByClassName',

			value: document.getElementsByClassName

		});

	}

	

	// add query selector if missing

	// based off code by Paul Young

	// http://ajaxian.com/archives/creating-a-queryselector-for-ie-that-runs-at-native-speed

	if (document.querySelectorAll === undefined){

		document.querySelectorAll = function(selector){

			// result stack

			document.__qsResult = [];

			// create a new style element

			var head = document.documentElement.firstChild;

			var styleTag = document.createElement('style');

			head.appendChild(styleTag);

			// add expression to style element

			styleTag.styleSheet.cssText = selector + '{x:expression(document.__qsResult.push(this))}';

			window.scrollBy(0, 0);

			head.removeChild(styleTag);

			// copy the results into a new array

			var result = [];

			for (var i in document.__qsResult){

				result.push(document.__qsResult[i]);

			}

			return result;

		}

		document.querySelector = function(selector){

			var items = document.querySelectorAll(selector);

			return items.length ? items[0] : null;

		}

	}

	

	// add ajax method

	if (window.XMLHttpRequest === undefined){

		window.XMLHttpRequest = function(){

			return new ActiveXObject("Microsoft.XMLHTTP");

		};

	}

	

	// add the classlist object if missing

	// based off code by Eli Grey

	// https://developer.mozilla.org/en/dom/element.classlist

	if (document.createElement('br').classList === undefined){

		var classList = function(element){

			this.classes = String.prototype.trim.call(element.className);

			this.classes = this.classes ? this.classes.split(/\s+/) : [];

			this._updateClassName = function(){

				element.className = this.toString();

			};

		}

		classList.prototype = {

			item: function(i){

				return this.classes[i] || null;

			},

			add: function(className){

				className = className.trim();

				var i = this.classes.length;

				while (i--){

					if (this.classes[i] === className){

						return;

					}

				}

				this.classes.push(className);

				this._updateClassName();

			},

			remove: function(className){

				className = className.trim();

				var i = this.classes.length;

				while (i--){

					if (this.classes[i] === className){

						this.classes.splice(i, 1);

						this._updateClassName();

						return;

					}

				}

			},

			contains: function(className){

				className = className.trim();

				var i = this.classes.length;

				while (i--){

					if (this.classes[i] === className){

						return true;

					}

				}

				return false;

			},

			toggle: function(className){

				className = className.trim();

				var i = this.classes.length;

				while (i--){

					if (this.classes[i] === className){

						this.classes.splice(i, 1);

						this._updateClassName();

						return;

					}

				}

				this.classes.push(className);

				this._updateClassName();

			},

			toString: function(){

				return this.classes.join(' ');

			}

		};

		stuffToAdd.push({

			name: 'classList',

			get: function classListGetter(){

				return new classList(this);

			}

		});

	}

	

	// rename element to htmlelement

	if (window.HTMLElement === undefined){

		if (window.Element !== undefined){

			window.HTMLElement = window.Element;

		}

	}

	

	// nothind to add

	if (stuffToAdd.length === 0){

		return;

	}

	

	// use the element prototype

	// check: do browsers with the HTMLElement prototype also support defineProperty?

	if (window.HTMLElement !== undefined){

		var i = stuffToAdd.length, propDesc = {

			configurable: true,

			writeable: true

		};

		while (i--){

			if (propDesc.get !== undefined) delete propDesc.get;

			if (propDesc.value !== undefined) delete propDesc.value;

			if (stuffToAdd[i].get !== undefined){

				propDesc.get = stuffToAdd[i].get;

				propDesc.enumerable = false;

			}

			else {

				propDesc.value = stuffToAdd[i].value;

				propDesc.enumerable = true;

			}

			Object.defineProperty(window.HTMLElement.prototype, stuffToAdd[i].name, propDesc);

		}

	}

	

	// create a wrapper for each method

	else {

		var wrapMethod = function(object, methodName){

			var method = object[methodName];

			object[methodName] = function(){

				var result = Function.prototype.apply.call(method, object, arguments), item;

				if (result){

					if (result.length !== undefined && result.nodeName === undefined){

						for (i = result.length; i--; ){

							for (item in stuffToAdd){

								result[i][item] = stuffToAdd[item];

							}

						}

					}

					else {

						i = stuffToAdd.length;

						while (i--){

							result[stuffToAdd[i].name] = stuffToAdd[i].get !== undefined ? stuffToAdd[i].get.call(result) : stuffToAdd[i].value;

						}

					}

				}

				

				return result;

			};

		}

		// methods to wrap

		wrapMethod(document, 'createElement');

		wrapMethod(document, 'getElementById');

		wrapMethod(document, 'getElementsByTagName');

		wrapMethod(document, 'getElementsByClassName');

	}

})();
/*
     FILE ARCHIVED ON 16:31:48 Nov 16, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 15:03:36 Jul 22, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 38.412 (3)
  esindex: 0.024
  captures_list: 68.061
  CDXLines.iter: 11.914 (3)
  PetaboxLoader3.datanode: 99.235 (5)
  exclusion.robots: 0.166
  exclusion.robots.policy: 0.152
  RedisCDXSource: 14.3
  PetaboxLoader3.resolve: 189.027 (2)
  load_resource: 330.764
*/