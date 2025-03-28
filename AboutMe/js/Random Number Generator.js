document.getElementById("generate").addEventListener("click", function() {
    var min = parseInt(document.getElementById("min").value);
    var max = parseInt(document.getElementById("max").value);
    var count = parseInt(document.getElementById("count").value);

    if (isNaN(min) || isNaN(max) || isNaN(count)) {
        alert("Please enter a valid number");
    } else if (min >= max) {
        alert("The minimum value must be less than the maximum value");
    } else {
        var results = [];
        for (var i = 0; i < count; i++) {
            var randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
            results.push(randomNum);
        }
        document.getElementById("result").textContent = "Generated Random Numbers: " + results.join(", ");
    }
});