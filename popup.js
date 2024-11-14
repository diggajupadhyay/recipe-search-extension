// Add an event listener to the search button to trigger the search function when clicked
document.getElementById('searchButton').addEventListener('click', async () => {
    // Get the search term from the input field and convert it to lowercase
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    // Find the recipe(s) based on the search term
    const result = await findRecipe(searchTerm);
    // Display the search results
    displayResult(result);
});

// Function to find recipes based on the search term
async function findRecipe(searchTerm) {
    // Check if the search term is 'momo'
    if (searchTerm === 'momo') {
        // Return an array of momo recipes
        return [
            {
                title: 'Chicken Momo Recipe',
                url: 'https://www.foodnetwork.com/recipes/nepali-momo-4635126'
            },
            {
                title: 'Buff Momo Recipe',
                url: 'https://recipenp.com/2020/03/11/nepali-style-buff-steam-momos-recipe/'
            }
        ];
    // Check if the search term is 'chowmein'
    } else if (searchTerm === 'chowmein') {
        // Return an array of chowmein recipes
        return [
            {
                title: 'Chicken Chow Mein Recipe',
                url: 'https://natashaskitchen.com/chicken-chow-mein/'
            },
            {
                title: 'Chicken Chow Mein Recipe',
                url: 'https://spoonbun.com/nepali-chowmein-recipe/'
            }
        ];
    } else {
        // Return null if no recipes are found for the search term
        return null;
    }
}

// Function to display the search results
function displayResult(results) {
    const resultDiv = document.getElementById('result');
    // Check if there are any results
    if (results && results.length > 0) {
        // Map over the results and create HTML for each recipe
        resultDiv.innerHTML = results.map(result => `
        <h2>${result.title}</h2>
        <p>Click the link to view the recipe:</p>
        <a href="${result.url}" target="_blank">${result.url}</a>
      `).join('<hr>'); // Separate each recipe with a horizontal line
    } else {
        // Display a message if no recipes are found
        resultDiv.innerHTML = '<p>No recipe found for your search.</p>';
    }
}