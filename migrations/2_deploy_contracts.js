const Play = artifacts.require("Play");

module.exports = async function (deployer) {
  await deployer.deploy(Play);
};
