// Buttons:
var topics = ["awkward", "bored", "confused", "angry", "excited", "drunk", "frustrated", "hungry", "mind-blown", "tired", "disappointed", "embarrassed", "relaxed", "happy", "sad", "stressed", "nervous"];

for (i = 0; i < topics.length; i++) {
    var buttons = $("<button>");
    buttons.text(topics[i])
    $("#buttons").append(buttons);
}

$("buttons").on("click", function() {
    event.preventDefault();
    var emotion = $(this).attr(topics[i]);
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + emotion + "&api_key=OAOml4nsVDKZnPwbip5iGgvQf4CSMOoO&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
      })
      .then(function(response) {
        var results = response;

        for (var i = 0; i < results.length; i++) {
            var gifDiv = $("<div>");
            
            var rating = results[i].rating;
            var p = $("<p>").text("Rating: " + rating);

            var emotionImage = $("<img>");
            emotionImage.attr("src", results[i].images.fixed_height.url);

            gifDiv.append(p);
            gifDiv.append(emotionImage);

            $("#output").append(gifDiv);
        }
        console.log(results)
    });
})