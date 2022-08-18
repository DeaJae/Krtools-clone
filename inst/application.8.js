(function(){
	
	// load the parameter storage
	var params = new paramList('params', {
		fleets: [],
		fleetPositions: [],
		lastMapViewed: -1,
		rewardListState: 1
	});
	
	// determine the grid parameters
	var objectGrid = gridLayout(25, 1420, 890);
	var formationGrid = gridLayout(3, 440, 265);
	
	// calculate a list of variables needed for the grid
	function gridLayout(rows, width, height){
		return {
			rows: rows,
			width: width,
			height: height,
			halfWidth: width / 2,
			halfHeight: height / 2,
			iconWidth: width / rows,
			iconHeight: height / rows,
			iconHalfWidth: width / rows / 2,
			iconHalfHeight: height / rows / 2
		};
	}
	
	// convert coords into pixels
	function coordsToPixels(x, y, grid){
		return {
			x: (y - x + 1) * -grid.iconHalfWidth + grid.halfWidth,
			y: (x + y) * grid.iconHalfHeight
		};
	}

	// determine best hull in fleet
	function getBestHull(fleet){
		var i = fleet.stacks.length, best = HULL_EMPTY;
		while (i--){
			if (best !== HULL_EMPTY && hulls[builds[fleet.stacks[i].build].bodyId].showLevel <= best.showLevel) continue;
			best = hulls[builds[fleet.stacks[i].build].bodyId];
		}
		return best;
	}
	
	// return modules used in supplied build
	function getParts(build){
		var output = build.partInfo.split(','), i = output.length, partId;
		while (i--){
			partId = output[i];
			output[i] = parts[partId];
			output[i].partId = partId;
		}
		return output;
	}

	// count number of ships in fleet
	function shipCount(fleet){
		var count = 0, i = fleet.stacks.length;
		while (i--) count += fleet.stacks[i].count;
		return count;
	}
	
	// method to change modes
	function changeMode(mode){
		document.body.id = mode;
	}
	
	// resize an image to fit into a grid square
	function resizeImage(grid, image){
		var
			w = Math.max(image.width, image.offsetWidth),
			h = Math.max(image.height, image.offsetHeight),
			ratio = w / h
		;
		if (ratio > grid.iconWidth / grid.iconHeight){
			image.style.width = grid.iconWidth + 'px';
			image.style.width = (h / w * grid.iconWidth) + 'px';
			image.style.marginTop = ((grid.iconHeight - (h / w * grid.iconWidth)) / 2) + 'px';
		}
		else {
			image.style.height = grid.iconHeight + 'px';
			image.style.width = (w / h * grid.iconHeight) + 'px';
			image.style.marginLeft = ((grid.iconWidth - (w / h * grid.iconHeight)) / 2) + 'px';
		}
	}
	
	// different method for getting parts
	function getParts2(build){
		if (build.partInfo === undefined){
			return [];
		}
		var
			output = [],
			partIds = build.partInfo.split(','),
			i = partIds.length,
			j, part
		;
		outer: while (i--){
			j = output.length;
			partIds[i] = Math.floor(partIds[i]);
			while (j--){
				if (output[j].id === partIds[i]){
					output[j].count++;
					continue outer;
				}
			}
			part = parts[partIds[i]];
			part.id = partIds[i];
			part.count = 1;
			output.push(part);
		}
		return output;
	}
	
	// filter out the defense modules from the specified part list
	function getDefenseParts(parts){
		var
			output = [],
			i = parts.length
		;
		while (i--){
			if (defenseParts.indexOf(parts[i].id) === -1){
				continue;
			}
			output.push(parts[i]);
		}
		return output;
	}
	
	// filter out the weapons from the specified part list
	function getWeaponParts(parts){
		var
			output = [],
			i = parts.length
		;
		while (i--){
			if (weaponParts.indexOf(parts[i].id) === -1){
				continue;
			}
			output.push(parts[i]);
		}
		return output;
	}
	
	// extract a specific stat from the part list
	function getPartStat(parts, stat){
		var
			output = 0,
			i = parts.length
		;
		while (i--){
			if (parts[i][stat] === undefined){
				continue;
			}
			output += parts[i][stat] * parts[i].count;
		}
		return output;
	}
	
	// inspect a fleet stack
	function inspectStack(stack){
		var 
			build = stack.build,
			defensePartList = document.getElementById('defenseParts'),
			weaponPartList = document.getElementById('weaponParts'),
			weapons, defense, shield, endure, parts, i
		;
		// translate build id into object
		if (typeof(build) === 'number'){
			build = builds[build];
		}
		// get parts
		parts = getParts2(build);
		// filter some parts
		defense = getDefenseParts(parts);
		weapons = getWeaponParts(parts);
		// determine stack endurance
		endure = getPartStat(parts, 'endure');
		endure += hulls[build.bodyId].endure;
		endure *= stack.count;
		// determine stack shields
		shield = getPartStat(parts, 'shield');
		shield += hulls[build.bodyId].shield;
		shield *= stack.count;
		// cleanup part lists
		kill(defensePartList.childNodes);
		kill(weaponPartList.childNodes);
		// create the defense part list
		i = defense.length;
		while (i--){
			defensePartList.appendChild(createElement('div', {
				backgroundImage: 'url(../imgs/items/' + defense[i].imageFileName + '.jpg)',
				text: defense[i].count,
				title: defense[i].name
			}));
		}
		// create the weapon part list
		i = weapons.length;
		if (i === 0){
			weaponPartList.appendChild(document.createTextNode('None'));
		}
		while (i--){
			weaponPartList.appendChild(createElement('div', {
				backgroundImage: 'url(../imgs/items/' + weapons[i].imageFileName + '.jpg)',
				text: weapons[i].count,
				title: weapons[i].name
			}));
		}
		// enemy fleet details
		document.getElementById('shipName').innerHTML = build.name;
		document.getElementById('hullName').innerHTML = hulls[build.bodyId].name + ' (' + defendTypes[hulls[build.bodyId].defendType] + ')';
		document.getElementById('stackShield').innerHTML = addCommas(shield);
		document.getElementById('stackStructure').innerHTML = addCommas(endure);
	}
	
	// draw a stack from the fleet formation
	function drawStack(x, y, stack){
		var position = coordsToPixels(x, y, formationGrid), image, text, wrapper;
		image = document.createElement('img');
		//image.src = '../imgs/hulls/' + hulls[builds[stack.build].bodyId].imageFileName + '.png';
		image.src = '../imgs/hulls-small/' + hulls[builds[stack.build].bodyId].smallIcon + '.png';
		text = document.createElement('div');
		text.appendChild(document.createTextNode(stack.count));
		text.style.bottom = 0;
		text.style.left = 0;
		wrapper = document.createElement('div');
		wrapper.className = 'stack';
		wrapper.style.left = position.x + 'px';
		wrapper.style.top = position.y + 'px';
		wrapper.addEventListener('mouseover', function(){inspectStack(stack);inspector.setPanel('stack');}, false);
		wrapper.addEventListener('mouseout', function(){inspector.setPanel('fleet');}, false);
		wrapper.appendChild(image);
		wrapper.appendChild(text);
		document.getElementById('formation').appendChild(wrapper);
	}
	
	// draw the fleet commander
	function drawCommander(fleetCommander){
		// translate fleet commander ids into objects
		if (typeof(fleetCommander) === 'number'){
			fleetCommander = fleetCommanders[fleetCommander];
		}
		var
			commander = document.getElementById('commander'),
			commanderIcon = document.getElementById('commanderIcon'),
			commanderStars = document.getElementById('commanderStars'),
			i
		;
		// change commander icon
		commanderIcon.src = '../imgs/commanders-small/' + commanders[fleetCommander.commander].imageFileName + '.jpg';
		// draw commanders stars
		kill(commanderStars.childNodes);
		for (i = 0; i < fleetCommander.stars; i++){
			commanderStars.appendChild(createElement('img', {
				src: '../imgs/layout/CommanderStar.png'
			}));
		}
		for (; i < 9; i++){
			commanderStars.appendChild(createElement('img', {
				src: '../imgs/layout/CommanderStarGray.png'
			}));
		}
		// add/update events
		commander.onmouseover = function(event){
			inspectCommander(fleetCommander);
			inspector.setPanel('commander');
		}
		commander.onmouseout = function(event){
			inspector.setPanel('fleet');
		};
	}
	
	// inspect the commander
	function inspectCommander(fleetCommander){
		document.getElementById('commanderName').innerHTML = commanders[fleetCommander.commander].name;
		document.getElementById('commanderType').innerHTML = commanderTypes[commanders[fleetCommander.commander].type];
		document.getElementById('stars').innerHTML = fleetCommander.stars;
		document.getElementById('level').innerHTML = fleetCommander.level;
		document.getElementById('skill').innerHTML = commanders[fleetCommander.commander].skillName + ': ' + commanders[fleetCommander.commander].comment;
	}
	
	
	// draw the fleet formation
	function drawFormation(fleet){
		kill(document.getElementById('formation').childNodes);
		var i = fleet.stacks.length;
		while (i--){
			if (fleet.stacks[i].build === BUILD_EMPTY){
				continue;
			}
			drawStack(i % 3, (i - i % 3) / 3, fleet.stacks[i]);
		}
	}
	
	// draw the fleet details
	function drawFleetDetails(fleet){
		// define variables
		var
			durability = 0,
			attack = 0,
			movement = null,
			minRange = null,
			maxRange = null,
			target = 1,
			i = fleet.stacks.length,
			j, k, parts, stackMovement, stackMinRange, stackMaxRange
		;
		// loop through each stack
		while (i--){
			// ignore empty slots
			if (fleet.stacks[i].build === BUILD_EMPTY){
				continue;
			}
			// get hull stats
			durability += hulls[builds[fleet.stacks[i].build].bodyId].shield * fleet.stacks[i].count;
			durability += hulls[builds[fleet.stacks[i].build].bodyId].endure * fleet.stacks[i].count;
			stackMovement = Math.floor(hulls[builds[fleet.stacks[i].build].bodyId].locomotivity) || 0;
			// calculate part info
			stackMinRange = null;
			stackMaxRange = null;
			parts = getParts(builds[fleet.stacks[i].build]);
			j = parts.length;
			while (j--){
				for (k in parts[j]){
					switch (k){
						case 'locomotivity':
							stackMovement += parts[j][k];
						break;
						case 'maxAssault':
							attack += parts[j][k] * fleet.stacks[i].count;
						break;
						case 'shield':
						case 'endure':
							durability += parts[j][k] * fleet.stacks[i].count;
						break;
						case 'maxRange':
							if (stackMaxRange === null || parts[j][k] > stackMaxRange){
								stackMaxRange = parts[j][k];
							}
						break;
						case 'minRange':
							if (stackMinRange === null || parts[j][k] < stackMinRange){
								stackMinRange = parts[j][k];
							}
						break;
					}
				}
			}
			// fleet moves by the slowest stack
			if (movement === null || stackMovement < movement){
				movement = stackMovement;
			}
			// compare range to everything else in the fleet
			if (stackMinRange !== null && (minRange === null || minRange > stackMinRange)){
				minRange = stackMinRange;
			}
			if (stackMaxRange !== null && (maxRange === null || maxRange < stackMaxRange)){
				maxRange = stackMaxRange;
			}
		}
		// show info
		document.getElementById('fleetName').innerHTML = fleet.name;
		if (fleet.target === undefined){
			switch (maxRange){
				case 8: target = TARGET_MAX_ATTACK; break;
				case 10: target = TARGET_MAX_DURABILITY; break;
			}
		}
		else {
			target = fleet.target;
		}
		document.getElementById('target').innerHTML = targetNames[target];
		if (minRange === maxRange){
			if (minRange === null){
				document.getElementById('range').innerHTML = 0;
			}
			else {
				document.getElementById('range').innerHTML = minRange;
			}
		}
		else {
			document.getElementById('range').innerHTML = minRange + ' - ' + maxRange;
		}
		document.getElementById('movement').innerHTML = movement;
		document.getElementById('durability').innerHTML = addCommas(durability);
		document.getElementById('attack').innerHTML = addCommas(attack);
	}
	
	// draw structure details
	// TODO: structure health, range damage
	function drawStructureDetails(structure){
		document.getElementById('structureName').innerHTML = structureNames[structure.structureType];
		document.getElementById('structureLevel').innerHTML = structure.level;
	}
	
	// inspect an object
	function inspectObject(object, instantInspect){
		// already inspecting an object
		if (inspector.persistant){
			return;
		}
		// draw the relevant stuff
		switch (object.type){
			case 1:
				inspector.setMode('enemy');
				inspector.setPanel('fleet');
				drawFormation(fleets[object.fleet]);
				drawCommander(fleetCommanders[fleets[object.fleet].commander]);
				drawFleetDetails(fleets[object.fleet]);
			break;
			case 2:
				if (instantInspect === true){
					inspector.open(false);  //true if editor thing gets done.
					inspector.setMode('player');
					inspector.setPanel('fleet');
					return;
				}
			break;
			case 3:
				inspector.setMode('structure');
				inspector.setPanel('fleet');
				drawFormation(fleets[0]);
				drawStructureDetails(object);
			break;
		}
		// show inspector
		if (instantInspect === true){
			inspector.open();
		}
	}
	
	// draw an object on the grid
	function drawObject(object, instantInspect){
		var position = coordsToPixels(object.x, object.y, objectGrid), image, text;
		// create image object
		image = document.createElement('img');
		image.style.left = position.x + 'px';
		image.style.top = position.y + 'px';
		image.addEventListener('load', function(){this.style.display='block';resizeImage(objectGrid,this);}, false);
		image.addEventListener('mouseout', function(){inspector.close();}, false);
		image.addEventListener('click', function(){inspectObject(object, true);inspector.open(true);}, false);
		image.addEventListener('mouseover', function(){inspectObject(object, instantInspect);}, false);
		image.src = object.imageSrc;
		document.getElementById('map').appendChild(image);
		// create side text object
		if (object.sideText !== null){
			text = document.createElement('div');
			text.appendChild(document.createTextNode(object.sideText));
			text.style.left = (position.x + 10) + 'px';
			text.style.top = (position.y + objectGrid.iconHeight - 8) + 'px';
			text.style.display = 'block';
			text.style.zIndex = 3;
			text.addEventListener('mouseout', function(){inspector.close();}, false);
			text.addEventListener('click', function(){inspector.open(true);}, false);
			text.addEventListener('mouseover', function(){
				inspectObject(object, instantInspect);
			}, false);
			document.getElementById('map').appendChild(text);
		}
	}
	
	// draw an enemy object
	function drawEnemy(enemy){
		enemy.imageSrc = '../imgs/hulls-small/' + getBestHull(fleets[enemy.fleet]).smallIcon + '.png';
		enemy.sideText = shipCount(fleets[enemy.fleet]);
		drawObject(enemy, true);
	}
	
	// draw a player object
	function drawPlayer(player){
		player.imageSrc = '../imgs/player-markers/ShipPlayer' + player.order + '.png';
		player.sideText = null;
		drawObject(player, false);
	}
	
	// draw a structure object
	function drawStructure(structure){
		structure.imageSrc = '../imgs/structures/Structure' + structure.structureType + '.png';
		structure.sideText = null;
		drawObject(structure, false);
	}
	
	// method to draw the selected map
	function drawMap(){
		// define variables
		var
			map = Number(document.getElementById('mapList').value),
			rewardList = document.getElementById('rewardList').getElementsByTagName('ul').item(0),
			mapIcon = document.getElementById('mapIcon'),
			objectCount = maps[map].objects.length,
			i
		;
		// clear everything
		kill(document.getElementById('map').childNodes);
		kill(rewardList.childNodes);
		// show instance icon if available
		if (maps[map].instanceLevel !== undefined){
			mapIcon.style.display = 'inline';
			mapIcon.src = '../imgs/instance-icons/Instance' + maps[map].instanceLevel + '.png';
		}
		else {
			mapIcon.style.display = 'none';
		}
		// list blueprints available from map
		if (maps[map].instanceLevel !== undefined){
			i = items.length;
			while (i--){
				if (items.hasOwnProperty(i) === false){
					continue;
				}
				if (items[i].newBoxLevel === undefined || items[i].newBoxLevel !== maps[map].instanceLevel) continue;
				rewardList.appendChild(createElement('li', { 
					image: '../imgs/items/' + items[i].imageFileName + '.jpg',
					text: items[i].name
				}));
			}
		}
		// list rewards for restricted instances
		else if (maps[map].challengeBox !== undefined){
			var data, j;
			i = items.length;
			while (i--){
				if (items[i] === undefined || items[i].challengeBox === undefined){
					continue;
				}
				data = String.prototype.split.call(items[i].challengeBox, ';'),
				j = data.length
				while (j--){
					if (data[j] != maps[map].challengeBox){
						continue;
					}
					rewardList.appendChild(createElement('li', { 
						image: '../imgs/items/' + items[i].imageFileName + '.jpg',
						text: items[i].name
					}));
					break;
				}
			}
			document.getElementById('rewardList').style.display = 'block';
		}
		// manually specified rewards
		else if (maps[map].rewards !== undefined){
			i = maps[map].rewards.length;
			while (i--){
				rewardList.appendChild(createElement('li', { 
					image: '../imgs/items/' + items[maps[map].rewards[i]].imageFileName + '.jpg',
					text: items[maps[map].rewards[i]].name
				}));
			}
			document.getElementById('rewardList').style.display = 'block';
		}
		// hide reward list altogether
		else {
			document.getElementById('rewardList').style.display = 'none';
		}
		// generate random positions
		if (
			maps[map].positioning === POSITION_RANDOM_CONFINED ||
			maps[map].positioning === POSITION_RANDOM
		){
			for (i = 0; i < objectCount; i++){
				maps[map].objects[i].x = -1;
				maps[map].objects[i].y = -1;
			}
			maps[map] = randomizePositions(maps[map]);
		}
		// draw objects
		for (i = 0; i < objectCount; i++){
			switch (maps[map].objects[i].type){
				case OBJECT_ENEMY: drawEnemy(maps[map].objects[i]); break;
				case OBJECT_PLAYER: drawPlayer(maps[map].objects[i]); break;
				case OBJECT_STRUCTURE: drawStructure(maps[map].objects[i]); break;
			}
		}
		// remember last view map
		params.set('lastMapViewed', map);
	}
	
	// randomize fleet positions
	function randomizePositions(map){
		var
			l = map.objects.length,
			i, j, o
		;
		for (i = 0; i < l; i++){
			do {
				// random position
				switch (map.positioning){
					case POSITION_RANDOM:
						map.objects[i].x = Math.floor(Math.random() * 25);
						map.objects[i].y = Math.floor(Math.random() * 25);
					break;
					case POSITION_RANDOM_CONFINED:
						map.objects[i].x = Math.floor(Math.random() * 6) + 10;
						map.objects[i].y = Math.floor(Math.random() * 6) + 10;
					break;
				}
				// check for overlaps
				o = false;
				for (j = 0; j < l; j++){
					// don't compare to self
					if (i === j){
						continue;
					}
					if (
						map.objects[i].x === map.objects[j].x &&
						map.objects[i].y === map.objects[j].y
					){
						o = true;
					}
				}
			} while (o === true);
		}
		return map;
	}

	// populate the map list
	function populateMapList(selectedMap){
		// define variables
		var
			mapList = document.getElementById('mapList'),
			categoryCount = mapCategories.length,
			mapCount,
			i, j,
			optgroup, option
		;
		// remove anything already in the map list
		kill(mapList.childNodes);
		// populate list
		for (i = 0; i < categoryCount; i++){
			optgroup = createElement('optgroup', { label: mapCategoryName[i] });
			mapCount = mapCategories[i].length;
			for (j = 0; j < mapCount; j++){
				// check for a map name
				if (maps[mapCategories[i][j]] === undefined){
					continue;
				}
				// add map to the list
				optgroup.appendChild(createElement('option', {
					value: mapCategories[i][j],
					text: maps[mapCategories[i][j]].name,
					selected: selectedMap === mapCategories[i][j] ? true : false
				}));
			}
			mapList.appendChild(optgroup);
		}
	}
	
	// create the inspector object
	var inspector = (function(){
		// object params
		var object = {};
		object.offset = 20;
		object.persistant = false;
		object.mode = null;
		object.panel = null;
		object.mouse = { x: 0, y: 0 };
		// initiate
		object.init = function(){
			this.element = document.getElementById('inspector');
			this.closeButton = document.getElementById('closeInspector');
			this.draggable = new Draggable(this.element);
			window.addEventListener('mousemove', makeHandler(function(event){
				this.mouse.x = event.pageX;
				this.mouse.y = event.pageY;
				if (this.persistant === true){
					return;
				}
				this.move(event.pageX, event.pageY);
			}, this), false);
		}
		// move the inspector
		object.move = function(x, y){
			if (bWindow.height() / 2 < y - bWindow.scrollTop()){
				y -= this.element.offsetHeight + this.offset;
			}
			else {
				y += this.offset;
			}
			x -= this.element.offsetWidth / 2;
			this.draggable.move(x, y);
		}
		// close the inspector
		object.close = function(force){
			if (this.persistant === true && force !== true){
				return;
			}
			this.closeButton.style.display = 'none';
			this.persistant = false;
			this.draggable.hide();
			this.opened = false;
		}
		// open the inspector
		object.open = function(persistant){
			if (persistant !== undefined){
				this.persistant = persistant;
			}
			if (this.persistant === true){
				this.closeButton.style.display = 'inline';
			}
			this.draggable.show();
			this.move(this.mouse.x, this.mouse.y);
		}
		// change the details panel
		object.setPanel = function(panel){
			if (this.panel !== null){
				if (this.panel === panel){
					return;
				}
				this.element.classList.remove(this.panel);
			}
			this.panel = panel;
			this.element.classList.add(panel);
		}
		// change inspector mode
		object.setMode = function(mode){
			if (this.mode !== null){
				if (this.mode === mode){
					return;
				}
				this.element.classList.remove(this.mode);
			}
			this.mode = mode;
			this.element.classList.add(mode);
		}
		return object;
	})();
	
	// stop things from happening
	function doNothing(event){
		event.stopPropagation();
		event.preventDefault();
	}
	
	// get a link to the current map
	function getInstanceLink(){
		var mapSelector = document.getElementById('mapList');
		prompt('Copy the following link:', '/inst/?map=' + mapSelector.value);
	}
	
	// toggle the reward list
	function toggleRewardList(){
		if (this.parentNode.className === 'expanded'){
			params.set('rewardListState', 0);
			this.parentNode.className = 'collapsed';
		}
		else {
			params.set('rewardListState', 1);
			this.parentNode.className = 'expanded';
		}
	}
	
	// initialise the application
	window.addEventListener('load', function(){
		
		// attach listeners
		document.getElementById('closeInspector').addEventListener('click', function(){inspector.close(true);}, false);
		document.getElementById('closeInspector').addEventListener('mousedown', doNothing, false);
		document.getElementById('mapList').addEventListener('change', drawMap, false);
		document.getElementById('mapLoader').addEventListener('click', drawMap, false);
		document.getElementById('mapLinker').addEventListener('click', getInstanceLink, false);
		document.getElementById('rewardListClose').addEventListener('click', toggleRewardList, false);
		document.getElementById('rewardListShow').addEventListener('click', toggleRewardList, false);
		
		// load initial reward list state
		if (params.get('rewardListState') != -1){
			document.getElementById('rewardList').className = params.get('rewardListState') ? 'expanded' : 'collapsed';
		}
		
		// initiate the inspector
		inspector.init();
		
		// check url for specified map
		var query = getQuery();
		if (query.map === undefined || query.map != (query.map = Number(query.map)) || maps[query.map] === undefined){
			// load the last map viewed
			if (params.get('lastMapViewed') != -1){
				query.map = params.get('lastMapViewed');
			}
			// load the first map
			else {
				query.map = INSTANCE_1;
			}
		}
		
		// populate the map list
		populateMapList(query.map);
		
		// draw the selected map
		drawMap();
		
		// change out of loading mode
		changeMode('instances');
		
	}, false);
	
})();
