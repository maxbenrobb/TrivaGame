
var incorrect //to store number of answers answered incorrectly like losses++;
var correct //to store number of correct like wins++;
var correctAnswer1 //each correct choice needs a variable or ID
var incorrectAnswer1 //each incorrect choice needs a an ID too



function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        $("#timer").text(minutes + ":" + seconds);
        //display.text(minutes + ":" + seconds);


        if (--timer < 0) {
            alert("game over!") 
        // if (--timer < 0) {
        //     timer = duration;
        }
    }, 1000);
}

jQuery(function ($) {
    var thirtySeconds = 30,
        display = $('#time');
    startTimer(thirtySeconds, display);
});

