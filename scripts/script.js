let ligado = false
let displayNumber = ""
let nameIt = 0 // variavel que armazena o valor da tela, fiquei sem ideia pra nomear ela
let inputs = {
   values: [], 
   operations: ""
}
let conta = 0
let apaga = false
let displayEl = document.getElementById("display")

function render() {
   displayEl.textContent = displayNumber
}

function concatena(number) {
   if(ligado === true){
      if(displayNumber === "0"){
      apaga = true
      }
      if(displayEl === "0" || apaga === true){
      displayNumber = ""
         if(apaga === true) {
            displayNumber += number
            nameIt = parseFloat(displayNumber)
            apaga = false
         }
         render()
      } else if (displayNumber.length < 7){
         displayNumber += number
         nameIt = parseFloat(displayNumber)
         render()
      }
   }
   
   
}

function somar() {
   if(ligado){
      alert("Ainda não funciona direito")
   } 
   // inputs.operations = "+"
   // if(inputs.values.length === 2) {
   //    inputs.values[0] = inputs.values[1]
   //    inputs.values[1] = nameIt
   //    calcular()
   // } else {
   //    inputs.values.push(nameIt)
   //    displayNumber = ""
   //    console.log(conta)

   //    render()
   // }  
}
function subtrair() {
   if(ligado){
      alert("Ainda não funciona direito")
   } 
   // inputs.operations = "-"
   // if(inputs.values.length === 2) {
   //    inputs.values[0] = inputs.values[1]
   //    inputs.values[1] = nameIt
   //    calcular()
   // } else {
   //    inputs.values.push(nameIt)
   //    displayNumber = ""
   //    console.log(conta)
   //    render()
   // }
   
}
function multiplicar() {
   if(ligado){
      alert("Ainda não funciona direito")
   } 
   // inputs.operations = "*"
   // if(inputs.values.length === 2) {
   //    inputs.values[0] = nameIt
   //    calcular()
   // } else {
   //    inputs.values.push(nameIt)
   //    displayNumber = ""
   //    console.log(conta)
   //    render()
   // }
}
function dividir() {
   if(ligado){
      alert("Ainda não funciona direito")
   } 
// inputs.operations = "/"
   // if(inputs.values.length === 2) {
   //    inputs.values[0] = inputs.values[1]
   //    inputs.values[1] = nameIt
   //    calcular()
      
   // } else {
   //    inputs.values.push(nameIt)
   //    displayNumber = ""
   //    console.log(conta)
   //    render()
   // }
}

function calcular(limpa=false){
   if(ligado){
      alert("Ainda não funciona direito")
   } 
   // if(inputs.values.length < 2){
   //    inputs.values.push(nameIt)
   // }
   // switch(inputs.operations){
   //    case '+': 
   //       conta = inputs.values[0] + inputs.values[1] 
   //       break; 
   //    case '/': 
   //       conta = inputs.values[0] / inputs.values[1] 
   //       break; 
   //    case '*': 
   //       conta = inputs.values[0] * inputs.values[1] 
   //       break; 
   //    case '-': 
   //       conta = inputs.values[0] - inputs.values[1] 
   //       break; 
   // }  
   // displayNumber = conta
   // if(inputs.values.length == 2){
   //    inputs.values[1] = conta
   // }
   // apaga = true
   // if(limpa === true){
   //    limpar(true)
   // }
   // render()
}

function limpar(zero=true) {
   if (zero === true){
      displayNumber = "0"
   } else {
      displayNumber = ""
   }
   conta = 0
   inputs.values = []
   inputs.operations = []
   render()
}

function makeItZero() {
   if(ligado){
      limpar(true)
   }
}

function turnOn() {
   limpar(true)
   ligado = true
}

function turnOff() {
   limpar(false)
   ligado = false
}