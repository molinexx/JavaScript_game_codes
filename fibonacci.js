
function fibonacciGenerator(n){
    var output=[]
    var sum=0;
    var second=1
    for (var i=0; i<n; i++){
        var first=sum;
        output.push(sum);
        sum=first+second ;
        second=first;
    }
     return(output)
}

console.log(fibonacciGenerator(20));
