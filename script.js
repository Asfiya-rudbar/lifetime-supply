function calculate() {
    let fvrtsnack = prompt("What's your favorite snack?");
    let age = parseInt(prompt("What's your current age?"));
    let maxAge = parseInt(prompt("Enter the maximum age you believe you can be?"));
    let amount = parseInt(prompt("How many " + fvrtsnack + " do you eat per day?"));

    if (isNaN(age) || isNaN(maxAge) || isNaN(amount) || !fvrtsnack) {
        alert("Invalid Data!");
        return;
    }

    let totalSupply = (maxAge - age) * amount * 365;

    let result = `
        <p>You will need <strong>${totalSupply}</strong> ${fvrtsnack} to last you until the ripe old age of <strong>${maxAge}</strong>.</p>
    `;
    document.getElementById("result").innerHTML = result;
}