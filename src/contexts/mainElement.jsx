import { createContext } from 'react'


const MainElementsContext = createContext(null);

export function MainElementsContextProvider({ children }) {
  const arr = [];
  return <>
    <MainElementsContext.Provider value={arr}>
      {children}
    </MainElementsContext.Provider>
  </>
}

export default MainElementsContext;
