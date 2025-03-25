import React,{ useState, createContext, ReactNode, FC, useContext } from "react"; 


interface AutenticatedUserContextType {
    user: any | null;
    setUser : React.Dispatch<React.SetStateAction<any | null>>;
}
export const AuthenticatedUserContext = createContext<AutenticatedUserContextType>({
    user: null,
    setUser: () => {},
});

interface AuthenticatedUserProviderProps {
    children: ReactNode
}
export const AuthenticatedUserProvider:  FC<AuthenticatedUserProviderProps> = ({ children }) => {
    const [user, setUser] = useState<any|null>(null);
  
    return (
      <AuthenticatedUserContext.Provider value={{ user, setUser }}>
        {children}
      </AuthenticatedUserContext.Provider>
    );
  };

  // Hook personalizado para acceder al contexto
export const useAuth = () => {
    const context = useContext(AuthenticatedUserContext);
    if (!context) throw new Error("useAuth debe estar dentro de un AuthenticatedUserProvider");
    return context;
  };