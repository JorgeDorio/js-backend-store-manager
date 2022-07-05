const { expect } = require('chai');
const sinon = require('sinon');
const { allProducts } = require('../mocks')

const services = require('../../../services/products');
const model = require('../../../models/products');

describe('Verifica a função que recebe os dados', () => {
  describe('Verifica se retorna um array com os dados', () => {
    before(() => {
      sinon.stub(model, 'listProducts').resolves(allProducts)
    })

    after(() => {
      sinon.restore();
    })

    it('Verifica se a função retorna um array', async () => {
      const response = await services.listProducts()
      expect(response).to.be.an('array')
    })

    it('Verifica se o array contem todos os itens', async () => {
      const response = await services.listProducts()
      expect(response.length).to.be.equal(3)
    })
  })

  describe('Verifica a busca por id', () => {
    const id = 2;

    before(() => {
      sinon.stub(model, 'listProducts').resolves(allProducts);
    })

    after(() => {
      sinon.restore();
    })

    it('Verifica se a função retorna o item de acordo com o id', async () => {
      const response = await services.listProducts(id)
      expect(response.id).to.be.equal(id)
    })
  })
})

