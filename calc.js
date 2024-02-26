let display = document.querySelector(".display");
let MC = document.querySelector(".MC");
let M = document.querySelector(".M");
let division = document.querySelector(".division");
let times = document.querySelector(".times");
let seven = document.querySelector(".seven");
let eight = document.querySelector(".eight");
let nine = document.querySelector(".nine");
let minus = document.querySelector(".minus");
let four = document.querySelector(".four");
let five = document.querySelector(".five");
let six = document.querySelector(".six");
let plus = document.querySelector(".plus");
let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let equal = document.querySelector(".itemss");
let zero = document.querySelector(".itemsss");
let dot = document.querySelector(".dot");

seven.addEventListener("click", ()=>{
    display.value += '7';
})

six.addEventListener("click", ()=>{
    display.value += '6';
})

five.addEventListener("click", ()=>{
    display.value += '5';
})
four.addEventListener("click", ()=>{
    display.value += '4';
})
three.addEventListener("click", ()=>{
    display.value += '3';
})
two.addEventListener("click", ()=>{
    display.value += '2';
})
one.addEventListener("click", ()=>{
    display.value += '1';
})
zero.addEventListener("click", ()=>{
    display.value += '0';
})
eight.addEventListener("click", ()=>{
    display.value += '8';
})
nine.addEventListener("click", ()=>{
    display.value += '9';
})
plus.addEventListener("click", ()=>{
    display.value += '+';
})
minus.addEventListener("click", ()=>{
    display.value += '-';
})
times.addEventListener("click", ()=>{
    display.value += '*';
})
division.addEventListener("click", ()=>{
    display.value += '/';
})
dot.addEventListener("click", ()=>{
    display.value += '.';
})
equal.addEventListener("click", ()=>{
    display.value = eval(display.value);


})
MC.addEventListener("click", ()=>{
    display.value ='' ;
})
M.addEventListener("click", ()=>{
    display.value = Array(display.value.slice(0, -1));
})


