let nacionalidade = prompt("Escreva aqui sua nacionalidade") //= adicione o prompt aqui

if (nacionalidade.toLowerCase() === "brasileiro"||nacionalidade.toLowerCase() === "brasileira"){
    console.log('Você é brasileiro(a)')
 }else if (nacionalidade.toLowerCase() === "argentino"||nacionalidade.toLowerCase() === "argentina") {
    console.log('Você é argentino(a)')
}else if (nacionalidade.toLowerCase() === "uruguaio"||nacionalidade.toLowerCase() === "uruguaia") {
    console.log('Você é uruguaio(a)')
}else if (nacionalidade.toLowerCase() === "chileno"||nacionalidade.toLowerCase() === "chilena") {
    console.log('Você é chicleno(a)')
}else if (nacionalidade.toLowerCase() === "colombiano"||nacionalidade.toLowerCase() === "colombiana") {
    console.log('Você é colombiano(a)')
}else {console.log('Nacionalidade não encontrada!') }
