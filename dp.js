var name = [3, 2, 1, 5, 5, 6, 7];
var uni = [];
for( var i =0; i<name.length; i++){
    var element = name[i];
    var index = uni.indexOf(element);
    if(index == -1){
        uni.push(element);

    }
}
console.log(uni)