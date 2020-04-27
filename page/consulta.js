const axios = require('axios');
const chai = require('chai');
const { URL_API, ENDPOINT } = require('../constants/acesso.js')
const { gravaArquivo } = require('../report/gravaArquivo.js');
var expect = chai.expect;
var endpoint_selecionado = ENDPOINT;

class Consulta {
    acessaApi(endpoint = endpoint_selecionado, variavel) {
        if (endpoint == endpoint_selecionado && variavel == null) {
            return axios.get(URL_API + '/' + endpoint_selecionado).then(function(response) {
                expect(response.status).to.equal(200);
                return response.data;
            });
        } else if (endpoint != null || variavel != null) {
            endpoint_selecionado = endpoint_selecionado + variavel
            return axios.get(URL_API + '/' + endpoint_selecionado).then(function(response) {
                expect(response.status).to.equal(200);
                return response.data;
            });
        } else {
            console.log('Para efetuar o teste é necessario inserir pelo menos o endpoint')
        }

    }

};

module.exports = {
    Consulta
};
