import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useMemo,
} from "react";

// Create the context
const UserProfileContext = createContext();

// Create a provider component
export const UserProfileProvider = ({ children }) => {
  const [userProfile, setUserProfile] = useState(() => {
    const cachedProfile = localStorage.getItem("--cached-profile--");
    return cachedProfile ? JSON.parse(cachedProfile) : {};
  });

  useEffect(() => {
    if (Object.keys(userProfile).length) {
      localStorage.setItem("--cached-profile--", JSON.stringify(userProfile));
    } else {
      localStorage.removeItem("--cached-profile--");
    }
  }, [userProfile]);

  const isAuthenticated = useMemo(
    () => (userProfile.name ? true : false),
    [userProfile]
  );

  return (
    <UserProfileContext.Provider
      value={{ userProfile, setUserProfile, isAuthenticated }}
    >
      {children}
    </UserProfileContext.Provider>
  );
};

// Custom hook to use the UserProfileContext
export const useUserProfile = () => {
  return useContext(UserProfileContext);
};
