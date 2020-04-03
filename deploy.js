const { Conflux } = require('js-conflux-sdk');

const PRIVATE_KEY = '0x0d50d8ea21b0f98f273863838361b6ee4d2f0c379e70f057ad3ca5e6ad9f8e55';

async function main() {
  const cfx = new Conflux({
    url: 'http://testnet-jsonrpc.conflux-chain.org:12537',
    defaultGasPrice: 1,
    defaultGas: 1000000,
    logger: console,
  });

  const account = cfx.Account(PRIVATE_KEY); // create account instance
  // console.log(account.address); 

  // create contract instance
  const contract = cfx.Contract({
    abi: require('./build/abi.json'),
    code: require('./build/code.json')
  });

  // deploy the contract
  const contractinfo = await contract.constructor('烤仔','KZ')
    .sendTransaction({
      from: account,
      gas: 100000000 // if not set gas, will use 'cfx.defaultGas'
    
    })
    .confirmed();

  console.log(contractinfo.contractCreated); // 
  console.log(contractinfo.transactionHash); // 
  

}

main().catch(e => console.error(e));