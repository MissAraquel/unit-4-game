//game with 4 crystals and random result
//every crystal needs to generate random number from 1-12
//new random # should be generated for each crystal everytime theres a win or lost
//everytime crystal is clicked it should add to the previous result until equals random result 
//if its over random result it should be added to lost counter
//it its equal then it should increment win counter

var randomResult;
var lost; 
var win; 

for(var i = 0; i < 4; i++) {
    var crystal = $("<div>");
        crystal.attr("class", 'crystal');

    $(".crystals").append(crystal);
}