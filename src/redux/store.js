import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { campersReducer } from "./campers/slice";
import { configureStore } from "@reduxjs/toolkit";

const favoritesCampers = {
  key: "campers",
  storage,
  whitelist: ["favorites"],
};

export const store = configureStore({
  reducer: {
    campers: persistReducer(favoritesCampers, campersReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
