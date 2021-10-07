
const searchMeal = () => {

    const mealName = document.getElementById('input').value;
    console.log(mealName);
    const url = `https://themealdb.com/api/json/v1/1/search.php?s=${mealName}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeal(data.meals[0]));

}
const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}
const displayMeal = meal => {
    document.getElementById("haga").style.display = 'block';
    setInnerText('meal-name', meal.strMeal);


    document.getElementById("meal-pic").setAttribute("src", meal.strMealThumb);


    const mealIngredients = document.getElementById('meal-info-section');



    for (let i = 1; meal[`strIngredient${i}`]; i++) {
        const ingredients = `
        ✔ ${meal[`strMeasure${i}`]} ${meal[`strIngredient${i}`]}
        
        `
        const mealDetails = document.createElement('p');

        mealDetails.className = 'meal-details-sec';
        mealDetails.innerText = ingredients;
        mealIngredients.appendChild(mealDetails);
    }

}
