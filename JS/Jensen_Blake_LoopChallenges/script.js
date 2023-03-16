
// #1 -------
for (i = 1; i < 20; i += 2) {
    console.log(i);
}

// #2 -------
for (i = 100; i > 0; i--){
    if(i % 3 == 0){
        console.log(i);
    }
}

//  #3 ------
for (i = 4; i > -4; i -= 1.5){
    console.log(i);
}

//  #4 ------
var sum = 0
for (i = 1; i <= 100; i++){
    sum += i;   
}
console.log(sum);

//  #5 ------
product = 1
for (i = 1; i <= 12; i++){
    product = product * i;
}
console.log(product)