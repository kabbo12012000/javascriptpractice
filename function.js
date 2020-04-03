function oddify(numss){
    
    if(numss%2 == 0){
        console.log(numss,': even number');
    }
    else{
        console.log(numss*2, ': odd number');
    }
}
function print(num){
    for (let i = 0; i < num.length; i++) {
        const nums = num[i];
        oddify(nums);
    }
    
}
var age = [10,20,30,25,98,99];
print(age);
