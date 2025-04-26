

import { AsyncLocalStorage } from 'async_hooks';

type asyncLocalStorageType = {
    correlationId: string;
}

export const asyncLocalStorage = new AsyncLocalStorage<asyncLocalStorageType>(); // Created an instance of AsyncLocalStorage

export const getCorrelatedId = ()=>{
    const asyncStore = asyncLocalStorage.getStore();
    return asyncStore?.correlationId || 'unknown-error-while-creating-correlation-id'; // Default value if not found 
}





