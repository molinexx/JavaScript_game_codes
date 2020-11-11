/*
Any number divisible by three is  replaced by the word Fizz,
  and any number divisible by five by the word Buzz. Numbers divisible by both three
  and five are replaced by FizzBuzz.
*/

function BuzzFizz(){
var container=[];
for (var x=1; x<=100; x++){
    var fizz=false;
    var buzz=false;
    if (x%3===0){
        fizz=true;
    }
    if(x%5===0){
        buzz=true;
    }
    if (fizz&& buzz){
        container.push("FizzBuzz.");
    }
    else if (fizz){
        container.push("Fizz.");
    }
    else if (buzz){
        container.push("Buzz.");
    }
    else {container.push(x);}
}
return (container)
}
console.log(BuzzFizz())
