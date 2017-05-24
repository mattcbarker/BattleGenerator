//sets the Appl

var weapon = {name:"", damage: "abunch", type:"", cost:"", weight:"", properties:""};
var template = {};
var enemyTemplate ={};
var friendliesTemplate ={};

var app = angular.module('dndSheet', ["ngStorage"]);

app.controller('sheetC', ["$scope", "$filter",'$window', '$parse', '$sce', '$localStorage', function($scope, $filter, $window, $parse, $sce, $localStorage){

//Tab Modifiers
	$scope.tab = 0;
	$scope.tabMod = function(mod){
		$scope.tab = mod;
	};

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



	$scope.tempTools =	{};
	$scope.addToolProf = function(toolProf) {
		$scope.template.Proficiencies.tools.push(toolProf);
	};



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
		maxhp: 10,
		charLevel:0,
		race:"" ,
		alignment:"",
		exp:0,
		stats: {
			ac:10,
			init:0,
			speed:30,
			strength:10,
			dex:10,
			con:10,
			intel:10,
			wisdom:10,
			charisma:10,
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
		mainWeapon: {},
		damage:{},
		Proficiencies: {
			languages:[],
			weaponProf:[],
			armor:[],
			tools:[],
		},
		armor: {},
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

	$scope.rollForInitive = function() {
		for(var i=0; i<	$scope.redTeam.length; i++){
			var init = Math.floor(Math.random()*(20 - 1)) + 1;
			$scope.redTeam[i].stats.init = init;
			$localStorage.redTeam[i].stats.init = init;
			console.log($scope.redTeam[i].stats.init);
		}
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


/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////

	//Nav Vars
	$scope.selected = {};
	$scope.selectedIndex;
	$scope.library;
	$scope.quickBuildInt = false;
	$scope.view = 0;

	//Quick Build Values
	$scope.armorBonus=0;
	$scope.weaponBonus=0;


	//Team Related Values
	$scope.blueTeam = [];
	$scope.redTeam = [];
	$scope.team = "";

	//Damage Values
	$scope.damage ={
		value: 0,
		bHurt: true,
	}

	//Begin Functions
	$scope.init = function(){
		//using this one
		if($localStorage.pcs === undefined){
			$localStorage.pcs = [];
			console.log("pcs defined");
		}
		if($localStorage.redTeam === undefined){
			$localStorage.redTeam = [];
			console.log("redTeam defined");
		}
		if($localStorage.blueTeam === undefined){
			$localStorage.blueTeam = [];
			console.log("blueTeam defined");
		}

		template = $scope.template;
		$scope.library = library;
		$scope.loadPCs();
	}

	$scope.log = function(input){
		console.log	(input);
	}

//Selection from Our Library of PCs
	$scope.select = function(i){
		$scope.selected = $localStorage.pcs[i];
		$scope.selectedIndex = i;
	}

	$scope.addToPC = function(){
		$scope.template.maxhp=$scope.template.hp;
		$localStorage.pcs.push($scope.template);

	};
	
	$scope.RemoveThisPC = function(char){
		var bIndex = $scope.blueTeam.indexOf(char);
		var rIndex = $scope.redTeam.indexOf(char);
		if(bIndex >= 0){
			$scope.blueTeam.splice(bIndex, 1);
		}
		if(rIndex >= 0){
			$scope.redTeam.splice(rIndex, 1);
		}

	}


	$scope.quickBuild = function(){
			console.log($scope.quickBuildInt);
		if($scope.quickBuildInt == true){
			$scope.quickBuildInt = false;
		}
		else{
			$scope.quickBuildInt = true;

		}
	}

	$scope.toggleView = function(index){
		$scope.view = index;
		if(index == 1){
			//this is the battle tab. Refresh it
			$scope.blueTeam = $localStorage.blueTeam;
			$scope.redTeam = $localStorage.redTeam;
			console.log("Refreshed Teams")
		}
	}



////////////////////////////////


	$scope.calcAC= function(a){
		var parsedArmor = JSON.parse(a);
		var parseBonus = JSON.parse($scope.armorBonus);
		var newAC= parsedArmor.ac + parseBonus;
		if(parsedArmor.mod == "dex"){
			if(parsedArmor.notes == "(max 2)"){
				//console.log("only add 2 dex");
			}
			//console.log("Add all dex");
		}
		$scope.template.stats.ac = newAC;
	};

	$scope.calcAttackRoll= function(w){
		var parsedWeapon = JSON.parse(w);
		//var parseBonus = JSON.parse($scope.weaponBonus);
		//var newAC= parsedArmor.ac + parseBonus;
		var newWDamage = parsedWeapon.damage +" + "+$scope.weaponBonus;
		//if(parsedArmor.mod == "dex"){
		//	if(parsedArmor.notes == "(max 2)"){
				//console.log("only add 2 dex");
			//}
			//console.log("Add all dex");
		//}
		$scope.template.damage = newWDamage;
	};

	$scope.damageCharacter = function(char){
		if($scope.damage.bHurt == true){
			char.hp = char.hp - $scope.damage.value;
			console.log(char);
		}
		//call a function to mod the CSS
	}

	$scope.addToBattle = function(){
		var char = $localStorage.pcs[$scope.selectedIndex];
		if($scope.team == "Red Team"){
			$localStorage.redTeam.push(char);
			$scope.toggleView(1);
		}
		if($scope.team == "Blue Team"){
			$localStorage.blueTeam.push(char);
			$scope.toggleView(1);
		}
	}



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

app.directive("charLibrary", function() {
	return{
		restrict:'E',
		templateUrl:"snips/charLibrary.html"
	};
});

app.directive("battle", function() {
	return{
		restrict:'E',
		templateUrl:"snips/battle.html"
	};
});
