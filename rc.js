function reverseString(str){
    var reverse = "";
    for(var i = 0; i<str.length; i++){
        var char = str[i];
        reverse = char + reverse ;
    }
    return reverse;
}
var mes = "hey bro"
var al = reverseString(mes);
console.log(al);