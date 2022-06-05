const form = document.getElementById('form');
const userGuess = document.getElementById('guess')
const answer = "prestige"
const movie1 = document.getElementById('movie')
const output = document.getElementById('output')

form.addEventListener('submit',(e) => {
    e.preventDefault();
    console.log(movie1.value)
    correctCheck(movie1)
})

function correctCheck(movie1){
    ;
    if(movie1.value == answer){
        console.log(24)
        output.innerHTML = "Correct";
    }
    else{
        output.innerHTML = "Oops try again";
    }
    
} 