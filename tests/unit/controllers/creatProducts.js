const { expect } = require('chai');
const sinon = require('sinon');
const { productId2 } = require('../mocks')

const services = require('../../../services/products');
const controllers = require('../../../controllers/products')

describe('Verifica o controller de criar novo produto', () => {
  describe('Verifica o retorno do controller', () => {
    const req = {}
    const res = {}
    before(() => {
      res.status = sinon.stub().returns(res)
      res.json = sinon.stub().returns(productId2)
      sinon.stub(services, 'createProduct').resolves(productId2)
    })

    after(() => {
      sinon.restore();
    })

    it('Verifica se retorna status 201', async () => {
      await controllers.createProduct(req, res)
      expect(res.status.calledWith(201)).to.be.equal(true)
    })

    it('Verifica se retorna o item inserido', async () => {
      await controllers.createProduct(req, res)
      expect(res.json.calledWith(productId2)).to.be.equal(true)
    })
  })
})

