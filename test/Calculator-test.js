const { expect } = require('chai')
const { ethers } = require('hardhat')

describe('Calculator', function () {
  beforeEach(async function () {
    this.Calculator = await ethers.getContractFactory('Calculator');
    this.calculator = await this.Calculator.deploy();
    await this.calculator.deployed();
  })
  it("Should return same result for add", async function () {
    expect(await this.calculator.add(10, 5)).to.equal(15)
  })
  it("Should return same result for sub", async function () {
    expect(await this.calculator.sub(10, 5)).to.equal(5)
  })
  it("Should return same result for mul", async function () {
    expect(await this.calculator.mul(10, 5)).to.equal(50)
  })
  it("Should return same result for div", async function () {
    expect(await this.calculator.div(10, 5)).to.equal(2)
  })
  it("Should return same result for mod", async function () {
    expect(await this.calculator.mod(10, 5)).to.equal(0)
  })
})