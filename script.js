function generateRandom() {
    const min = parseInt(document.getElementById("min").value);
    const max = parseInt(document.getElementById("max").value);
    
    if (isNaN(min) || isNaN(max) || min >= max) {
        alert("Please enter valid numbers where Min is less than Max.");
        return;
    }

    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById("random-number").textContent = randomNumber;
}