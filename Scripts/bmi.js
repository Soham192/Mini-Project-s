// Add an event listener to the form to handle form submission
document.getElementById('bmi-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting in the default way

    // Get input values
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meters

    // Check if values are valid
    if (isNaN(weight) || isNaN(height) || height <= 0) {
        document.getElementById('result').innerHTML = '<p style="color: red;">Please enter valid weight and height.</p>';
        return;
    }

    // Calculate BMI
    const bmi = weight / (height * height);

    // Determine the BMI category
    let category = '';
    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi < 24.9) {
        category = 'Normal weight';
    } else if (bmi < 29.9) {
        category = 'Overweight';
    } else {
        category = 'Obesity';
    }

    // Display the result
    document.getElementById('result').innerHTML = `
        <h2>Your BMI: ${bmi.toFixed(2)}</h2>
        <p>Category: ${category}</p>
    `;
});
