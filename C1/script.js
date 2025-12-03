for( let i = 1 ; i<101 ; i++){
    let div = document.createElement("div")
    let number = ""
    if(i%3 === 0 && i%5===0){
        number = 'FizzBuzz'
        //console.log('FizzBuzz')
    }
    else if(i%5===0){
        number = 'Buzz'
        //console.log('Buzz')
    }
    else if(i%3===0){
        number = 'Fizz'
        //console.log('Fizz')
    }
    else{
        number = i
        //console.log(i)
    }
    div.textContent = number;
    document.body.appendChild(div);
}
    
