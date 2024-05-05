require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    hardhat: {},
    polygon_amoy: {
      url: "https://polygon-amoy.g.alchemy.com/v2/XSO5jQrfEqjjo_aAehEuNUJnTVkoFbgx",
      accounts: [
        `0x${"57eab1246eca064803d25fda0fbd7c1491103bc220c2076701208e32c545ecc2"}`,
      ],
    },
  },
};
