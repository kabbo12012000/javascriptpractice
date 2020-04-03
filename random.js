
function  getArraySum(marks){
    var sum=0;
for(var i = 0 ; i< marks.length; i++){
    var element = marks[i];
    sum = sum + element ;
}
    return sum;
}
var marks = [45, 5, 65, 98, 65, 54, 16, 54];
var result = getArraySum(marks);

console.log(result);

