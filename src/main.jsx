import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CalculatorPage from './pages/CalculatorPage'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CalculatorPage/>
  </StrictMode>,
)
