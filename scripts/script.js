let displayNumber = ""
let lastNumber = 0
let conta = 0
let operation = ""
let displayEl = document.getElementById("display")

function render() {
   displayEl.textContent = displayNumber
}

function concatena(number) {
   if(displayNumber == "0" && number == "0"){
      render()
      displayNumber = ""
   } else {
      displayNumber += number
      render()
   }
   
}

function somar() {
   conta += parseFloat(displayNumber)
   displayNumber = ""
   operation = "+"
   console.log(conta)
   render()
   
}
function subtrair() {
   conta -= parseFloat(displayNumber)
   displayNumber = ""
   operation = "-"
   console.log(conta)
   render()
   
}
function multiplicar() {
   conta *= parseFloat(displayNumber)
   displayNumber = ""
   operation = "*"
   console.log(conta)
   
}
function dividir() {
   conta /= parseFloat(displayNumber)
   displayNumber = ""
   operation = "/"
   console.log(conta)
   
}

function calcular(){
   switch(operation){
      case '+': 
         conta += parseFloat(displayNumber)
         break; 
      case '/': 
         conta /= parseFloat(displayNumber)
         break; 
      case '*': 
         conta *= parseFloat(displayNumber)
         break; 
      case '-': 
         conta -= parseFloat(displayNumber)
         break; 
   }
   displayNumber = conta
   conta = 0
   render()
}

function limpar() {
   displayNumber = ""
   conta = 0
   render()
}