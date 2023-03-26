const totalText = document.getElementById('total')
const displayText = document.getElementById('display')
let num = ""
let operatorList=""


function addDigit(digit) {
    if(digit==="." && num.slice(-1)===".") return
    if(num==="0" && digit==="0") return
    if(num==="0") num=""
    num+= digit
    result()
    return
}

function operator(operator) {
    if (isNaN(parseInt(num.slice(-1,)))) return
    num+= operator
    operatorList+=operator
    if(operator===".") operatorList.pop()
    console.log(num)
    displayText.innerHTML= num
    return
}


function allClear() {
    num = ""
    operatorList=""
    displayText.innerHTML= "0"
    totalText.innerHTML= ""
    return
}

function result() {
    show = num
    if (isNaN(parseInt(num.slice(-1,)))) show= num.slice(0,-1)
    displayText.innerHTML= num
    totalText.innerHTML= '=' + eval(show)
    return
}

function del() {
    num= num.slice(0,-1)
    if (num==='') num= '0'
    result()
    return
}

function equals() {
    if (num==='') return
    if (isNaN(parseInt(num.slice(-1,)))) num= num.slice(0,-1)
    displayText.innerHTML= '=' + eval(num)
    num= ''
    totalText.innerHTML= ''
    return
}

function percent(){
    if (isNaN(parseInt(num.slice(-1,)))) return
    lastOperatorIndex= num.lastIndexOf(operatorList.slice(-1))
    lastNumber= num.slice(lastOperatorIndex+1,)
    perc=parseFloat(lastNumber)/100
    num= num.replace(lastNumber,perc)
    result()

}
