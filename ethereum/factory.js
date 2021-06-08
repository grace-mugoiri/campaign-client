import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x4699bd2bA2547d7b9450A9567A021daF0c4E5c6e'
);

export default instance;