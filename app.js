const searchMeal = () => {

    const mealName = document.getElementById('input').value;
    console.log(mealName);
    const url = `https://themealdb.com/api/json/v1/1/search.php?s=${mealName}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeal(data.meals[0]));
   
}
const setInnerText = (id, text) => {
    document.getElementById(id).innerText=text;
}

const displayMeal=meal=>{
    setInnerText('meal-details-sec',meal.strMeal);
    setInnerText('meal-pic',meal.strMealThumb);
    console.log(meal.strMealThumb);
}
