//importando a biblioteca do react 
import { StrictMode } from 'react'
//importa o react dom, que conecta o react com o dom (doc obj model)
import { createRoot } from 'react-dom/client'
import './index.css'
//importa o component principal 
import App from './App.tsx'

//criar raiz do react dentro da div e redenriza
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
