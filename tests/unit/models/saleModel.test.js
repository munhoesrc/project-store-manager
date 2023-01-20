const { expect } = require('chai');
const { saleModel } = require('../../../src/models');
const { allSaleMOCK } = require('./mocks/saleModel.mock');

const sinon = require('sinon');
const connection = require('../../../src/models/connection');

describe('Testes unitários para o saleModel', function () {
  it('Cadastrar venda com todas as informações corretas', async function () {
    const newSaleMock = [
      {
        productId: 1,
        quantity: 10,
      },
    ];
    sinon.stub(connection, 'execute').resolves([{ insertId: 3 }]);
    const result = await saleModel.createNewSale(newSaleMock);
    expect(result).to.equal(3);
  });

  it('Retornando lista com todas as vendas cadastradas no banco de dados', async function () {
    sinon.stub(connection, 'execute').resolves([allSaleMOCK]);
    const result = await saleModel.showAllSales();
    expect(result).to.deep.equal(allSaleMOCK);
  });

  afterEach(function () {
    sinon.restore();
  });
});