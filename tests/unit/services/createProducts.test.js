const { expect } = require('chai');
const sinon = require('sinon');
const { productId2, newProduct } = require('../mocks')

const services = require('../../../services/products');
const model = require('../../../models/products');

describe('Verifica o service de criar um novo produto', () => {
  describe('Verifica o retorno do service', () => {
    before(() => {
      sinon.stub(model, 'createProduct').resolves(productId2)
    })

    after(() => {
      sinon.restore();
    })

    it('Verifica se retorna um objeto', async () => {
      const response = await services.createProduct(newProduct)
      expect(response).to.be.an('object')
    })

    it('Verifica se retorna se retorna um novo produto com seu ID', async () => {
      const response = await services.createProduct(newProduct)
      expect(response).to.be.equal(productId2)
    })
  })
})

