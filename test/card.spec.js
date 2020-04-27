const { Consulta } = require('../page/consulta.js');
const { gravaArquivo } = require('../report/gravaArquivo.js');
const dadosAcesso = require('../data/dadosAcesso')
const axios = require('axios');
const should = require('should');
const chai = require('chai');
const { assert } = require('chai');
var expect = chai.expect;


describe("Testar API <api>", () => {
    const consulta = new Consulta();
    it("Deve receber  <QUANTIDADE> do valor", () => {
        consulta.acessaApi().then(function(resultado) {
            if (resultado.should.have.property('<VALOR>')) {
                const valida = expect(resultado.cards).to.have.lengthOf.at.most('<QUANTIDADE>');
                gravaArquivo('resultado_100', valida);
            }
        });
    });

    it("Deve receber o valor '<VALOR_ESPERADO>' ", async() => {
        await new Promise(resolve => resolve());
        const resultado = await consulta.acessaApi(0, '?name=' + dadosAcesso.teste.name);
        if (resultado.should.have.property('cards')) {
            expect(resultado.teste).to.have.lengthOf.at.least(1);
            expect(resultado.teste[0].artist).to.equal(dadosAcesso.teste.artist);
            const validaNome = expect(resultado.cards[0].name).to.equal(dadosAcesso.teste.name);
            gravaArquivo('resultado_name', validaNome);
        }
    }).timeout(25000);

});
