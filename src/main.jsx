import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CoffeeProvider } from './components/CoffeeContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CoffeeProvider>
      <App />
    </CoffeeProvider>
  </StrictMode>,
)
