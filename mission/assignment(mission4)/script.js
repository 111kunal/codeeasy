const searchinput = document.getElementById("searchinput");
const searchbtn = document.getElementById("searchbtn");
const message = document.getElementById("message");
const result = document.getElementById("result");
const cards = document.querySelectorAll(".meal-card");
const modal = document.getElementById("modal");
const modalbody = document.getElementById("modalBody");
const closebtn = document.getElementById("closeBtn");

async function searchMeals() {
  const input = searchinput.value;

  if (input === "") {
    message.textContent = "Enter the Meal name";
    return;
  }

  result.innerHTML = "";

  message.textContent = "Searching....";

  const apiurl =
    "https://www.themealdb.com/api/json/v1/1/search.php?s=" + input;
  const response = await fetch(apiurl);
  const data = await response.json();

  if (data.meals == null) {
    message.textContent = "meal not found. Try another one";
    return;
  }

  message.textContent = "";

  for (let i = 0; i < data.meals.length; i++) {
    const meal = data.meals[i];

    const mealcard = document.createElement("div");
    mealcard.className = "meal-card";
    mealcard.id = data.meals[i].idMeal;

    mealcard.innerHTML =
      '<img src="' + meal.strMealThumb + '"alt="' + meal.strMeal + '">' +
      '<div class="meal-info">' +
      "<h3>" +
      meal.strMeal +
      "</h3>" +
      "<p>" +
      meal.strCategory +
      " - " +
      meal.strArea +
      "</p>" +
      "</div>";

    mealcard.addEventListener("click", async () => {
      
      const mealId = mealcard.id;
      const apiurl2 =
        "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + mealId;
      const response2 = await fetch(apiurl2);
      const data2 = await response2.json();
      const meal2 = data2.meals[0];
        modal.style.display = "flex";

        document.body.classList.add("modal-open");
        
      closebtn.onclick = function () {
        modal.style.display = "none";
        document.body.classList.remove("modal-open");
      };

      function showIngredients(meal) {
        let list = "";

        for (let i = 1; i <= 20; i++) {
          let ingredient = meal[`strIngredient${i}`];
          let measure = meal[`strMeasure${i}`];

          if (ingredient && ingredient.trim() !== "") {
            list += `<li>${measure} ${ingredient}</li>`;
          }
        }

        document.getElementById("ingredients").innerHTML = list;
      }

      modalbody.innerHTML =
        '<img src="' +
        meal2.strMealThumb +
        '" alt="' +
        meal2.strMeal +
        '">' +
        "<h1>" +
        meal2.strMeal +
        "</h1>" +
        "<p>" +
        "Category:" +
        meal2.strCategory +
        " | " +
        "Area:" +
        meal2.strArea +
        "</p>" +
        "<h2>" +
        "Ingredients:" +
        "</h2>" +
        '<ul id="ingredients"></ul>' +
        "<h2>" + "Instructions" + "</h2>"+
        "<p>" +
        meal2.strInstructions +
        "</p>";

      showIngredients(meal2);
    });

    result.appendChild(mealcard);
  }
}

searchbtn.onclick = function () {
  searchMeals();
};
