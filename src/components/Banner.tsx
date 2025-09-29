function Banner() {
  return (
    <header
      style={{
        position: "relative",
        height: "400px",
        backgroundImage: "url('https://image.tmdb.org/t/p/original/pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "2rem"
      }}
    >
      {/* Título do filme/série */}
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>Stranger Things</h1>

      {/* Descrição */}
      <p style={{ maxWidth: "600px", lineHeight: "1.5" }}>
        Quando uma criança desaparece, a cidade revela um mistério envolvendo experimentos secretos,
        forças sobrenaturais e uma menina estranha.
      </p>

      {/* Botões */}
      <div style={{ marginTop: "1rem" }}>
        <button
          style={{
            marginRight: "1rem",
            padding: "0.5rem 1rem",
            background: "white",
            border: "none",
            cursor: "pointer"
          }}
        >
          ▶ Assistir
        </button>
        <button
          style={{
            padding: "0.5rem 1rem",
            background: "gray",
            border: "none",
            cursor: "pointer",
            color: "white"
          }}
        >
          + Minha Lista
        </button>
      </div>
    </header>
  )
}

export default Banner