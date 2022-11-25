require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/BdhkIgyQvuxpf6h1CosYa9Wv_voOM_XO",
      accounts: [
        "111bc0f974f2c30e8f7c3ea84c1641bc58d8c3be9fb11dabc61d7481ace6feea",
      ],
    },
  },
};
