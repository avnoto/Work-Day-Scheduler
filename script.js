$(document).ready(function () {

doInit();

//ALL FUNCTIONS DEFINED BELOW THIS LINE

// function that calls for the current day, current time, and storage of user's description on page load. 
function doInit() {
    currentDay();
    currentTime();
    retrieveText();

}
//displays current day in jumbotron
function currentDay() {
    let currentDay = moment().format('MMMM Do YYYY, h:mm:ss a');
    $("#currentDay").text(currentDay);
    };


function currentTime() {
    //get current time (hour)
    let currentTime = moment().hours();
    let message = $(".message");

    //loop for time slots
    $(message).each(function (index, element) {

    //get current time that is stored in specific time slots using data attribute
    let timeBlock = parseInt($(element).attr("data-time"));

    //conditions that add colors to the slots if that time has passed, is in the future, or on the current time
    if (timeBlock < currentTime) {
        $(element).addClass("past");
    }

    else if (timeBlock == currentTime) {
        $(element).addClass("present");
    }

    else {
        $(element).addClass("future");
     }

});
}

// retrieving the user's message on page load
function retrieveText() {

    //get array of message elements
    const message = $(".message");
    $(message).each(function(i, element) {

        //get time id to retrieve data from local storage
        const timeID = $(element).attr("data-time");

        //get unique message per element tag
        const message = localStorage.getItem(timeID);

        // sets the text in the message element
        $(element).text(message);
    });

        //get text ID to retrieve data from local storage    
        const textID = $(".notes").attr("data-input");

        //get message from notes tag
        const notes = localStorage.getItem(textID);

        //sets the text in notes element
        $(".notes").text(notes);

        const checkedID = $(".completed-items").attr("data-text");

        const userText = localStorage.getItem(checkedID);

        $(".completed-items").text(userText);
    

}

//ALL ON CLICK FUNCTIONS FOR BUTTONS BELOW THIS LINE

//on click function for save button
$(".saveBtn").on("click", function () {

    //get time id from message tag
    const timeID = $(this).siblings(".message").attr("data-time");

    //get text of user's input
    const userInput = $(this).siblings(".message").val();
    
    //set in local storage
    localStorage.setItem(timeID, userInput);
    
    
});

//on click function for clear button
$(".clearBtn").on("click", function () {

    //get time id from message tag
    const timeID = $(this).siblings(".message").attr("data-time");

    //clear text of user's input
    const userInput = $(this).siblings(".message").val("");
    
    //removes from local storage
    localStorage.removeItem(timeID, userInput);
    
    
});

//on click function or completed button
$(".checkBtn").on("click", function () {

    // get text id from completed tag
    const checkedID = $(this).siblings(".message").attr("data-text");

    //get text of user's input
    const userText = $(this).siblings(".message").val();

    //append text to completed section 
    $(".completed-items").append(userText);

    localStorage.setItem(checkedID, userText);
    
      
});


//on click function for when user clicks on body after typing notes in Notes box 
$("body").on("click", function () {
    
    //get text ID from notes tag
    const textID = $(".notes").attr("data-input");

    //get text of user's input
    const userNotes = $(".notes").val();
    
    //sets in local storage
    localStorage.setItem(textID, userNotes);

});


});
