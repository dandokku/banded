import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import authReducer from "./state"
import { configureStore } from "@reduxjs/toolkit"
import { Provider } from "react-redux"
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist"

import storage from "redux-persist/lib/storage"
import { PersistGate } from 'redux-persist/integration/react';
// import { ReactQueryDevtools } from "react-query/devtools"

// Configuration for Redux-persist
const persistConfig = { key: "root", storage, version: 1 }

// Creating a persisted reducer using redux-persist
const persistedReducer = persistReducer(persistConfig, authReducer)

// Configuring the Redux store
const store = configureStore({
  reducer: persistedReducer, 
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: {
        // Ignore specified actions during serialization
        ignoreActions: [persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER ]
      }
    })
  }

})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistStore(store)}>
        <App />
      </PersistGate>
      {/* <ReactQueryDevtools/> */}
    </Provider>
  </React.StrictMode>
);

