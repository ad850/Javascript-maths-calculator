const result = document.getElementById("result");
var oneN = document.getElementById("oneN");
var secN = document.getElementById("secN");
const butt = document.getElementById("butt");
const head = document.getElementById("head");


const add = document.getElementById("one");
const subtract = document.getElementById("two");
const division = document.getElementById("three");
const multiply = document.getElementById("four");
const modlous = document.getElementById("five");




add.addEventListener('click', () => { var first = Number(oneN.value); var sec = Number(secN.value); result.innerHTML = first + sec; });
subtract.addEventListener('click', () => { var first = Number(oneN.value); var sec = Number(secN.value); result.innerHTML = first - sec; });
division.addEventListener('click', () => { var first = Number(oneN.value); var sec = Number(secN.value); result.innerHTML = first / sec; });
multiply.addEventListener('click', () => { var first = Number(oneN.value); var sec = Number(secN.value); result.innerHTML = first * sec; });
modlous.addEventListener('click', () => { var first = Number(oneN.value); var sec = Number(secN.value); result.innerHTML = first % sec; });



