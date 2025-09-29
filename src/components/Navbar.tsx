//Importa a logo para a pasta assets
import logo from "../assets/Netflix-logo.svg"

//Criando um component react 
function Navbar() {
//Retorno de uma informação
  return (
    <nav style={{
        background:"black",
        padding: "1rem",
        display:"flex",
        alignItems:"Center",
        gap:"2rem"
    }}>

{/*Logo da netflix*/}
      <img src={logo} alt="Netflix" style={{height: "40px"}}/>

{/* Links de navegação */}
        <a href="#" style={{color: "white", textDecoration: "none" }}>Início</a>
        <a href="#" style={{color: "white", textDecoration: "none" }}>Filmes</a>
        <a href="#" style={{color: "white", textDecoration: "none" }}>Séries</a>
    </nav>
  )
}

export default Navbar
