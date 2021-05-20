const { expect } = require('chai')
const { ethers } = require('ethers')

describe('Calculator', function () {
  const nb1 = Math.random(-10, 10)
  const nb2 = Math.random(-10, 10)
  it("Should return same result for add", async function () {
    const Calc = await ethers.getContractFactory('Calculator')
    const calc = await Calc.deploy()
    await calc.deployed()
    expect(await calc.add(nb1, nb2)).to.equal(nb1 + nb2)
  })
  it("Should return same result for sub", async function () {
    const Calc = await ethers.getContractFactory('Calculator')
    const calc = await Calc.deploy()
    await calc.deployed()
    expect(await calc.sub(nb1, nb2)).to.equal(nb1 - nb2)
  })
  it("Should return same result for mul", async function () {
    const Calc = await ethers.getContractFactory('Calculator')
    const calc = await Calc.deploy()
    await calc.deployed()
    expect(await calc.mul(nb1, nb2)).to.equal(nb1 * nb2)
  })
  it("Should return same result for div", async function () {
    const Calc = await ethers.getContractFactory('Calculator')
    const calc = await Calc.deploy()
    await calc.deployed()
    expect(await calc.div(nb1, nb2)).to.equal(nb1 / nb2)
  })
  it("Should return same result for mod", async function () {
    const Calc = await ethers.getContractFactory('Calculator')
    const calc = await Calc.deploy()
    await calc.deployed()
    expect(await calc.div(nb1, nb2)).to.equal(nb1 % nb2)
  })
})