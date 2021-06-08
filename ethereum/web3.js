import Web3 from 'web3';

let web3;

// checking to see if we are on the browser or server. if undefined then we are in the browser and metamask is running
if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    
    web3 = new Web3(window.web3.currentProvider);
} else {
    // we are on the server or the user is not running metamask 
    const provider = new Web3.providers.HttpProvider(
        'https://rinkeby.infura.io/v3/64ea5ad47252453e86f90fe604110915'
    );
    web3 = new Web3(provider);
};

export default web3;