const { expect } = require('chai');
const sinon = require('sinon');
const { allProducts } = require('../mocks')
const services = require('../../../services/products')
const controllers = require('../../../controllers/products');
const mock = require('../mocks')

describe('Verifica o controller para receber os produtos', () => {
  describe('Verifica se retorna todos os produtos', () => {
    const req = {}
    const res = {}
    before(() => {
      res.status = sinon.stub().returns(res)
      res.json = sinon.stub().returns(allProducts)
      sinon.stub(services, 'listProducts').resolves(allProducts)
    })

    after(() => sinon.restore())
    it('Verifica se retorna status 200', async () => {
      await controllers.getAllProducts(req, res)
      expect(res.status.calledWith(200)).to.be.equal(true)
    })
    it('Verifica se retorna todos os itens', async () => {
      await controllers.getAllProducts(req, res)
      expect(res.json.calledWith(allProducts)).to.be.equal(true)
    })
  })

  describe('Verifica se filtra o produto por id', () => {
    const req = {}
    const res = {}

    before(() => {
      res.status = sinon.stub().returns(res)
      res.json = sinon.stub().returns(allProducts)
      req.data = mock.productId2
    })

    after(() => sinon.restore())

    it('Verifica se retorna status 200', async () => {
      await controllers.getProductById(req, res)
      expect(res.status.calledWith(200)).to.be.equal(true)
    })
    it('Verifica se retorna todos os itens', async () => {
      await controllers.getProductById(req, res)
      expect(res.json.calledWith(mock.productId2)).to.be.equal(true)
    })

  })

})
