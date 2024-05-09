const MyToken = artifacts.require("MyToken");

module.exports = async function(deployer) {
  try {
    await deployer.deploy(MyToken, "0x3F73cc8918A23b8599e965398723C33763BC66f3");
  } catch (error) {
    console.error("Error deploying MyToken contract:", error);
  }
};