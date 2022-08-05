let idade = prompt("qual a sua idade?");
let isMaiorIdade = prompt('terminou o ensino médio?');
let isCursandoOutraFaculdade = prompt ('esta cursando alguma faculdade?');

if(idade>=18){
    console.log('Você tem 18 anos ou mais!')
}else{
    console.log('Você tem menos de 18 anos!')
};
if(isMaiorIdade==='sim'){
    console.log('Você terminou o ensino médio!')
}else{
    console.log('Você não terminou o ensino médio')
}
if(isCursandoOutraFaculdade==='nao'){
    console.log('você NÃO está cursando uma faculdade')
}else{
    console.log('você está cursando uma faculdade')
}