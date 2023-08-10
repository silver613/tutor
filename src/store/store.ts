import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';
import { useDispatch } from 'react-redux';
import userSlice from '~/slices/userSlice'; // Import your userSlice
// import filterSlice from '~/slices/filterSlice';

const persistConfig = {
	key: 'root',
	version: 1,
	storage,
};

const persistedUserReducer = persistReducer(persistConfig, userSlice);
// const persistedFilterReducer = persistReducer(persistConfig, filterSlice);

export const store = configureStore({
	reducer: {
		userInfo: persistedUserReducer,
		// filterData: persistedFilterReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
