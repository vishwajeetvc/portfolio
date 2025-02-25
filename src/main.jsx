import { StrictMode } from 'react'
import { MainElementsContextProvider } from "./contexts/mainElement";
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainElementsContextProvider>
      <App />
    </MainElementsContextProvider>
  </StrictMode>,
)
