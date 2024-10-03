import { createContext, useContext, useState } from "react";
import banana from "../pups/banana-pup.jpg";

export const PupContext = createContext();

export const PupProvider = (someFuncComponent) => {
  const [puppyType, setPuppyType] = useState(banana);

  return (
    <PupContext.Provider
      value={{
        howDoI: "access this value in Pup Form",
        puppyType,
        setPuppyType,
      }}
    >
      {someFuncComponent.children}
    </PupContext.Provider>
  );
};

export const usePuppyContext = () => useContext(PupContext);
