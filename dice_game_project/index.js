//here we are to change the pictures at every refresh...so weneed to change the src of the img-->that iswe need to change
// thedice"1".png part
//randomsrc=`images/dice${Math.floor(Math.random()*6)+1)}.png`
//randomsrc=
//console.log(randomsrc)
randomnum1=Math.floor((Math.random()*6)+1)
randomnum2=Math.floor((Math.random()*6)+1)
console.log(randomnum1, randomnum2)
document.querySelectorAll('img')[0].setAttribute("src","images/dice"+randomnum1+".png")
document.querySelectorAll('img')[1].setAttribute("src","images/dice"+randomnum2+".png")
if(randomnum1>randomnum2){
	document.querySelector('h1').innerHTML="Player 1 won"
}
else if(randomnum1<randomnum2){

	document.querySelector('h1').innerHTML="Player 2 won"
}

else{
	document.querySelector('h1').innerHTML="It's a Draw"

}