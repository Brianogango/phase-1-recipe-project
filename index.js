
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
    let i = 0; i < recipes.hits.length; i++;
        const food = recipes.hits[i].recipe;
    document.querySelector('#display_section').innerHTML+=`

    <div class="card" id="card">
            <div class="front">
                <div class="image">
                <img src="${food.image}" alt="try">
                </div>
                <div class="name"><h2>${food.label}</h2> </div>
                <div class="recipe_btn" id="open" ><a href = "#" class = "submit">Get Recipe</a></div>
            </div>
            <div class="back">
                <h2>${food.label}</h2>
                <div class="back_image">
                <img src="${food.image}" alt="">
                </div>
                <div class="ingredients">
                <h3>Ingredients</h3>
                <p>${food.ingredientLines}</p>
                </div>

            </div>
        </div>
  
    `
    
document.addEventListener('DOMContentLoaded', function(event) {
var cards = document.querySelectorAll('#card');
cards.forEach((card)=>{
  card.addEventListener( 'click', function() {
    card.classList.toggle('is-flipped');
  });
});
});
}

//search button on keyup
let searchTimeoutToken=0;
 window.onload=()=>{
        const searchFieldElement=document.getElementById('search');
        searchFieldElement.onkeyup=(event)=>{
            clearTimeout(searchTimeoutToken);
            event.preventDefault();
            if(searchFieldElement.value.length === 0){
                return;
            }
            searchTimeoutToken=setTimeout(()=>{
                searchRecipes(searchFieldElement.value);
            },500);
            
        }

}
const btn = document.getElementById('btn');
    btn.addEventListener('click', () => {

        const myName = document.getElementById('myName').value;
        const myEmail = document.getElementById('myEmail').value;
        const myMessage = document.getElementById('message').value;
        
        const myFeedback = {
            name: myName,
            email: myEmail,
            message: myMessage
        };
        console.log(myFeedback);
        const feedbackList = document.getElementById('feedback');
        const myFeedbackCard = document.createElement('ol');

        myFeedbackCard.innerHTML = `
        <p>${myFeedback.name}</p>
        <p>${myFeedback.email}</p>
        <p>${myFeedback.message}</p>

        `;
        feedbackList.appendChild(myFeedbackCard);
        
});
