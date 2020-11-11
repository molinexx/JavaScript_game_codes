/*Popular song "99 bottles of beer".  */
function beer (){
    var i=99;
    while (i>0){
        var name="bottles";
        if (i===1){
            name="bottle";
        }
        console.log( i+" "+name+" of beer on the wall, "+i +" "+name+ " of beer");
        i--;
        if (i===0){
            i="no more"; name="bottles";
        }
        if (i===1){
            name="bottle";}
       console.log("Take one down, pass it around, "+i+" "+name+ " of beer on the wall.");
    }
}
beer()
