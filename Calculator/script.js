let currentNumber;
let addNumber;
let divideNumber;
let subtractNumber;
let multiplyNumber;
let finalNumber;
let lastNumber;

function Add1() {
  if(document.getElementById("CalcResults").innerHTML == "0" || document.getElementById("CalcResults").innerHTML == "NaN"){
    document.getElementById("CalcResults").innerHTML = "1"
  }else if(finalNumber != null){
    document.getElementById("CalcResults").innerHTML = "1"
    finalNumber = null
  }else{
    document.getElementById("CalcResults").innerHTML += 1
  }
}

function Add2() {
  if(document.getElementById("CalcResults").innerHTML == "0" || document.getElementById("CalcResults").innerHTML == "NaN"){
    document.getElementById("CalcResults").innerHTML = "2"
  }else if(finalNumber != null){
    document.getElementById("CalcResults").innerHTML = "3"
    finalNumber = null
  }else{
    document.getElementById("CalcResults").innerHTML += 2
  }
}

function Add3() {
  if(document.getElementById("CalcResults").innerHTML == "0" || document.getElementById("CalcResults").innerHTML == "NaN"){
    document.getElementById("CalcResults").innerHTML = "3"
  }else if(finalNumber != null){
    document.getElementById("CalcResults").innerHTML = "3"
    finalNumber = null
  }else{
    document.getElementById("CalcResults").innerHTML += 3
  }
}

function Add4() {
  if(document.getElementById("CalcResults").innerHTML == "0" || document.getElementById("CalcResults").innerHTML == "NaN"){
    document.getElementById("CalcResults").innerHTML = "4"
  }else if(finalNumber != null){
    document.getElementById("CalcResults").innerHTML = "4"
    finalNumber = null
  }else{
    document.getElementById("CalcResults").innerHTML += 4
  }
}

function Add5() {
  if(document.getElementById("CalcResults").innerHTML == "0" || document.getElementById("CalcResults").innerHTML == "NaN"){
    document.getElementById("CalcResults").innerHTML = "5"
  }else if(finalNumber != null){
    document.getElementById("CalcResults").innerHTML = "5"
    finalNumber = null
  }else{
    document.getElementById("CalcResults").innerHTML += 5
  }
}

function Add6() {
  if(document.getElementById("CalcResults").innerHTML == "0" || document.getElementById("CalcResults").innerHTML == "NaN"){
    document.getElementById("CalcResults").innerHTML = "6"
  }else if(finalNumber != null){
    document.getElementById("CalcResults").innerHTML = "6"
    finalNumber = null
  }else{
    document.getElementById("CalcResults").innerHTML += 6
  }
}

function Add7() {
  if(document.getElementById("CalcResults").innerHTML == "0" || document.getElementById("CalcResults").innerHTML == "NaN"){
    document.getElementById("CalcResults").innerHTML = "7"
  }else if(finalNumber != null){
    document.getElementById("CalcResults").innerHTML = "7"
    finalNumber = null
  }else{
    document.getElementById("CalcResults").innerHTML += 7
  }
}

function Add8() {
  if(document.getElementById("CalcResults").innerHTML == "0" || document.getElementById("CalcResults").innerHTML == "NaN"){
    document.getElementById("CalcResults").innerHTML = "8"
  }else if(finalNumber != null){
    document.getElementById("CalcResults").innerHTML = "8"
    finalNumber = null
  }else{
    document.getElementById("CalcResults").innerHTML += 8
  }
}

function Add9() {
  if(document.getElementById("CalcResults").innerHTML == "0" || document.getElementById("CalcResults").innerHTML == "NaN"){
    document.getElementById("CalcResults").innerHTML = "9"
  }else if(finalNumber != null){
    document.getElementById("CalcResults").innerHTML = "9"
    finalNumber = null
  }else{
    document.getElementById("CalcResults").innerHTML += 9
  }
}


