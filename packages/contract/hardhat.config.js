require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const STAGING_ALCHEMY_KEY = process.env.STAGING_ALCHEMY_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

if (!STAGING_ALCHEMY_KEY) {
  throw new Error("Please set your STAGING_ALCHEMY_KEY in a .env file");
}

if (!PRIVATE_KEY) {
  throw new Error("Please set your PRIVATE_KEY in a .env file");
}

module.exports = {
  solidity: "0.8.17",
  networks: {
    sepolia: {
      url: STAGING_ALCHEMY_KEY,
      accounts: [PRIVATE_KEY],
    },
  },
};