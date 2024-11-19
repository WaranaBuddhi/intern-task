import { createContext, useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";

const AuthContext = createContext(undefined);

export const AuthProvider = ({ children }) => {
  const storedSession = sessionStorage.getItem("authSession");
  const [session, setSession] = useState(
    storedSession
      ? JSON.parse(storedSession)
      : { message: null, name: null, email: null, token: null }
  );

  useEffect(() => {
    if (storedSession) {
      setSession(JSON.parse(storedSession));
    }
  }, []);

  const updateSession = (data) => {
    setSession(data);
    sessionStorage.setItem("authSession", JSON.stringify(data));
  };

  const signOut = () => {
    setSession({ message: null, name: null, email: null, token: null });
    sessionStorage.removeItem("authSession");
  };

  return (
    <AuthContext.Provider value={{ session, updateSession, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
