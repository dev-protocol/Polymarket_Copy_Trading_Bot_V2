import { ethers } from 'ethers';
import { ENV } from './env';

let cachedProvider: ethers.providers.JsonRpcProvider | null = null;

/**
 * Shared RPC provider - reuse across balance checks and other RPC calls
 * Avoids creating a new connection for each request
 */
export const getRpcProvider = (): ethers.providers.JsonRpcProvider => {
    if (!cachedProvider) {
        cachedProvider = new ethers.providers.JsonRpcProvider(ENV.RPC_URL);
    }
    return cachedProvider;
};
