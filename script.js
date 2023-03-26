const totalText = document.getElementById('total')
const displayText = document.getElementById('display')
let num = ""
let operatorList=""
<<<<<<< HEAD
dotCounter = false


function addDigit(digit) {
    if(num==="0" && digit==="0") return
=======


function addDigit(digit) {
    if(digit==="." && num.slice(-1)===".") return
    if(num==="0" && digit==="0") return
    if(num==="0") num=""
>>>>>>> 6e09883ca13068beaf491590bbf94bbd14a543ab
    num+= digit
    result()
    return
}

function dot() {
    
    if(num==="") num="0"
    if (num.slice(-1)==="." || dotCounter=== true) return
    num+= "."
    dotCounter= true
    result()
    return
}

function operator(operator) {
    if (isNaN(parseInt(num.slice(-1,)))) return
    num+= operator
    operatorList+=operator
    dotCounter= false
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
    if (isNaN(parseInt(num.slice(-1,)))) num.slice(0,-1)
    displayText.innerHTML= num
    if(eval(num)=== undefined) return
    totalText.innerHTML= '=' + eval(num)
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
    dotCounter= false
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
