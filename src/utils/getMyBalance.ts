import { ethers } from 'ethers';
import { ENV } from '../config/env';
import { getRpcProvider } from '../config/rpcProvider';

const USDC_ABI = ['function balanceOf(address owner) view returns (uint256)'];

const getMyBalance = async (address: string): Promise<number> => {
    const rpcProvider = getRpcProvider();
    const usdcContract = new ethers.Contract(
        ENV.USDC_CONTRACT_ADDRESS,
        USDC_ABI,
        rpcProvider
    );
    const balance_usdc = await usdcContract.balanceOf(address);
    const balance_usdc_real = ethers.utils.formatUnits(balance_usdc, 6);
    return parseFloat(balance_usdc_real);
};

export default getMyBalance;
