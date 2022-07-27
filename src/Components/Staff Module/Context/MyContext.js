import React, { createContext, useState } from "react";

export const MyContext = createContext();

const MyProvider = ({ children }) => {
  

  return (
    <MyContext.Provider >
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
