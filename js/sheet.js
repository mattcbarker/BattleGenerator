//sets the Appl

var weapon = {name:"", damage: "abunch", type:"", cost:"", weight:"", properties:""};
var template = {};
var enemyTemplate ={};
var friendliesTemplate ={};

var app = angular.module('dndSheet', ["ngStorage"]);

app.controller('sheetC', ["$scope", "$filter",'$window', '$parse', '$sce', '$localStorage', function($scope, $filter, $window, $parse, $sce, $localStorage){

	$scope.tab = 0;

	$scope.tabMod = function(mod){
		$scope.tab = mod;
	};

	$scope.modifiers = [
		{score:1, mod:"neg5"},
		{score:2, mod:"neg4"},
		{score:3, mod:"neg4"},
		{score:4, mod:"neg3"},
		{score:5, mod:"neg3"},
		{score:6, mod:"neg2"},
		{score:7, mod:"neg2"},
		{score:8, mod:"neg1"},
		{score:9, mod:"neg1"},
		{score:10, mod:"plus0"},
		{score:11, mod:"plus0"},
		{score:12, mod:"plus1"},
		{score:13, mod:"plus1"},
		{score:14, mod:"plus2"},
		{score:15, mod:"plus2"},
		{score:16, mod:"plus3"},
		{score:17, mod:"plus3"},
		{score:18, mod:"plus4"},
		{score:19, mod:"plus4"},
		{score:20, mod:"plus5"},
		{score:21, mod:"plus5"},
		{score:22, mod:"plus6"},
		{score:23, mod:"plus6"},
		{score:24, mod:"plus7"},
		{score:25, mod:"plus7"},
		{score:26, mod:"plus8"},
		{score:27, mod:"plus8"},
		{score:28, mod:"plus9"},
		{score:29, mod:"plus9"},
		{score:30, mod:"plus10"},
	];

	//weapons Functionality
	$scope.weaponArmory = [];
	$scope.myWeapon = {name:"", damage: "abunch", type:"", cost:"", weight:"", properties:""};
	$scope.setWeaponType = function(w){
		for ( var i = 0; i < $scope.weaponType.length; i++){
			if ( w == $scope.weaponType[i].weapon){
					$scope.myWeapon.damage = $scope.weaponType[i].damage;
					$scope.myWeapon.type = $scope.weaponType[i].weapon;
					$scope.myWeapon.cost = $scope.weaponType[i].cost;
					$scope.myWeapon.weight = $scope.weaponType[i].weight;
					$scope.myWeapon.properties = $scope.weaponType[i].properties;
			}
		}
	};
	$scope.weaponType = [
		{weapon:"Club",cost:"01 sp",damage:"1d4 bludgeoning", weight:"2 lb.", properties: "Light"},
		{weapon:"Dagger",cost:"02 gp",damage:"1d4 piercing", weight:"1 lb.", properties: "Finesse, light, thrown (range 20/60)"},
		{weapon:"Greatclub",cost:"02 sp",damage:"1d8 bludgeoning", weight:"10 lb.", properties: "Two-handed"},
		{weapon:"Handaxe",cost:"05 gp",damage:"1d6 slashing", weight:"2 lb.", properties: "Light, thrown (range 20/60)"},
		{weapon:"Javelin",cost:"05 sp",damage:"1d6 piercing", weight:"2 lb.", properties: "Thrown (range 30/120)"},
		{weapon:"Light Hammer",cost:"02 sp",damage:"1d4 bludgeoning", weight:"2 lb.", properties: "Light, thrown (range 20/60)"},
		{weapon:"Mace",cost:"05 gp",damage:"1d6 bludgeoning", weight:"4 lb.", properties: "—"},
		{weapon:"Quarterstaff",cost:"02 sp",damage:"1d6 bludgeoning", weight:"4 lb.", properties: "Versatile (1d8)"},
		{weapon:"Sickle",cost:"01 gp",damage:"1d4 slashing", weight:"2 lb.", properties: "Light"},
		{weapon:"Spear",cost:"01 gp",damage:"1d6 piercing", weight:"3 lb.", properties: "Thrown (range 20/60), versatile (1d8)"},
		{weapon:"Crossbow, Light",cost:"25 gp",damage:"1d8 piercing", weight:"5 lb.", properties: "Ammunition (range 80/320), loading, two-handed"},
		{weapon:"Dart",cost:"05 cp",damage:"1d4 piercing", weight:"¼ lb.", properties: "Finesse, thrown (range 20/60)"},
		{weapon:"Shortbow",cost:"25 gp",damage:"1d6 piercing", weight:"2 lb.", properties: "Ammunition (range 80/320), two-handed"},
		{weapon:"Slings",cost:"01 sp",damage:"1d4 bludgeoning", weight:"—",properties: "Ammunition (range 30/120)"},
		{weapon:"Battleaxe",cost:"10 gp",damage:"1d8 slashing", weight:"4 lb.", properties: "Versatile (1d10)"},
		{weapon:"Flail",cost:"10 gp",damage:"1d8 bludgeoning", weight:"2 lb.", properties: "—"},
		{weapon:"Glaive",cost:"20 gp",damage:"1d10 slashing", weight:"6 lb.", properties: "Heavy, reach, two-handed"},
		{weapon:"Greataxe",cost:"30 gp",damage:"1d12 slashing", weight:"7 lb.", properties: "Heavy, two-handed"},
		{weapon:"Greatsword",cost:"50 gp",damage:"2d6 slashing", weight:"6 lb.", properties: "Heavy, two-handed"},
		{weapon:"Halberd",cost:"20 gp",damage:"1d10 slashing", weight:"6 lb.", properties: "Heavy, reach, two-handed"},
		{weapon:"Lance",cost:"10 gp",damage:"1d12 piercing", weight:"6 lb.", properties: "Reach, special"},
		{weapon:"Longsword",cost:"15 gp",damage:"1d8 slashing", weight:"3 lb.", properties: "Versatile (1d10)"},
		{weapon:"Maul",cost:"10 gp",damage:"2d6 bludgeoning", weight:"10 lb.", properties: "Heavy, two-handed"},
		{weapon:"Morningstar",cost:"15 gp",damage:"1d8 piercing", weight:"4 lb.", properties: "—"},
		{weapon:"Pike",cost:"05 gp",damage:"1d10 piercing", weight:"18 lb.", properties: "Heavy, reach, two-handed"},
		{weapon:"Rapier",cost:"25 gp",damage:"1d8 piercing", weight:"2 lb.", properties: "Finesse"},
		{weapon:"Scimitar",cost:"25 gp",damage:"1d6 slashing", weight:"3 lb.", properties: "Finesse, light"},
		{weapon:"Shortsword",cost:"10 gp",damage:"1d6 piercing", weight:"2 lb.", properties: "Finesse, light"},
		{weapon:"Trident",cost:"05 gp",damage:"1d6 piercing", weight:"4 lb.", properties: "Thrown (range 20/60), versatile (1d8)"},
		{weapon:"War Pick",cost:"05 gp",damage:"1d8 piercing", weight:"2 lb.", properties: "—"},
		{weapon:"Warhammer",cost:"15 gp",damage:"1d8 bludgeoning", weight:"2 lb.", properties: "Versatile (1d10)"},
		{weapon:"Whip",cost:"02 gp",damage:"1d4 slashing", weight:"3 lb.", properties: "Finesse, reach"},
		{weapon:"Blowgun",cost:"10 gp",damage:"1 piercing", weight:"1 lb.", properties: "Ammunition (range 25/100), loading"},
		{weapon:"Crossbow, Hand",cost:"75 gp",damage:"1d6 piercing", weight:"3 lb.", properties: "Ammunition (range 30/120), light, loading"},
		{weapon:"Crossbow, Heavy",cost:"50 gp",damage:"1d10 piercing", weight:"18 lb.", properties: "Ammunition (range 100/400), heavy, loading, two-handed"},
		{weapon:"Longbow",cost:"50 gp",damage:"1d8 piercing", weight:"2 lb.", properties: "Ammunition (range 150/600), heavy, two-handed"},
		{weapon:"Net",cost:"01 gp",damage:"—",weight:"3 lb.", properties: "Special, thrown (range 5 to 15)",},
	];

	$scope.addWeapon = function(){
		weapon = $scope.myWeapon;
		$scope.template.weapons.push(weapon);
		$scope.weaponArmory.push(weapon);
		$scope.myWeapon = {};
	};

//Proficiencies
	$scope.tempLang = {};
	$scope.tempWepProf = {};
	$scope.addLanguage = function(language) {
		$scope.template.Proficiencies.languages.push(language);
	};
	$scope.addWeaponProf = function(weaponProf) {
		$scope.template.Proficiencies.weaponProf.push(weaponProf);
	};

	///armor

	$scope.armorBonus = false;
	$scope.tempArmor = {};
	$scope.tempItemArmor = {};
	$scope.armorArmory = [];

	$scope.addArmorProf = function(armorProf) {
		$scope.template.Proficiencies.armor.push(armorProf);
	};
	$scope.addArmor = function(){
		$scope.template.armor.push($scope.tempItemArmor);
		$scope.armorArmory.push($scope.tempItemArmor);
		$scope.tempItemArmor = {};
	};
	$scope.armor = [
		{armor:"Padded", ac:"11  dexMod", type:"light, stealth disadvantage"},
		{armor:"Leather", ac:"11  dexMod", type:"light"},
		{armor:"Studded leather", ac:"12  dexMod", type:"light"},
		{armor:"Hide", ac:"12  dexMod" +"(max 2)", type:"medium"},
		{armor:"Chain shirt", ac:"13  dexMod"+"(max 2)", type:"medium"},
		{armor:"Scale mail", ac:"14  dexMod"+"(max 2)", type:"medium, stealth disadvantage"},
		{armor:"Breastplate", ac:"14  dexMod"+"(max 2)", type:"medium"},
		{armor:"Half plate", ac:"15  dexMod"+"(max 2)", type:"medium, stealth disadvantage"},
		{armor:"Ring mail", ac:"14", type:"heavy, stealth disadvantage"},
		{armor:"Chain mail", ac:"16", type:"heavy, stealth disadvantage, Str 13"},
		{armor:"Splint", ac:"17", type:"heavy, stealth disadvantage, Str 15"},
		{armor:"Plate", ac:"18", type:"heavy, stealth disadvantage, Str 15"},
		{armor:"Shield", ac:"+2", type:"modifies Base AC"},
	];


	$scope.tempTools =	{};
	$scope.addToolProf = function(toolProf) {
		$scope.template.Proficiencies.tools.push(toolProf);
	};
	$scope.tools =[
		{tool:"Artisans tools", cost:"", weight:"",},
		{tool:"Alchemists supplies",cost:"50 gp",weight:"8 lb.",},
		{tool:"Brewers supplies",cost:"20 gp",weight:"9 lb.",},
		{tool:"Calligraphers supplies",cost:"10 gp",weight:"5 lb.",},
		{tool:"Carpenters tools",cost:"8 gp",weight:"6 lb.",},
		{tool:"Cartographers tools",cost:"15 gp.",weight:"6 lb.",},
		{tool:"Cobblers tools",cost:"5 gp",weight:"5 lb.",},
		{tool:"Cooks utensils",cost:"1 gp",weight:"8 lb.",},
		{tool:"Glassblowers tools",cost:"30 gp",weight:"5 lb.",},
		{tool:"Jewelers tools",cost:"25 gp",weight:"2 lb.",},
		{tool:"Leatherworkers tools",cost:"5 gp",weight:"5 lb.",},
		{tool:"Masons tools",cost:"10 gp",weight:"8 lb.",},
		{tool:"Painters supplies",cost:"10 gp",weight:"5 lb.",},
		{tool:"Potters tools",cost:"10 gp",weight:"3 lb.",},
		{tool:"Smiths tools",cost:"20 gp",weight:"8 lb.",},
		{tool:"Tinkers tools",cost:"50 gp",weight:"10 lb.",},
		{tool:"Weavers tools",cost:"1 gp",weight:"5 lb.",},
		{tool:"Woodcarvers tools",cost:"1 gp",weight:"5 lb.",},
		{tool:"Disguise kit",cost:"25 gp",weight:"3 lb.",},
		{tool:"Forgery kit",cost:"15 gp",weight:"5 lb.",},
		{tool:"Gaming set",cost:"n/a",weight:"n/a",},
		{tool:"Dice set",cost:"1 sp",weight:"—",},
		{tool:"Dragonchess set",cost:"1 gp",weight:"1/2 lb.",},
		{tool:"Playing card set",cost:"5 sp",weight:"—",},
		{tool:"Three-Dragon Ante set",cost:"1 gp",weight:"—",},
		{tool:"Herbalism kit",cost:"5 gp",weight:"3 lb.",},
		{tool:"Musical instrument",cost:"n/a",weight:"n/a",},
		{tool:"Bagpipes",cost:"30 gp",weight:"6 lb.",},
		{tool:"Drum",cost:"6 gp",weight:"3 lb.",},
		{tool:"Dulcimer",cost:"25 gp",weight:"10 lb.",},
		{tool:"Flute",cost:"2 gp",weight:"1 lb.",},
		{tool:"Lute",cost:"35 gp",weight:"2 lb.",},
		{tool:"Lyre",cost:"30 gp",weight:"2 lb.",},
		{tool:"Horn",cost:"3 gp",weight:"2 lb.",},
		{tool:"Pan flute",cost:"12 gp",weight:"2 lb.",},
		{tool:"Shawm",cost:"2 gp",weight:"1 lb.",},
		{tool:"Viol",cost:"30 gp",weight:"1 lb.",},
		{tool:"Navigators tools",cost:"25 gp",weight:"2 lb.",},
		{tool:"Poisoners kit",cost:"50 gp",weight:"2 lb.",},
		{tool:"Thieves tools",cost:"25 gp",weight:"1 lb.",},
		{tool:"Vehicles (land or water)",cost:"n/a",weight:"n/a",},
	];


	$scope.tempInventory = {};
	$scope.inventoryArmory = [];
	$scope.addInventory = function(){
		$scope.template.inventory.push($scope.tempInventory);
	};

	$scope.tempFeat= {};
	$scope.featLibrary = [];
	$scope.addFeat = function(){
		$scope.template.featsAndTraits.push($scope.tempFeat);
		$scope.featLibrary.push($scope.tempFeat);
		$scope.tempFeat = {};
	};

	$scope.tempSpell= {};
	$scope.spellLibrary = [];
	$scope.addSpell = function(){
		var level = $scope.tempSpell.level;
		if (level == "cantrip"){
				$scope.template.cantrip.push($scope.tempSpell);
		}
		if (level == 1){
				$scope.template.level_1.push($scope.tempSpell);
		}
		if (level = "cantrip"){
				$scope.template.cantrip.push($scope.tempSpell);
		}
		if (level = "cantrip"){
				$scope.template.cantrip.push($scope.tempSpell);
		}
		if (level = "cantrip"){
				$scope.template.cantrip.push($scope.tempSpell);
		}
		if (level = "cantrip"){
				$scope.template.cantrip.push($scope.tempSpell);
		}
		if (level = "cantrip"){
				$scope.template.cantrip.push($scope.tempSpell);
		}
		if (level = "cantrip"){
				$scope.template.cantrip.push($scope.tempSpell);
		}
		if (level = "cantrip"){
				$scope.template.cantrip.push($scope.tempSpell);
		}
		if (level = "cantrip"){
				$scope.template.cantrip.push($scope.tempSpell);
		}








		$scope.spellLibrary.push($scope.tempSpell);
		$scope.tempSpell = {};
	};

	$scope.addToPC = function(){
		$localStorage.pcs.push($scope.template);
		console.log($localStorage.pcs);
		$scope.tabMod(9);
	};

	$scope.addToNPC = function(){
		$localStorage.npcs.push($scope.template);
		console.log($localStorage.npcs);
		$scope.tabMod(9);
	};

	$scope.activePCs = [];
	$scope.loadPCs = function(){
		$scope.activePCs = $localStorage.pcs;
	};

	$scope.deleteLocal = function(){
		$localStorage.pcs = [];
	}

	$scope.deleteThis= function(index) {
		//console.log(index);
		//$scope.activePCs.splice(index, 1)
		$localStorage.pcs.splice(index, 1);
	};

	$scope.selectedChar = {};
	$scope.selectChar = function(char) {
		$scope.selectedChar = char;
		$scope.template = char;
	};

	$scope.saveChar = function(){
		$scope.selectedChar = 	$scope.template;
	};

	$scope.duplicateChar = function(){
		$localStorage.pcs.push($scope.selectedChar);
		$scope.selectedChar = {};
	};

	$scope.addNewChar = function(){
		$localStorage.pcs.push(template);
	}

//NPC Template
	$scope.template = {
		characerName:"",
		charClass:[],
		hp: 10,
		charLevel:0,
		race:"" ,
		alignment:"",
		exp:0,
		stats: {
			ac:10,
			init:0,
			speed:30,
			strength:10,
			strMod:0,
			dex:10,
			dexMod:0,
			con:10,
			conMod:0,
			intel:10,
			intMod:0,
			wisdom:10,
			wisdomMod:0,
			charisma:10,
			chaMod:0,
			passiveWis:10,
		},
		savingThrows:{
			str:0,
			dex:0,
			con:0,
			intel:0,
			wis:0,
			cha:0,
		},
		skills:{
			acrobatics:0,
			animalHandling:0,
			arcana:0,
			athletics:0,
			deception:0,
			history:0,
			insight:0,
			intimidation:0,
			investigation:0,
			medicine:0,
			Nature:0,
			Perception:0,
			Perf:0,
			Persuasion:0,
			religion:0,
			sleightofhand:0,
			stealth:0,
			survival:0,
		},
		weapons:[],
		Proficiencies: {
			languages:[],
			weaponProf:[],
			armor:[],
			tools:[],
		},
		armor: [],
		inventory: [],
		featsAndTraits:[],
		casterInfo:{
			statAbility:[], //cha
			spellSaveDC:0, //14
			spellATKbonus:0, //+6
		},
		spells:{
			cantrips:[],
			level_1:[],
			level_2:[],
			level_3:[],
			level_4:[],
			level_5:[],
			level_6:[],
			level_7:[],
			level_8:[],
			level_9:[],
		},
	};

	$scope.featTemplate = {
		 featName : "",
		 featTXT : "",
		 featRef : "",
	};

	$scope.spellTemplate = {
		 spellName:"",
		 spellTXT:"",
		 spellRef:"",
	};

	$scope.equipTemplate = {
		 equipName:"",
		 equipTXT:"",
		 equipRef:"",
	};

	$scope.classes = [
		"Barbarian",
		"Bard",
		"Cleric",
		"Druid",
		"Fighter",
		"Monk",
		"Paladin",
		"Ranger",
		"Rogue",
		"Sorcerer",
		"Warlock",
		"Wizard",
	];

	$scope.races = [
		"Dwarf",
		"Elf",
		"Halfling",
		"Human",
		"Dragonborn",
		"Gnome",
		"Half-Elf",
		"Half-Orc",
		"Tiefling",
	];

	$scope.alignment = [
		"Lawful Good",
		"Lawful Neutral",
		"Lawful Evil",
		"Neutral Good",
		"True Neutral",
		"Neutral Evil",
		"Chaotic Good",
		"Chaotic Neutral",
		"Chaotic Evil",
	];

	$scope.languages =[
		{language:"Abyssal", speakers:"Demons, chaotic evil outsiders", script:"Infernal"},
		{language:"Aquan", speakers:"Water-based creatures", script:"Elven"},
		{language:"Auran", speakers:"Air-based creatures", script:"Draconic"},
		{language:"Celestial", speakers:"Celestials (angels, devas)", script:"Celestial"},
		{language:"Common", speakers:"Humans, halflings, half-elves, half-orcs", script:"Common"},
		{language:"Deep Speech", speakers:"Mind flayers, beholders", script:"-"},
		{language:"Draconic", speakers:"Kobolds, troglodytes, lizardfolk, dragons, dragonborn", script:"Draconic"},
		{language:"Druidic", speakers:"Druids (only)", script:"Druidic"},
		{language:"Dwarvish", speakers:"Dwarves", script:"Dwarvish"},
		{language:"Elvish", speakers:"Elves", script:"Elvish"},
		{language:"Giant", speakers:"Ogres, giants", script:"Dwarvish"},
		{language:"Gnomish", speakers:"Gnomes", script:"Dwarvish"},
		{language:"Goblin", speakers:"Goblinoids, hobgoblins, bugbears", script:"Dwarvish"},
		{language:"Gnoll", speakers:"Gnolls", script:"Common"},
		{language:"Halfling", speakers:"Halflings", script:"Common"},
		{language:"Ignan", speakers:"Fire-based creatures", script:"Draconic"},
		{language:"Infernal", speakers:"Devils, Tieflings", script:"Infernal"},
		{language:"Orc", speakers:"Orcs", script:"Dwarvish"},
		{language:"Primordial", speakers:"Elementals", script:"Dwarvish"},
		{language:"Sylvan", speakers:"Fey creatures (dryads, brownies, leprechauns)", script:"Elvish"},
		{language:"Terran", speakers:"Xorns and other earth-based creatures", script:"Dwarven"},
		{language:"Undercommon", speakers:"Drow, Underdark traders", script:"Elvish"},
	];


///battle table
	$scope.battleTableActive = false;
	$scope.toggleBattleTable = function(){
		if($scope.battleTableActive == false){
			$scope.battleTableActive = true;
			console.log($scope.battleTableActive);
		};

	};
	$scope.friendlies = [];
	$scope.enemies = [];
	$scope.initive =[];
	$scope.numberToAdd = 0;
	$scope.numberToAddEnemy = 0;

	$scope.quickResolveTemplate = {
		hp:10,
		ac:10,
		atk: {num:1,sidedDice:6,mod:4},
		initBonus:0,
		init:0,
		team:"",
	};

	$scope.quickResolveEnemyTemplate = {
		hp:10,
		ac:10,
		atk: {num:1,sidedDice:6,mod:4},
		initBonus:0,
		init:0,
		team:"",
	};

	$scope.dice = function(num,sidedDice, mod){
		var finalNumber = 0;
		for(var i=0; i < num ; i++ ){
			var numberOnTheDie = Math.floor(Math.random()*(sidedDice - 1)) + 1;
			finalNumber = finalNumber + numberOnTheDie;
		};
		finalNumber= finalNumber+mod;
		console.log(finalNumber+":  "+num+"d"+sidedDice+" + "+mod);
		return finalNumber;
	};



	$scope.populate = function(list, template, howmany){
		for(i=0; i< howmany; i++){
			list.push(template);

			if(list == $scope.friendlies){
				$localStorage.battle.friendlies = $localStorage.friendlies.push(template)
				//console.log($localStorage.friendlies+ "local'd");
			}
			if(list == $scope.enemies){
				$localStorage.battle.enemies = $localStorage.enemies.push(template);
				//console.log($localStorage.enemies+ "local'd");
			}
		}
	}

	$scope.rollForInitive = function() {
		for(var i=0; i<$scope.friendlies.length; i++){
			var init = Math.floor(Math.random()*(20 - 1)) + 1;
			$scope.friendlies[i].init = init;
			$scope.friendlies[i].team = "blue";
		}
		for(var j=0; j<$scope.enemies.length; j++){
			var init = Math.floor(Math.random()*(20 - 1)) + 1;
			$scope.enemies[j].init = init;
			$scope.enemies[j].team = "red";
		}
	}
	$scope.initList =[];
	$scope.initOrder = function(){
		$scope.initList = $scope.initList.concat($scope.friendlies);
		$scope.initList = $scope.initList.concat($scope.enemies);
		console.log($scope.initList);
	};



	$scope.attackRound = function(){
		for(i=0; i< $scope.initList.length; i++){
			if($scope.initList[i].team == "blue"){
				var attack = $scope.initList[i].atk;
				var num = attack.num;
				var sidedDice = attack.sidedDice;
				var mod = attack.mod;
				var damage = $scope.dice(num,sidedDice, mod);
				console.log(damage);
				var enemyLength = 	$scope.enemies.length;
				var randomInt = Math.floor(Math.random()*(enemyLength - 1)) + 1;
				if($scope.enemies.length <=1 ){
					randomInt= 0;
				};

				if($scope.enemies[randomInt] !== 'undefined'){
					$scope.enemies[randomInt].hp = $scope.enemies[randomInt].hp - damage;
					if($scope.enemies[randomInt].hp <= 0){
						console.log("Enemy dead!");
						$scope.enemies.splice(randomInt,1);
					};
				}


			}
			if($scope.initList[i].team == "red"){
				var attack = $scope.initList[i].atk;
				var num = attack.num;
				var sidedDice = attack.sidedDice;
				var mod = attack.mod;
				var damage = $scope.dice(num,sidedDice, mod);
				console.log(damage);
				var friendlyLength =  $scope.friendlies.length;

				var randomInt = Math.floor(Math.random()*(friendlyLength - 1)) + 1;

				if($scope.enemies[randomInt] !== 'undefined'){
					$scope.friendlies[randomInt].hp = $scope.friendlies[randomInt].hp - damage;
					if($scope.friendlies[randomInt].hp <= 0){
						console.log("Ally dead!");
						$scope.friendlies.splice(randomInt,1);
					}
				}
			}
		}
		console.log("round over");
	}

	$scope.loadBattle = function(){
		$scope.friendlies = $localStorage.friendlies;
		$scope.enemies = $localStorage.enemies;
	};



	$scope.init = function(){
		if($localStorage.pcs === undefined){
			$localStorage.pcs = [];
			console.log("pcs defined");
		}
		if($localStorage.npcs === undefined){
			$localStorage.npcs = [];
			console.log("npcs defined");
		}
		if($localStorage.friendlies === undefined){
			$localStorage.friendlies = [];
			console.log("battle defined");
		}
		if($localStorage.enemies === undefined){
			$localStorage.enemies = [];
			console.log("battle defined");
		}

		template = $scope.template;
		$scope.loadPCs();
	}

	$scope.log = function(){
		console.log($localStorage.pcs);
	}

	$scope.newTest = function(i){
		console.log($localStorage.pcs[i].characerName);
		$scope.selected = $localStorage.pcs[i];
	}

	$scope.selected = {};

	$scope.init();
}]);


