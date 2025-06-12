let isClear = true; // the screen is clear

// Event handler for when a secondary button is clicked
function secondaryBtnClicked(buttonValue){
    // If the screen is clear
    if(isClear){
        document.getElementById('screen').value = buttonValue;
        isClear = false;
    }else{
        document.getElementById('screen').value = document.getElementById('screen').value + buttonValue;
    }
}

// Event handler for when the Cancel button is clicked
function acBtnClicked(){
    document.getElementById('screen').value = 0;
    isClear = true;
}

// Event handler for when the delete button is clicked
function delBtnClicked(){
    var currentDigit = document.getElementById('screen').value;
    var currentDigitLength = currentDigit.length;
    if (currentDigitLength === 1){
        document.getElementById('screen').value = 0;
        isClear = true;
    }else{
        document.getElementById('screen').value = currentDigit.slice(0,currentDigitLength-1);
    }
}

// Event handler for when an arithmetic operator button is clicked
function arithmeticOperatorBtnClicked(operatorValue){
    window.operator = operatorValue; // global variable
    window.digit1 = parseFloat(document.getElementById('screen').value); //global variable
    isClear = true;
}

// Event handler for when the equal button is clicked
function equalBtnClicked(){
   window.digit2 = parseFloat(document.getElementById('screen').value);

   switch(operator){
        case "+":
            answer = digit1 + digit2;
            break;
        case "-":
            answer = digit1 - digit2;
            break;
        case "/":
            answer = digit1 / digit2;
            break;
        case "*":
            answer = digit1 * digit2;
            break;
   }
   document.getElementById('screen').value = answer;
   // reset everything
   digit1 = 0;
   digit2 = 0;
   isClear = true;
}

