//Aninhamento de componentes
//Criando alias de namespace
var AsLetras;
(function (AsLetras) {
    var Letras;
    (function (Letras) {
        function retornarLetras(carac) {
            console.log("A cadeia de caracteres passada \u00E9 ".concat(carac));
        }
        Letras.retornarLetras = retornarLetras;
    })(Letras = AsLetras.Letras || (AsLetras.Letras = {}));
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
    })(ContarLetras = AsLetras.ContarLetras || (AsLetras.ContarLetras = {}));
})(AsLetras || (AsLetras = {}));
var lts1 = AsLetras.Letras;
var lts2 = AsLetras.ContarLetras;
//retornarLetras('Gilberto');//erro: descomente para ver o erro
lts1.retornarLetras('Gilberto');
lts2.retornarLetras('Adamastor');
