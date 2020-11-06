add_question_btn=document.querySelector("#add-question-btn")
question_container=document.querySelector("#question-container")
flashcard_container=document.querySelector("#flashcard-container")
add_question_btn.addEventListener("click", ()=>{
	let question_box=document.createElement("div")
	question_box.innerHTML=`
	<div class="card">
  <div class="card-header">
    <h5>Add Question</h5>
    <input type="text" id="question-input">
  </div>
  <div class="card-body">
    <h5 class="card-title">Add Answer</h5>
    <input type="text" id="answer-input">
    <button type="button" class="btn btn-primary" id="save-btn">Save</button>
  </div>
</div>
	`
	saveBtn=question_box.querySelector("#save-btn")
	question_input=question_box.querySelector("#question-input")
	answer_input=question_box.querySelector("#answer-input")
	console.log(question_input)
	saveBtn.addEventListener("click", ()=>{
		let flashCard=document.createElement("div")
		flashCard.innerHTML=`
		<div class="row">
		<div class="col-lg-4">
		<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Question</h5>
    <p class="card-text">${question_input.value}</p>
    <h5 class="card-title">Answer</h5>
    <p class="card-text" style="color:blue; cursor:pointer;" id="show-answer">show answer</p>
    <p id="answer-text" class="show hidden">${answer_input.value}</p>
    <button type="button" class="btn btn-primary" id="del-btn">Delete</button>
  </div>
</div>
</div>
</div>

		`
		question_input.value=""
		answer_input.value=""
		show_answer=flashCard.querySelector("#show-answer")
		answer_text=flashCard.querySelector("#answer-text")
		show_answer.addEventListener("click", ()=>{
			answer_text.classList.toggle("hidden")
			if (show_answer.innerHTML === "show answer") {
			    show_answer.innerHTML = "hide answer";
			  } else {
			    show_answer.innerHTML = "show answer";
			  }
		})
		del_btn=flashCard.querySelector("#del-btn")
		del_btn.addEventListener("click",()=>flashCard.remove())
		flashcard_container.appendChild(flashCard)
	})
	question_container.appendChild(question_box)
})