$(document).ready(function () {

doInit();

//
function doInit() {
    currentDay();
    currentTime();
    retrieveText();

}

function currentDay() {
    let currentDay = moment().format('MMMM Do YYYY, h:mm:ss a');
    $("#currentDay").text(currentDay);
    };


function currentTime() {

    let currentTime = moment().hours();
    let message = $(".message");

    $(message).each(function (index, element) {

    let timeBlock = parseInt($(element).attr("data-time"));

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

function retrieveText() {

    const message = $(".message");
    $(message).each(function(i, element) {

        const timeID = $(element).attr("data-time");
        const message = localStorage.getItem(timeID);

        $(element).text(message);


    });

}

//ON CLICK FUNCTIONS FOR BUTTONS

$(".saveBtn").on("click", function () {
    const timeID = $(this).siblings(".message").attr("data-time");
    const userInput = $(this).siblings(".message").val();
    
    localStorage.setItem(timeID, userInput);
    
    
});

$(".clearBtn").on("click", function () {
    const timeID = $(this).siblings(".message").attr("data-time");
    const userInput = $(this).siblings(".message").val("");
    
    localStorage.removeItem(timeID, userInput);
    
    
});

$(".checkBtn").on("click", function () {
    const timeID = $(this).siblings(".message").attr("data-time");
    const userInput = $(this).siblings(".message").val("");
    
    localStorage.setItem(timeID, userInput);
    
    
});



});
