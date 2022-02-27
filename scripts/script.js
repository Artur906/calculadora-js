let displayEl = document.getElementById("display")
let displayNumber = ""
let inputs = {
   tamanhoValues: 0,
   values: [0], 
   operations: []
}
let conta = 0
let on = false
let apaga = false

function render() {
   displayEl.textContent = displayNumber
}

function concatena(number) {
   
   if(on === true){
      if(displayNumber[displayNumber.length-1] === "." && number === "."){
         displayNumber = displayEl 
      }
      if(displayNumber === "0"){
         apaga = true
      }
      if(displayEl === "0" || apaga === true){
         displayNumber = ""
         if(apaga === true) {
            displayNumber += number
            inputs.values[inputs.tamanhoValues] = parseFloat(displayNumber)
            apaga = false
         }
         render()
      } else if (displayNumber.length < 7){
         displayNumber += number
         inputs.values[inputs.tamanhoValues] = parseFloat(displayNumber)
         console.log(inputs.tamanhoValues)
         console.log(inputs.values)
         render()
      }
   }
   
   
}

function somar() {
   if(on){
      if(displayNumber === "-"){
         displayNumber = "0"
      } else {
         inputs.operations.push("+")
      displayNumber = ""
      inputs.tamanhoValues++
      inputs.values.push(0)
      }
      
      render()
   } 
}
function subtrair() {
   if(on){
      if(inputs.tamanhoValues === 0){
         displayNumber = "-"
      } else {
         inputs.operations.push("-")
         displayNumber = ""
         inputs.tamanhoValues++
         inputs.values.push(0)
      }
      render()
   } 
   
}

function multiplicar() {
   if(on){
      if(displayNumber === "-"){
         displayNumber = "0"
      } else {
         inputs.operations.push("*")
         displayNumber = ""
         inputs.tamanhoValues++
         inputs.values.push(0)
      }
      render()
   } 
}

function dividir() {
   if(on){
      if(displayNumber === "-"){
         displayNumber = "0"
      } else {
         inputs.operations.push("/")
         displayNumber = ""
         inputs.tamanhoValues++
         inputs.values.push(0)
      }   
      render()
   } 
}

function calcular(limpa=false){
   if(on){
      let numberCounter = 0// serve pra saber o número de operações que estou fazendo
      let i = 0; // valor de indice da operação
      for(let j = 0; j < inputs.tamanhoValues+1; j++){
         switch(inputs.operations[i]){
            case '+': 
               conta += inputs.values[j] 
               numberCounter++
               if(numberCounter > 1){
                  i++
               }
               break; 
            case '-': 
               if(conta === 0) {
                  conta += inputs.values[j]
               } else {
                  conta -= inputs.values[j] 
               }
               numberCounter++
               if(numberCounter > 1){
                  i++
               }
               break; 
            case '*': 
               if(conta === 0) {
                  conta += inputs.values[j]
               } else {
                  conta *= inputs.values[j] 
               }
               numberCounter++
               if(numberCounter > 1){
                  i++
               }
               break; 
            case '/': 
               if(conta === 0) {
                  conta += inputs.values[j]
               } else {
                  conta /= inputs.values[j] 
               }
               numberCounter++
               if(numberCounter > 1){
                  i++
               }
               console.log(i + " " + inputs.operations)
               break; 
         }
      } 
      console.log(conta)
      console.log(inputs.values)
      if (limpa === true){
         displayNumber = conta
         apaga = true
         render()
      } 
      conta = 0 

   } 
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
   inputs.tamanhoValues = 0
   render()
   
}

function makeItZero() {
   if(on){
      limpar(true)
   }
}

function turnOn() {
   limpar(true)
   on = true
}

function turnOff() {
   limpar(false)
   on = false
}