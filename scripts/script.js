let displayNumber = ""
let inputs = {
   values: [], 
   operations: []
}
let conta = 0
let apaga = false
let displayEl = document.getElementById("display")

function render() {
   displayEl.textContent = displayNumber
}

function concatena(number) {
   if(displayNumber === "0" && number === "0" || apaga === true){
      displayNumber = ""
      if(apaga === true) {
         displayNumber += number
      }
      render()
      apaga = false
   } else {
      displayNumber += number
      render()
   }
   
}

function somar() {
   inputs.values.push(parseFloat(displayNumber))
   inputs.operations.push("+")
   displayNumber = ""
   console.log(conta)
   render()
   
}
function subtrair() {
   inputs.values.push(parseFloat(displayNumber))
   inputs.operations.push("-")
   displayNumber = ""
   console.log(conta)
   render()
   
}
function multiplicar() {
   inputs.values.push(parseFloat(displayNumber))
   inputs.operations.push("*")
   displayNumber = ""
   console.log(conta)
   
}
function dividir() {
   inputs.values.push(parseFloat(displayNumber))
   inputs.operations.push("/")
   displayNumber = ""
   console.log(conta)
   
}

function calcular(){
   inputs.values.push(parseFloat(displayNumber))
   switch(inputs.operations[0]){
      case '+': 
      conta = inputs.values[0] + inputs.values[1] 
         break; 
      case '/': 
         conta = inputs.values[0] / inputs.values[1] 
         break; 
      case '*': 
         conta = inputs.values[0] * inputs.values[1] 
         break; 
      case '-': 
         conta = inputs.values[0] - inputs.values[1] 
         break; 
   }
   displayNumber = conta
   conta = 0
   inputs.values = []
   inputs.operations = []
   apaga = true
   render()
}

function limpar() {
   displayNumber = ""
   conta = 0
   render()
}