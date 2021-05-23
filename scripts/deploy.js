async function main() {
  const Hop = await ethers.getContractFactory("Hoppy");
  console.log("Deploying Hop...");
  const hop = await Hop.deploy();
  await hop.deployed();
  console.log("Box deployed to:", hop.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
