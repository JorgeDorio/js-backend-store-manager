const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../models/connection');
const { allProducts, productId2, messageProductNotFound } = require('../mocks')

const {serviceListProducts} = require('../../../services/serviceListProducts');
const modelListProducts = require('../../../models/modelListProducts');

describe('Verifica a função que recebe os dados', () => {
  describe('Verifica se retorna um array com os dados', () => {
    before(() => {
      sinon.stub(connection, 'query').resolves([allProducts])
    })

    after(() => {
      sinon.restore();
    })

    it('Verifica se a função retorna um array', async () => {
      const response = await serviceListProducts()
      expect(response).to.be.an('array')
    })
    it('Verifica se o array contem todos os itens', async () => {
      const response = await serviceListProducts()
      expect(response.length).to.be.equal(3)
    })
  })

  describe('Verifica a busca por id', () => {
    const id = 2;

    before(() => {
      sinon.stub(modelListProducts, 'modelListAllProducts').resolves(allProducts);
    })

    after(() => {
      sinon.restore();
    })

    it('Verifica se a função retorna o item de acordo com o id', async () => {
      const response = await serviceListProducts(id)
      expect(response.id).to.be.equal(id)
    })
  })
})

