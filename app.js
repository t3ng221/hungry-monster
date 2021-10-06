const searchMeal = () => {

    const mealName = document.getElementById('input').value;
    console.log(mealName);
    const url = `www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeal(data));
    console.log(data);
}

const displayMeal=meal=>{
    console.log(meal);
}

