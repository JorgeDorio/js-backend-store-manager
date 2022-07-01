const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../models/connection');
const { allProducts } = require('../mocks')

const { modelListAllProducts } = require('../../../models/modelListProducts');

describe('Verifica a função que recebe os dados', () => {
  describe('Verifica se retorna um array com os dados', () => {
    before(() => {
      sinon.stub(connection, 'query').resolves([allProducts])
    })

    after(() => {
      connection.query.restore();
    })
    it('Verifica se a função retorna um array', async () => {
      const response = await modelListAllProducts()
      expect(response).to.be.an('array')
    })
    it('Verifica se o array contem todos os itens', async () => {
      const response = await modelListAllProducts()
      expect(response.length).to.be.equal(3)
    })
  })

  describe('Verifica o retorno quando não há dados', () => {
    before(() => {
      sinon.stub(connection, 'query').resolves([])
    })

    it('Verifica se a função retorna undefined', async () => {
      const response = await modelListAllProducts()
      expect(response).to.be.equal(undefined)
    })

    after(() => {
      connection.query.restore();
    })
  })
})

