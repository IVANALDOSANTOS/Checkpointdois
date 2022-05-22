function numerointeiro (numero1 , numero2 , numero3){

    if (numero1 > numero2 && numero1 > numero3){
        return numero1
    }
    else if (numero2 >numero1 && numero2 > numero3){
        return numero2
    }
    else {
        return numero3}
    }
    
    console.log (numerointeiro (8 , 8 , 8))
    
 
    
    let idade = 61
    
    if(idade >= 18 && idade <= 61){
        console.log("Você pode doar sangue")
    }
    else {
        console.log("Não está permitido")
    }
    
  
    
    let valor = -1
    
    if(valor >= 0){
        console.log("O valor é positivo")
    }else {
        console.log("O valor é negativo")
    }
    
    
    function media (nota1 , nota2){
    
    
    if ((nota1 + nota2) / 2 === 10){
        return "Aprovado com Distinção"
    }else if ((nota1 + nota2) / 2 >= 7){
        return "Parabéns voçê foi Aprovado!"
    }else {
        return "Infelizmente voçê foi Reprovado"
    }
    }
    console.log(media (5 , 5))