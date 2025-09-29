// src/components/Row.tsx

type RowProps = {
    title: string; // título da seção (ex: "Populares", "Séries", etc.)
    movies: string[]; // lista de URLs de imagens
};

function Row({ title, movies }: RowProps) {
    return (
        <div style={{ marginBottom: "2rem" }}>
            {/* Título da seção */}
            <h2 style={{ color: "white", margin: "0 0 1rem 0" }}>{title}</h2>

            {/* Lista de pôsteres */}
            <div style={{ display: "flex", overflowX: "auto" }}>
                {movies.map((movie, index) => (
                    <img
                        key={index}
                        src={movie}
                        alt="movie poster"
                        onError={(e) => {
                            const target = e.currentTarget as HTMLImageElement;
                            if (target.src !== "https://via.placeholder.com/200x300?text=No+Image") {
                                target.src = "https://via.placeholder.com/200x300?text=No+Image";
                            }
                        }}
                        style={{
                            width: "200px",
                            height: "300px",
                            objectFit: "cover",
                            marginRight: "10px",
                            borderRadius: "5px",
                            transition: "transform 0.3s",
                        }}
                        onMouseOver={(e) =>
                            ((e.target as HTMLImageElement).style.transform = "scale(1.05)")
                        }
                        onMouseOut={(e) =>
                            ((e.target as HTMLImageElement).style.transform = "scale(1)")
                        }
                    />
                ))}
            </div>
        </div>
    );
}

export default Row; 