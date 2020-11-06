const income_input=document.querySelector("#income-input")
const item_input=document.querySelector("#item-input")
const quantity_input=document.querySelector("#quantity-input")
const price_input=document.querySelector("#price-input")
const btn=document.querySelector("#btn")
const budget_container=document.querySelector(".budget-container")
btn.addEventListener("click", ()=>{
	let budget_box=document.createElement("div")
	budget_box.innerHTML=`
	<div class="card">
  <div class="card-header">
    <h6>Budget</h6>
  </div>
  <div class="card-body">
    <h5 class="card-title">Your balance is</h5>
    <p class="card-text">$ ${parseInt(income_input.value)-parseInt(price_input.value)}</p>
    <h5 class="card-title">Item bought</h5>
    <p class="card-text">${item_input.value} $ ${parseInt(quantity_input.value)*parseInt(price_input.value)}</p>
    <button type="button" id="close-btn" class="btn btn-info">Close</button>
  </div>
</div>
	`
	budget_container.appendChild(budget_box)
	item_input.value=""
	price_input.value=""
	quantity_input.value=""
	close_btn=budget_box.querySelector("#close-btn")
	close_btn.addEventListener("click", ()=>budget_container.removeChild(budget_box))
})
