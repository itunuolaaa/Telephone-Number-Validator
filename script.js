document.getElementById("check-btn").addEventListener("click", function () {
    let userInput = document.getElementById("user-input").value.trim();
    let resultsDiv = document.getElementById("results-div");

    if (userInput === "") {
        alert("Please provide a phone number");
        return;
    }

    
    let validUSNumberPattern = /^(1\s?)?(\(\d{3}\)|\d{3})([\s-]?)\d{3}([\s-]?)\d{4}$/;

    if (validUSNumberPattern.test(userInput)) {
        resultsDiv.textContent = `Valid US number: ${userInput}`;
    } else {
        resultsDiv.textContent = `Invalid US number: ${userInput}`;
    }
});


document.getElementById("clear-btn").addEventListener("click", function () {
    document.getElementById("results-div").innerHTML = "";
});