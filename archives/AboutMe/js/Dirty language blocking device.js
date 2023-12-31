var dirtyWords = ["fuck", "shit", "bitch"]; // Add dirty words to block here

document.getElementById("filter").addEventListener("click", function() {
    var inputText = document.getElementById("text").value;
    var filteredText = inputText;

    dirtyWords.forEach(function(word) {
        var regex = new RegExp(word, "gi");
        filteredText = filteredText.replace(regex, "*".repeat(word.length));
    });

    document.getElementById("filteredText").textContent = "Masked Text:\n" + filteredText;
});