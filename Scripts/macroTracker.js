const apiKey = 'f2E3KcxaBNybdaodsTW1Tw==u995WtaXsBpO2yVH'; // Replace with your CalorieNinjas API key

document.getElementById('food-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const food = document.getElementById('food').value.toLowerCase();
    const quantity = parseFloat(document.getElementById('quantity').value);

    fetch(`https://api.calorieninjas.com/v1/nutrition?query=${food}`, {
        headers: {
            'X-Api-Key': apiKey
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.items && data.items.length > 0) {
            const item = data.items[0];
            const carbs = (item.carbohydrates_total_g * quantity) / 100;
            const protein = (item.protein_g * quantity) / 100;
            const fat = (item.fat_total_g * quantity) / 100;

            document.getElementById('results').innerHTML = `
                <h2>Macros for ${quantity}g of ${food}:</h2>
                <p>Carbohydrates: ${carbs.toFixed(2)}g</p>
                <p>Protein: ${protein.toFixed(2)}g</p>
                <p>Fat: ${fat.toFixed(2)}g</p>
            `;
        } else {
            document.getElementById('results').innerHTML = `<p>Food item not found.</p>`;
        }
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('results').innerHTML = `<p>There was an error fetching the data.</p>`;
    });
});
