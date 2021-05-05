import { persistStore } from 'redux-persist';
import { createStore } from 'redux';

import persistedReducer from './persitReducers';
import rootReducer from './modules/rootReducer';

const store = createStore(persistedReducer(rootReducer));
const persitor = persistStore(store);

export { store, persitor };
