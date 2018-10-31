var topics = ["awkward", "bored", "confused", "angry", "excited", "drunk", "frustrated", "hungry", "mind-blown", "tired", "disappointed", "embarrassed", "relaxed", "happy", "sad", "stressed", "nervous"];
var emotion = "";

for (i = 0; i < topics.length; i++) {
    var buttons = $("<button>");
    buttons.text(topics[i]);
    buttons.val(topics[i]);
    buttons.addClass("btns");
    $("#buttons").append(buttons);
}

$(document).on("click", ".btns", function() {
    var emotion = $(this).val();
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + emotion + "&api_key=OAOml4nsVDKZnPwbip5iGgvQf4CSMOoO&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    })
      .then(function(response) {
        var results = response.data;
        for (var i = 0; i < results.length; i++) {
            var gifDiv = $("<div>");          
            var rating = results[i].rating;
            var p = $("<p>").text("Rating: " + rating);
            var emotionImage = $("<img>");
            emotionImage.attr("src", results[i].images.fixed_height.url);
            gifDiv.append(p);
            gifDiv.append(emotionImage);
            $("#output").prepend(gifDiv);
        }
    });
})