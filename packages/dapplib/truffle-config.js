require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good argue sure spot toy note random update include clinic olympic skirt'; 
let testAccounts = [
"0x2a5bf2469072712f0697787390977573992fbf3008fc2a8f21878027de714f4e",
"0x60ff6fc086f9869647594ccdc83e8ac0c3986f127dff35167eef377f40624d64",
"0xe4a61217ab55f59b6d2bae40f3f9bdb128dc324e3d49c6d199c5dc2096e1e9b7",
"0x354d92d86d88de87fb490d13daf5cc692de0d61095244a9b42801997868a2a67",
"0xc5f54723021b1e6306d9f6300865cba131050282024bd055fc99fca4aa3ff68a",
"0x580ab036a3dba2bfc01d3edaa965a16f0e17d05d2e041de02e6923e643b4c7d7",
"0x5c1179395c4ea71932e1aa3de62fc5da17ed2f2bc1f9f882aca4e82fe74bd4b9",
"0x08b210a62eb5c12014eb34e6da8fa3d3658a9c347ad76658333bed4f87958560",
"0xbf39c55a634e8121130813921dc8c0b116e1c90b13c040e90c199570909cb00d",
"0x46a5eb22d1a45fa1d22a6d9e829814b4437012fe728045d8e268e05fd1235cd0"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

