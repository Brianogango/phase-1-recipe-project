
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
 //----Rendering each recipe on the web
function recipes(recipes) {
    console.log(recipes)
    document.querySelector('#display_section').innerHTML+=`

    <div class="card" id="card">
            <div class="front">
                <div class="image">
                <img src="${recipes.hits[0].recipe.image}" alt="try">
                </div>
                <div class="name"><h2>${recipes.hits[0].recipe.label}</h2> </div>
                <div class="recipe_btn" id="open" ><a href = "#" class = "submit">Get Recipe</a></div>
            </div>
            <div class="back">
                <h2>${recipes.hits[0].recipe.label}</h2>
                <div class="back_image">
                <img src="${recipes.hits[0].recipe.image}" alt="">
                </div>
                <div class="ingredients">
                <h3>Ingredients</h3>
                <p>${recipes.hits[0].recipe.ingredientLines}</p>
                </div>
            </div>
        </div>
  
    `;
    const card =document.getElementById("card")
    card.addEventListener("click", flipCard);
    function flipCard(){
    card.classList.toggle("flipCard");
}

}