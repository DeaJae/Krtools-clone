

	// replace element text
	function replaceText(object, text){
		kill(object.childNodes);
		object.appendChild(document.createTextNode(text));
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
				case 'change':
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
					iterable(params[item]).forEach(function(text){
						object.appendChild(document.createTextNode(text));
					});
				break;
				case 'image':
					iterable(params[item]).forEach(function(image){
						object.appendChild(createElement('img', {'src': image}));
					});
				break;
				case 'div':
				case 'input':
				case 'button':
				case 'span':
				case 'a':
					iterable(params[item]).forEach(function(params){
						object.appendChild(createElement(item, params));
					});
				break;
				case 'src':
					object.src = params[item];
				break;
				case 'class':
					object.className = params[item];
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
	
	function d(t){
		document.body.appendChild(createElement('span', {
			text: t,
			color: 'white'
		}));
		document.body.appendChild(document.createElement('br'));
	}






	var langCommanderTypes = [];
	langCommanderTypes[COMMANDER_TYPE_COMMON] = 'Common';
	langCommanderTypes[COMMANDER_TYPE_SPELL] = 'Spell';
	langCommanderTypes[COMMANDER_TYPE_SUPER] = 'Super';
	langCommanderTypes[COMMANDER_TYPE_LEGENDARY] = 'Legendary';
	langCommanderTypes[COMMANDER_TYPE_DIVINE] = 'Divine';
	var langCommanderStars = [
		'1',
		'2',
		'3',
		'4',
		'5',
		'6',
		'7',
		'8',
		'9'
	];
	var langChipColors = [
		'None',
		'Green',
		'Blue',
		'Purple',
		'Orange'
	];
	var langChipLevels = [
		'1',
		'2',
		'3',
		'4',
		'5',
		'6',
		'7',
		'8',
		'9',
		'10'
	];
	var langHullTypes = [
		'Frigate',
		'Cruiser',
		'Battleship'
	];
	var langWeaponProf = [
		'D',
		'C',
		'B',
		'A',
		'S'
	];



	var effectiveStacks = [];
	effectiveStacks[COMMANDER_TYPE_SPELL] = [];
	effectiveStacks[COMMANDER_TYPE_SPELL][HULL_CATEGORY_FRIGATE]    = [1124, 1174, 1253, 1364, 1516, 1718, 1985, 2338, 2805];
	effectiveStacks[COMMANDER_TYPE_SPELL][HULL_CATEGORY_CRUISER]    = [1022, 1068, 1139, 1240, 1378, 1562, 1804, 2125, 2550];
	effectiveStacks[COMMANDER_TYPE_SPELL][HULL_CATEGORY_BATTLESHIP] = [ 920,  961, 1025, 1116, 1240, 1405, 1624, 1913, 2295];
	effectiveStacks[COMMANDER_TYPE_SUPER] = [];
	effectiveStacks[COMMANDER_TYPE_SUPER][HULL_CATEGORY_FRIGATE]    = [1126, 1178, 1260, 1377, 1537, 1752, 2037, 2416, 2922];
	effectiveStacks[COMMANDER_TYPE_SUPER][HULL_CATEGORY_CRUISER]    = [1023, 1071, 1146, 1252, 1398, 1593, 1852, 2197, 2656];
	effectiveStacks[COMMANDER_TYPE_SUPER][HULL_CATEGORY_BATTLESHIP] = [ 921,  964, 1031, 1127, 1258, 1433, 1667, 1977, 2391];
	effectiveStacks[COMMANDER_TYPE_LEGENDARY] = [];
	effectiveStacks[COMMANDER_TYPE_LEGENDARY][HULL_CATEGORY_FRIGATE]    = [1127, 1182, 1268, 1392, 1562, 1790, 2096, 2505, 3000];
	effectiveStacks[COMMANDER_TYPE_LEGENDARY][HULL_CATEGORY_CRUISER]    = [1024, 1074, 1153, 1165, 1420, 1628, 1905, 2277, 2777];
	effectiveStacks[COMMANDER_TYPE_LEGENDARY][HULL_CATEGORY_BATTLESHIP] = [ 922,  967, 1038, 1139, 1278, 1465, 1715, 2249, 2499];
	effectiveStacks[COMMANDER_TYPE_DIVINE] = [];
	effectiveStacks[COMMANDER_TYPE_DIVINE][HULL_CATEGORY_FRIGATE]    = [1127, 1182, 1268, 1392, 1562, 1790, 2096, 2505, 3000];
	effectiveStacks[COMMANDER_TYPE_DIVINE][HULL_CATEGORY_CRUISER]    = [1024, 1074, 1153, 1165, 1420, 1628, 1905, 2277, 2777];
	effectiveStacks[COMMANDER_TYPE_DIVINE][HULL_CATEGORY_BATTLESHIP] = [ 922,  967, 1038, 1139, 1278, 1465, 1715, 2249, 2499];

	var chipAttack = [];
	chipAttack[MODULE_CATEGORY_BALLISTIC] = [];
	chipAttack[MODULE_CATEGORY_BALLISTIC][CHIP_COLOR_GREEN]  = [22, 33, 44, 55, 66, 77, 92, 108, 125, 145];
	chipAttack[MODULE_CATEGORY_BALLISTIC][CHIP_COLOR_BLUE]   = [44, 57, 70, 84, 97, 110, 128, 145, 163, 185];
	chipAttack[MODULE_CATEGORY_BALLISTIC][CHIP_COLOR_PURPLE] = [74, 89, 104, 118, 133, 148, 167, 189, 215, 244];
	chipAttack[MODULE_CATEGORY_BALLISTIC][CHIP_COLOR_ORANGE] = [108, 130, 151, 173, 194, 216, 243, 405, 508, 632];
	chipAttack[MODULE_CATEGORY_DIRECTIONAL] = [];
	chipAttack[MODULE_CATEGORY_DIRECTIONAL][CHIP_COLOR_GREEN]  = [32, 48, 64, 80, 96, 112, 134, 157, 182, 211];
	chipAttack[MODULE_CATEGORY_DIRECTIONAL][CHIP_COLOR_BLUE]   = [70, 91, 112, 133, 154, 175, 203, 231, 259, 294];
	chipAttack[MODULE_CATEGORY_DIRECTIONAL][CHIP_COLOR_PURPLE] = [118, 142, 165, 189, 212, 236, 266, 301, 342, 389];
	chipAttack[MODULE_CATEGORY_DIRECTIONAL][CHIP_COLOR_ORANGE] = [172, 206, 241, 275, 310, 344, 387, 645, 809, 1007];
	chipAttack[MODULE_CATEGORY_MISSLE] = [];
	chipAttack[MODULE_CATEGORY_MISSLE][CHIP_COLOR_GREEN]  = [68, 102, 136, 170, 204, 238, 286, 333, 388, 449];
	chipAttack[MODULE_CATEGORY_MISSLE][CHIP_COLOR_BLUE]   = [150, 195, 240, 285, 330, 375, 435, 495, 555, 630];
	chipAttack[MODULE_CATEGORY_MISSLE][CHIP_COLOR_PURPLE] = [254, 305, 356, 406, 457, 508, 572, 648, 737, 838];
	chipAttack[MODULE_CATEGORY_MISSLE][CHIP_COLOR_ORANGE] = [370, 444, 518, 592, 666, 740, 833, 1387, 1742, 2166];
	chipAttack[MODULE_CATEGORY_SHIPBASED] = [];
	chipAttack[MODULE_CATEGORY_SHIPBASED][CHIP_COLOR_GREEN]  = [82, 123, 164, 205, 246, 287, 344, 402, 467, 541];
	chipAttack[MODULE_CATEGORY_SHIPBASED][CHIP_COLOR_BLUE]   = [180, 234, 288, 342, 396, 450, 522, 594, 666, 756];
	chipAttack[MODULE_CATEGORY_SHIPBASED][CHIP_COLOR_PURPLE] = [302, 362, 423, 483, 544, 604, 680, 770, 876, 997];
	chipAttack[MODULE_CATEGORY_SHIPBASED][CHIP_COLOR_ORANGE] = [442, 530, 619, 707, 796, 884, 995, 1657, 2080, 2585];
	chipAttack[MODULE_CATEGORY_PLANETARY] = [];
	chipAttack[MODULE_CATEGORY_PLANETARY][CHIP_COLOR_GREEN]  = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];
	chipAttack[MODULE_CATEGORY_PLANETARY][CHIP_COLOR_BLUE]   = [600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500];
	chipAttack[MODULE_CATEGORY_PLANETARY][CHIP_COLOR_PURPLE] = [1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 2000];
	chipAttack[MODULE_CATEGORY_PLANETARY][CHIP_COLOR_ORANGE] = [1600, 1700, 1800, 1900, 2000, 2100, 2200, 3450, 4080, 4750];

	function getWeaponType(weapon){
		var i = moduleCategories.length;
		while (i--){
			if (moduleCategories[i].indexOf(weapon) !== -1){
				return i;
			}
		}
	}

	function getStackType(hullType){
		var map = [];
		map[1100] = HULL_CATEGORY_FRIGATE;
		map[1000] = HULL_CATEGORY_CRUISER;
		map[900] = HULL_CATEGORY_BATTLESHIP;
		return map[hulls[hullType].validNum];
	}

	function update(i){
		var
			itemName = querySelector('#itemName' + i),
			gemPower = getNumber(querySelector('#gemPower' + i)),
			commanderType = getNumber(querySelector('#commanderType' + i)),
			commanderStars = getNumber(querySelector('#commanderStars' + i)),
			chipColor = getNumber(querySelector('#chipColor' + i)),
			chipLevel = getNumber(querySelector('#chipLevel' + i)),
			weapon = getNumber(querySelector('#weapon' + i)),
			//weaponProf = getNumber(querySelector('#weaponProf' + i)),
			hullType = getNumber(querySelector('#hullType' + i)),
			weaponCount = getNumber(querySelector('#weaponCount' + i)),
			stacks = getNumber(querySelector('#stacks' + i)),
			maxAttack = querySelector('#maxAttack' + i),
			weaponType = getWeaponType(weapon),
			stackType = getStackType(hullType),
			stackSize = getNumber(querySelector('#stackSize' + i)),
			ma = 0
		;
		ma = parts[weapon].maxAssault;
		
		
		// bionic chip
		if (chipColor !== CHIP_COLOR_NONE){
			ma += chipAttack[weaponType][chipColor][chipLevel];
		}
		
		// tech
		switch (weaponType){
			case 0:
				ma *= 1.5;
			break;
			case 1:
				ma *= 1.8;
			break;
			case 2:
				ma *= 1.5;
			break;
			case 3:
				ma *= 1.5;
			break;
		}
		
		// preficiency
		/*switch (weaponProf){
			case 0:
				ma *= 0.7;
			break;
			case 1:
				ma *= 0.9;
			break;
			case 3:
				ma *= 1.1;
			break;
			case 4:
				ma *= 1.3;
			break;
		}*/
		
		// weapon count
		ma *= weaponCount;
		
		// effective stack number
		if (querySelector('#stackSize' + i).parentNode.classList.contains('hidden') === true){
			if (commanderType === COMMANDER_TYPE_COMMON){
				ma *= hulls[hullType].validNum;
			}
			else {
				ma *= effectiveStacks[commanderType][stackType][commanderStars];
			}
		}
		
		// specified stack number
		else {
			ma *= stackSize;
		}
		
		// stack count
		ma *= stacks;
		
		// gem power
		ma *= 1 + (gemPower / 100);

		maxAttack.value = addCommas(Math.floor(ma));
		updateButtons();
		updateTotals();
	}

	function closure(){
		var
			a = Array.prototype.slice.call(arguments),
			m = a.shift()
		;
		return function(){
			m.apply(window, a);
		};	
	}

	function removeItem(i){
		kill('item' + i);
		kill(querySelectorAll('.itemButton' + i));
		updateTotals();
	}

	function addWeaponOptions(options, weaponType){
		var temp = createElement('optgroup', { 'label': moduleCategoryNames[weaponType] });
		l = moduleCategories[weaponType].length;
		for (j = 0; j < l; j++){
			temp.appendChild(createElement('option', {
				'value': moduleCategories[weaponType][j],
				'text': parts[moduleCategories[weaponType][j]].name
			}));
		}
		options.appendChild(temp);
		return options;
	}

	function addCalc(){
		var
			i = 0,
			l, m,
			j, k,
			item,
			weapons,
			//weaponProf,
			commanderTypes,
			commanderStars,
			chipColors,
			chipLevels,
			hullTypes,
			temp,
			updater
		;
		// get available ID
		while (document.getElementById('item' + i) !== null) i++;
		updater = closure(update, i)
		// commander types
		commanderTypes = createElement('select', {
			'id': 'commanderType' + i,
			'class': 'commanderTypes',
			'change': updater
		});
		l = langCommanderTypes.length;
		for (j = 0; j < l; j++){
			if (langCommanderTypes[j] === undefined) continue;
			commanderTypes.appendChild(createElement('option', {
				'value': j,
				'text': langCommanderTypes[j]
			}));
		}
		// commander stars
		commanderStars = createElement('select', {
			'id': 'commanderStars' + i,
			'class': 'commanderStars',
			'change': updater
		});
		l = langCommanderStars.length;
		for (j = 0; j < l; j++){
			commanderStars.appendChild(createElement('option', {
				'value': j,
				'text': langCommanderStars[j]
			}));
		}
		// chip colors
		chipColors = createElement('select', {
			'id': 'chipColor' + i,
			'class': 'chipColors',
			'change': updater
		});
		l = langChipColors.length;
		for (j = 0; j < l; j++){
			chipColors.appendChild(createElement('option', {
				'value': j,
				'text': langChipColors[j]
			}));
		}
		// chip levels
		chipLevels = createElement('select', {
			'id': 'chipLevel' + i,
			'class': 'chipLevels',
			'change': updater
		});
		l = langChipLevels.length;
		for (j = 0; j < l; j++){
			chipLevels.appendChild(createElement('option', {
				'value': j,
				'text': langChipLevels[j]
			}));
		}
		// hull types
		hullTypes = createElement('select', {
			'id': 'hullType' + i,
			'class': 'hullType',
			'change': updater
		});
		l = hullCategories.length;
		for (j = 0; j < l; j++){
			temp = createElement('optgroup', {
				'label': hullCategoryNames[j]
			});
			m = hullCategories[j].length;
			for (k = 0; k < m; k++){
				temp.appendChild(createElement('option', {
					'value': hullCategories[j][k],
					'text': hulls[hullCategories[j][k]].name
				}));
			}
			hullTypes.appendChild(temp);
		}
		// weapon proficiency selector
		weaponProf = createElement('select', {
			'id': 'weaponProf' + i,
			'class': 'weaponProf',
			'change': updater
		});
		l = langWeaponProf.length;
		for (j = 0; j < l; j++){
			weaponProf.appendChild(createElement('option', {
				'value': j,
				'text': langWeaponProf[j]
			}));
		}
		// draw weapon list
		weapons = createElement('select', {
			'id': 'weapon' + i,
			'class': 'weapons',
			'change': updater
		});
		weapons = addWeaponOptions(weapons, MODULE_CATEGORY_BALLISTIC);
		weapons = addWeaponOptions(weapons, MODULE_CATEGORY_DIRECTIONAL);
		weapons = addWeaponOptions(weapons, MODULE_CATEGORY_MISSLE);
		weapons = addWeaponOptions(weapons, MODULE_CATEGORY_SHIPBASED);
		// add to the page
		querySelector('#items').appendChild(createElement('div', {
			'class': 'item',
			'id': 'item' + i,
			'div': [
				{
					'class': 'close',
					'text': 'x',
					'click': closure(removeItem, i)
				},
				{
					'class': 'field',
					'text': 'Name: ',
					'input': {
						'id': 'itemName' + i,
						'class': 'itemName',
						'value': '?',
						'change': updater
					}
				},
				{
					'class': 'field',
					'text': 'Weapon: ',
					'children': weapons
				},
				{
					'class': 'field',
					'text': 'Weapon Count: ',
					'input': {
						'id': 'weaponCount' + i,
						'value': '',
						'change': updater
					}
				},
				/*{
					'class': 'field',
					'text': 'Weapon Prof: ',
					'children': weaponProf
				},*/
				{
					'class': 'field',
					'text': 'Hull Type: ',
					'children': hullTypes
				},
				{
					'class': 'field hidden',
					'span': {
						'text': 'Stack size: ',
						'a': {
							'class': 'swapstacker',
							'text': 'x',
							'onclick': closure(swapStacker, i)
						}
					},
					'input': {
						'id': 'stackSize' + i,
						'value': '',
						'change': updater
					}
				},
				{
					'class': 'field',
					'span': {
						'text': 'Commander Type: ',
						'a': {
							'class': 'swapstacker',
							'text': 'x',
							'onclick': closure(swapStacker, i)
						}
					},
					'children': commanderTypes
				},
				{
					'class': 'field',
					'text': 'Commander Stars: ',
					'children': commanderStars
				},
				{
					'class': 'field',
					'text': 'Chip Color: ',
					'children': chipColors
				},
				{
					'class': 'field',
					'text': 'Chip Level: ',
					'children': chipLevels
				},
				{
					'class': 'field',
					'text': 'Stacks: ',
					'input': {
						'id': 'stacks' + i,
						'value': '',
						'change': updater
					}
				},
				{
					'class': 'field',
					'text': 'Gem Power: ',
					'input': {
						'id': 'gemPower' + i,
						'value': '0%',
						'change': updater
					}
				},
				{
					'class': 'field',
					'text': 'Max Attack:',
					'input': {
						'id': 'maxAttack' + i,
						'class': 'disabled',
						'disabled': true,
						'readonly': true
					}
				}
			]
		}));
		update(i);
		updateButtons();
	}
	
	function swapStacker(i){
		var
			stackSize = querySelector('#stackSize' + i),
			commanderType = querySelector('#commanderType' + i),
			commanderStars = querySelector('#commanderStars' + i),
			hullType = getNumber(querySelector('#hullType' + i)),
			stackType = getStackType(hullType)
		;
		if (stackSize.parentNode.classList.contains('hidden') === true){
			if (getNumber(commanderType) === COMMANDER_TYPE_COMMON){
				stackSize.value = hulls[hullType].validNum;
			}
			else {
				stackSize.value = effectiveStacks[getNumber(commanderType)][stackType][getNumber(commanderStars)];
			}
			stackSize.parentNode.classList.remove('hidden');
			commanderType.parentNode.classList.add('hidden');
			commanderStars.parentNode.classList.add('hidden');
		}
		else {
			stackSize.parentNode.classList.add('hidden');
			commanderType.parentNode.classList.remove('hidden');
			commanderStars.parentNode.classList.remove('hidden');
		}
	}
	
	function updateButtons(){
		var
			items = querySelectorAll('.itemName'),
			totals = querySelectorAll('.total'),
			buttons,
			i, j, k,
			l, m, n,
			total,
			item,
			button
		;
		l = totals.length;
		for (i = 0; i < l; i++){
			total = totals[i].id.replace(/^total/, '');
			buttons = querySelectorAll('#total' + total + ' .itemButton');
			m = items.length;
			inner: for (j = 0; j < m; j++){
				item = items[j].id.replace(/^itemName/, '');
				n = buttons.length;
				for (k = 0; k < n; k++){
					button = buttons[k].id.replace(new RegExp('^itemButton' + total + '-'), '');
					if (item === button){
						replaceText(buttons[k], items[j].value);
						continue inner;
					}
				}
				querySelector('#total' + total + ' .buttons').appendChild(createElement('button', {
					'text': items[j].value,
					'class': 'itemButton itemButton' + item,
					'id': 'itemButton' + total + '-' + item,
					'click': closure(toggleItem, total, item)
				}));
			}
		}
	}

	function addCommas(nStr){
		nStr += '';
		x = nStr.split('.');
		x1 = x[0];
		x2 = x.length > 1 ? '.' + x[1] : '';
		var rgx = /(\d+)(\d{3})/;
		while (rgx.test(x1)) {
			x1 = x1.replace(rgx, '$1' + ',' + '$2');
		}
		return x1 + x2;
	}

	function getNumber(object){
		if (object.value !== undefined){
			object = object.value;
		}
		else if (object.innerHTML !== undefined){
			object = object.innerHTML;
		}
		object = object.replace(/\%$/g, '');
		object = object.replace(/,/g, '');
		return Number(object, 10);
	}

	function toggleItem(total, item){
		var
			button = querySelector('#itemButton' + total + '-' + item),
			attack = querySelector('#attack' + total),
			sele = getNumber(attack),
			item = getNumber(querySelector('#maxAttack' + item))
		;
		if (button.classList.contains('selected')){
			button.classList.remove('selected');
		}
		else {
			button.classList.add('selected');
		}
		updateTotals();
	}

	function updateTotals(){
		var
			totals = querySelectorAll('.total'),
			buttons,
			attack,
			i, j,
			l, m,
			total,
			item,
			t
		;
		l = totals.length;
		for (i = 0; i < l; i++){
			t = 0;
			total = totals[i].id.replace(/^total/, '');
			buttons = querySelectorAll('#total' + total + ' .itemButton');
			m = buttons.length;
			for (j = 0; j < m; j++){
				if (buttons[j].classList.contains('selected')){
					item = buttons[j].id.replace(new RegExp('^itemButton' + total + '-'), '');
					t += getNumber(querySelector('#maxAttack' + item))
				}
			}
			querySelector('#attack' + total).value = addCommas(t);
		}
	}

	function deleteTotal(t){
		kill('total' + t);
	}

	function addTotal(){
		var
			items = querySelectorAll('.itemName'),
			buttons = [],
			i, t = 0,
			j, l
		;
		while (querySelector('#total' + t) !== null) t++;
		l = items.length;
		for (j = 0; j < l; j++){
			i = items[j].id.replace(/^itemName/, '');
			buttons.push(createElement('button', {
				'text': items[j].value,
				'class': 'itemButton itemButton' + i,
				'id': 'itemButton' + t + '-' + i,
				'click': closure(toggleItem, t, i)
			}));
		}
		querySelector('#totals').appendChild(createElement('div', {
			'id': 'total' + t,
			'class': 'total',
			'span': [
				{
					'class': 'close',
					'text': 'x',
					'click': closure(deleteTotal, t)
				},
				{
					'class': 'buttons',
					'children': buttons
				},
				{
					'input': {
						'id': 'attack' + t,
						'class': 'attack',
						'value': '0',
						'readonly': true,
						'disabled': true
					}
				}
			]
			
		}));
	}

	window.addEventListener('load', function(event){
		addCalc();
		querySelector('#addItem button').addEventListener('click', addCalc, false);
		querySelector('#addTotal button').addEventListener('click', addTotal, false);
	}, false);