////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//directives
////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
app.directive("charSheet", function() {
	return{
		restrict:'E',
		templateUrl:"snips/charSheet.html"
	};
});

app.directive("json", function() {
	return{
		restrict:'E',
		templateUrl:"snips/json.html"
	};
});

app.directive("skills", function() {
	return{
		restrict:'E',
		templateUrl:"snips/Skills.html"
	};
});

app.directive("weaponsTab", function() {
	return{
		restrict:'E',
		templateUrl:"snips/weaponsTab.html"
	};
});

app.directive("proficiencies", function() {
	return{
		restrict:'E',
		templateUrl:"snips/proficiencies.html"
	};
});

app.directive("armorTab", function() {
	return{
		restrict:'E',
		templateUrl:"snips/armorTab.html"
	};
});

app.directive("equipment", function() {
	return{
		restrict:'E',
		templateUrl:"snips/equipment.html"
	};
});

app.directive("feats", function() {
	return{
		restrict:'E',
		templateUrl:"snips/featsAndTraits.html"
	};
});

app.directive("spells", function() {
	return{
		restrict:'E',
		templateUrl:"snips/spells.html"
	};
});

app.directive("pcList", function() {
	return{
		restrict:'E',
		templateUrl:"snips/pcList.html"
	};
});

app.directive("stats", function() {
	return{
		restrict:'E',
		templateUrl:"snips/stats.html"
	};
});

app.directive("battleTable", function() {
	return{
		restrict:'E',
		templateUrl:"snips/battleTable.html"
	};
});
