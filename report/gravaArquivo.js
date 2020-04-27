const fs = require('fs');

function gravaArquivo(nomeArquivo, corpoResposta) {
    fs.writeFile('report/' + nomeArquivo + '.json', JSON.stringify(corpoResposta, null, 2), function(err) {
        if (err) {
            var response = { status: 'falha', resultado: err };
            console.log(response);
        } else {
            var response = { status: 'sucesso', resultado: 'resultado gravado com sucesso.' };
            console.log(response);
        }
        //console.log('Aquivo com nome $('nomeArquivo') foram gravados');
        console.log('Aquivo gravados');
    });
}

module.exports = {
    gravaArquivo
}