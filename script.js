//1 Ounce = 28.35 gram.
// 1 pound = 453.6 gram.
let clickButton = document.getElementById('calculate');

clickButton.addEventListener("click", function (){
    let showAnswer = document.getElementById('result');
    let userValue = document.getElementById('bill')
    let userValue1 = userValue.value;

    let ounce = ((userValue1%453.6)/28.35).toFixed(1) ;
    let lbs = Math.floor((userValue1/453.6)) ;
    showAnswer.innerHTML =  'Weight - '+ lbs+' Lbs' +' : ' +ounce+' Oz';
    
});
