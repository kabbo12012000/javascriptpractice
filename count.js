var name="kabbo. jdfnj rj kgj . ";   
var count = 0;
for(var i=0; i<name.length; i++){
    var char = name[i];
    if(char == " "&& name[i-1] != " ")
    {
        count++;

    }
    
}
count++;
console.log(count);