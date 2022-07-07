var Letras;
(function (Letras) {
    function retornarLetras(carac) {
        console.log("A cadeia de caracteres passada \u00E9 ".concat(carac));
    }
    Letras.retornarLetras = retornarLetras;
})(Letras || (Letras = {}));
var ContarLetras;
(function (ContarLetras) {
    //Tornando o compnonent acessível fora do namespace com export
    function retornarLetras(carac) {
        var tamanhoNome = pegarLetras(carac);
        console.log("A cadeia de caracteres passada \u00E9 ".concat(carac, " com ").concat(tamanhoNome, " letras"));
    }
    ContarLetras.retornarLetras = retornarLetras;
    //Componenente indisponível fora do namespace
    function pegarLetras(mensagem) {
        return mensagem.length;
    }
})(ContarLetras || (ContarLetras = {}));
//retornarLetras('Gilberto');//erro
Letras.retornarLetras('Gilberto');
ContarLetras.retornarLetras('Adamastor');
