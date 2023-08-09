import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { useDispatch } from 'react-redux';
import userSlice from '~/slices/userSlice'; // Import your userSlice
import filterSlice from '~/slices/filterSlice';

const persistConfig = {
	key: 'root',
	storage,
};

const persistedUserReducer = persistReducer(persistConfig, userSlice);
const persistedFilterReducer = persistReducer(persistConfig, filterSlice);

export const store = configureStore({
	reducer: {
		userInfo: persistedUserReducer,
		filterData: persistedFilterReducer,
	},
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
