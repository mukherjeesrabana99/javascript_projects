jokes=[
{
	"id":1,
	"author":"Author1",
	"joke":"Joke1",
},
{
	"id":2,
	"author":"Author2",
	"joke":"Joke2",
},
{
	"id":3,
	"author":"Author3",
	"joke":"Joke3",
},
{
	"id":4,
	"author":"Author4",
	"joke":"Joke4",
},
{
	"id":5,
	"author":"Author5",
	"joke":"Joke5",
},
{
	"id":6,
	"author":"Author6",
	"joke":"Joke6",
},
]
const joke=document.querySelector("#joke")
const author=document.querySelector("#author")
const btn=document.querySelector("#joke-btn")
let random=Math.floor(Math.random() *jokes.length)
console.log(random)
btn.addEventListener("click",()=>{
	joke.innerText=jokes[random].joke
	author.innerHTML=`Written By ${jokes[random].author}`
})

