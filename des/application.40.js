(function(){
	
	// decimal adjust
	// source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round
	// Closure
	(function(){
		/**
		 * Decimal adjustment of a number.
		 *
		 * @param	{String}	type	The type of adjustment.
		 * @param	{Number}	value	The number.
		 * @param	{Integer}	exp		The exponent (the 10 logarithm of the adjustment base).
		 * @returns	{Number}			The adjusted value.
		 */
		function decimalAdjust(type, value, exp) {
			// If the exp is undefined or zero...
			if (typeof exp === 'undefined' || +exp === 0) {
				return Math[type](value);
			}
			value = +value;
			exp = +exp;
			// If the value is not a number or the exp is not an integer...
			if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
				return NaN;
			}
			// Shift
			value = value.toString().split('e');
			value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
			// Shift back
			value = value.toString().split('e');
			return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
		}
		// Decimal round
		if (!Math.round10) {
			Math.round10 = function(value, exp) {
				return decimalAdjust('round', value, exp);
			};
		}
		// Decimal floor
		if (!Math.floor10) {
			Math.floor10 = function(value, exp) {
				return decimalAdjust('floor', value, exp);
			};
		}
		// Decimal ceil
		if (!Math.ceil10) {
			Math.ceil10 = function(value, exp) {
				return decimalAdjust('ceil', value, exp);
			};
		}
	})();
	
	// replace element text
	function replaceText(object, text){
		kill(object.childNodes);
		object.appendChild(document.createTextNode(text));
	}
	
	// check if the browser supports what is needed
	function modernBrowser(){
		if (window.addEventListener === undefined){
			replaceText(querySelector('#message'), 'Missing browser feature: HTMLElement.addEventListener');
			return false;
		}
		if (document.documentElement.classList === undefined){
			replaceText(querySelector('#message'), 'Missing browser feature: HTMLElement.classList');
			return false;
		}
		if (document.getElementsByClassName === undefined){
			replaceText(querySelector('#message'), 'Missing browser feature: HTMLElement.getElementsByClassName');
			return false;
		}
		if (document.querySelector === undefined){
			replaceText(querySelector('#message'), 'Missing browser feature: HTMLElement.querySelector');
			return false;
		}
		if (Array.prototype.indexOf === undefined){
			replaceText(querySelector('#message'), 'Missing browser feature: Array.indexOf');
			return false;
		}
		if (Array.prototype.forEach === undefined){
			replaceText(querySelector('#message'), 'Missing browser feature: Array.forEach');
			return false;
		}
		return true;
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
		localStorage[this.name] = JSON.stringify(this.params);
	}
	
	// update params
	paramList.prototype.update = function(){
		this.params = JSON.parse(localStorage[this.name]);
	}
	
	// shortcut to query selector
	function querySelector(){
		return document.querySelector.apply(document, arguments);
	};
	
	// shortcut to query selector all
	function querySelectorAll(){
		var result = document.querySelectorAll.apply(document, arguments);
		// opera fails to add the foreach method added to the nodelist prototype
		if (result.forEach === undefined){
			result.forEach = Array.prototype.forEach;
		}
		return result;
	};
	
	// copy forEach method to the NodeList prototype
	NodeList.prototype.forEach = Array.prototype.forEach;
	HTMLCollection.prototype.forEach = Array.prototype.forEach;
	
	// make the input iterable
	function iterable(object){
		if ((object instanceof Array) || (object instanceof NodeList)){
			return object;
		}
		return [object];
	}
	
	// create element
	function createElement(nodeName, params){
		var object = document.createElement(nodeName);
		for (var item in params){
			switch (item){
				case 'click':
				case 'mousedown':
				case 'mouseup':
				case 'mouseover':
				case 'mouseout':
					iterable(params[item]).forEach(function(handler){
						object.addEventListener(item, handler, false);
					});
				break;
				case 'text':
					iterable(params[item]).forEach(function(text, i){
						if (i > 0) object.appendChild(document.createElement('br'));
						object.appendChild(document.createTextNode(text));
					});
				break;
				case 'image':
					iterable(params[item]).forEach(function(image){
						object.appendChild(createElement('img', {'src': image}));
					});
				break;
				case 'div':
					iterable(params[item]).forEach(function(params){
						object.appendChild(createElement(item, params));
					});
				break;
				case 'src':
					object.src = params[item];
				break;
				case 'children':
					iterable(params[item]).forEach(function(child){
						object.appendChild(child);
					});
				break;
				default:
					if (object.style[item] !== undefined){
						object.style[item] = params[item];
					}
					else {
						object[item] = params[item];
					}
				break;
			}
		}
		return object;
	}
	
	// kill an element or a list of elements
	function kill(object){
		if (typeof(object) === 'string'){
			object = document.getElementById(object);
		}
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
		object.parentNode.removeChild(object);
	}
	
	// set volume bar
	function setVolume(usage, max){
		var 
			volumeBar = querySelector('#volumeBar'),
			volumeCounter = querySelector('#volumeCounter'),
			volumeRemaining = querySelector('#volumeRemaining')
		;
		if (max !== undefined){
			volumeBar.max = max;
		}
		if (usage > volumeBar.max){
			if (doVolumeLimit === true){
				return false;
			}
			else {
				volumeBar.max = usage;
			}
		}
		volumeBar.value = usage;
		replaceText(volumeRemaining, volumeBar.max - usage);
		replaceText(volumeCounter, usage + '/' + volumeBar.max);
		return true;
	}
	
	// inspect hull
	function inspectHull(hullId){
		var contents = querySelector('#hullInspector .contents'), e = '', i;
		kill(contents.childNodes);
		contents.parentNode.style.display = 'block';
		contents.appendChild(drawField('Name', hulls[hullId].name));
		contents.appendChild(drawField('Armor Type', defendTypes[hulls[hullId].defendType]));
		if (hulls[hullId].comment !== undefined){
			contents.appendChild(drawField('Ship Stats', hulls[hullId].comment));
		}
		if (hulls[hullId].comment2 !== undefined){
			contents.appendChild(drawField('Requirements', hulls[hullId].comment2));
		}
		if (hulls[hullId].comment3 !== undefined){
			contents.appendChild(drawField('How to Obtain', hulls[hullId].comment3));
		}
		if (hulls[hullId].comment4 !== undefined){
			contents.appendChild(drawField('Effectiveness', hulls[hullId].comment4));
		}
		if (hulls[hullId].bodyType !== undefined){
			if (hulls[hullId].hullEfficacy !== undefined){
				e = hulls[hullId].hullEfficacy.split(';');
				i = e.length;
				while (i--){
					e[i] = e[i].split(':');
					e[i] = forceSign(e[i][1] * 100) + '% vs ' + hullCategoryNames[e[i][0]] + 's';
				}
				e = ' (' + e.join(', ') + ')';
			}
			contents.appendChild(drawField('Hull Type', hullCategoryNames[hulls[hullId].bodyType] + e));
		}
	}

	// force sign
	function forceSign(n){
		if (n >= 0) n = '+' + n;
		return n; 
	}
	
	// hide the hull inspector
	function hideHullInspector(event){
		querySelector('#hullInspector').style.display = 'none';
	}
	
	// check if hull is maxed version
	function isMaxHull(hull){
		var i = hulls.length;
		if (typeof(hull) === 'number'){
			hull = hulls[hull];
		}
		while (i--){
			if (hulls[i].groupID === hull.groupID && hulls[i].groupLV > hull.groupLV){
				return false;
			}
		}
		return true;
	}
	
	// count maxed hulls in category
	function countHulls(hullCategory){
		if (typeof(hullCategory) === 'number'){
			hullCategory = hullCategories[hullCategory];
		}
		var i = hullCategory.length, list = [];
		while (i--){
			if (showAllHulls === false && isMaxHull(hulls[hullCategory[i]]) === false){
				continue;
			}
			list.push(hulls[hullCategory[i]]);
		}
		return list.length;
	}
	
	// populate hull list
	function populateHullList(){
		// draw list
		var
			list = querySelector('#hullSelector ul'),
			//i = hullPage * 5,
			//l = Math.min(hullCategories[hullCategory].length, i + 5),
			i = 0, // iteration
			l = hullCategories[hullCategory].length, // limit
			b = hullPage * 5, // begin drawing
			v = 0, // visible
			d = 0 // drawn
		;
		kill(list.childNodes);
		for (; i < l; i++){
			with ({i:i}){
				if (showAllHulls !== true){
					if (isMaxHull(hullCategories[hullCategory][i]) === false){
						continue;
					}
				}
				v++;
				if (v <= b){
					continue;
				}
				list.appendChild(createElement('li', {
					'id': 'hull' + hullCategories[hullCategory][i],
					'image': '../imgs/hulls-small/' + hulls[hullCategories[hullCategory][i]].smallIcon + '.png',
					'click': function(event){
						selectHull(hullCategories[hullCategory][i]);
					},
					'mouseover': function(){
						inspectHull(hullCategories[hullCategory][i]);
					},
					'mouseout': hideHullInspector
				}));
				d++;
				if (d >= 5){
					break;
				}
				
			}
		}
	}
	
	function d(t){
		document.body.appendChild(createElement('span', {
			text: t,
			color: 'white'
		}));
		document.body.appendChild(document.createElement('br'));
	}
	
	
	// populate module list
	function populateModuleList(){
		// draw list
		var
			list = querySelector('#moduleSelector ul'),
			i = modulePage * 4,
			l = Math.min(moduleCategories[moduleCategory].length, i + 4)
		;
		kill(list.childNodes);
		outer: for (; i < l; i++){
			with ({i:i}){
				var text = document.createTextNode(parts[moduleCategories[moduleCategory][i]].name);
				if (parts[moduleCategories[moduleCategory][i]].bugnotes !== undefined){
					text = [
						createElement('div', { 'className': 'bugged', 'text': 'BUGGED' }),
						text
					];
				}
				list.appendChild(createElement('li', {
					'image': '../imgs/items/' + parts[moduleCategories[moduleCategory][i]].imageFileName + '.jpg',
					'children': text,
					'mousedown': function(event){
						event.preventDefault();
					},
					'click': function(event){
						addModule(moduleCategories[moduleCategory][i]);
					},
					'mouseover': function(event){
						inspectModule(moduleCategories[moduleCategory][i]);
					},
					'mouseout': hideModuleInspector
				}));
			}
		}
	}
	
	// hide module inspector
	function hideModuleInspector(){
		querySelector('#moduleInspector').style.display = 'none';
	}
	
	// draw a field in the module inspector
	function drawField(name, value){
		return createElement('div', {
			'className': 'field',
			'div': [
				{ 'className': 'name', 'text': name + ':' },
				{ 'className': 'value', 'text': value }
			]
		});
	}

	// apply hull efficicancy
	function applyHullEfficiency(value, group, field){
		var
			efficacy = hulls[hull].efficacy,
			efficiency = []
		;
		if (efficacy === undefined){
			return value;
		}
		// parse efficiency values
		if (efficacy !== undefined){
			efficacy = efficacy.split(';');
			efficacy.forEach(function(item, i){
				efficacy[i] = item.split(':');
				efficiency[parseInt(efficacy[i][0], 10)] = parseFloat(efficacy[i][1]);
			});
		}
		// add efficiency to part value
		if (efficiency[group] !== undefined){
			switch (group){
				case 73:
				case 74:
				case 75:
				case 76:
				case 124:
					if (field === 'headoffRatio'){
						value += efficiency[group];
					}
				break;
				case 58:
					if (field === 'reboundHurt'){
						value += efficiency[group];
					}
				break;
				case 77:
				case 175:
					if (field === 'counterattack'){
						value *= 1 + efficiency[group];
					}
				break;
				case 59:
				case 63:
				case 64:
				case 65:
				case 66:
				case 67:
				case 110:
				case 111:
				case 112:
				case 113:
				case 123:
				case 138:
				case 150:
				case 159:
				case 160:
				case 161:
				case 162:
				case 164:
				case 177:
					if (field === 'counteract'){
						value += efficiency[group];
					}
				break;
			}
		}
		return value;
	}

	// apply efficicancy of selected modules
	function applyModuleEfficiency(value, group, field){
		var
			i = selectedModules.length,
			efficacy,
			efficiency
		;
		while (i--){
			efficiency = [];
			// hitrate
			if (field === 'ratio' && parts[selectedModules[i].id].addRatio !== undefined){
				value += parts[selectedModules[i].id].addRatio;
			}
			// steering
			if (field === 'turn' && parts[selectedModules[i].id].addTurn !== undefined){
				value += parts[selectedModules[i].id].addTurn;
			}
			// check for efficacy field
			if (parts[selectedModules[i].id].efficacy === undefined){
				continue;
			}
			// parse efficacy field
			efficacy = parts[selectedModules[i].id].efficacy;
			if (efficacy !== undefined){
				efficacy = efficacy.split(';');
				efficacy.forEach(function(item, i){
					efficacy[i] = item.split(':');
					efficiency[parseInt(efficacy[i][0], 10)] = parseFloat(efficacy[i][1]);
				});
			}
			// apply figures
			if (efficiency[group] !== undefined){
				switch (group){
					case 63:
					case 64:
					case 65:
					case 66:
					case 67:
					case 110:
					case 111:
					case 112:
					case 113:
					case 138:
					case 159:
					case 160:
					case 161:
					case 162:
					case 164:
					case 177:
						if (field === 'counteract'){
							value += efficiency[group] * selectedModules[i].count;
						}
					break;
				}
			}
		}
		return value;
	}
	
	// get a value from the module
	// tech is applied here
	function getModuleValue(id, field){
		// determine module category
		var
			category = moduleCategories.length,
			temp = hulls[hull].efficacy,
			group = parseInt(parts[id].groupID, 10),
			efficiency = [],
			output,
			chips, i, t
		;
		while (category--){
			if (moduleCategories[category].indexOf(id) !== -1){
				break;
			}
		}
		// check if the field exists
		if (parts[id].hasOwnProperty(field) === false){
			return 0;
		}
		// get part value
		output = parts[id][field];
		output = applyHullEfficiency(output, group, field);
		output = applyModuleEfficiency(output, group, field);
		// enhance damage
		if (hulls[hull].enhanceDamage !== undefined && (field === 'minAssault' || field === 'maxAssault')){
			//output *= 1 + hulls[hull].enhanceDamage;
		}
		// enhance hitrate
		if (hulls[hull].addRatio !== undefined && field === 'ratio'){
			output += hulls[hull].addRatio;
		}
		// negation
		if (field === 'counteract'){
			// flagship
			var flagship = parseInt(querySelector('#flagship').value);
			if (flagship !== 0 && hulls[flagship].hasOwnProperty('fleetEfficacy')){
				var flagEff = [], tFlagEff = hulls[flagship].fleetEfficacy.split(';');
				tFlagEff.forEach(function(item, i){
					tFlagEff[i] = item.split(':');
					flagEff[parseInt(tFlagEff[i][0], 10)] = parseFloat(tFlagEff[i][1]);
				});
				if (flagEff[parts[id].groupID] !== undefined){
					output += flagEff[parts[id].groupID];
				}
			}
		}
		// check tech option
		if (doTech !== true){
			return output;
		}
		// build cost
		if (['metal', 'he3', 'money'].indexOf(field) !== -1){
			return output * 0.85;
		}
		switch (category){
			case MODULE_CATEGORY_BALLISTIC:
				switch (field){
					case 'minAssault':
						return Math.ceil((output + getChipValue('minAssault', 'weaponKind', 12)) * 2);
					break;
					case 'maxAssault':
						return Math.ceil((output + getChipValue('maxAssault', 'weaponKind', 12)) * 3);
					break;
					case 'maxRange':
						return output + 2;
					break;
					case 'cubage':
						return Math.floor(output * 0.90);
					break;
					case 'ratio':
						return output + 0.05;
					break;
					default:
						return output;
					break;
				}
			break;
			case MODULE_CATEGORY_DIRECTIONAL:
				switch (field){
					case 'minAssault':
						return Math.ceil((output + getChipValue('minAssault', 'weaponKind', 13)) * 1.80);
					break;
					case 'maxAssault':
						return Math.ceil((output + getChipValue('maxAssault', 'weaponKind', 13)) * 1.80);
					break;
					case 'maxRange':
						return output + 1;
					break;
					case 'cubage':
						return Math.floor(output * 0.91);
					break;
					case 'turn':
						return Math.ceil(output * 12) / 10;
					break;
					case 'ratio':
						return output + 0.1;
					break;
					default:
						return output;
					break;
				}
			break;
			case MODULE_CATEGORY_MISSLE:
				switch (field){
					case 'minAssault':
						return Math.ceil((output + getChipValue('minAssault', 'weaponKind', 14)) * 1.50);
					break;
					case 'maxAssault':
						return Math.ceil((output + getChipValue('maxAssault', 'weaponKind', 14)) * 1.50);
					break;
					case 'maxRange':
						return output + 3;
					break;
					case 'backfill':
						return output - 1;
					break;
					case 'cubage':
						return Math.floor(output * 0.80);
					break;
					case 'turn':
						return Math.ceil(output * 12) / 10;
					break;
					case 'headoff':
						return Math.floor(output * 98) / 100;
					break;
					case 'ratio':
						return output + 0.19;
					break;
					default:
						return output;
					break;
				}
			break;
			case MODULE_CATEGORY_SHIPBASED:
				switch (field){
					case 'minAssault':
						return Math.ceil((output + getChipValue('minAssault', 'weaponKind', 15)) * 1.5);
					break;
					case 'maxAssault':
						return Math.ceil((output + getChipValue('maxAssault', 'weaponKind', 15)) * 1.5);
					break;
					case 'maxRange':
						return output + 5;
					break;
					case 'backfill':
						return output - 1;
					break;
					case 'cubage':
						return Math.floor(output * 0.90);
					break;
					case 'supply':
						return Math.floor(output * 89) / 100;
					break;
					case 'turn':
						return Math.ceil(output * 12) / 10;
					break;
					case 'ratio':
						return output + 0.05;
					break;
					default:
						return output;
					break;
				}
			break;
			case MODULE_CATEGORY_AIRDEFENSE:
				switch (field){
					case 'headoffRatio':
						return output + 0.1;
					break;
					default:
						return output;
					break;
				}
			break;
			case MODULE_CATEGORY_SHIELD:
				switch (field){
					case 'counteract':
						return output + getChipValue('shieldAbsorb') + 8;
					break;
					default:
						return output;
					break;
				}
			break;
			case MODULE_CATEGORY_PLANETARY:
				switch (field){
					case 'minAssault':
						return Math.ceil(output + getChipValue('minAssault', 'weaponKind', 11));
					break;
					case 'maxAssault':
						return Math.ceil(output + getChipValue('maxAssault', 'weaponKind', 11));
					break;
					default:
						return output;
					break;
				}
			break;
			default:
				return output;
			break;
		}
	}
	
	// translate a field name
	var translateFieldName = (function(){
		var translations = {
			minAssault: 'Attack',
			minRange: 'Range',
			backfill: 'Cooldown',
			cubage: 'Volume',
			supply: 'He3 Cost',
			turn: 'Steering',
			yare: 'Agility',
			addTurn: 'Steering',
			headoff: 'Intercepted',
			ratio: 'Hitrate',
			addRatio: 'Hitrate',
			counterattack: 'Counterattack',
			locomotivity: 'Mobility',
			storage: 'Storage',
			shield: 'Shield',
			endure: 'Structure',
			counteract: 'Absorb',
			hurtCounteract: 'Absorb',
			repairShieldBout: 'Shield Regen',
			limit: 'Limit',
			hurtType: 'Damage Type',
			reboundHurt: 'Reflection',
			defend: 'Defense',
			stability: 'Stability',
			repairEndureBout: 'Hull Repair',
			cancelHurt: 'Reduce Damage',
			counteractPercent: 'Reduce Damage',
			increaseNegation: 'Shield Efficiency'
		};
		return function(name){
			if (!translations.hasOwnProperty(name)){
				return name;
			}
			return translations[name];
		}
	})();
	
	// inspect a module
	function inspectModule(moduleId){
		var
			contents = querySelector('#moduleInspector .contents'),
			item, fieldName, fieldValue, temp1, temp2
		;
		// cleanup
		contents.parentNode.style.display = 'block';
		kill(contents.childNodes);
		// search for stats to draw
		for (item in parts[moduleId]){
			// filter parameters
			if (parts[moduleId].hasOwnProperty(item) === false){
				continue;
			}
			// determine field name
			fieldName = translateFieldName(item);
			// reset temp value holders
			temp1 = null;
			temp2 = null;
			// do actions
			switch (item){
				// number ranges
				case 'minRange':
					fieldName = translateFieldName(item);
					fieldValue = Math.ceil(getModuleValue(moduleId, 'min' + item.substring(3))) + ' - ' + Math.ceil(getModuleValue(moduleId, 'max' + item.substring(3)));
				break;
				case 'minAssault':
					fieldName = [];
					fieldValue = [];
					fieldName[0] = translateFieldName(item);
					fieldValue[0] = Math.ceil(getModuleValue(moduleId, 'min' + item.substring(3))) + ' - ' + Math.ceil(getModuleValue(moduleId, 'max' + item.substring(3)));
					fieldName[1] = 'Attack/Volume';
					fieldValue[1] = Math.round10(getModuleValue(moduleId, 'minAssault') / getModuleValue(moduleId, 'cubage')) + ' - ' + Math.round10(getModuleValue(moduleId, 'maxAssault') / getModuleValue(moduleId, 'cubage'));
				break;
				// static numbers
				case 'backfill':
				case 'cubage':
				case 'supply':
				case 'yare':
				case 'addTurn':
				case 'counterattack':
				case 'locomotivity':
				case 'storage':
				case 'shield':
				case 'endure':
				case 'repairShieldBout':
				case 'limit':
				case 'defend':
				case 'repairEndureBout':
				case 'increaseNegation':
				case 'turn':
					fieldValue = Math.floor10(getModuleValue(moduleId, item) * 100) / 100;
				break;
				// percentages
				case 'headoff':
				case 'ratio':
				case 'addRatio':
				case 'reboundHurt':
				case 'stability':
				case 'cancelHurt':
				case 'counteractPercent':
					fieldValue = Math.floor(getModuleValue(moduleId, item) * 100) + '%';
				break;
				// counteract
				case 'hurtCounteract':
					switch (getModuleValue(moduleId, 'affectHurtType')){
						case 11: temp1 = ' kinetic'; break;
						case 12: temp1 = ' magnetic'; break;
						case 13: temp1 = ' heat'; break;
						case 14: temp1 = ' explosive'; break;
					}
					fieldValue = getModuleValue(moduleId, item) + temp1 + ' damage';
				break;
				case 'counteract':
					fieldName = [
						fieldName,
						'Absorb / Volume'
					];
					fieldValue = [
						getModuleValue(moduleId, item) + ' damage',
						(Math.floor(getModuleValue(moduleId, item) / getModuleValue(moduleId, 'cubage') * 100) / 100) + ' damage'
						
					];
				break;
				// interception
				case 'headoffRatio':
					temp1 = ('' + getModuleValue(moduleId, 'affectType')).split(';');
					fieldName = [];
					fieldValue = [];
					temp1.forEach(function(i){
						switch (i){
							case '14': temp2 = 'Missle'; break;
							case '15': temp2 = 'Ship-based'; break;
						}
						fieldName.push(temp2 + ' Interception');
						fieldValue.push(Math.floor(getModuleValue(moduleId, item) * 100) + '%');
					});
				break;
				case 'hurtType':
					switch (getModuleValue(moduleId, 'hurtType')){
						case 11: fieldValue = 'Kinetic'; break;
						case 12: fieldValue = 'Magnetic'; break;
						case 13: fieldValue = 'Heat'; break;
						case 14: fieldValue = 'Explosive'; break;
					}
				break;
				case 'bugnotes':
					fieldName = 'Bugs';
					fieldValue = [parts[moduleId].bugnotes];
				break;
				// skip anything else
				default:
					continue;
				break;
			}
			// draw fields
			fieldName = iterable(fieldName);
			fieldValue = iterable(fieldValue);
			fieldName.forEach(function(t, i){
				contents.appendChild(drawField(fieldName[i], fieldValue[i]));
			});
		}
	}

	var deTimer = null;
	function clearDesignError(){
		document.querySelector('#designerror').innerText = '';
		deTimer = null;
	}

	// 
	function designError(message){
		document.querySelector('#designerror').innerText = message;
		if (deTimer !== null){
			clearTimeout(deTimer);
		}
		deTimer = setTimeout(clearDesignError, 2000);
	}
	
	// add a module to the design
	function addModule(id, ignoreError){
		// check if a hull is selected
		if (hull === null){
			return false;
		}
		// check limit
		if (doVolumeLimit === true && parts[id].hasOwnProperty('limit')){
			var i = selectedModules.length;
			while (i--){
				if (
					parts[selectedModules[i].id].groupID === parts[id].groupID && 
					selectedModules[i].count + 1 > parts[id].limit
				){
					if (ignoreError !== true){
						designError('You have reached the limit for this module.');
					}
					return false;
				}
			}
		}
		// check mobility limit
		if (doVolumeLimit === true && parts[id].hasOwnProperty('locomotivity')){
			var v = getHullValue(hull, 'locomotivity'), i = selectedModules.length;
			while (i--){
				if (parts[selectedModules[i].id].hasOwnProperty('locomotivity')){
					v += parts[selectedModules[i].id].locomotivity * selectedModules[i].count;
				}
			}
			v += parts[id].locomotivity;
			if (v > 16){
				if (ignoreError !== true){
					designError('You can not exceed 16 mobility.');
				}
				return false;
			}
		}
		// update volume bar
		if (setVolume(querySelector('#volumeBar').value + getModuleValue(id, 'cubage')) === false){
			if (ignoreError !== true){
				designError('You have reached the volume limit.');
			}
			return false;
		}
		// check module count
		var v = 1, i = selectedModules.length;
		while (i--){
			v += selectedModules[i].count;
		}
		if (doVolumeLimit === true && v > 50){
			if (ignoreError !== true){
				designError('You can not have more than 50 modules installed.');
			}
			return false;
		}	

		// search for existing entry
		var i = selectedModules.length, module;
		while (i--){
			if (selectedModules[i].id === id){
				selectedModules[i].count++;
				module = querySelector('#module' + id + ' .count');
				kill(module.childNodes);
				module.appendChild(document.createTextNode(selectedModules[i].count));
				updateDesignStats();
				return true;
			}
		}
		// add new entry
		selectedModules.push({
			'id': id,
			'count': 1
		});
		querySelector('#selectedModules').appendChild(createElement('div', {
			'id': 'module' + id,
			'className': 'module',
			'title': parts[id].name,
			'div': [
				{ 'className': 'icon', 'image': '../imgs/items/' + parts[id].imageFileName + '.jpg' },
				{ 'className': 'count', 'text': 1 }
			],
			'mouseover': function(){
				
			},
			'moueout': function(){
				
			},
			'click': function(){
				removeModule(id);
			}
		}));
		updateDesignStats();
		return true;
	}
	
	// get a hull value
	function getHullValue(id, field){
		// check if the field exists
		if (hulls[id].hasOwnProperty(field) === false){
			return 0;
		}
		// check tech option
		if (doTech !== true){
			return hulls[id][field];
		}
		switch (field){
			case 'shield':
				return (hulls[id][field] + getChipValue('shield')) * 1.3;
			break;
			case 'endure':
				return (hulls[id][field] + getChipValue('endure')) * 1.25;
			break;
			case 'defend':
				return (hulls[id][field] + getChipValue('addDefence')) * 1.20;
			break;
			case 'yare':
				return hulls[id][field] * 1.15;
			break;
			case 'stability':
				return (hulls[id][field] + getChipValue('stability')) * 1.55;
			break;
			case 'metal':
			case 'he3':
			case 'money':
				return hulls[id][field] * 0.85;
			break;
			default:
				return hulls[id][field];
			break;
		}
	}

	function counteractMap(){
		var map = [];
		map[HURT_KINETIC] = 0;
		map[HURT_MAGNETIC] = 0;
		map[HURT_HEAT] = 0;
		map[HURT_EXPLOSIVE] = 0;
		return map;
	}
	
	// calculate stats for the design
	function updateDesignStats(){
		// check if a hull is selected
		if (hull === null){
			return;
		}
		var
			i = selectedModules.length,
			stack = querySelector('#stack').value,
			effectiveStack = Math.min(stack, querySelector('#effectiveStack').value),
			flagship = parseInt(querySelector('#flagship').value),
			v = {
				'defend': getHullValue(hull, 'defend'),
				'endure': getHullValue(hull, 'endure') * stack,
				'shield': getHullValue(hull, 'shield') * stack,
				'yare': getHullValue(hull, 'yare'),
				'locomotivity': getHullValue(hull, 'locomotivity'),
				'stability': getHullValue(hull, 'stability'),
				'storage': getHullValue(hull, 'storage') * stack,
				'metal': getHullValue(hull, 'metal') * stack,
				'he3': getHullValue(hull, 'he3') * stack,
				'money': getHullValue(hull, 'money') * stack,
				'minAssault': 0,
				'maxAssault': 0,
				'minAttackPerRound': 0,
				'maxAttackPerRound': 0,
				'counteract': counteractMap(),
				'scounteract': counteractMap(),
				'controlsystem': 0,
				'minSteering': null,
				'maxSteering': null,
				'steering': ''
			},
			fieldValue, temp
		;
		while (i--){
			// search for stats to draw
			for (item in parts[selectedModules[i].id]){
				// filter parameters
				if (parts[selectedModules[i].id].hasOwnProperty(item) === false){
					continue;
				}
				// reset temp
				temp = null;
				// determine field name
				fieldValue = getModuleValue(selectedModules[i].id, item);
				// do actions
				switch (item){
					// apply total stack size
					case 'shield':
					case 'endure':
					case 'storage':
					case 'metal':
					case 'he3':
					case 'money':
						v[item] += fieldValue * selectedModules[i].count * stack;
					break;
					// apply effective stack size
					case 'minAssault':
					case 'maxAssault':
						temp = getModuleValue(selectedModules[i].id, 'backfill') + 1;
						if (item === 'minAssault'){
							v.minAttackPerRound += fieldValue * selectedModules[i].count * effectiveStack / temp;
						}
						else if (item === 'maxAssault'){
							v.maxAttackPerRound += fieldValue * selectedModules[i].count * effectiveStack / temp;
						}
						v[item] += fieldValue * selectedModules[i].count * effectiveStack;
					break;
					// apply single value
					case 'stability':
					case 'defend':
					case 'yare':
					case 'locomotivity':
						v[item] += fieldValue * selectedModules[i].count;
					break;
					// shield negation
					case 'counteract':
						// shield
						if (moduleCategories[MODULE_CATEGORY_SHIELD].indexOf(selectedModules[i].id) !== -1){
							v.counteract[HURT_KINETIC] += fieldValue * selectedModules[i].count * effectiveStack;
							v.counteract[HURT_MAGNETIC] += fieldValue * selectedModules[i].count * effectiveStack;
							v.counteract[HURT_HEAT] += fieldValue * selectedModules[i].count * effectiveStack;
							v.counteract[HURT_EXPLOSIVE] += fieldValue * selectedModules[i].count * effectiveStack;
						}
						// structure
						else {
							v.scounteract[HURT_KINETIC] += fieldValue * selectedModules[i].count * effectiveStack;
							v.scounteract[HURT_MAGNETIC] += fieldValue * selectedModules[i].count * effectiveStack;
							v.scounteract[HURT_HEAT] += fieldValue * selectedModules[i].count * effectiveStack;
							v.scounteract[HURT_EXPLOSIVE] += fieldValue * selectedModules[i].count * effectiveStack;
						}
					break;
					case 'hurtCounteract':
						// shield
						if (moduleCategories[MODULE_CATEGORY_SHIELD].indexOf(selectedModules[i].id) !== -1){
							v.counteract[parts[selectedModules[i].id].affectHurtType] += fieldValue * selectedModules[i].count * effectiveStack;
						}
					break;
					case 'counteractPercent':
						v.controlsystem += fieldValue * selectedModules[i].count;
					break;
					case 'turn':
						// steering
						if (v.minSteering === null || fieldValue < v.minSteering){
							v.minSteering = fieldValue;
						}
						if (v.maxSteering === null || fieldValue > v.maxSteering){
							v.maxSteering = fieldValue;
						}
					break;
					// skip anything else
					default:
						continue;
					break;
				}
			}
		}
		// apply damage map
		v.counteract[HURT_KINETIC] = v.counteract[HURT_KINETIC] / damageMap[hulls[hull].defendType][HURT_KINETIC];
		v.counteract[HURT_MAGNETIC] = v.counteract[HURT_MAGNETIC] / damageMap[hulls[hull].defendType][HURT_MAGNETIC];
		v.counteract[HURT_HEAT] = v.counteract[HURT_HEAT] / damageMap[hulls[hull].defendType][HURT_HEAT];
		v.counteract[HURT_EXPLOSIVE] = v.counteract[HURT_EXPLOSIVE] / damageMap[hulls[hull].defendType][HURT_EXPLOSIVE];
		v.scounteract[HURT_KINETIC] = v.scounteract[HURT_KINETIC] / damageMap[hulls[hull].defendType][HURT_KINETIC];
		v.scounteract[HURT_MAGNETIC] = v.scounteract[HURT_MAGNETIC] / damageMap[hulls[hull].defendType][HURT_MAGNETIC];
		v.scounteract[HURT_HEAT] = v.scounteract[HURT_HEAT] / damageMap[hulls[hull].defendType][HURT_HEAT];
		v.scounteract[HURT_EXPLOSIVE] = v.scounteract[HURT_EXPLOSIVE] / damageMap[hulls[hull].defendType][HURT_EXPLOSIVE];
		// control system
		if (v.controlsystem > 0){
			v.scounteract = applyCounteractRate(v.scounteract, Math.floor10(1 - v.controlsystem, -2));
		}
		// defense attribute
		if (v.scounteract[HURT_KINETIC] > 0){
			v.scounteract = applyCounteractRate(v.scounteract,  Math.floor10(1 - defenseDamageReduction(v.defend), -2));
		}
		// hull ability
		if (hulls[hull].hasOwnProperty('lessenDamage')){
			v.counteract = applyCounteractRate(v.counteract, 1 - hulls[hull].lessenDamage);
			v.scounteract = applyCounteractRate(v.scounteract, 1 - hulls[hull].lessenDamage);
		}
		// flagship ability
		if (flagship !== 0 && hulls[flagship].hasOwnProperty('fleetDecDamage')){
			v.counteract = applyCounteractRate(v.counteract, 1 - hulls[flagship].fleetDecDamage);
			v.scounteract = applyCounteractRate(v.scounteract, 1 - hulls[flagship].fleetDecDamage);
		}
		// steering adjust
		if (v.minSteering === null){
			v.steering = 0;
		}
		else if (v.minSteering === v.maxSteering){
			v.steering = Math.floor10(v.minSteering * 100) / 100;
		}
		else {
			v.steering = (Math.floor10(v.minSteering * 100) / 100) + ' - ' + (Math.floor10(v.maxSteering * 100) / 100);
		}
		// output info
		replaceText(querySelector('#attack .value'), simplifyNumber(Math.floor(v.minAssault)) + ' - ' + simplifyNumber(Math.floor(v.maxAssault)));
		replaceText(querySelector('#attackPerRound .value'), simplifyNumber(Math.floor(v.minAttackPerRound)) + ' - ' + simplifyNumber(Math.floor(v.maxAttackPerRound)));
		replaceText(querySelector('#steering .value'), v.steering);
		replaceText(querySelector('#structure .value'), simplifyNumber(Math.floor(v.endure)));
		replaceText(querySelector('#shield .value'), simplifyNumber(Math.floor(v.shield)));
		replaceText(querySelector('#defense .defenseValue'), Math.floor10(v.defend, -1));
		replaceText(querySelector('#defense .defensePercentage'), Math.floor10(defenseDamageReduction(v.defend) * 100, 0));
		replaceText(querySelector('#agility .value'), Math.floor10(v.yare, -1));
		replaceText(querySelector('#mobility .value'), Math.floor(v.locomotivity));
		replaceText(querySelector('#storage .value'), Math.floor(v.storage));
		replaceText(querySelector('#stability .value'), Math.floor10(v.stability, -1));
		replaceText(querySelector('#metal'), simplifyNumber(Math.floor(v.metal)));
		replaceText(querySelector('#he3'), simplifyNumber(Math.floor(v.he3)));
		replaceText(querySelector('#gold'), simplifyNumber(Math.floor(v.money)));
		replaceText(querySelector('#negatekinetic'), Math.floor(v.counteract[HURT_KINETIC]));
		replaceText(querySelector('#negatemagnetic'), Math.floor(v.counteract[HURT_MAGNETIC]));
		replaceText(querySelector('#negateheat'), Math.floor(v.counteract[HURT_HEAT]));
		replaceText(querySelector('#negateexplosive'), Math.floor(v.counteract[HURT_EXPLOSIVE]));
		replaceText(querySelector('#snegatekinetic'), Math.floor(v.scounteract[HURT_KINETIC]));
		replaceText(querySelector('#snegatemagnetic'), Math.floor(v.scounteract[HURT_MAGNETIC]));
		replaceText(querySelector('#snegateheat'), Math.floor(v.scounteract[HURT_HEAT]));
		replaceText(querySelector('#snegateexplosive'), Math.floor(v.scounteract[HURT_EXPLOSIVE]));
	}
	
	function applyCounteractRate(a, amt){
		a.forEach(function(b, i, a){
			a[i] = b / amt;
		});
		return a;
	}

	var defenseChipValues = [
		[1.0, 2.1, 3.3, 4.6,  5.9,  7.2,  8.5,  9.8,  11.2, 12.6],
		[1.5, 2.9, 4.3, 5.9,  7.5,  9.1,  10.8, 12.5, 14.3, 16.1],
		[2.3, 4.0, 6.1, 8.1,  10.3, 12.5, 14.8, 17.2, 19.6, 22.1],
		[3.3, 5.7, 8.3, 11.0, 13.8, 16.8, 19.8, 23.7, 32.9, 43.4]
	];

	var negationChipValues = [
		[4, 8, 12, 17, 22, 27, 33, 40, 48, 57],
		[10, 15, 20, 26, 33, 40, 47, 55, 64, 74],
		[17, 22, 28, 35, 43, 52, 62, 73, 85, 98],
		[26, 33, 41, 50, 60, 70, 81, 140, 180, 228]
	];
	
	// calculate the damage reduction from the defense value
	function defenseDamageReduction(defense){
		return defense * 0.03 / (defense  * 0.03 + 1);
	}
	
	// simplifies a number
	function simplifyNumber(number){
		if (number > 100000000){
			return String(number / 1000000).substring(0, 3) + 'm';
		}
		if (number > 1000000){
			return String(number / 1000000).substring(0, 4) + 'm';
		}
		if (number > 100000){
			return String(number / 1000).substring(0, 3) + 'k';
		}
		if (number > 1000){
			return String(number / 1000).substring(0, 4) + 'k';
		}
		return number;
	}
	
	// remove a module from the design
	function removeModule(id){
		// update volume bar
		setVolume(querySelector('#volumeBar').value - getModuleValue(id, 'cubage'));
		// remove module from stack
		var i = selectedModules.length, module;
		while (i--){
			if (selectedModules[i].id === id){
				selectedModules[i].count--;
				// if none left - remove everything
				if (selectedModules[i].count <= 0){
					selectedModules.splice(i, 1);
					kill(querySelector('#module' + id));
					break;
				}
				// update the count
				module = querySelector('#module' + id + ' .count');
				kill(module.childNodes);
				module.appendChild(document.createTextNode(selectedModules[i].count));
				break;
			}
		}
		updateDesignStats();
	}
	
	// change page in the hull selector
	function changeHullPage(page){
		// default to page zero
		if (page === undefined){
			page = 0;
		}
		// copy page number
		hullPage = page;
		// determine page limit
		var
			//pageLimit = Math.ceil(hullCategories[hullCategory].length / 5) - 1,
			pageLimit = Math.ceil(countHulls(hullCategory) / 5) - 1,
			previous, next
			//, positions = params.get('hullPositions')
		;
		// enfore limits
		if (hullPage <= 0){
			hullPage = 0;
		}
		if (hullPage >= pageLimit){
			hullPage = pageLimit;
		}
		// previous button
		previous = querySelector('#hullPager .previous');
		if (hullPage === 0){
			previous.classList.add('disabled');
		}
		else {
			previous.classList.remove('disabled');
		}
		// next button
		next = querySelector('#hullPager .next');
		if (hullPage === pageLimit){
			next.classList.add('disabled');
		}
		else {
			next.classList.remove('disabled');
		}

		// save position
		//positions[hullCategory] = hullPage;
		//params.set('hullPositions', positions);
		setRememberedPage('hullPositions', hullCategory, hullPage);


		// populate hull list
		populateHullList();
		// display page number
		replaceText(querySelector('#hullPager .number'), hullPage + 1);
	}

	// change page in the module selector
	function changeModulePage(page){
		// default to page zero
		if (page === undefined){
			page = 0;
		}
		// copy page number
		modulePage = page;
		// determine page limit
		var
			pageLimit = Math.ceil(moduleCategories[moduleCategory].length / 4) - 1,
			previous, next
			//, positions = params.get('modulePositions')
		;
		// enfore limits
		if (modulePage <= 0){
			modulePage = 0;
		}
		if (modulePage >= pageLimit){
			modulePage = pageLimit;
		}
		// previous button
		previous = querySelector('#modulePager .previous');
		if (modulePage === 0){
			previous.classList.add('disabled');
		}
		else {
			previous.classList.remove('disabled');
		}
		// next button
		next = querySelector('#modulePager .next');
		if (modulePage === pageLimit){
			next.classList.add('disabled');
		}
		else {
			next.classList.remove('disabled');
		}
		// save position

		setRememberedPage('modulePositions', moduleCategory, modulePage);
		//positions[moduleCategory] = modulePage;
		//params.set('modulePositions', positions);

		// populate hull list
		populateModuleList();
		// display page number
		replaceText(querySelector('#modulePager .number'), modulePage + 1);
	}

	// select a hull category
	function selectHullCategory(category){
		// deselect previous hull category
		querySelectorAll('#hullCategorySelector .selected').forEach(function(option){
			option.classList.remove('selected');
		});
		// save category
		hullCategory = category;
		// reset page number
		//changeHullPage(params.get('hullPositions')[hullCategory]);
		changeHullPage(getRememberedPage('hullPositions', hullCategory));

		// populate hull list
		populateHullList();
		// select current
		querySelector('#hullCategory' + category).classList.add('selected');
		querySelector('#selectedModules').className = 'hullCategory' + category;
	}
	
	// select a module type
	function selectModuleType(event){
		// deselect all  module types
		querySelectorAll('#moduleTypeSelector .selected').forEach(function(option){
			option.classList.remove('selected');
		});
		// deselect all module categories
		querySelectorAll('#moduleCategorySelector ul').forEach(function(option){
			option.style.display = 'none';
		});
		// show categories in module type
		var categoryObject = querySelector('#moduleCategorySelector .' + this.className);
		categoryObject.style.display = 'block';
		// also select first category
		querySelectorAll('#moduleCategorySelector .' + this.className + ' li').forEach(function(option, i){
			if (i > 0){
				return;
			}
			var event = document.createEvent('MouseEvents');
			event.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
			option.dispatchEvent(event);
		});
		// select current
		this.classList.add('selected');
	}
	
	// select a module category
	function selectModuleCategory(event){
		// deselect previous hull
		querySelectorAll('#moduleCategorySelector .selected').forEach(function(option){
			option.classList.remove('selected');
		});
		// update internal category value
		switch (this.className){
			case 'ballistic': moduleCategory = MODULE_CATEGORY_BALLISTIC; break;
			case 'directional': moduleCategory = MODULE_CATEGORY_DIRECTIONAL; break;
			case 'missle': moduleCategory = MODULE_CATEGORY_MISSLE; break;
			case 'shipbased': moduleCategory = MODULE_CATEGORY_SHIPBASED; break;
			case 'planetary': moduleCategory = MODULE_CATEGORY_PLANETARY; break;
			case 'structure': moduleCategory = MODULE_CATEGORY_STRUCTURE; break;
			case 'shield': moduleCategory = MODULE_CATEGORY_SHIELD; break;
			case 'airdefense': moduleCategory = MODULE_CATEGORY_AIRDEFENSE; break;
			case 'electronic': moduleCategory = MODULE_CATEGORY_ELECTRONIC; break;
			case 'storage': moduleCategory = MODULE_CATEGORY_STORAGE; break;
			case 'transmission': moduleCategory = MODULE_CATEGORY_TRANSMISSION; break;
		}
		// go to last page viewed
		//changeModulePage(params.get('modulePositions')[moduleCategory]);
		changeModulePage(getRememberedPage('modulePositions', moduleCategory));
		// populate module list
		populateModuleList();
		// select current
		this.classList.add('selected');
	}

	function getRememberedPage(type, category){
		if (showAllHulls === false){
			type += 'Short';
		}
		return params.get(type)[category];
	}

	function setRememberedPage(type, category, value){
		if (showAllHulls === false){
			type += 'Short';
		}
		var data = params.get(type);
		data[category] = value;
		params.set(type, data);
	}
	
	// initiate the hull category selector
	function initHullCategorySelector(){
		querySelectorAll('#hullCategorySelector li').forEach(function(option, i){
			// attach click listener
			option.addEventListener('click', function(){
				selectHullCategory(parseInt(this.id.replace(/^hullCategory/, '')));
			}, false);
			// imitate click on first category
			if (i === 0){
				var event = document.createEvent('MouseEvents');
				event.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
				option.dispatchEvent(event);
			}
		});
	}
	
	// initiate the module type selector
	function initModuleTypeSelector(){
		querySelectorAll('#moduleTypeSelector li').forEach(function(option, i){
			// attach click listener
			option.addEventListener('click', selectModuleType, false);
			// imitate a click on the first module type
			if (i === 0){
				var event = document.createEvent('MouseEvents');
				event.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
				option.dispatchEvent(event);
			}
		});
	}
	
	// initiate the module category selector
	function initModuleCategorySelector(){
		querySelectorAll('#moduleCategorySelector li').forEach(function(option){
			option.addEventListener('click', selectModuleCategory, false);
		});
	}
	
	// initiate the hull selector
	function initHullSelector(){
		querySelectorAll('#hullPager .go').forEach(function(object){
			object.addEventListener('click', function(event){
				// check if button is disabled
				if (this.classList.contains('disabled')){
					return;
				}
				// update page number
				if (this.classList.contains('next')) changeHullPage(hullPage + 1);
				else if (this.classList.contains('previous')) changeHullPage(hullPage - 1);
			}, false);
		});
	}
	
	// initiate the module selector
	function initModuleSelector(){
		querySelectorAll('#modulePager .go').forEach(function(object){
			object.addEventListener('click', function(event){
				// check if button is disabled
				if (this.classList.contains('disabled')){
					return;
				}
				// update page number
				if (this.classList.contains('next')) changeModulePage(modulePage + 1);
				else if (this.classList.contains('previous')) changeModulePage(modulePage - 1);
			}, false);
		});
	}
	
	// move inspector
	function moveInspector(object){
		return function(event){
			var
				x = event.clientX + document.documentElement.scrollLeft - object.offsetWidth / 2,
				y = event.clientY + document.documentElement.scrollTop + 20
			;
			// constrain to left margin
			if (x < document.documentElement.scrollLeft + 10){
				x = document.documentElement.scrollLeft + 10;
			}
			//
			if (y < document.documentElement.scrollTop + 10){
				y = document.documentElement.scrollTop + 10;
			}
			// flip when halfway down window
			if (event.clientY > document.documentElement.clientHeight / 2){
				y = event.clientY - object.offsetHeight + document.documentElement.scrollTop - 10;
			}
			// move to coordinates
			object.style.left = x + 'px';
			object.style.top = y + 'px';
		};
	}
	
	// initiate the module inspector
	function initModuleInspector(){
		window.addEventListener('mousemove', moveInspector(querySelector('#moduleInspector')), false);
	}
	
	// initiate the hull inspector
	function initHullInspector(){
		window.addEventListener('mousemove', moveInspector(querySelector('#hullInspector')), false);
	}
	
	// object for parsing url parameters
	var getUrlParam = (function(){
		var o = null;
		function parseUrl(){
			var d = location.href.replace(/^[^\?]*\??/, ''), i;
			o = {};
			if (d.length === 0){
				return;
			}
			d = d.split('&');
			i = d.length;
			while (i--){
				d[i] = d[i].split('=');
				o[d[i][0]] = unescape(d[i][1]);
			}
		}
		return function(name){
			if (o === null){
				parseUrl();
			}
			return o[name];
		}
	})();
	
	// create a new design id
	function newDesignId(){
		var
			savedDesigns = params.get('savedDesigns'),
			i = savedDesigns.length,
			id = 0
		;
		while (i--){
			if (savedDesigns[i].id >= id){
				id = savedDesigns[i].id + 1;
			}
		}
		return id;
	}
	
	// init the design buttons
	function initSaver(){
		querySelector('#saveDesign').addEventListener('click', saveDesign, false);
	//	querySelector('#showDesigns').addEventListener('click', showDesignList, false);
		querySelector('#closeList').addEventListener('click', hideDesignList, false);
	}
	
	// save the design
	function saveDesign(event){
		if (hull === null){
			return;
		}
		var
			savedDesigns = params.get('savedDesigns'),
			design = {},
			i = selectedModules.length,
			j = savedDesigns.length
		;
		// update design
		if (selectedSavedDesign !== -1){
			while (j--){
				if (savedDesigns[j].id !== selectedSavedDesign){
					continue;
				}
				savedDesigns[j].hull = hull;
				savedDesigns[j].parts = selectedModules;
				break;
			}
		}
		// new design
		else {
			design.id = newDesignId();
			design.hull = hull;
			design.parts = selectedModules;
			design.name = prompt('Design Name:', 'Pls-Enter-Name');
			if (design.name === null){
				return;
			}
			savedDesigns.push(design);
		}
		// save changes
		params.set('savedDesigns', savedDesigns);
		designError('Saved');
	}
	
	// deselect selected saved design
	function deselectSavedDesign(event){
		selectedSavedDesign = -1;
		document.querySelector('#designName').style.display = 'none';
	}
	
	// show design list
	function showDesignList(event){
		var
			designListWrapper = document.querySelector('#designListWrapper'),
			designList = document.querySelector('#designList'),
			frame = document.createElement('iframe')
		;
		kill(designList.childNodes);
		frame.src = 'list.html';
		designList.appendChild(frame);
		designListWrapper.style.display = 'block';
	}
	
	// hide the designs list
	function hideDesignList(event){
		var
			designListWrapper = document.querySelector('#designListWrapper'),
			designList = document.querySelector('#designList')
		;
		kill(designList.childNodes);
		designListWrapper.style.display = 'none';
	}
	
	// initiate the design linker
	function initLinker(){
		querySelector('#linker').addEventListener('click', function(){
			if (hull === null){
				return;
			}
			var data = [hull], i = selectedModules.length;
			while (i--){
				data.push(selectedModules[i].id);
				data.push(selectedModules[i].count);
			}
			prompt(
				'Copy the following link:', 
				location.protocol + '//' + location.hostname + location.pathname + '?d=' + data.join(':')
			);
		}, false);;
	}

	// make a vis list
	function visList(hullCategory){
		if (showAllHulls === true){
			return hullCategories[hullCategory];
		}
		var l = hullCategories[hullCategory].length, vis = [], i = 0;
		for (; i < l; i++){
			if (isMaxHull(hullCategories[hullCategory][i]) === false){
				continue;
			}
			vis.push(hullCategories[hullCategory][i]);
		}
		return vis;
	}
	
	// select hull
	function selectHull(hullId){
		var
			object = querySelector('#hull' + hullId),
			effectiveStack = querySelector('#effectiveStack'),
			effectiveStackNumber = querySelector('#effectiveStackNumber'),
			deselectedModules = querySelector('#deselectedModules'),
			hullCategory, i, l, v, vis, p
		;
		// deselect previous hull
		deselectSavedDesign();
		querySelectorAll('#hullSelector .selected').forEach(function(option){
			option.classList.remove('selected');
		});
		// failure to get hull object
		if (object === null){
			// select the hull category
			hullCategory = hullCategories.length;
			while (hullCategory--){
				if (hullCategories[hullCategory].indexOf(hullId) !== -1){
					break;
				}
			}
			if (hullCategory === -1){
				return;
			}
			// check if hull is visible
			vis = visList(hullCategory);
			p = vis.indexOf(hullId)
			if (p === -1){
				showAllHulls = true;
				selectHull(hullId);
				return;
			}
			// do stuff
			selectHullCategory(hullCategory);
			changeHullPage(Math.floor(p / 5));
			// get hull object
			object = querySelector('#hull' + hullId);
		}
		// select hull
		if (object !== null){
			object.classList.add('selected');
		}
		// copy to deselectedModules
		i = 0;
		l = selectedModules.length;
		if (l > 0){
			kill(deselectedModules.childNodes);
			while (i < l){
				with ({id: selectedModules[i].id, count: selectedModules[i].count}){
					deselectedModules.appendChild(createElement('div', {
						'className': 'module',
						'title': parts[id].name,
						'div': [
							{ 'className': 'icon', 'image': '../imgs/items/' + parts[id].imageFileName + '.jpg' },
							{ 'className': 'count', 'text': count }
						],
						'click': function(event){
							addModule(id);
						}
					}));
				}
				i++;
			}
			deselectedModules.parentNode.style.visibility = 'visible';
		}
		else {
			deselectedModules.parentNode.style.visibility = 'hidden';
		}
		// set globals
		hull = hullId;
		selectedModules = [];
		// update slider
		effectiveStack.min = hulls[hullId].validNum;
		effectiveStack.value = hulls[hullId].validNum;
		effectiveStackNumber.value = hulls[hullId].validNum;
		// show hull name
		var hullName = querySelector('#hullName');
		kill(hullName.childNodes);
		hullName.appendChild(document.createTextNode(hulls[hullId].name));
		// update
		kill(querySelectorAll('#selectedModules .module'));
		updateDesignStats();
		// reset volume bar
		setVolume(0, hulls[hullId].cubage);
	}
	
	// design loader
	function loadDesign(design){
		if (design === undefined){
			return;
		}
		if (typeof(design) !== 'string'){
			design = '' + design;
		}
		var
			moduleId,
			moduleCount,
			i
		;
		design = design.split(':');
		selectHull(parseInt(design.shift()));
		i = design.length;
		while (design.length){
			moduleCount = parseInt(design.pop());
			moduleId = parseInt(design.pop());
			if (parts[moduleId].unreleased === true){
				continue;
			}
			while (moduleCount--){
				addModule(moduleId);
			}
		}
	}
	
	// load a saved design
	function loadSavedDesign(id){
		var
			savedDesigns = params.get('savedDesigns'),
			i = savedDesigns.length, 
			swapLimit = false,
			designName = document.querySelector('#designName span'),
			j, 
			l, 
			k
		;
		if (doVolumeLimit === true){
			swapLimit = true;
			doVolumeLimit = false;
		}
		while (i--){
			if (savedDesigns[i].id !== id){
				continue;
			}
			selectHull(savedDesigns[i].hull);
			l = savedDesigns[i].parts.length;
			j = 0;
			for (; j < l; j++){
				k = savedDesigns[i].parts[j].count;
				while (k--){
					addModule(savedDesigns[i].parts[j].id, true);
				}
			}
			kill(designName.childNodes);
			designName.appendChild(document.createTextNode(savedDesigns[i].name));
			designName.parentNode.style.display = 'inline';
			selectedSavedDesign = id;
			break;
		}
		if (swapLimit === true){
			doVolumeLimit = true;
		}
		hideDesignList();
	}
	// make it globally visible
	window.loadSavedDesign = loadSavedDesign;
	
	// initiate the stack ranges
	function initRanges(){
		// slider event
		querySelectorAll('#options .range').forEach(function(input){
			input.addEventListener('change', function(){
				querySelector('#' + this.id + 'Number').value = input.value;
				updateDesignStats();
			}, false);
		});
		querySelectorAll('#options .number').forEach(function(input){
			input.addEventListener('keyup', function(){
				var
					range = querySelector('#' + this.id.replace('Number', '')),
					value = parseInt(input.value)
				;
				// loudly enforce maximum number
				if (value > range.max){
					input.value = range.max;
					return;
				}
				// silently ignore lower numbers
				if (value < range.min){
					return;
				}
				range.value = value;
				updateDesignStats();
			}, false);
			input.addEventListener('change', function(){
				var
					range = querySelector('#' + this.id.replace('Number', '')),
					value = parseInt(input.value)
				;
				// overwrite lower numbers when user is finished with the field
				if (value < range.min){
					input.value = range.min;
					return;
				}
			}, false);
		});
	}
	
	// initiate the hide button for the deselected modules list
	function initDeselectedModules(){
		querySelector('#hideDeselected').addEventListener('click', function(event){
			querySelector('#deselectedModulesWrapper').style.visibility = 'hidden';
		}, false);
	}

	function initQuick(){
		querySelector('#quickSteering').addEventListener('click', function(event){
			addModule(PART_INFRARED_SEEKER_3, true);		// 1.10
			addModule(PART_AUTO_TARGET_SYSTEM_3, true);		// 0.85
			addModule(PART_LOCKDOWN_3, true);				// 0.85
			addModule(PART_INFRARED_SEEKER_2, true);		// 0.78
			addModule(PART_INFRARED_SCANNER_3, true);		// 0.77
			addModule(PART_LOCKDOWN_2, true);				// 0.72
			addModule(PART_AUTO_TARGET_SYSTEM_2, true);		// 0.68
			addModule(PART_INFRARED_SCANNER_2, true);		// 0.58
			addModule(PART_INFRARED_SEEKER_1, true);		// 0.57
			addModule(PART_LOCKDOWN_1, true);				// 0.56
			addModule(PART_AUTO_TARGET_SYSTEM_1, true);		// 0.55
			addModule(PART_ARTEMIS_3, true);				// 0.52
			addModule(PART_ECM_BOOSTER_3, true);			// 0.52
			addModule(PART_VAPOR_ENGINE, true);				// 0.47
			addModule(PART_IRON_VEIL_3, true);				// 0.46
			addModule(PART_ANTI_MATTER_BOOSTER_3, true);	// 0.43
			addModule(PART_INFRARED_SCANNER_1, true);		// 0.38
			addModule(PART_ARTEMIS_2, true);				// 0.36
			addModule(PART_ECM_BOOSTER_2, true);			// 0.36
			addModule(PART_WHEELER_ENGINE, true);			// 0.35
			addModule(PART_ANTI_MATTER_BOOSTER_2, true);	// 0.31
			addModule(PART_IRON_VEIL_2, true);				// 0.28
			addModule(PART_ECM_BOOSTER_1, true);			// 0.19
			addModule(PART_ARTEMIS_1, true);				// 0.19
			addModule(PART_ANTI_MATTER_BOOSTER_1, true);	// 0.17
			addModule(PART_IRON_VEIL_1, true);				// 0.17
		}, false);
		querySelector('#quickAgility').addEventListener('click', function(event){
			// 2.0a
			addModule(PART_ARMSTRONG_CORE_3, true);
			addModule(PART_AGILITY_BOOSTER_3, true);
			addModule(PART_INFRARED_SEEKER_3, true);
			addModule(PART_ANTI_MATTER_BOOSTER_3, true);
			// 1.5a
			addModule(PART_AGILITY_BOOSTER_2, true);
			addModule(PART_ECM_BOOSTER_3, true);
			addModule(PART_ARMSTRONG_CORE_2, true);
			addModule(PART_VAPOR_ENGINE, true);
			// 1.2a
			addModule(PART_INFRARED_SEEKER_2, true);
			addModule(PART_ANTI_MATTER_BOOSTER_2, true);
			// 1.0a
			addModule(PART_TIME_DILATION_MODULE_3, true);
			addModule(PART_ARMSTRONG_CORE_1, true);
			addModule(PART_ANTI_MATTER_ENGINE, true);
			addModule(PART_AGILITY_BOOSTER_1, true);
			addModule(PART_ECM_BOOSTER_2, true);
			addModule(PART_WHEELER_ENGINE, true);
			// 0.7a
			addModule(PART_TIME_DILATION_MODULE_2, true);
			// 0.6a
			addModule(PART_INFRARED_SEEKER_1, true);
			addModule(PART_ANTI_MATTER_BOOSTER_1, true);
			// 0.5a
			addModule(PART_TIME_DILATION_MODULE_1, true);
			addModule(PART_ECM_BOOSTER_1, true);
			addModule(PART_TEAM_COMBAT_ENGINE, true);
		}, false);
		querySelector('#quickShield').addEventListener('click', function(event){
			addModule(PART_ENERGY_SHIELD_BOOSTER_3, true) || 
			addModule(PART_ORBITAL_SHIELD);
		}, false);
		querySelector('#quickStructure').addEventListener('click', function(event){
			addModule(PART_COPERNICUS_GYROSCOPE_3, true) ||
			addModule(PART_COPERNICUS_GYROSCOPE_2, true) ||
			addModule(PART_COPERNICUS_GYROSCOPE_1, true) ||
			addModule(PART_GRAVITY_MAINT_FACILITY_3, true) || 
			addModule(PART_GRAVITY_MAINT_FACILITY_2, true) || 
			addModule(PART_GRAVITY_MAINT_FACILITY_1, true) || 
			addModule(PART_SHIP_REINFORCEMENT_FACILITY_3, true) ||
			addModule(PART_SHIP_REINFORCEMENT_FACILITY_2, true) ||
			addModule(PART_SHIP_REINFORCEMENT_FACILITY_1, true) ||
			addModule(PART_ATOMIC_FRAMEWORK);
		}, false);
		querySelector('#quickControl').addEventListener('click', function(event){
			addModule(PART_DAEDALUS_CONTROL_SYSTEM_3, true); // 20/44=0.45
			addModule(PART_ICARUS_CONTROL_SYSTEM_3, true);   //  5/12=0.41
			addModule(PART_ICARUS_CONTROL_SYSTEM_2, true);   //  4/11=0.36
			addModule(PART_HYBRID_DEFENSE_SYSTEM_3, true);   //  8/24=0.33
			addModule(PART_ICARUS_CONTROL_SYSTEM_1, true);   //  3/10=0.30
			addModule(PART_DAEDALUS_CONTROL_SYSTEM_2, true); // 12/40=0.30
			addModule(PART_HYBRID_DEFENSE_SYSTEM_2, true);   //  6/21=0.28
			addModule(PART_HYBRID_DEFENSE_SYSTEM_1, true);   //  4/18=0.22
			addModule(PART_DAEDALUS_CONTROL_SYSTEM_1, true); //  5/36=0.13
		}, false);
	}

	function updateNegatorIcon(){
		if (querySelector('#negationchip .color select').value > 0){
			querySelector('#negationchip .icon img').style.visibility = 'visible';
			querySelector('#negationchip .icon img').src = '../imgs/chips/negator' + querySelector('#negationchip .color select').value + '.jpg';
		}
		else {
			querySelector('#negationchip .icon img').style.visibility = 'hidden';
		}
		updateDesignStats();
	}

	function updateDefenseIcon(){
		if (querySelector('#defensechip .color select').value > 0){
			querySelector('#defensechip .icon img').style.visibility = 'visible';
			querySelector('#defensechip .icon img').src = '../imgs/chips/defense' + querySelector('#defensechip .color select').value + '.jpg';
		}
		else {
			querySelector('#defensechip .icon img').style.visibility = 'hidden';
		}
		updateDesignStats();
	}
	
	// initiate the options
	function initOptions(){
		// check url for option states
		if (getUrlParam('t') === '0'){
			doTech = false;
			querySelector('#applyTech').checked = false;
		}
		if (getUrlParam('v') === '0'){
			doVolumeLimit = false;
			querySelector('#volumeLimit').checked = false;
		}
		// create event listeners
		querySelector('#applyTech').addEventListener('change', function(event){
			doTech = this.checked;
			updateDesignStats();
		}, false);
		querySelector('#volumeLimit').addEventListener('change', function(event){
			doVolumeLimit = this.checked;
		}, false);
		showAllHulls = params.get('showAllHulls');
		querySelector('#showAllHulls').checked = showAllHulls;
		querySelector('#showAllHulls').addEventListener('change', function(event){
			showAllHulls = this.checked;
			params.set('showAllHulls', showAllHulls);
			changeHullPage(getRememberedPage('hullPositions', hullCategory));
		}, false);
	}

	function initFlagshipSelector(event){
		var
			i = 0,
			l = hulls.length,
			s = querySelector('#flagship')
		;
		s.addEventListener('change', function(event){
			updateDesignStats();
		}, false);
		for (; i < l; i++){
			if (hulls[i].hasOwnProperty('fleetEfficacy') || hulls[i].hasOwnProperty('fleetDecDamage')){
				s.appendChild(new Option(hulls[i].name, i));
			}
		}
	}

	function getChipValue(field, conditionField, conditionValue){
		var chips = getSelectedChips(), i = chips.length, o = 0;
		if (i === 0){
			return o;
		}
		while (i--){
			if (chips[i][field] === undefined){
				continue;
			}
			if (conditionField !== undefined && conditionValue !== undefined){
				if (chips[i][conditionField] !== conditionValue){
					continue;
				}
			}
			o += chips[i][field];
		}
		return o;
	}

	function getSelectedChips(){
		var i = 0, o = [], t;
		for (; i < 5; i++){
			t = querySelector('#chip' + i).getAttribute('data-chip');
			if (t === null){
				continue;
			}
			o.push(chip[parseInt(t, 10)]);
		}
		return o;
	}

	var selectedChipSlot = null;
	function openChipSelector(event){
		querySelector('#chipColor').classList.add('hidden');
		querySelector('#chipLevel').classList.add('hidden');
		querySelector('#chipType').classList.remove('hidden');
		querySelector('#chipSelector').classList.remove('hidden');
		selectedChipSlot = this.id;
	}

	function selectChipLevel(event){
		if (selectedChipSlot === null){
			return false;
		}
		var slot = querySelector('#' + selectedChipSlot), chipSelector = querySelector('#chipSelector'), img, i = parseInt(this.getAttribute('data-chip'), 10);
		slot.setAttribute('data-chip', i);
		kill(slot.childNodes);
		img = new Image();
		img.src = '../imgs/chips/' + chip[i].imageFileName + '.jpg';
		slot.appendChild(img);
		chipSelector.classList.add('hidden');
		closeChipSelector();
		updateDesignStats();
	}

	function selectChipColor(event){
		var chipLevels = querySelector('#chipLevel'), i = 0, l = chip.lenth, kind = parseInt(this.getAttribute('data-kind'), 10), div;
		kill(chipLevels.childNodes);
		for (i in chip){
			if (chip.hasOwnProperty(i) === false){
				continue;
			}
			if (chip[i].kindID !== kind){
				continue;
			}
			div = document.createElement('div');
			div.appendChild(document.createTextNode(chip[i].level));
			div.addEventListener('click', selectChipLevel, false);
			div.setAttribute('data-chip', i);
			chipLevels.appendChild(div);
		}
		querySelector('#chipType').classList.add('hidden');
		querySelector('#chipColor').classList.add('hidden');
		querySelector('#chipLevel').classList.remove('hidden');
	}

	function selectChipType(event){
		var chipColors = querySelector('#chipColor'), i = 0, l = chip.length, group = this.getAttribute('data-group'), img, slot;
		if (group === null){
			slot = querySelector('#' + selectedChipSlot);
			slot.removeAttribute('data-chip');
			kill(slot.childNodes);
			closeChipSelector();
			updateDesignStats();
			return false;
		}
		group = parseInt(group, 10);
		kill(chipColors.childNodes);
		for (i in chip){
			if (chip.hasOwnProperty(i) === false){
				continue;
			}
			if (chip[i].groupID !== group || chip[i].level !== 1){
				continue;
			}
			img = new Image();
			img.src = '../imgs/chips/' + chip[i].imageFileName + '.jpg';
			img.addEventListener('click', selectChipColor, false);
			img.setAttribute('data-kind', chip[i].kindID);
			chipColors.appendChild(img);
		}
		querySelector('#chipLevel').classList.add('hidden');
		querySelector('#chipType').classList.add('hidden');
		querySelector('#chipColor').classList.remove('hidden');
	}

	function initChipSelector(event){
		var i = 0, l = chip.length, g, chipTypes = querySelector('#chipType'), img;
		for (i in chip){
			if (chip.hasOwnProperty(i) === false){
				continue;
			}
			if (chip[i].level !== 1 || chip[i].groupID === g || chip[i].propsColor > 4){
				continue;
			}
			g = chip[i].groupID;
			img = new Image();
			img.src = '../imgs/chips/' + chip[i].imageFileName + '.jpg';
			img.addEventListener('click', selectChipType, false);
			img.setAttribute('data-group', chip[i].groupID);
			chipTypes.appendChild(img);
		}
		img = new Image();
		img.src = '../imgs/chips/none.jpg';
		img.addEventListener('click', selectChipType, false);
		chipTypes.appendChild(img);
		i = 5;
		while (i--){
			querySelector('#chip' + i).addEventListener('click', openChipSelector, false);
		}
		window.addEventListener('click', closeChipSelector, false);
	}
	
	function closeChipSelector(event){
		if (event !== undefined){
			if (
				isDescendant(querySelector('#chipSelector'), event.target) === true || 
				isDescendant(querySelector('#chips'), event.target) === true
			){
				return false;
			}
		}
		querySelector('#chipLevel').classList.add('hidden');
		querySelector('#chipType').classList.add('hidden');
		querySelector('#chipColor').classList.add('hidden');
		querySelector('#chipSelector').classList.add('hidden');
	}
	
	function isDescendant(parent, child){
		if (parent === child){
			return true;
		}
		var node = child.parentNode;
		while (node !== null){
			if (node === parent){
				return true;
			}
			node = node.parentNode;
		}
		return false;
	}

	// globals
	var
		hull = null,
		hullCategory = null,
		moduleCategory = null,
		hullPage = 0,
		modulePage = 0,
		selectedModules = [],
		stack,
		loaded = false,
		doTech = true,
		doVolumeLimit = true,
		showAllHulls = true,
		selectedSavedDesign = -1,
		params = new paramList('des', {
			'modulePositions': [],
			'hullPositions': [],
			'hullPositionsShort': [],
			'modulePositionsShort': [],
			'showAllHulls': true,
			'savedDesigns': []
		})
	;
	
	// global updater
	window.updateParams = function(){
		params.update();
	}
	
	// application init
	function init(){
		if (loaded === true || !modernBrowser()){
			return;
		}
		loaded = true;
		initOptions();
		initHullCategorySelector();
		initHullSelector();
		initHullInspector();
		initModuleCategorySelector();
		initModuleTypeSelector();
		initModuleSelector();
		initModuleInspector();
		initDeselectedModules();
		initSaver();
		initLinker();
		initRanges();
		initQuick();
		initFlagshipSelector();
		initChipSelector();
		loadDesign(getUrlParam('d'));
		if (hull === null){
			var item;
			for (item in hulls){
				if (hulls.hasOwnProperty(item) === false){
					continue;
				}
				if (hulls[item].promote === true){
					loadDesign(item);
					break;
				}
			}
		}
		// check url for stack size
		if (getUrlParam('s') !== undefined){
			querySelector('#effectiveStack').value = getUrlParam('s');
			querySelector('#effectiveStackNumber').value = getUrlParam('s');
			querySelector('#stack').value = getUrlParam('s');
			querySelector('#stackNumber').value = getUrlParam('s');
			updateDesignStats();
		}
		querySelector('#message').style.display = 'none';
		querySelector('#wrapper').style.display = 'block';
	}
	
	// init
	window.addEventListener('DOMContentLoaded', init, false);
	
})();
/*
     FILE ARCHIVED ON 20:22:51 Nov 16, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:05:22 Jul 24, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 225.791 (3)
  esindex: 0.006
  captures_list: 239.993
  CDXLines.iter: 10.858 (3)
  PetaboxLoader3.datanode: 639.363 (5)
  exclusion.robots: 0.153
  exclusion.robots.policy: 0.144
  RedisCDXSource: 0.849
  PetaboxLoader3.resolve: 920.952 (2)
  load_resource: 1338.825
*/