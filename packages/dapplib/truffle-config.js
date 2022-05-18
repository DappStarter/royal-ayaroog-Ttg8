require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include knock flame success stock royal magic evil hunt define army ghost'; 
let testAccounts = [
"0x93f019d6dd2eb8fb332ab152fabf86321ff02068fb356114cb627c8efc29c5f6",
"0xbf01e8ea17998e183e7482050533997036984097c4543c4f60b86c86cb9ea5af",
"0xb22e23c4858b681b0331f8ac8c165cc33661dbc335a17660cd28bc9f76e29174",
"0xfdd26f4f03baf3e59c9d44a3dc7aeecf0c509f16ddb5dc8433ec4aff53be2e6a",
"0x8592e24ea7a843a048dd54aae832631947f2264f601b350e0f47fea6c5f44bff",
"0x1bbe4da74c97c43ad2476983e8fa3de7c065ea234afb2da270617169b44a16c0",
"0x15940e0397f1af9bbdd20fd8263cf91200c6f72aef59e5e067f76cfd0789a2cd",
"0x05617dbcf78bb22929556d12844e063adf28458c9d5ba6ca644476809666c6d7",
"0x48b9597549b0677af2f3124f5249535911eac180c60c2c77ceba04b4cdf061c9",
"0x7e1678506c80d1bb9865e61b07ad80738650beeddf2687005dd01501b605757a"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


