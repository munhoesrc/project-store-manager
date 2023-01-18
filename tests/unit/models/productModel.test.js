const { expect } = require('chai');
const { productModel } = require('../../../src/models');
const { listAllProducts, newProduct } = require('./mocks/productModel.mock');

const sinon = require('sinon');
const connection = require('../../../src/models/connection');

describe('Testes unitários da camada Model', function () {
  it('Recuperando lista com todos os produtos cadastrados', async function () {
    sinon.stub(connection, 'execute').resolves([listAllProducts]);
    const result = await productModel.showAllProducts();
    expect(result).to.be.deep.equal(listAllProducts);
  });

  it('Recuperando produto pelo seu ID', async function () {
    sinon.stub(connection, 'execute').resolves([[listAllProducts[0]]]);
    const result = await productModel.showProductById(1);
    expect(result).to.be.deep.equal(listAllProducts[0]);
  });

  it('Cadastrando novo produto', async function () {
    sinon.stub(connection, 'execute').resolves([{ insertId: 6 }]);
    const result = await productModel.createProduct(newProduct);
    expect(result).to.equal(6);
  });

  afterEach(function () {
    sinon.restore();
  });
});
