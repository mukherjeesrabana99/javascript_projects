const btns=document.querySelectorAll(".btn")
body=document.querySelector("body")
btns.forEach(btn=>{
	btn.addEventListener("click", function(){
		switch(this.id){
			case "blue":
			console.log("blue clicked");
			body.style.backgroundColor=this.id

			break;
			case "green":
			console.log("green clicked");
			body.style.backgroundColor=this.id
			break;
			case "red":
			console.log("red clicked");
			body.style.backgroundColor=this.id
			break;
			case "yellow":
			console.log("yellow clicked");
			body.style.backgroundColor=this.id
			break;
		}
	})
})