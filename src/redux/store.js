import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

const store = configureStore({
  reducer: rootReducer,
  enhancers: (defaultEnhancers) => [
    ...defaultEnhancers,
    // Add devToolsEnhancer here if not in production
    process.env.NODE_ENV !== 'production' && devToolsEnhancer(),
  ],
});

export default store;