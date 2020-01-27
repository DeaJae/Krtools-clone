

// query selector shortcut

function querySelector(){

	return document.querySelector.apply(document, arguments);

}

function querySelectorAll(){

	return document.querySelectorAll.apply(document, arguments);

}



// debugging

function c(){

	document.getElementById('console').innerHTML = '';

}

function d(x){

	if (!document.body) return;

	var console = document.getElementById('console');

	console.insertBefore(document.createElement('br'), console.firstChild);

	console.insertBefore(document.createTextNode(x), console.firstChild);

}



// window properties

var bWindow = (function(){

	function filter(a, b, c){

		var r = a ? a : 0;

		if (b && (!r || r > b)) r = b;

		return c && (!r || r > c) ? c : r;

	}

	return {

		width: function(){

			return filter(

				window.innerWidth ? window.innerWidth : 0,

				document.documentElement ? document.documentElement.clientWidth : 0,

				document.body ? document.body.clientWidth : 0

			);

		},

		height: function(){

			return filter(

				window.innerHeight ? window.innerHeight : 0,

				document.documentElement ? document.documentElement.clientHeight : 0,

				document.body ? document.body.clientHeight : 0

			);

		},

		scrollLeft: function(){

			return filter(

				window.pageXOffset ? window.pageXOffset : 0,

				document.documentElement ? document.documentElement.scrollLeft : 0,

				document.body ? document.body.scrollLeft : 0

			);

		},

		scrollTop: function(){

			return filter(

				window.pageYOffset ? window.pageYOffset : 0,

				document.documentElement ? document.documentElement.scrollTop : 0,

				document.body ? document.body.scrollTop : 0

			);

		}

	};

})();



// create element

var createElement = function(nodeName, params){

	var element = document.createElement(nodeName), item;

	for (item in params){

		switch (item){

			case 'click':

			case 'mouseover':

			case 'mouseout':

			case 'mousedown':

			case 'mouseup':

				element.addEventListener(item, params[item], false);

			break;

			case 'image':

				element.appendChild(createElement('img', { src: params[item] }));

			break;

			case 'text':

				element.appendChild(document.createTextNode(params[item]));

			break;

			case 'src':

				element.src = params[item];

			break;

			default:

				if (element.style[item] !== undefined){

					element.style[item] = params[item];

				}

				else {

					element[item] = params[item];

				}

			break;

		}

	}

	return element;

};



// add commas to a number

function addCommas(input){

	input = input.toString();

	var

		parts = input.split('.'),

		wholePart = parts[0],

		decimalPart = parts.length > 1 ? '.' + parts[1] : '',

		rgx = /(\d+)(\d{3})/

	;

	while (rgx.test(wholePart)) wholePart = wholePart.replace(rgx, '$1' + ',' + '$2');

	return wholePart + decimalPart;

}



// handler builder

function makeHandler(a, b){

	return function(){

		a.apply(b, arguments);

	};

}



// check if argument is an element

var isElement = (function(){

	if (window.HTMLElement !== undefined){

		return function(object){

			return object instanceof HTMLElement;

		};

	}

	else {

		return function(object){

			return object && object.nodeName !== undefined;

		};

	}

	return

})();



// get query from the request url

function getQuery(){

	var data = window.location.search.substring(1).split('&'), query = {};

	for (var i = 0; i < data.length; i++){

		data[i] = data[i].split('=');

		query[data[i][0]] = data[i][1];

	}

	return query;

}



// destroys an object or an array of objects

function kill(object){

	// object must be something

	if (!object){

		return;

	}

	// kill list of objects

	if (object.nodeName === undefined){

		if (object.length === undefined){

			return;

		}

		var i = object.length;

		while (i--){

			kill(object[i]);

		}

		return;

	}

	// must be in dom tree

	if (!object.parentNode){

		return;

	}

	// remove from dom tree

	object.parentNode.removeChild(object);

}



// param list object

function paramList(name, defaultParams){

	// check if local storage is available

	if (window.localStorage === undefined){

		this.name = name;

		this.params = this.defaultParams = defaultParams;

		return;

	}

	// check if list exists already

	if (localStorage[name] === undefined || localStorage[name] === null){

		localStorage[name] = '{}';

	}

	// check for default params

	if (defaultParams === undefined){

		defaultParams = {};

	}

	// set object vars

	this.name = name;

	this.defaultParams = defaultParams;

	this.params = JSON.parse(localStorage[name]);

}



// param getter

paramList.prototype.get = function(name){

	if (this.params[name] !== undefined){

		return this.params[name];

	}

	if (this.defaultParams[name] !== undefined){

		return this.defaultParams[name];

	}

	return undefined;

}



// param setter

paramList.prototype.set = function(name, value){

	if (window.localStorage === undefined){

		return;

	}

	this.params[name] = value;

	localStorage.params = JSON.stringify(this.params);

}
