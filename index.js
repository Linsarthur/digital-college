for(let i = 1; i<= 10; i++){
    console.log(i)
}

for(let i = 10; i >= 1; i--){
    console.log(i)
}

for(let i = 1; i <= 20; i++){
    if(i % 2 == 0){
        console.log(i)
    }
    
}


for(let i = 1; i <= 20; i++){
    if(i % 2 == 1){
        console.log(i)
    }
    
}

    
let cont = 0
for(let i = 1; i <= 100; i++){
    cont  += i
}
console.log(cont)

let f = 5;
let produto = 1;

for(let c = 1; c <=f; c++){
    produto = produto * c
}
console.log(produto)


let casa = ["damasco", "banana", "acerola", "figo", "caja", "caju", "embauba"]
for(let i = 0; i < casa.length; i++){
    
console.log(casa[i])
}

let  frase = "Teste"
for(let i = 0; i < frase.length; i++){
    console.log(frase[i])
}




let nome = prompt("Digite una palavrita: ")
let vogal = ["a", "e", "i", "o", "u"]
const arrayDeLetras = nome.split("")
console.log(arrayDeLetras)

