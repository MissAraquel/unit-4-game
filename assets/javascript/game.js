//game with 4 crystals and random result
//every crystal needs to generate random number from 1-12
//new random # should be generated for each crystal everytime theres a win or lost
//everytime crystal is clicked it should add to the previous result until equals random result 
//if its over random result it should be added to lost counter
//it its equal then it should increment win counter


//global variables
var randomResult;
var loss =0; 
var win = 0; 
var previous = 0;

var startResetGame = function() {

    $(".crystals").empty();
    //generates random number from 19-120 for random result 
    randomResult = Math.floor(Math.random() * 100 + 20);
    //console.log(randomResult);

    $("#result").html('Random Result: ' + randomResult);

    for(var i = 0; i < 4; i++) {

        //generates random number for each crystal 
        var random = Math.floor(Math.random() * 11) + 1;
        //console.log(random);
        
        //creates div for each crystal
        var crystal = $("<div>");
            crystal.attr({
            "class": 'crystal',
            "dataRandom": random
            });

        $(".crystals").append(crystal);
    }
    $("#previous").html("Total Score: " + previous);
}

startResetGame();


$(document).on("click", ".crystal", function() {

    var num = parseInt($(this).attr("dataRandom"));

    previous += num;

    $("#previous").html("Total Score: " + previous);

    console.log(previous);

    if(previous > randomResult) {
        loss++;
        $("#loss").html("Losses: " + loss);
        previous = 0;
        startResetGame();
    }
    else if(previous === randomResult) {
        win++;
        $("#win").html("Wins: " + win);
        previous =0;
        startResetGame();
        
    }
});
