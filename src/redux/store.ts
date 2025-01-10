import { configureStore } from "@reduxjs/toolkit";
import collectionsReducer from "./slices/collectionsSlice";
import nftsByCollectionReducer from "./slices/nftsByCollectionSlice";
import nftDetailsReducer from "./slices/nftDetailsSlice";

export const store = configureStore({
  reducer: {
    collections: collectionsReducer,
    nftsByCollection: nftsByCollectionReducer,
    nftDetails: nftDetailsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
