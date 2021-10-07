const button = document.querySelector('#button')
const input = document.querySelector('#input')
const num = document.querySelector('#number')

//returns the count of vowels (not case sensetive becouse of 'ig')
function getCount(){
	//Don't use return because it will end the function
	(num.textContent = (input.value.match(/[aeiou]/ig)).length)
	input.value = "";
}

//Allows the use of button
button.addEventListener("click", getCount)
//Allows the use of enter key
input.addEventListener("keyup", function keyPress(){
	if(event.keyCode === 13){
		getCount()
	}
})

















//3) erase the input on each try 
