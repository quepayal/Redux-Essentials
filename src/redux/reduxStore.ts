import { configureStore, DeepPartial } from '@reduxjs/toolkit';

import { rootReducer, RootState } from './index';

function configureAppStore(preloadedState?: DeepPartial<RootState>) {
    return configureStore({
        reducer: rootReducer,
        preloadedState: preloadedState
    });
}

const reduxStore = configureAppStore();

export default reduxStore;
