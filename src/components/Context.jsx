import React, { createContext, useState } from "react";

const Arrcontext = createContext();

const Context = ({ children }) => {
  const [favourite, setFavourite] = useState([]);
  const [ArrActivity] = useState(["Alexander", "Isabella", "Julian", "Wilson", "Anna"]);

  return (
    <Arrcontext.Provider value={{ ArrActivity, favourite, setFavourite }}>
      {children}
    </Arrcontext.Provider>
  );
};

export default Context;
export { Arrcontext };
