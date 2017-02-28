import { Template } from 'meteor/templating';

import './body.html';
import '/node_modules/dragula/dist/dragula.js';

if (Meteor.isClient) {
	
  Meteor.startup( function() {
    Session.set("view", "titleScreen");
  });
  
  Template.body.helpers({
    template_name: function () {
      return Session.get("view");
    }
  });
  
  Template.body.events({
    'click .changeScreen': function (e) {
      e.preventDefault();
	  var selectedView = Session.get('view');
	  if (selectedView == "titleScreen")
	  {
		  Session.set("view", "mainScreen");
	  }
	  else
	  {
		   Session.set("view", "titleScreen");
	  }
	  console.log(selectedView);
    }
  });
    Template.body.onRendered(function() {
 
      });
Template.mainScreen.onRendered(function () {
//drag and drop questions: could maybe be improved by finding out a way to put multiple element pairs in one dragula statement and using dynamic variable names
  //1
	var completed = 0;
	   dragula([document.getElementById('move1'), document.getElementById('goal1')])
	     .on('drop', function (el) {
		 var qArray1 = ["Borneo is the secnd largest island in the world, after Greenland.", 
		 "With an average temperature of 1.5 degrees celsius, Norway is the coldest nordic country.", 
		 "The name of Haiti is derived from Spanish word \"hay\", which means \"there\"."];
		 var answerPattern1 = [1, 0, 1]; //0 = TRUE 1 = FALSE
		 var prefix = "";
		 var aArray1 = ["The second largest island on earth is New Guinea, some 40,000 km<sup>2</sup> larger than Borneo.",
		 "The temperature is some two tenths lower than that of Iceland and Finland, making it the fourth coldest country overall.",
		 "Haiti comes from the native Taino language and it means \"land of the high mountains\"."];
		 questions1(0);
		 function questions1(questionNumber)
		 {
		 swal({
			title: "" + qArray1[questionNumber] + "<style>.alertType1 button {background-color: white; color: black; border: none; position: relative; box-shadow: none; text-align: center; height: 30px; width: 120px; font-size: 2.5em; font-weight: 600; -webkit-border-radius: 0px; border-radius: 0px; padding: 4px 35px; margin: 26px 5px 0 5px; cursor: pointer; }</style>",
			customClass: "alertType1",
			showCancelButton: true,
			cancelButtonText: "TRUE",
			confirmButtonText: "FALSE",
			confirmButtonColor: "white",
			closeOnConfirm: false,
			closeOnCancel: false,
			html: true
		}, function(isConfirm){
		if(isConfirm){//FALSE
		if (answerPattern1[questionNumber] == 1){prefix = "Correct!"}
		else {prefix = "Incorrect."}
		swal({
			title: "" + qArray1[questionNumber],
			text: "" + prefix + " " + aArray1[questionNumber],
			customClass: "innerAlertBox",
			showCancelButton: false,
			showConfirmButton: true,
			cancelButtonText: "TRUE",
			confirmButtonText: "->",
			confirmButtonColor: "#38bc5e",
			closeOnConfirm: false,
			closeOnCancel: false,
			html: true
		}, function(){
		questionNumber++;
		if (questionNumber < 3){
		questions1(questionNumber);
		}
		else{
		document.getElementById("goalBG1").innerHTML = "<div id='goalMark1' class='goalMark' style='display:block; background-color:#494949;'>+</div><div id='goal1' class='goalBox' style='font-size:2em; background-color: #554db5;'>Geography</div>";
		completed++;
		console.log(completed);
		if (completed>3)
		{
			document.getElementById("escape").innerHTML = "<input type='button' class='changeScreen' value='->' />";
		}
		swal.close();
		}
		});
		}
		else{//TRUE
		if (answerPattern1[questionNumber] == 0){prefix = "Correct!"}
		else {prefix = "Incorrect."}
		swal({
			title: "" + qArray1[questionNumber],
			text: "" + prefix + " " + aArray1[questionNumber],
			customClass: "innerAlertBox",
			showCancelButton: false,
			showConfirmButton: true,
			cancelButtonText: "TRUE",
			confirmButtonText: "->",
			confirmButtonColor: "#38bc5e",
			closeOnConfirm: false,
			closeOnCancel: false,
			html: true
		}, function(){
		questionNumber++;
		if (questionNumber < 3){
		questions1(questionNumber);
		}
		else{
		document.getElementById("goalBG1").innerHTML = "<div id='goalMark1' class='goalMark' style='display:block; background-color:#494949;'>+</div><div id='goal1' class='goalBox' style='font-size:2em; background-color: #554db5;'>Geography</div>";
		completed++;
		console.log(completed);
		if (completed>3)
		{
			document.getElementById("escape").innerHTML = "<input type='button' class='changeScreen' value='->' />";
		}
		swal.close();
		}
		});
		}
});
		 }
  });
  //2
	   dragula([document.getElementById('move4'), document.getElementById('goal2')])
	     .on('drop', function (el) {
		 var qArray2 = ["The first Europeans to discover Australia were the Dutch.", 
		 "The Omo remains in Ethiopia are the oldest discovered human fossils.", 
		 "The first home video game console is Atari's Home Pong, released in 1975."];
		 var answerPattern2 = [0, 0, 1]; //0 = TRUE 1 = FALSE
		 var prefix = "";
		 var aArray2 = ["Dutch navigator Willem Janszoon landed there in 1606.",
		 "The bones are estimated to be 100 to 195 thousand years old.",
		 "The first console is 1972's Magnavox Odyssey."];
		 questions2(0);
		 function questions2(questionNumber)
		 {
		 swal({
			title: "" + qArray2[questionNumber] + "<style>.alertType1 button {background-color: white; color: black; border: none; position: relative; box-shadow: none; text-align: center; height: 30px; width: 120px; font-size: 2.5em; font-weight: 600; -webkit-border-radius: 0px; border-radius: 0px; padding: 4px 35px; margin: 26px 5px 0 5px; cursor: pointer; }</style>",
			customClass: "alertType1",
			showCancelButton: true,
			cancelButtonText: "TRUE",
			confirmButtonText: "FALSE",
			confirmButtonColor: "white",
			closeOnConfirm: false,
			closeOnCancel: false,
			html: true
		}, function(isConfirm){
		if(isConfirm){//FALSE
		if (answerPattern2[questionNumber] == 1){prefix = "Correct!"}
		else {prefix = "Incorrect."}
		swal({
			title: "" + qArray2[questionNumber],
			text: "" + prefix + " " + aArray2[questionNumber],
			customClass: "innerAlertBox",
			showCancelButton: false,
			showConfirmButton: true,
			cancelButtonText: "TRUE",
			confirmButtonText: "->",
			confirmButtonColor: "#38bc5e",
			closeOnConfirm: false,
			closeOnCancel: false,
			html: true
		}, function(){
		questionNumber++;
		if (questionNumber < 3){
		questions2(questionNumber);
		}
		else{
		document.getElementById("goalBG2").innerHTML = "<div id='goalMark2' class='goalMark' style='display:block; background-color:#494949;'>+</div><div id='goal2' class='goalBox' style='font-size:2em; background-color: #554db5;'>History</div>";
		completed++;
		console.log(completed);
		if (completed>3)
		{
			document.getElementById("escape").innerHTML = "<input type='button' class='changeScreen' value='->' />";
		}
		swal.close();
		}
		});
		}
		else{//TRUE
		if (answerPattern2[questionNumber] == 0){prefix = "Correct!"}
		else {prefix = "Incorrect."}
		swal({
			title: "" + qArray2[questionNumber],
			text: "" + prefix + " " + aArray2[questionNumber],
			customClass: "innerAlertBox",
			showCancelButton: false,
			showConfirmButton: true,
			cancelButtonText: "TRUE",
			confirmButtonText: "->",
			confirmButtonColor: "#38bc5e",
			closeOnConfirm: false,
			closeOnCancel: false,
			html: false
		}, function(){
		questionNumber++;
		if (questionNumber < 3){
		questions2(questionNumber);
		}
		else{
		document.getElementById("goalBG2").innerHTML = "<div id='goalMark2' class='goalMark' style='display:block; background-color:#494949;'>+</div><div id='goal2' class='goalBox' style='font-size:2em; background-color: #554db5;'>History</div>";
		completed++;
		console.log(completed);
		if (completed>3)
		{
			document.getElementById("escape").innerHTML = "<input type='button' class='changeScreen' value='->' />";
		}
		swal.close();
		}
		});
		}
});
		 }
  });
  //3
	   dragula([document.getElementById('move2'), document.getElementById('goal3')])
	     .on('drop', function (el) {
		 var qArray3 = ["The Kuiper belt is located at the outer edge of our solar system and is largely similar to the asteroid belt closer to Earth.", 
		 "Pluto's orbit is elliptical, but it is on the same plane as those of the proper planets.", 
		 "The brightest star in the Orion constellation is Betelgeuze."];
		 var answerPattern3 = [0, 1, 1]; //0 = TRUE 1 = FALSE
		 var prefix = "";
		 var aArray3 = ["Kuiper belt is located around the dwarf planet Pluto and is mostly composed of relatively small rock objects.",
		 "Pluto's orbit is both elliptical and also has vertical variation compared to the actual planets.",
		 "Rigel is the brightest star of Orion, Betelgeuze is the secons brightest."];
		 questions3(0);
		 function questions3(questionNumber)
		 {
		 swal({
			title: "" + qArray3[questionNumber] + "<style>.alertType1 button {background-color: white; color: black; border: none; position: relative; box-shadow: none; text-align: center; height: 30px; width: 120px; font-size: 2.5em; font-weight: 600; -webkit-border-radius: 0px; border-radius: 0px; padding: 4px 35px; margin: 26px 5px 0 5px; cursor: pointer; }</style>",
			customClass: "alertType1",
			showCancelButton: true,
			cancelButtonText: "TRUE",
			confirmButtonText: "FALSE",
			confirmButtonColor: "white",
			closeOnConfirm: false,
			closeOnCancel: false,
			html: true
		}, function(isConfirm){
		if(isConfirm){//FALSE
		if (answerPattern3[questionNumber] == 1){prefix = "Correct!"}
		else {prefix = "Incorrect."}
		swal({
			title: "" + qArray3[questionNumber],
			text: "" + prefix + " " + aArray3[questionNumber],
			customClass: "innerAlertBox",
			showCancelButton: false,
			showConfirmButton: true,
			cancelButtonText: "TRUE",
			confirmButtonText: "->",
			confirmButtonColor: "#38bc5e",
			closeOnConfirm: false,
			closeOnCancel: false,
			html: false
		}, function(){
		questionNumber++;
		if (questionNumber < 3){
		questions3(questionNumber);
		}
		else{
		document.getElementById("goalBG3").innerHTML = "<div id='goalMark3' class='goalMark' style='display:block; font-size:4em; line-height:22px; background-color:#c1151b;'>-</div><div id='goal3' class='goalBox' style='font-size:2em; background-color: #554db5;'>Astronomy</div>";
		completed++;
		console.log(completed);
		if (completed>3)
		{
			document.getElementById("escape").innerHTML = "<input type='button' class='changeScreen' value='->' />";
		}
		swal.close();
		}
		});
		}
		else{//TRUE
		if (answerPattern3[questionNumber] == 0){prefix = "Correct!"}
		else {prefix = "Incorrect."}
		swal({
			title: "" + qArray3[questionNumber],
			text: "" + prefix + " " + aArray3[questionNumber],
			customClass: "innerAlertBox",
			showCancelButton: false,
			showConfirmButton: true,
			cancelButtonText: "TRUE",
			confirmButtonText: "->",
			confirmButtonColor: "#38bc5e",
			closeOnConfirm: false,
			closeOnCancel: false,
			html: false
		}, function(){
		questionNumber++;
		if (questionNumber < 3){
		questions3(questionNumber);
		}
		else{
		document.getElementById("goalBG3").innerHTML = "<div id='goalMark3' class='goalMark' style='display:block; font-size:4em; line-height:22px; background-color:#c1151b;'>-</div><div id='goal3' class='goalBox' style='font-size:2em; background-color: #554db5;'>Astronomy</div>";
		completed++;
		console.log(completed);
		if (completed>3)
		{
			document.getElementById("escape").innerHTML = "<input type='button' class='changeScreen' value='->' />";
		}
		swal.close();
		}
		});
		}
});
		 }
  });
  //4
	   dragula([document.getElementById('move3'), document.getElementById('goal4')])
	     .on('drop', function (el) {
		 var qArray4 = ["At minus 39 degrees celsius, mercury has the lowest melting point of all metals.", 
		 "According to the second Newton's law, to know the amount of force on an object, one must know its mass and velocity.", 
		 "Seas freeze slower than lakes, because the water is salty."];
		 var answerPattern4 = [0, 1, 0]; //0 = TRUE 1 = FALSE
		 var prefix = "";
		 var aArray4 = ["Mercury is the only metal to turn liquid at sub zero temperatures. On the other hand, it has a very high boiling point.",
		 "To get the sum of forces, one must multiply the object's mass with its acceleration.",
		 "The salty water is one reason, others being currents that move the water constantly and the larger size."];
		 questions4(0);
		 function questions4(questionNumber)
		 {
		 swal({
			title: "" + qArray4[questionNumber] + "<style>.alertType1 button {background-color: white; color: black; border: none; position: relative; box-shadow: none; text-align: center; height: 30px; width: 120px; font-size: 2.5em; font-weight: 600; -webkit-border-radius: 0px; border-radius: 0px; padding: 4px 35px; margin: 26px 5px 0 5px; cursor: pointer; }</style>",
			customClass: "alertType1",
			showCancelButton: true,
			cancelButtonText: "TRUE",
			confirmButtonText: "FALSE",
			confirmButtonColor: "white",
			closeOnConfirm: false,
			closeOnCancel: false,
			html: true
		}, function(isConfirm){
		if(isConfirm){//FALSE
		if (answerPattern4[questionNumber] == 1){prefix = "Correct!"}
		else {prefix = "Incorrect."}
		swal({
			title: "" + qArray4[questionNumber],
			text: "" + prefix + " " + aArray4[questionNumber],
			customClass: "innerAlertBox",
			showCancelButton: false,
			showConfirmButton: true,
			cancelButtonText: "TRUE",
			confirmButtonText: "->",
			confirmButtonColor: "#38bc5e",
			closeOnConfirm: false,
			closeOnCancel: false,
			html: false
		}, function(){
		questionNumber++;
		if (questionNumber < 3){
		questions4(questionNumber);
		}
		else{
		document.getElementById("goalBG4").innerHTML = "<div id='goalMark4' class='goalMark' style='display:block; font-size:4em; line-height:22px; background-color:#c1151b;'>-</div><div id='goal4' class='goalBox' style='font-size:2em; background-color: #554db5;'>Physics & chemistry</div>";
		completed++;
		console.log(completed);
		if (completed>3)
		{
			document.getElementById("escape").innerHTML = "<input type='button' class='changeScreen' value='->' />";
		}
		swal.close();
		}
		});
		}
		else{//TRUE
		if (answerPattern4[questionNumber] == 0){prefix = "Correct!"}
		else {prefix = "Incorrect."}
		swal({
			title: "" + qArray4[questionNumber],
			text: "" + prefix + " " + aArray4[questionNumber],
			customClass: "innerAlertBox",
			showCancelButton: false,
			showConfirmButton: true,
			cancelButtonText: "TRUE",
			confirmButtonText: "->",
			confirmButtonColor: "#38bc5e",
			closeOnConfirm: false,
			closeOnCancel: false,
			html: false
		}, function(){
		questionNumber++;
		if (questionNumber < 3){
		questions4(questionNumber);
		}
		else{
		document.getElementById("goalBG4").innerHTML = "<div id='goalMark4' class='goalMark' style='display:block; font-size:4em; line-height:22px; background-color:#c1151b;'>-</div><div id='goal4' class='goalBox' style='font-size:2em; background-color: #554db5;'>Physics & chemistry</div>";
		completed++;
		console.log(completed);
		if (completed>3)
		{
			document.getElementById("escape").innerHTML = "<input type='button' class='changeScreen' value='->' />";
		}
		swal.close();
		}
		});
		}
});
		 }
  });
});

// Remember to tear down
Template.mainScreen.onDestroyed(function () {
  this.drake.destroy();
});
}

