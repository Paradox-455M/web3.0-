

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity:'0.8.0',
  networks:{
    goerli:{
      url:'https://eth-goerli.g.alchemy.com/v2/1y1zsUxopIMUYTHo6F2ZaTffpYxxCOdN',
      accounts:['3f469f4a1acfc09fe78139e35282f2f63a5026e616c2a3b1736f0691ceb66645']
    }
  }
}