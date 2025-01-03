import PropTypes from "prop-types";
import { useState } from "react";
import { AppContext } from "./AppContext";

export const AppProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <AppContext.Provider value={{ isLogin, setIsLogin }}>
      {children}
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
