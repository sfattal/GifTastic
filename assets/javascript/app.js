var topics = ["awkward", "bored", "confused", "angry", "excited", "drunk", "frustrated", "hungry", "mind-blown", "tired", "disappointed", "embarrassed", "relaxed", "happy", "sad", "stressed", "nervous"];

for (i = 0; i < topics.length; i++) {
    var buttons = $("<button>");
    buttons.text(topics[i])
    $("#buttons").append(buttons);
}