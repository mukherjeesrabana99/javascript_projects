const foods=[
{
	"name":"bowl1",
	"image":"bowl1.png",
	"price":10,
	"category":"healthy",
},
{
	"name":"bowl2",
	"image":"bowl2.png",
	"price":5,
	"category":"healthy",
},
{
	"name":"bowl3",
	"image":"bowl3.png",
	"price":15,
	"category":"healthy",
},
{
	"name":"bowl4",
	"image":"bowl4.png",
	"price":5,
	"category":"healthy",
},
{
	"name":"plate1",
	"image":"plate1.png",
	"price":10,
	"category":"unhealthy",
},
{
	"name":"plate2",
	"image":"plate2.png",
	"price":20,
	"category":"unhealthy",
},
{
	"name":"plate3",
	"image":"plate3.png",
	"price":15,
	"category":"unhealthy",
},
{
	"name":"plate4",
	"image":"plate4.png",
	"price":10,
	"category":"unhealthy",
},
{
	"name":"plate5",
	"image":"plate5.png",
	"price":5,
	"category":"unhealthy",
},
{
	"name":"random1",
	"image":"random1.png",
	"price":10,
	"category":"junk",
},
{
	"name":"random2",
	"image":"random2.png",
	"price":11,
	"category":"junk",
},
{
	"name":"random6",
	"image":"random6.png",
	"price":14,
	"category":"junk",
},
{
	"name":"random3",
	"image":"random3.png",
	"price":5,
	"category":"junk",
},
{
	"name":"random4",
	"image":"random4.png",
	"price":15,
	"category":"junk",
},
{
	"name":"random5",
	"image":"random5.png",
	"price":10,
	"category":"junk",
}
]

food_container=document.querySelector("#food-container")
const all_food=foods.map(food=>{
	return `
	
	<div class="col-lg-3 col-md-6 col-sm-6">
	<div class="card" style="width: 18rem;">
  <img class="card-img-top" src="${food.image}" alt="Card image cap">
  <div class="card-body">
    <p class="card-text">${food.name}.</p>
    <h6 class="card-text">$ ${food.price}.</h6>
  </div>
</div>
</div>

`
})
healthy_foods=foods.filter(food=>food.category=="healthy")
filtered_healthy_foods=healthy_foods.map(food=>{
	return `
	<div class="col-lg-3 col-md-6 col-sm-6">
	<div class="card" style="width: 18rem;">
  <img class="card-img-top" src="${food.image}" alt="Card image cap">
  <div class="card-body">
    <p class="card-text">${food.name}.</p>
    <h6 class="card-text">$ ${food.price}.</h6>
  </div>
</div>
</div>
`
})
unhealthy_foods=foods.filter(food=>food.category=="unhealthy")
filtered_unhealthy_foods=unhealthy_foods.map(food=>{
	return `
	<div class="col-lg-4 col-md-6 col-sm-6">
	<div class="card" style="width: 18rem;">
  <img class="card-img-top" src="${food.image}" alt="Card image cap">
  <div class="card-body">
    <p class="card-text">${food.name}.</p>
    <h6 class="card-text">$ ${food.price}.</h6>
  </div>
</div>
</div>
`
})
junk_foods=foods.filter(food=>food.category=="junk")
filtered_junk_foods=junk_foods.map(food=>{
	return `
	<div class="col-lg-4 col-md-6 col-sm-6">
	<div class="card" style="width: 18rem;">
  <img class="card-img-top" src="${food.image}" alt="Card image cap">
  <div class="card-body">
    <p class="card-text">${food.name}.</p>
    <h6 class="card-text">$ ${food.price}.</h6>
  </div>
</div>
</div>
`
})
const btns=document.querySelectorAll(".btn")

// window.addEventListener("DOMContentLoaded", ()=>food_container.innerHTML+=all_food)

btns.forEach(btn=>{
	btn.addEventListener("click", function(){
		switch(this.dataset.id){
			case "healthy":
			console.log("healthy btn clicked")
			food_container.innerHTML=filtered_healthy_foods.join("");
			windows.location.reload()
			break;
			case "unhealthy":
			console.log("unhealthy btn clicked")
			food_container.innerHTML=filtered_unhealthy_foods.join("");
			windows.location.reload()
			break;
			case "junk":
			console.log("junk btn clicked")
			food_container.innerHTML=filtered_junk_foods.join("");
			windows.location.reload()
			break;
			case "all":
			console.log("all btn clicked")
			food_container.innerHTML=all_food.join("");
			windows.location.reload() 
			break;
			default:
			console.log("nothing clicked")
			food_container.innerHTML=all_food.join("");
			

		}
	})
})
