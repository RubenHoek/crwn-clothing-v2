import { createContext, useState } from "react";

// The value you want to access.
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});

export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser };
    // .provider will wrap arround any component that need the values of context inside. 
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}