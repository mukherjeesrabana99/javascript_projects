const random1=Math.floor(Math.random() *100)+1
const random2=Math.floor(Math.random() *100)+1
const symbols=["+", "-", "*", "/"]
const calc_btn=document.querySelector("#calc-btn")
const calc_area=document.querySelector("#calc-area")
const random=Math.floor(Math.random() *symbols.length)
calc_btn.addEventListener("click", ()=>{
	switch(symbols[random]){
		case "+":
		calc_area.innerHTML+=`
		<button type="button" class="btn btn-primary">${random1}</button>
		<button type="button" class="btn btn-primary">${symbols[random]}</button>
		<button type="button" class="btn btn-primary">${random2}</button>
		<strong>=</strong> ${Math.floor(random1+random2)}
		`
		console.log(`Addition of ${random1} ${symbols[random]} ${random2} is ${Math.floor(random1+random2)}`)
		break;
		case "-":
		calc_area.innerHTML+=`
		<button type="button" class="btn btn-primary">${random1}</button>
		<button type="button" class="btn btn-primary">${symbols[random]}</button>
		<button type="button" class="btn btn-primary">${random2}</button>
		<strong>=</strong> ${Math.floor(random1-random2)}
		`
		console.log(`Subtraction of ${random1} ${symbols[random]} ${random2} is ${Math.floor(random1-random2)}`)
		break;
		case "*":
		calc_area.innerHTML+=`
		<button type="button" class="btn btn-primary">${random1}</button>
		<button type="button" class="btn btn-primary">${symbols[random]}</button>
		<button type="button" class="btn btn-primary">${random2}</button>
		<strong>=</strong> ${Math.floor(random1*random2)}
		`
		console.log(`Multiplication of ${random1} ${symbols[random]} ${random2} is ${Math.floor(random1*random2)}`)
		break;
		case "/":
		calc_area.innerHTML+=`
		<button type="button" class="btn btn-primary">${random1}</button>
		<button type="button" class="btn btn-primary">${symbols[random]}</button>
		<button type="button" class="btn btn-primary">${random2}</button>
		<strong>=</strong> ${Math.floor(random1/random2)}
		`
		console.log(`Division of ${random1} ${symbols[random]} ${random2} is ${Math.floor(random1/random2)}`)
		break;
	}
})




