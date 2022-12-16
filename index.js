
//search function
function searchRecipes(query) {
    let APP_ID='571ca68a'
    let APP_KEY='026445d506c04cc90dacd99bd5aadf78'
    fetch(`https://api.edamam.com/search?app_id=${APP_ID}&app_key=${APP_KEY}&q=${query}`)
    .then(response => response.json())
   .then(recipes)
    .catch((error) => {
        document.getElementById('error').innerHTML=error;
        recipes([]);
        });
 }