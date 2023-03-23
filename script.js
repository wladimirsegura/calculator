const totalText = document.getElementById('total')
const displayText = document.getElementById('display')
let num = ""

function addDigit(digit) {
    num+= digit
    displayText.innerHTML= num
    result()
    return
}

function operator(operator) {
    if (isNaN(parseInt(num.slice(-1,)))) return
    num+= operator
    displayText.innerHTML= num
    return
}

function allClear() {
    num = ""
    displayText.innerHTML= "0"
    totalText.innerHTML= ""
    return
}

function result() {
    show = num
    if (isNaN(parseInt(num.slice(-1,)))) show= num.slice(0,-1)
    totalText.innerHTML= '=' + eval(show)
    return
}

function del() {
    num= num.slice(0,-1)
    if (num==='') num= '0'
    displayText.innerHTML= num
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