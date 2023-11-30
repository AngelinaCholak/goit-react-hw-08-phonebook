import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { aurhReducer } from './auth/auth.selectors';
import { contactsReducer } from './contact/contact.reducer';

const contactsConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'],
};
const authConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};


export const store = configureStore({
  reducer: {
    contactsStore: persistReducer(contactsConfig, contactsReducer),
    auth: persistReducer(authConfig, aurhReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
