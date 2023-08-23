import { createContext, useContext, useState } from "react";

export const AuthContext = createContext({
  isAuthenticated: false,
  username: "",
  login: (username: string, password: string): boolean => {
    return false;
  },
  logout: () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: any) => {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [username, setUsername] = useState<string>("");

  const login = (username: string, password: string) => {
    if (username == "Sambo" && password == "password") {
      setAuthenticated(true);
      setUsername(username);
      return true;
    } else {
      setAuthenticated(false);
      return false;
    }
  };

  const logout = () => {
    setAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, username }}>
      {children}
    </AuthContext.Provider>
  );
};
