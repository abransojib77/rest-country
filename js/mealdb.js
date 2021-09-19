const searchFood = () => {
    const searchField = document.getElementById('search-field')
    const inputValue = searchField.value
    // console.log(inputValue)
    searchField.value = ''
    const url = `
    https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}
    `
    // console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResults(data.meals))
}

const displaySearchResults = meals => {
    const searchResult = document.getElementById('search-result')
    meals.forEach(meal => {
        // console.log(meal)
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `
        <div class="col">
        <div onclick="loadMealDetail(${meal.idMeal})" class="card h-100">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
             <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0, 300)}.</p>
             </div>
             </div>
             </div>
        `
        searchResult.appendChild(div)
    });
}

const loadMealDetail = mealId => {
    // console.log(mealId)
    const url = `
    https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId} `
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetail(data.meals[0]))
}


const displayMealDetail = meal => {
    console.log(meal)

    const mealDetail = document.getElementById('meal-detail')
    const div = document.createElement('div')
    div.classList.add('card')
    div.innerHTML = ` 
    
    <img  src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">${meal.strInstructions}</p>
        <a href="${meal.strYoutube}" class="btn btn-primary">TRY TO MAKE IT !!!</a>
    </div>
    
    `
    mealDetail.appendChild(div)
}