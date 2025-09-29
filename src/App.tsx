// Importando os componentes
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Row from "./components/Row";

// Criando o componente principal da aplicação
function App() {
  return (
    <div style={{ background: "black", minHeight: "100vh" }}>
      {/* Barra de navegação */}
      <Navbar />

      {/* Banner principal */}
      <Banner />

      {/* Seção de filmes */}
      <Row
        title="Filmes Populares"
        movies={[
          "https://image.tmdb.org/t/p/w200/8YFL5QQVPy3AgrEQxNYVSgiPEbe.jpg", // Deadpool & Wolverine
          "https://image.tmdb.org/t/p/w200/sR0SpCrXamlIkYMdfz83sFn5JS6.jpg", // Duna 2
          "https://image.tmdb.org/t/p/w200/9NgtktUFLm9cnFDFaekx2ROh84f.jpg", // Bad Boys
        ]}
      />

      {/* Seção de séries */}
      <Row
        title="Séries em Alta"
        movies={[
          "https://image.tmdb.org/t/p/w200/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg", // Stranger Things
          "https://image.tmdb.org/t/p/w200/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg", // Avengers Infinity War
          "https://image.tmdb.org/t/p/w200/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg", // Black Panther
        ]}
      />
    </div>
  );
}

// Exportando o componente App
export default App;