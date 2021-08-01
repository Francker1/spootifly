import React, { createContext, useContext, useReducer } from 'react';

const DataContext = createContext();

export const MusicContext = ({ initialState, reducer, children }) => (
  <DataContext.Provider value={useReducer(reducer, initialState)}>{children}</DataContext.Provider>
);

export const useMusicContextValue = () => useContext(DataContext);
