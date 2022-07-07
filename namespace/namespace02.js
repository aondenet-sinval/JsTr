//Aninhamento de componentes
var Letras;
(function (Letras) {
    function retornarLetras(carac) {
        console.log("A cadeia de caracteres passada \u00E9 ".concat(carac));
    }
    Letras.retornarLetras = retornarLetras;
    var ContarLetras;
    (function (ContarLetras) {
        //Tornando o component acessível fora do namespace com export
        function retornarLetras(carac) {
            var tamanhoNome = pegarLetras(carac);
            console.log("A cadeia de caracteres passada \u00E9 ".concat(carac, " com ").concat(tamanhoNome, " letras"));
        }
        ContarLetras.retornarLetras = retornarLetras;
        //Componente indisponível fora do namespace
        function pegarLetras(mensagem) {
            return mensagem.length;
        }
    })(ContarLetras = Letras.ContarLetras || (Letras.ContarLetras = {}));
})(Letras || (Letras = {}));
//retornarLetras('Gilberto');//erro: descomente para ver o erro
Letras.retornarLetras('Gilberto');
Letras.ContarLetras.retornarLetras('Adamastor');
