import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, setState] = useState({
    supportContact: {
      name: "John Smith",
      email: "john.smith@feefo.com",
    },
    salesOverview: {
      uploads: 8,
      successfulUploads: 3,
      linesAttempted: 20,
      linesSaved: 4,
      lastUploadDate: 1605001226079,
    },
  });

  const updateSupportContact = (contact) => {
    setState((prevState) => ({
      ...prevState,
      supportContact: contact,
    }));
  };

  return (
    <AppContext.Provider value={{ state, updateSupportContact }}>
      {children}
    </AppContext.Provider>
  );
};
