(function(w){

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

	// element grabber
	function g(object){
		if (typeof(object) === 'string'){
			var t = object.split(/\s/).pop();
			if (t.substring(0, 1) === '#'){
				object = document.querySelector(object);
			}
			else {
				object = document.querySelectorAll(object);
			}
		}
		return object;
	}
	
	// input grabber
	function n(object){
		object = g(object);
		object = Number(object.value, 10);
		if (isNaN(object)){
			object = 0;
		}
		return object;
	}
	
	// check if an object is iterable
	function isIterable(object){
		return (object instanceof Array) || (object instanceof NodeList) || (object instanceof HTMLCollection);
	}
	
	// make an object iterable
	function iterable(object){
		if (isIterable(object)){
			if (object instanceof Array){
				return object;
			}
			return Array.prototype.slice.call(object);
		}
		return [object];
	}
	
	// kill an object or a list of objects
	function kill(object){
		object = g(object);
		if (isIterable(object)){
			Array.prototype.slice.call(object).reverse().forEach(kill);
			return;
		}
		object.parentNode.removeChild(object);
	}
	
	// empty a container
	function empty(object){
		object = g(object);
		kill(object.childNodes);
	}

	function createEntity(entity){
		if (document.createEntityReference !== undefined){
			return document.createEntityReference(entity);
		}
		var t = document.createElement('span');
		t.innerHTML = '&' + entity + ';';
		return t.firstChild;
	}

	// replace text
	function replaceText(object, text){
		empty(object);
		object.appendChild(document.createTextNode(text));
	}
	
	// create an element
	function createElement(nodeName, params){
		var object = document.createElement(nodeName), item;
		for (item in params){
			if (params.hasOwnProperty(item) === false){
				continue;
			}
			switch (item){
				case 'text':
					iterable(params[item]).forEach(function(text){
						object.appendChild(document.createTextNode(text));
					});
				break;
				case 'src':
					object.src = params[item];
				break;
				case 'click':
					iterable(params[item]).forEach(function(method){
						object.addEventListener(item, method, false);
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
	
	// apply a method to all previous siblings
	function applyToPreviousSiblings(object, handler){
		object = g(object);
		while (object){
			if (object.nodeType === 1){
				handler.call(window, object);
			}
			object = object.previousSibling;
		}
	}
	
	// create a closure
	function closure(self, method){
		return function(){
			method.apply(self, arguments);
		};
	}
	
	var
		selectedGemSlot = null,
		selectedGems = {},
		diamondColor = null,
		stars = 1,
		commanderGains = [],
		effectiveStacks = [],
		params = new paramList('cc', {
			'savedCommanders': []
		});
	;

	commanderGains[2] = [1, 3, 5, 7, 9, 11, 13, 15, 17];
	commanderGains[3] = [4, 6, 8, 10, 12, 14, 16, 18, 20];
	commanderGains[4] = [7, 9, 11, 13, 15, 17, 19, 21, 23];
	commanderGains[5] = [12, 14, 16, 18, 20, 22, 24, 26, 28];

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
	effectiveStacks[COMMANDER_TYPE_LEGENDARY][HULL_CATEGORY_CRUISER]    = [1024, 1074, 1153, 1265, 1420, 1628, 1905, 2277, 2777];
	effectiveStacks[COMMANDER_TYPE_LEGENDARY][HULL_CATEGORY_BATTLESHIP] = [ 922,  967, 1038, 1139, 1278, 1465, 1715, 2249, 2499];
	effectiveStacks[COMMANDER_TYPE_DIVINE] = [];
	effectiveStacks[COMMANDER_TYPE_DIVINE][HULL_CATEGORY_FRIGATE]    = [1127, 1182, 1268, 1392, 1562, 1790, 2096, 2505, 3000];
	effectiveStacks[COMMANDER_TYPE_DIVINE][HULL_CATEGORY_CRUISER]    = [1024, 1074, 1153, 1265, 1420, 1628, 1905, 2277, 2777];
	effectiveStacks[COMMANDER_TYPE_DIVINE][HULL_CATEGORY_BATTLESHIP] = [ 922,  967, 1038, 1139, 1278, 1465, 1715, 2249, 2499];
	
	function calc(rate, gain, base){
		var
			level = parseInt(document.querySelector('#level input').value, 10),
			variance = (parseInt(document.querySelector('#variance input').value, 10) - 0.025) / 200
		;
		return base + Math.floor(rate / 10 * (gain + 0.5 + variance) * (level - 1));
	}
	
	function update(){
		var
			commander = commanders[g('#commanders').value],
			gain = commanderGains[commander.type][stars - 1],
			acc = n('#accuracy'), 
			dod = n('#dodge'), 
			spe = n('#speed'), 
			ele = n('#electron')
		;
		if (commander.titan === 1){
			gain += 5;
		}
		if (acc < 10) acc = calc(acc, gain, commander.aim + stars - 1) + gemValue('aim');
		if (dod < 10) dod = calc(dod, gain, commander.blench + stars - 1) + gemValue('blench');
		if (spe < 10) spe = calc(spe, gain, commander.priority + stars - 1) + gemValue('priority');
		if (ele < 10) ele = calc(ele, gain, commander.electron + stars - 1) + gemValue('electron');
		g('#pCombined').innerHTML = acc + dod + spe + ele;
		g('#pAccuracy').innerHTML = acc;
		g('#pDodge').innerHTML = dod;
		g('#pSpeed').innerHTML = spe;
		g('#pElectron').innerHTML = ele;
		g('#pAttack').innerHTML = (gemValue('assault') / 100) + '%';
		g('#pStructure').innerHTML = (gemValue('endure') / 100) + '%';
		g('#pShield').innerHTML = (gemValue('shield') / 100) + '%';
		g('#pCritDamage').innerHTML = (gemValue('blastHurt') / 100) + '%';
		g('#pCritRate').innerHTML = (gemValue('blast') / 100) + '%';
		g('#pComboRate').innerHTML = (gemValue('doubleHit') / 100) + '%';
		g('#pShieldRecovery').innerHTML = (gemValue('repairShield') / 100) + '%';
		g('#pExp').innerHTML = (gemValue('exp') / 100) + '%';
		updateProf();
		updateCommand();
		updateRate(commander, acc, dod, spe, ele);
	}

	function updateRate(commander, acc, dod, spe, ele){
		if (commander.procMode === undefined){
			document.querySelector('#rate span').innerHTML = 'Unknown';
			document.querySelector('#rate').classList.remove('hide');
			return;
		}
		if (commander.procMode === 0){
			document.querySelector('#rate').classList.add('hide');
			return;
		}
		var integral = 0, rate, t;
		switch (commander.procMode){
			case 1: integral += acc + dod + spe + ele; break;
			case 2:
				switch (parseInt(commander.procData)){
					case 0: integral += acc; break;
					case 1: integral += dod; break;
					case 2: integral += spe; break;
					case 3: integral += ele; break;
				}
			break;
			case 3:
				t = commander.procData.split(':');
				switch (parseInt(t[0])){
					case 0: integral += acc; break;
					case 1: integral += dod; break;
					case 2: integral += spe; break;
					case 3: integral += ele; break;
				}
				switch (parseInt(t[1])){
					case 0: integral += acc; break;
					case 1: integral += dod; break;
					case 2: integral += spe; break;
					case 3: integral += ele; break;
				}
			break;
		}
		rate = 
			commander.procA + 
			commander.procB * integral +
			commander.procC * Math.pow(integral, 2) +
			commander.procD * Math.pow(integral, 3)
		;
		document.querySelector('#rate span').innerHTML = (Math.round(rate) / 100) + '%';
		document.querySelector('#rate').classList.remove('hide');
	}

	function updateCommand(){
		var
			cF = document.querySelector('#command .frigate'),
			cC = document.querySelector('#command .cruiser'),
			cB = document.querySelector('#command .battleship'),
			cS = document.querySelector('#commanders')
		;
		replaceText(cF, effectiveStacks[commanders[cS.value].type][HULL_CATEGORY_FRIGATE][stars - 1]);
		replaceText(cC, effectiveStacks[commanders[cS.value].type][HULL_CATEGORY_CRUISER][stars - 1]);
		replaceText(cB, effectiveStacks[commanders[cS.value].type][HULL_CATEGORY_BATTLESHIP][stars - 1]);
	}
	
	function selectStars(event){
		stars = Number(this.id.replace(/^stars/, ''), 10);
		revertStars();
		update();
	}
	
	function hoverStar(event){
		Array.prototype.slice.call(g('.star')).forEach(function(object){
			object.classList.remove('selected');
		});
		var object = this;
		while (object){
			if (object.nodeType === 1){
				object.classList.add('selected');
			}
			object = object.previousSibling;
		}
	}
	
	function revertStars(event){
		Array.prototype.slice.call(g('.star')).forEach(function(object){
			object.classList.remove('selected');
		});
		applyToPreviousSiblings('#stars' + stars, function(object){
			object.classList.add('selected');
		});
	}
	
	function initStarSelector(event){
		Array.prototype.slice.call(g('.star')).forEach(function(object){
			object.addEventListener('mouseover', hoverStar, false);
			object.addEventListener('mouseout', revertStars, false);
			object.addEventListener('click', selectStars, false);
		});
	}
	
	function initCommanderSelector(event){
		empty('#commanders');
		var i = 0, l = commanders.length;
		for (; i < l; i++){
			g('#commanders').appendChild(createElement('option', {
				'id': 'cc' + commanders[i].id,
				'text': commanders[i].name,
				'value': i
			}));
		}
	}
	
	function changeCommander(event){
		var
			commanderImage = iterable(g('#commanderImage img')).shift(),
			skillName = g('#skillName'),
			skillDescription = g('#skillDescription'),
			commander = g('#commanders'),
			//showHD = g('#showHD'),
			commanderQuality = g('#commanderQuality')
		;
		commanderImage.src = imagePath + 'commanders/' + commanders[commander.value].image + '.jpg';
		replaceText(skillName, commanders[commander.value].skillName);
		replaceText(skillDescription, commanders[commander.value].comment);
		drawDivineCombo(commanders[commander.value]);
		switch (commanders[commander.value].type){
			case COMMANDER_TYPE_SPELL:
				replaceText(commanderQuality, commanderTypeNames[COMMANDER_TYPE_SPELL]);
				commanderQuality.className = 'spell';
			break;
			case COMMANDER_TYPE_SUPER:
				replaceText(commanderQuality, commanderTypeNames[COMMANDER_TYPE_SUPER]);
				commanderQuality.className = 'super';
			break;
			case COMMANDER_TYPE_LEGENDARY:
				replaceText(commanderQuality, commanderTypeNames[COMMANDER_TYPE_LEGENDARY]);
				commanderQuality.className = 'legend';
			break;
			case COMMANDER_TYPE_DIVINE:
				replaceText(commanderQuality, commanderTypeNames[COMMANDER_TYPE_DIVINE]);
				commanderQuality.className = 'divine';
			break;
		}
		//showHD.style.display = commanders[commander.value].hd === undefined ? 'none' : 'block';
		update();
	}
	
	function drawDivineCombo(commander){
		var divineCombo = g('#divineCombo');
		kill(divineCombo.childNodes);
		switch (commander.type){
			case COMMANDER_TYPE_SPELL:
			case COMMANDER_TYPE_SUPER:
			case COMMANDER_TYPE_LEGENDARY:
				divineCombo.style.display = 'none';
			break;
			case COMMANDER_TYPE_DIVINE:
				if (commander.divine === undefined){
					divineCombo.style.display = 'none';
					return;
				}
				divineCombo.appendChild(commanderTextLink(commander.divine[0]));
				divineCombo.appendChild(document.createTextNode(' + '));
				divineCombo.appendChild(commanderTextLink(commander.divine[1]));
				divineCombo.style.display = 'block';
			break;
		}
	}

	function commanderTextLink(id){
		var
			i = commanders.length,
			o = document.createElement('span')
		;
		while (i--){
			if (commanders[i].id === id){
				o.appendChild(document.createTextNode(commanders[i].name));
				o.className = 'type' + commanders[i].type;
				o.addEventListener('click', function(){
					document.querySelector('#cc' + id).selected = true;
					changeCommander();
				}, false);
				break;
			}
		}
		return o;
	}

	function updateProf(){
		var
			commander = g('#commanders'),
			types = ['ballistic','directional','missile','carrier','defend','frigate','cruiser','battleship'],
			effs = ['D', 'C', 'B', 'A', 'S'],
			res = [70, 90, 100, 110, 130],
			eff = 0,
			i,
			j, t, p
		;
		i = types.length;
		while (i--){
			eff = effs.indexOf(commanders[commander.value][types[i]]);
			for (j in selectedGems){
				if (selectedGems.hasOwnProperty(j) === false){
						continue;
				}
				if (selectedGems[j][types[i]] === undefined){
					continue;
				}
				if (effs.indexOf(selectedGems[j][types[i]]) > eff){
					eff = effs.indexOf(selectedGems[j][types[i]]);
				}
			}
			document.querySelector('#prof-' + types[i] + ' img').src = imagePath + 'layout/' + 'eff' + effs[eff] + '.png';
			t = document.querySelector('#prof-' + types[i]);
			switch (types[i]){
				case 'frigate':
				case 'cruiser':
				case 'battleship':
					p = 100 - res[eff];
				break;
				default:
					p = res[eff] - 100;
				break;
			}
			t.title = t.getAttribute('data-title') + ' (' + forceSign(p) + '% ' + damageName + ')';
		}
	}

	function forceSign(n){
		if (n >= 0) n = '+' + n;
		return n; 
	}

	function showHD(){
		window.open(imagePath + 'hd/' + commanders[g('#commanders').value].image + '.jpg');
	}

	function linkStat(input){
		input *= 10;
		if (isNaN(input)){
			return 0;
		}
		return input;
	}
	
	// create a new design id
	function newCommanderId(){
		var
			savedCommanders = params.get('savedCommanders'),
			i = savedCommanders.length,
			id = 0
		;
		while (i--){
			if (savedCommanders[i].id >= id){
				id = savedCommanders[i].id + 1;
			}
		}
		return id;
	}
	
	function saveCommander(){
		var
			commanderId = Math.floor(document.querySelector('#commanders option:checked').id.replace(/[^0-9]/g, '')),
			//url and name
		        savename = document.querySelector('#commanders option:checked').text,
			savelink = getLink(),
			accuracy = n('#accuracy'), 
			dodge = n('#dodge'), 
			speed = n('#speed'), 
			electron = n('#electron'),
			level = Math.floor(document.querySelector('#level input').value),
			variance = Math.floor(document.querySelector('#variance input').value),
			gems = document.querySelectorAll('.gem'),
			chips = document.querySelectorAll('.chip'),
			savedCommanders = params.get('savedCommanders'),
			commander = {},
			i = savedCommanders.length,
			j
		;
		commander.id = newCommanderId();
		commander.commanderId = commanderId;
		//commander.name and commander.url test
		commander.commname = savename;
		commander.link = savelink;
		commander.accuracy = accuracy;
		commander.dodge = dodge;
		commander.speed = speed;
		commander.electron = electron;
		commander.level = level;
		commander.variance = variance;
		commander.stars = stars;
		commander.gems = [];
		j = gems.length;
		while (j--){
			if (selectedGems.hasOwnProperty(gems[j].id) === false){
				continue;
			}
			commander.gems.push(selectedGems[gems[j].id].id);
		}
		commander.chips = [];
		j = chips.length;
		while (j--){
			if (chips[j].getAttribute('data-chip') !== null){
				commander.chips.push(Math.floor(chips[j].getAttribute('data-chip')));
			}
		}
		/*while (i--){
			if (savedCommanders[i].commanderId === commanderId){
				savedCommanders[i] = commander;
				params.set('savedCommanders', savedCommanders);
				alert('Saved');
				return;
			}
		}*/
		savedCommanders.push(commander);
		params.set('savedCommanders', savedCommanders);
		alert('Saved');
	}
	
	function getLink(){
		var
			c = document.querySelector('#commanders'),
			cA = document.querySelector('#accuracy'),
			cD = document.querySelector('#dodge'),
			cS = document.querySelector('#speed'),
			cE = document.querySelector('#electron'),
			g = document.querySelectorAll('.gem'),
			l = document.querySelector('#level input'),
			v = document.querySelector('#variance input'),
			o = [], i, j = g.length
		;
		o.push(commanders[c.value].id);
		o.push(l.value);
		o.push(v.value);
		o.push(stars);
		o.push(linkStat(cA.value));
		o.push(linkStat(cD.value));
		o.push(linkStat(cS.value));
		o.push(linkStat(cE.value));
		for (i = 0; i < j; i++){
			if (selectedGems.hasOwnProperty(g[i].id) === false){
				o.push('');
				continue;
			}
			o.push(selectedGems[g[i].id].id);
		}
		return location.protocol + '//' + location.hostname + location.pathname + '?d=' + o.join(';');
	}

	function showLink(event){
		prompt('Copy the following link:', getLink());
	}
	
	function changeLevel(){
		replaceText(document.querySelector('#levelText'), this.value);
		update();
	}

	function changeVariance(){
		replaceText(document.querySelector('#varianceText'), this.value);
		update();
	}

	function now(){
		return Math.floor((new Date()).getTime() / 1000);
	}

	function selectLang(event){
		event.preventDefault();
		var i = this.classList.length;
		while (i--){
			if (this.classList.item(i) === 'flag') continue;
			window.location = getLink() + '&lang=' + this.classList.item(i) + '&t=' + now();
			break;
		}
	}
	
	function removeGems(event){
		if (confirm('Are you sure?') !== true){
			return false;
		}
		iterable(g('#gems .gem')).forEach(function(gem){
			clearGemSlot.call(gem, event);
		});
	}
	
	function listCommanders(event){
		var
			commanderListWrapper = document.querySelector('#commanderListWrapper'),
			commanderList = document.querySelector('#commanderList'),
			frame = document.createElement('iframe')
		;
		kill(commanderList.childNodes);
		frame.src = 'list.html';
		commanderList.appendChild(frame);
		commanderListWrapper.style.display = 'block';
	}
	
	function hideCommanders(event){
		var
			commanderListWrapper = document.querySelector('#commanderListWrapper'),
			commanderList = document.querySelector('#commanderList')
		;
		kill(commanderList.childNodes);
		commanderListWrapper.style.display = 'none';
		params = new paramList('cc', {
			'savedCommanders': []
		});
	}
	
	function initListeners(event){
		g('#accuracy').addEventListener('keyup', update, false);
		g('#dodge').addEventListener('keyup', update, false);
		g('#speed').addEventListener('keyup', update, false);
		g('#electron').addEventListener('keyup', update, false);
		g('#commanders').addEventListener('change', changeCommander, false);
		//g('#showHD').addEventListener('click', showHD, false);
		document.querySelector('#level input').addEventListener('change', changeLevel, false);
		document.querySelector('#variance input').addEventListener('change', changeVariance, false);
		
		
		
		document.querySelector('#link #save').addEventListener('click', saveCommander, false);
		document.querySelector('#link #list').addEventListener('click', listCommanders, false);
		document.querySelector('#closeList').addEventListener('click', hideCommanders, false);
		document.querySelector('#link #linker').addEventListener('click', showLink, false);
		
		
		
		
		
		iterable(g('#gems .gem')).forEach(function(gem){
			gem.addEventListener('click', selectGemSlot, false);
			gem.addEventListener('dblclick', clearGemSlot, false);
		});
		window.addEventListener('click', hideGemSelector, false);
		window.addEventListener('resize', hideGemSelector, false);
		iterable(g('#lang .flag')).forEach(function(flag){
			flag.addEventListener('click', selectLang, false);
		});
		document.querySelector('#removeGems button').addEventListener('click', removeGems, false);
	}
	
	function clearGemSlot(event){
		hideGemSelector();
		delete selectedGems[this.id];
		empty(this);
		update();
	}
	
	function hideGemSelector(event){
		g('#gemSelector').style.display = 'none';
		diamondColor = null;
	}
	
	function gemValue(name){
		var output = 0, i;
		for (i in selectedGems){
			// property filter
			if (selectedGems.hasOwnProperty(i) === false){
				continue;
			}
			// check if the value is defined
			if (selectedGems[i][name] === undefined){
				continue;
			}
			// add to the output
			output += selectedGems[i][name];
		}
		return output;
	}
	
	function selectGemSlot(event){
		diamondColor = null;
		event.preventDefault();
		event.stopPropagation();
		selectedGemSlot = this.id;
		var selector = g('#gemSelector');
		selector.style.left = (event.pageX - 90) + 'px';
		selector.style.top = (event.pageY + 10) + 'px';
		drawGemSelector();
	}
	
	function drawGemSelector(gemColor){
		var
			selector = g('#gemSelector'),
			gemSlot,
			gg = ['ruby', 'sapphire', 'emerald', 'diamond'],
			cc = ['red', 'blue', 'green', 'diamond'],
			i
		;
		if (selectedGemSlot === null){
			return;
		}
		gemSlot = g('#' + selectedGemSlot);
		if (gemColor === undefined){
			gemColor = gemSlot.id.replace(/\d+/, '');
		}
		empty(selector);
		if (gemColor === 'diamond' && diamondColor === null){
			for (i = 0; i < gg.length; i++){
				with ({i:i}){
					selector.appendChild(createElement('img', { 
						'src': imagePath + 'layout/' + gg[i] + '.png',
						'click': function(event){
							event.preventDefault();
							event.stopPropagation();
							diamondColor = cc[i];
							drawGemSelector('diamond');
						},
					}));
				}
			}
			selector.style.display = 'block';
			return;
		}
		if (gemColor === 'diamond'){
			gemColor = diamondColor;
		}
		for (i in items){
			// property filter
			if (items.hasOwnProperty(i) === false){
				continue;
			}
			// check if gem can be selected
			if (items[i][gemColor] === undefined){
				continue;
			}
			// check if similar type is already selected
			if (
				selectedGems[gemSlot.id] !== undefined && 
				selectedGems[gemSlot.id].gemColor === items[i].gemColor &&
				selectedGems[gemSlot.id].gemKindID === items[i].gemKindID && 
				selectedGems[gemSlot.id].gemLevel !== 4
				
			){
				// look for the upgraded version
				if (selectedGems[gemSlot.id].gemLevel + 1 !== items[i].gemLevel){
					continue;
				}
			}
			// default to the lower levels
			else if (items[i].gemLevel > 0){
				continue;
			}
			// show the gem
			selector.appendChild(createElement('img', { 
				'src': imagePath + 'gems/' + items[i].imageFileName + '.png',
				'click': closure(items[i], selectGem),
				'title': items[i].name + "\n" + items[i].comment
			}));
		}
		selector.style.display = 'block';
	}
	
	function selectGem(event){
		event.stopPropagation();
		event.preventDefault();
		// show the selected gem
		var slot = g('#' + selectedGemSlot);
		empty(slot);
		slot.appendChild(createElement('img', {
			'src': imagePath + 'gems/' + this.imageFileName + '.png',
			'title': this.name + "\n" + this.comment
		}));
		// save
		selectedGems[selectedGemSlot] = this;
		// update selector
		drawGemSelector();
		// update stats
		update();
	}

	function d(t){
		document.body.appendChild(document.createTextNode(t));
		document.body.appendChild(document.createElement('br'));
	}
	
	function commanderSort(a, b){
		return a.name.localeCompare(b.name);
		//if (a.priority === b.priority) return 0;
		//return a.priority > b.priority ? 1 : -1;
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
	
	function selectChipLevel(event){
		if (selectedChipSlot === null){
			return false;
		}
		var slot = document.querySelector('#' + selectedChipSlot), chipSelector = document.querySelector('#chipSelector'), img, i = parseInt(this.getAttribute('data-chip'), 10);
		slot.setAttribute('data-chip', i);
		kill(slot.childNodes);
		img = new Image();
		img.src = '../imgs/chips/' + chip[i].imageFileName + '.jpg';
		slot.appendChild(img);
		chipSelector.classList.add('hidden');
		closeChipSelector();
	}

	function selectChipColor(event){
		var chipLevels = document.querySelector('#chipLevel'), i = 0, l = chip.lenth, kind = parseInt(this.getAttribute('data-kind'), 10), div;
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
		document.querySelector('#chipType').classList.add('hidden');
		document.querySelector('#chipColor').classList.add('hidden');
		document.querySelector('#chipLevel').classList.remove('hidden');
	}
	
	function selectChipType(event){
		var chipColors = document.querySelector('#chipColor'), i = 0, l = chip.length, group = this.getAttribute('data-group'), img, slot;
		if (group === null){
			slot = document.querySelector('#' + selectedChipSlot);
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
		document.querySelector('#chipLevel').classList.add('hidden');
		document.querySelector('#chipType').classList.add('hidden');
		document.querySelector('#chipColor').classList.remove('hidden');
	}

	function initChipSelector(event){
		var i = 0, l = chip.length, g, chipTypes = document.querySelector('#chipType'), img;
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
			document.querySelector('#chip' + i).addEventListener('click', openChipSelector, false);
		}
		window.addEventListener('click', closeChipSelector, false);
	}
	
	var selectedChipSlot = null;
	function openChipSelector(event){
		document.querySelector('#chipColor').classList.add('hidden');
		document.querySelector('#chipLevel').classList.add('hidden');
		document.querySelector('#chipType').classList.remove('hidden');
		document.querySelector('#chipSelector').classList.remove('hidden');
		selectedChipSlot = this.id;
	}
	
	function closeChipSelector(event){
		if (event !== undefined){
			if (
				isDescendant(document.querySelector('#chipSelector'), event.target) === true || 
				isDescendant(document.querySelector('#chips'), event.target) === true
			){
				return false;
			}
		}
		document.querySelector('#chipLevel').classList.add('hidden');
		document.querySelector('#chipType').classList.add('hidden');
		document.querySelector('#chipColor').classList.add('hidden');
		document.querySelector('#chipSelector').classList.add('hidden');
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
	
	function init(event){
		var d = getUrlParam('d'), g, i, l, t;
		for (i in items){
			if (items.hasOwnProperty(i) === false){
				continue;
			}
			items[i].id = parseInt(i);
		}
		for (i in commanders){
			if (commanders.hasOwnProperty(i) === false){
				continue;
			}
			commanders[i].id = parseInt(i);
		}
		commanders.sort(commanderSort);
		initStarSelector();
		initCommanderSelector();
		initListeners();
		initChipSelector();
		if (d !== undefined){
			d = d.split(';');
			document.querySelector('#cc' + d.shift()).selected = true;
			if (d.length >= 18){
				t = d.shift();
				document.querySelector('#level input').value = t;
				replaceText(document.querySelector('#levelText'), t);
			}
			if (d.length >= 18){
				t = d.shift();
				document.querySelector('#variance input').value = t;
				replaceText(document.querySelector('#varianceText'), t);
			}
			stars = d.shift() * 1;
			document.querySelector('#accuracy').value = d.shift() / 10;
			document.querySelector('#dodge').value = d.shift() / 10;
			document.querySelector('#speed').value = d.shift() / 10;
			document.querySelector('#electron').value = d.shift() / 10;
			g = document.querySelectorAll('.gem');
			l = g.length;
			for (i = 0; i < l; i++){
				t = d.shift() * 1;
				if (isNaN(t) || t === 0){
					continue;
				}
				g[i].appendChild(createElement('img', {
					'src': imagePath + 'gems/' + items[t].imageFileName + '.png',
					'title': items[t].name + "\n" + items[t].comment
				}));
				selectedGems[g[i].id] = items[t];
			}
			revertStars();
		}
		else {
			i = commanders.length;
			while (i--){
				if (commanders[i].promote !== 1) continue;
				document.querySelector('#cc' + commanders[i].id).selected = true;
				break;
			}
		}
		changeCommander();
	}
	
	window.addEventListener('load', init, false);
	
})(window);
