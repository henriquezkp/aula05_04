import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: 'money-control-3ed',
      storage,
    },
    reducers,
  );

  return persistedReducer;
};