function Add0() {
  if(document.getElementById("CalcResults").innerHTML == "0"){
    document.getElementById("CalcResults").innerHTML = "0"
  }else if(document.getElementById("CalcResults").innerHTML == "00" || document.getElementById("CalcResults").innerHTML == "NaN"){
    document.getElementById("CalcResults").innerHTML = "0"
  }else if(finalNumber != null){
    document.getElementById("CalcResults").innerHTML = "0"
    finalNumber = null
  }else{
    document.getElementById("CalcResults").innerHTML += 0
  }
}

function AddDecimal() {
  if(document.getElementById("CalcResults").innerHTML == "." || document.getElementById("CalcResults").innerHTML == "NaN"){
    document.getElementById("CalcResults").innerHTML = "0."
  }else if(document.getElementById("CalcResults").innerHTML.includes(".")){
    return;
  }else if(finalNumber != null){
    document.getElementById("CalcResults").innerHTML = "."
    finalNumber = null
  }else{
    document.getElementById("CalcResults").innerHTML += "."
  }
}


function Addition() {
  if (divideNumber != null || subtractNumber != null || multiplyNumber != null) return;
  addNumber = document.getElementById("CalcResults").textContent
  document.getElementById("CalcResults").innerHTML = "0"

}

function Divide() {
  if (addNumber != null || subtractNumber != null || multiplyNumber != null) return;
  divideNumber = document.getElementById("CalcResults").textContent
    document.getElementById("CalcResults").innerHTML = "0"

}

function Multiply() {
  if (addNumber != null || divideNumber != null || subtractNumber != null) return;
  multiplyNumber = document.getElementById("CalcResults").textContent
    document.getElementById("CalcResults").innerHTML = "0"

}

function Subtract() {
  if (addNumber != null || divideNumber != null || multiplyNumber != null) return;
  subtractNumber = document.getElementById("CalcResults").textContent
  document.getElementById("CalcResults").innerHTML = "0"
}



function Result() {
  
  currentNumber = document.getElementById("CalcResults").textContent
  if(addNumber == null && subtractNumber == null && divideNumber == null && multiplyNumber == null) return document.getElementById("CalcResults").innerHTML = currentNumber;
  if(addNumber != null){
    finalNumber = parseFloat(addNumber) + parseFloat(currentNumber)
    document.getElementById("CalcResults").innerHTML = finalNumber
    lastNumber = finalNumber
    addNumber = null
  }else if(divideNumber != null){
    finalNumber = parseFloat(divideNumber) / parseFloat(currentNumber)
    document.getElementById("CalcResults").innerHTML = finalNumber
    lastNumber = finalNumber
    divideNumber = null
  }else if(multiplyNumber != null){
    finalNumber = parseFloat(multiplyNumber) * parseFloat(currentNumber)
    document.getElementById("CalcResults").innerHTML = finalNumber
    lastNumber = finalNumber
    multiplyNumber = null
  }else if(subtractNumber != null){
    finalNumber = parseFloat(subtractNumber) - parseFloat(currentNumber)
    document.getElementById("CalcResults").innerHTML = finalNumber
    lastNumber = finalNumber
    subtractNumber = null
  }else if(addNumber == null){
    finalNumber = parseFloat(lastNumber) + parseFloat(currentNumber)
    document.getElementById("CalcResults").innerHTML = finalNumber
  }else if(divideNumber == null){
    finalNumber = parseFloat(lastNumber) / parseFloat(currentNumber)
    document.getElementById("CalcResults").innerHTML = finalNumber
  }else if(multiplyNumber == null){
    finalNumber = parseFloat(lastNumber) * parseFloat(currentNumber)
    document.getElementById("CalcResults").innerHTML = finalNumber
  }else if(subtractNumber == null){
    finalNumber = parseFloat(lastNumber) - parseFloat(currentNumber)
    document.getElementById("CalcResults").innerHTML = finalNumber
  }else if(lastNumber == null){
    document.getElementById("CalcResults").innerHTML = parseFloat(currentNumber)
  }
}

function Reset() {
  document.getElementById("CalcResults").innerHTML = "0"
  divideNumber = null;
  multiplyNumber = null;
  subtractNumber = null;
  addNumber = null;
  finalNumber = null;
  lastNumber = null;
}
