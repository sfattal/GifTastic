var topics = ["awkward", "bored", "confused", "angry", "excited", "drunk", "frustrated", "hungry", "mind-blown", "tired", "disappointed", "embarrassed", "relaxed", "happy", "sad", "stressed", "nervous"];
var emotion = "";

// Create and Append Buttons:
function buttons() {
    var buttons = $("<button>");
    buttons.text(topics[i]);
    buttons.val(topics[i]);
    buttons.addClass("btns");
    $("#buttons").append(buttons);
}
for (i = 0; i < topics.length; i++) {
    buttons();
}

// Main Function:
$(document).on("click", ".btns", function() {
    var emotion = $(this).val();
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + emotion + "&api_key=OAOml4nsVDKZnPwbip5iGgvQf4CSMOoO&limit=10";
    
    $.ajax({
        url: queryURL,
        method: "GET"
    })
      .then(function(response) {
        var results = response.data;
        console.log(response)
        for (var i = 0; i < results.length; i++) {
            var gifDiv = $("<div>");          
            var rating = results[i].rating;
            var p = $("<p>").text("Rating: " + rating);
            var emotionImage = $("<img>");
            emotionImage.attr({
                "src": results[i].images.fixed_width_still.url, 
                "data-still": results[i].images.fixed_width_still.url, 
                "data-animate": results[i].images.fixed_width.url,
                "data-state": "still"
            });
            emotionImage.addClass("imgs");
            gifDiv.append(p);
            gifDiv.append(emotionImage);
            $("#group").prepend(gifDiv);
        }
    });
})

// Pause/Play Function:
$(document).on("click", ".imgs", function() {
    var state = $(this).attr("data-state");
    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
        } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
    }
});

// Add Emotion Function:
$("#add-emotion").on("click", function(event) {
    event.preventDefault();

    var addEmotion = $("#emotion").val().trim();
    topics.push(addEmotion);
    i = (topics.length - 1);
    buttons();
});