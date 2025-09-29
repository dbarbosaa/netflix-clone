// Importando o componente Navbar da pasta components
import Navbar from "./components/Navbar"

// Criando um componente React chamado App
function App() {
  // Todo componente precisa retornar algo que será exibido na tela
  return (
    <div>
      {/* Aqui o React usa o componente Navbar que importamos */}
      <Navbar />
      <h1>Netflix Clone</h1>
    </div>
  )
}

// Exportando o App para que outros arquivos (como o main.tsx) possam usar
export default App
