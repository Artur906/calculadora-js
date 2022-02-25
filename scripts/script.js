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
      // if(inputs.values.length > 1 && inputs.values.length < 3){
      //    calcular()
      //    //
      // }else{
      //    calcular(true)
      //}
   }
   
   
}

function somar() {
   if(on){
      inputs.operations.push("+")
      displayNumber = ""
      inputs.tamanhoValues++
      inputs.values.push(0)
      render()
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
   if(on){
      inputs.operations.push("-")
      displayNumber = ""
      inputs.tamanhoValues++
      inputs.values.push(0)
      render()
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
   if(on){
      inputs.operations.push("*")
      displayNumber = ""
      inputs.tamanhoValues++
      inputs.values.push(0)
      render()
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
   if(on){
      inputs.operations.push("/")
      displayNumber = ""
      inputs.tamanhoValues++
      inputs.values.push(0)
      render()
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
   if(on){
      let numberCounter = 0// serve pra saber o número de operações que estou fazendo
      let i = 0; // valor de indice da operação
      for(let j = 0; j < inputs.tamanhoValues+1; j++){
         switch(inputs.operations[i]){
            case '+': 
               conta += inputs.values[j] 
               numberCounter++
               if(numberCounter % 2 === 0){
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
               if(numberCounter % 2 === 0){
                  i++
               }
               break; 
            case '*': 
               if(conta === 0) {
                  conta += inputs.values[j]
               }
               conta *= inputs.values[j] 
               numberCounter++
               if(numberCounter % 2 === 0){
                  i++
               }
               break; 
            case '/': 
               if(conta === 0) {
                  conta += inputs.values[j]
               }
               conta /= inputs.values[j] 
               numberCounter++
               if(numberCounter % 2 === 0){
                  i++
               }
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