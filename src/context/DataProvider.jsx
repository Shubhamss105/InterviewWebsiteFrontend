import { createContext, useState } from "react";

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
  // Initialize 'account' with an empty object
  const [account, setAccount] = useState({ email: "" });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
    console.log(account);

  return (
    <DataContext.Provider value={{ account, setAccount,isLoggedIn,setIsLoggedIn }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
