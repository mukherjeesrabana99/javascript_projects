const budget_input=document.querySelector("#budget-input")
const item_input=document.querySelector("#item-input")
const expense_input=document.querySelector("#expense-input")
const budget_value=document.querySelector("#budget-value")
const expense_title=document.querySelector("#expense-title")
const expense_value=document.querySelector("#expense-value")
const total_expense_value=document.querySelector("#total-expense-value")
const balance_value=document.querySelector("#balance-value");
const action=document.querySelector("#action")
const add_budget_btn=document.querySelector("#add-budget-btn")
const add_item_btn=document.querySelector("#add-item-btn")
const add_expense_btn=document.querySelector("#add-expense-btn")
const expenses=[]


add_budget_btn.addEventListener("click",()=>{

	budget_value.innerHTML=` $ ${budget_input.value}`
	budget_input.value=""

})

add_item_btn.addEventListener("click",()=>{
	expense_title.innerHTML+=`<h6>${item_input.value}<h6>`
	item_input.value=""
})
add_expense_btn.addEventListener("click", ()=>{

	console.log(expense_input.value)
	
	expenses.push(parseInt(expense_input.value))
	
		let para=document.createElement("p")
		para.innerHTML=`<p> $ ${expenses[expenses.length-1]}</p>`
		expense_value.appendChild(para)

	expense_input.value=""
	console.log(expenses)
	const expense_sum=expenses.reduce((sum, expense)=>sum+expense, 0)
	console.log(expense_sum)
	total_expense_value.innerText=expense_sum
	balance_value.innerText=parseInt(budget_input.value)-(expense_sum)


	
})

