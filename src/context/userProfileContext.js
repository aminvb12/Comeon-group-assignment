import React, { createContext, useState, useContext, useEffect } from "react";

// Create the context
const UserProfileContext = createContext();

// Create a provider component
export const UserProfileProvider = ({ children }) => {
  const [userProfile, setUserProfile] = useState(() => {
    const cachedProfile = localStorage.getItem("--cached-profile--");
    return cachedProfile ? JSON.parse(cachedProfile) : {};
  });

  useEffect(() => {
    localStorage.setItem("--cached-profile--", JSON.stringify(userProfile));
  }, [userProfile]);

  return (
    <UserProfileContext.Provider value={{ userProfile, setUserProfile }}>
      {children}
    </UserProfileContext.Provider>
  );
};

// Custom hook to use the UserProfileContext
export const useUserProfile = () => {
  return useContext(UserProfileContext);
};
