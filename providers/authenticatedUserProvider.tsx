import React, { useState, createContext } from 'react';

export const AuthenticatedUserContext = createContext({});

interface AuthenticatedProvider {
  children?: React.ReactNode;
}
export const AuthenticatedUserProvider: React.FC<AuthenticatedProvider> = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <AuthenticatedUserContext.Provider value={{ user, setUser }}>
      {children}
    </AuthenticatedUserContext.Provider>
  );
};