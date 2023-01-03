import { createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/home')
    // eslint-disable-next-line
  }, []);

  return (
    <AuthContext.Provider
      value={{
        authenticated: Boolean(true)
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}