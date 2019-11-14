$(init);

function init() {
    $("#checkButton").click(checkSentence);
}

function checkSentence() {
    // Get the text string from the box
    var sentence = $("#sentence").val();

    // An array of non-letter characters to remove
    var badChars = [",", "."];

    // Loop through the bad characters
    for (var i = 0; i < badChars.length; i++) {
        // Are there any more of this bad character in the text?
        while (sentence.indexOf(badChars[i]) != -1) {
            // Replace the first one you find
            sentence = sentence.replace(badChars[i], "");
        }
    }

    // Split the sentence into an array of words
    var sentenceArray = sentence.split(" ");

    // Loop through the array of words, grabbing pairs
    // of words.
    //
    // Note the "- 1". This is allowing us to grab pairs.
    // We need to stop one short of the end of the array
    // because the last element doesn't have a
    // "right neighbor".
    for (var j = 0; j < sentenceArray.length - 1; j++) {
        // What is the length of the "left" word?
        var length1 = sentenceArray[j].length;

        // Grab the last two characters of the left word
        var sub1 = sentenceArray[j].substring(length1 - 2);
        // Grab the first two characters of the right word
        var sub2 = sentenceArray[j + 1].substring(0, 2);

        // Are the sub-sequences the same?
        if (sub1 != sub2) {
            // If they are not the same, we have our answer
            // The sentence is not a chain link sentence
            $("#result").text("Not a chain link sentence");
            return;
        }
    }

    // We got all the way through the loop and
    // did not find any non-matching sub-sequences
    $("#result").text("Is a chain link sentence");
}