const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../models/connection');
const model = require('../../../models/products');
const mocks = require('../mocks')

describe('Verifica se cria um novo item', () => {
  describe('', () => {
    before(() => {
      sinon.stub(connection, 'execute').resolves(mocks.insertReturn)
    })

    after(() => {
      connection.execute.restore();
    })

    it('Verifica se insere um novo produto', async () => {
      const name = 'Batmovel';
      const affectedRow = await model.insertProduct(name)
      expect(affectedRow).to.be.equal(1)
    })
  })
  describe('', () => {
    before(() => {
      sinon.stub(connection, 'query').resolves(mocks.returnNewProduct)
    })

    after(() => {
      connection.query.restore()
    })

    it('Verifica se retorna o produto inserido', async () => {
      const name = 'Batmovel';
      const response = await model.createProduct(name);
      expect(response.id).to.be.not.equal(undefined)
      expect(response.name).to.be.equal(name)
    })
  })
})
