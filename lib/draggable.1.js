

// draggable class

// pass in an html element or a string which will create a blank div

var Draggable = (function(){

	var stack = [];

	var self = function(object){

		this.destroyed = false;

		this.drag = false;

		this.dragOffsetX = 0;

		this.dragOffsetY = 0;

		this.dragPositionX = 1000;

		this.dragPositionY = 0;

		this.layer = 5;

		this.margin = 10;

		if (isElement(object)){

			this.object = object;

			this.object.style.position = 'absolute';

			this.object.style.zIndex = this.layer;

			this.object.classList.add('draggable');

			this.id = this.object.id;

		}

		else {

			this.id = object;

			this.object = createElement('div', {

				id: this.id,

				position: 'absolute',

				zIndex: this.layer,

				className: 'draggable'

			});

			document.body.insertBefore(this.object, document.body.firstChild);

		}

		this._mousedown = makeHandler(this.mousedown, this);

		this._mouseup = makeHandler(this.mouseup, this);

		this._mousemove = makeHandler(this.mousemove, this);

		this.object.addEventListener('mousedown', this._mousedown, false);

		window.addEventListener('mousemove', this._mousemove, false);

		window.addEventListener('mouseup', this._mouseup, false);

		window.addEventListener('resize', this._mousemove, false);

		this.update();

		stack.push(this);

	};

	self.prototype = {

		update: function(){

			this.object.style.zIndex = this.drag === true ? 1000 : this.layer;

			this.object.style.top = Math.min(

				bWindow.scrollTop() + bWindow.height() - this.object.offsetHeight - this.margin, 

				Math.max(

					this.margin + bWindow.scrollTop(), 

					this.dragPositionY - this.dragOffsetY

				)

			) + 'px';

			this.object.style.left = Math.min(

				bWindow.scrollLeft() + bWindow.width() - this.object.offsetWidth - this.margin, 

				Math.max(

					this.margin + bWindow.scrollLeft(), 

					this.dragPositionX - this.dragOffsetX

				)

			) + 'px';

		},

		moveToTop: function(){

			var i = stack.length, j = 0;

			while (i--){

				j = Math.max(j, stack[i].layer);

			}

			this.layer = j + 1;

			return;

		},

		mouseup: function(event){

			if (this.drag === false){

				return;

			}

			event.preventDefault();

			this.drag = false;

			this.moveToTop();

			this.update();

		},

		mousedown: function(event){

			event.preventDefault();

			this.drag = true;

			this.dragOffsetX = event.pageX - this.object.offsetLeft;

			this.dragOffsetY = event.pageY - this.object.offsetTop;

			this.dragPositionX = event.pageX;

			this.dragPositionY = event.pageY;

		},

		mousemove: function(event){

			if (this.drag !== false){

				event.preventDefault();

				this.dragPositionX = event.pageX;

				this.dragPositionY = event.pageY;

			}

			this.update();

		},

		destroy: function(){

			if (this.destroyed === true){

				return false;

			}

			this.destroyed = true;

			this.object.removeEventListener('mousedown', this._mousedown);

			window.removeEventListener('mousemove', this._mousemove);

			window.removeEventListener('mouseup', this._mouseup);

			window.removeEventListener('resize', this._mousemove);

			this.object.parentNode.removeChild(this.object);

			return true;

		},

		hide: function(){

			this.object.style.display = 'none';

		},

		show: function(){

			this.object.style.display = 'block';

		},

		move: function(x, y){

			this.dragPositionX = x;

			this.dragPositionY = y;

			this.dragOffsetX = 0;

			this.dragOffsetY = 0;

			this.update();

		}

	};

	return self;

})();
/*
     FILE ARCHIVED ON 15:59:15 Nov 16, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 15:03:36 Jul 22, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 134.959 (3)
  esindex: 0.01
  captures_list: 156.618
  CDXLines.iter: 12.437 (3)
  PetaboxLoader3.datanode: 185.216 (5)
  exclusion.robots: 0.357
  exclusion.robots.policy: 0.344
  RedisCDXSource: 5.385
  PetaboxLoader3.resolve: 179.493 (3)
  load_resource: 320.523
*/