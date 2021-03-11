import React, { createContext } from "react";

export const MainContext = createContext();

function Context({ children }) {
  const contactInfo = {
    email: "info@cherrybonus.com",
    website: "cherrybonus.com",
    href: "https://cherrybonus.com",
    name: "Cherry Bonus",
  };

  const store = {
    contactInfo,
  };
  return <MainContext.Provider value={store}>{children}</MainContext.Provider>;
}

export default Context;
