function reverseString(str: String): String{
    let palavra = " ";
    for(let i =  str.length -1; i >= 0; i--){
        palavra += str[i];
    }
    return palavra;
}

console.log(reverseString("Vinicius"))
