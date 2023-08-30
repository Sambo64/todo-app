import { createContext, useContext, useState } from "react";
import { executeBasicAuthenticationService } from "../todo/api/HelloWorldApiService";

export const AuthContext = createContext({
  isAuthenticated: false,
  username: "",
  login: async (username: string, password: string): Promise<boolean> => {
    return false;
  },
  logout: () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: any) => {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [username, setUsername] = useState<string>("");
  const [token, setToken] = useState("");

  const login = async (username: string, password: string) => {
    const basicToken = "Basic " + window.btoa(username + ":" + password);

    try {
      const response = await executeBasicAuthenticationService(basicToken);

      if (response.status == 200) {
        setAuthenticated(true);
        setUsername(username);
        setToken(basicToken);
        return true;
      } else {
        setAuthenticated(false);
        setToken("");
        return false;
      }
    } catch (error) {
      setAuthenticated(false);
      setToken("");
      return false;
    }
  };

  const logout = () => {
    setAuthenticated(false);
    setToken("");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, username }}>
      {children}
    </AuthContext.Provider>
  );
};
