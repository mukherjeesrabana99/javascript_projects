const foods=[
{
	"name":"bowl1",
	"image":"bowl1.png",
	"price":10,
	"category":"healthy",
	"calorie":"10cal"
},
{
	"name":"bowl2",
	"image":"bowl2.png",
	"price":5,
	"category":"healthy",
	"calorie":"11cal"
},
{
	"name":"bowl3",
	"image":"bowl3.png",
	"price":15,
	"category":"healthy",
	"calorie":"5cal"
},
{
	"name":"bowl4",
	"image":"bowl4.png",
	"price":5,
	"category":"healthy",
	"calorie":"15cal"
},
{
	"name":"plate1",
	"image":"plate1.png",
	"price":10,
	"category":"unhealthy",
	"calorie":"20cal"
},
{
	"name":"plate2",
	"image":"plate2.png",
	"price":20,
	"category":"unhealthy",
	"calorie":"10kcal"
},
{
	"name":"plate3",
	"image":"plate3.png",
	"price":15,
	"category":"unhealthy",
	"calorie":"25cal"
},
{
	"name":"plate4",
	"image":"plate4.png",
	"price":10,
	"category":"unhealthy",
	"calorie":"30cal"
},
{
	"name":"plate5",
	"image":"plate5.png",
	"price":5,
	"category":"unhealthy",
	"calorie":"50cal"
},
{
	"name":"random1",
	"image":"random1.png",
	"price":10,
	"category":"junk",
	"calorie":"40cal"
},
{
	"name":"random2",
	"image":"random2.png",
	"price":11,
	"category":"junk",
	"calorie":"70cal"
},
{
	"name":"random6",
	"image":"random6.png",
	"price":14,
	"category":"junk",
	"calorie":"60cal"
},
{
	"name":"random3",
	"image":"random3.png",
	"price":5,
	"category":"junk",
	"calorie":"90cal"
},
{
	"name":"random4",
	"image":"random4.png",
	"price":15,
	"category":"junk",
	"calorie":"84cal"
},
{
	"name":"random5",
	"image":"random5.png",
	"price":5,
	"category":"junk",
	"calorie":"91cal"
}
]



// Declaring some variables

const food_container=document.querySelector("#food-container")
const btns=document.querySelectorAll(".btn")
const search=document.querySelector("#search");
const search_btn=document.querySelector("#search-btn")
const sort_btn=document.querySelector("#sort-btn")
const searched_food=foods.filter(food=>food.name.includes(search.value)||
		food.category.includes(search.value))
// declaring and console loging sorted foods
// const sorted_foods=foods.sort((a, b) => parseFloat(b.price) - parseFloat(a.price))
// console.log(foods.sort((a, b) => parseFloat(a.price) - parseFloat(b.price)))
//------------------------------------------------------------------------------
const healthy_foods=foods.filter(food=>food.category=="healthy")

const unhealthy_foods=foods.filter(food=>food.category=="unhealthy")

const junk_foods=foods.filter(food=>food.category=="junk")


displayFood=items=>{
	const all_items=items.map(item=>{
		return `
		<div class="col-lg-3 col-md-6 col-sm-6">
		<div class="card" style="width: 18rem;">
		  <img class="card-img-top" src="${item.image}" alt="Card image cap">
		  <div class="card-body">
		    <p class="card-text">${item.name}.</p>
		    <h6 class="card-text">$ ${item.price}.</h6>
		    Calorie-><h6 class="card-text"> {item.calorie}.</h6>
		  </div>
		</div>
		</div>
		`
	})
	food_container.innerHTML=all_items.join("")
}




// EVENT LISTENERS


window.addEventListener("DOMContentLoaded", ()=>displayFood(foods))

// sort btn eventlisteners



// adding eventlisteners to each of the other btns


btns.forEach(btn=>{
	btn.addEventListener("click", function(){
		switch(this.dataset.id){
			case "healthy":
			console.log("healthy btn clicked")
			displayFood(healthy_foods)
			break;
			case "unhealthy":
			console.log("unhealthy btn clicked")
			displayFood(unhealthy_foods)
			break;
			case "junk":
			console.log("junk btn clicked")
			displayFood(junk_foods)
			break;
			case "searchbtn":
			console.log("search btn clicked")
			console.log(foods.filter(food=>food.name.indexOf(search.value)!==-1||
			food.category.indexOf(search.value)!==-1))
			displayFood(searched_food)
			break;
			case "all":
			console.log("all btn clicked")
			displayFood(foods)
			break;
			

		}
	})
})
