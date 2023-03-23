
var num = 0
var num2 = 0
var prevOperator = "+"
var display = document.getElementById("display")

// enter a Number, multiply to 10 and add new number
function addDigit (digit) {
    num= num*10 + digit
    actual = display.innerHTML
    console.log(actual)
    display.innerHTML=actual.substr(0,actual.length-1)
    show()
    return num
}

function show() {
    console.log(display.innerHTML)
    if (display.innerHTML==="0"){
        display.innerHTML=""
    }
    display.insertAdjacentText("beforeend", num)
    console.log(display.innerHTML)
return
} 

function clearNum() {
    num = 0
    show()
    return
}

function calc(operator) {
    switch(prevOperator){
        case "+":
            num2 += num;
            break;
        case "-":
            num2 -= num;
            break;
        case "*":
            num2 *= num;
            break;
        case "/":
            num2 /= num;
            break;
        case "=":
            break;
            

        }
    num= 0;
    prevOperator= operator;
    // display.insertAdjacentText("beforeend",operator )
    display.innerHTML= num2+operator+" ";
    return

}

