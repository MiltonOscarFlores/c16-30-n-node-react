import { useEffect, useState } from "react";
import styled from "styled-components";
import InfoSvg from "../assets/images/Info.svg";
import WarningSvg from "../assets/images/Warning.svg";
import FavSvg from "../assets/images/Fav.svg";
import Fav2Svg from "../assets/images/Fav2.svg";
import InfoPlanta from "./InfoPlanta";

const MainCardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  max-width: 1229px;
  min-height: 600px;
  margin: 0 auto;
`;

const PlantCard = styled.div`
  background-color: #c7cdb0;
  width: 150px;
  height: 200px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const WrapperBtnCards = styled.section`
  width: 150px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-top: 10px;
`;

const BtnInfo = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

const BtnFav = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

const BtnWarning = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

const Myh3 = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #464e2e;
  margin: 0;
`;

const Modal = styled.div`
  position: fixed;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40%;
  min-height: 500px;
  background-color: #c3c0b4;
  outline: 1px solid red;
  padding: 2rem 6rem;
  border-radius: 5px;
  box-shadow: 0 3rem 5rem rgba(0, 0, 0, 0.3);
  z-index: 10;
  display: ${(props) => (props.show ? "block" : "none")};
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(3px);
  z-index: 5;
  display: ${(props) => (props.show ? "block" : "none")};
`;

const ModalTitle = styled.h1`
  font-size: 22px;
  font-weight: 700;
`;

const ContenedorToxicos = styled.section`
  display: flex;
  justify-content: center;
  align-items: end;
  min-width: 20px;
  min-height: 40px;
`;

///////////////////////////////////////////////////////////////////////////////////////
const MainCards = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [favIcons, setFavIcons] = useState({});
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [warningClicked, setWarningClicked] = useState({});

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=75"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();

        // Obtener detalles de cada Pokemon
        const detailedPokemonData = await Promise.all(
          data.results.map(async (pokemon) => {
            const detailsResponse = await fetch(pokemon.url);
            if (!detailsResponse.ok) {
              throw new Error("Network response was not ok");
            }
            const detailsData = await detailsResponse.json();

            // Hacer una solicitud adicional para obtener información de la cadena de evolución
            const evolutionChainResponse = await fetch(
              `https://pokeapi.co/api/v2/evolution-chain/${detailsData.id}/`
            );
            if (!evolutionChainResponse.ok) {
              throw new Error("Network response was not ok");
            }
            const evolutionChainData = await evolutionChainResponse.json();

            return {
              name: pokemon.name,
              id: detailsData.id,
              image: detailsData.sprites.front_default,
              isBaby: evolutionChainData.chain.is_baby,
              isFavorite: false, // Inicialmente asumimos que no es favorito
            };
          })
        );

        // Actualizar el estado con la información de los Pokémon
        setPokemonData(detailedPokemonData);
        setFavIcons(
          Object.fromEntries(
            detailedPokemonData.map((pokemon) => [pokemon.id, false])
          )
        );
      } catch (error) {
        console.error("Error fetching Pokemon data:", error);
      }
    };

    fetchPokemonData();
  }, []);

  const handleFavClick = (pokemonId) => {
    setFavIcons((prevFavIcons) => ({
      ...prevFavIcons,
      [pokemonId]: !prevFavIcons[pokemonId],
    }));
  };

  const handleInfoClick = (pokemon) => {
    setSelectedPokemon(pokemon);
  };

  const closeModal = () => {
    setSelectedPokemon(null);
  };

  const handleWarningClick = (pokemonId) => {
    setWarningClicked((prevWarningClicked) => ({
      ...prevWarningClicked,
      [pokemonId]: !prevWarningClicked[pokemonId], // Cambiamos el estado al contrario del valor anterior
    }));
  };
  return (
    <MainCardsContainer>
      {pokemonData.map((pokemon) => (
        <PlantCard key={pokemon.id}>
          <img
            src={pokemon.image}
            alt={pokemon.name}
            style={{
              maxWidth: "100%",
              maxHeight: "120px",
              marginBottom: "8px",
            }}
          />
          <Myh3>{pokemon.name}</Myh3>
          {/* Añade los iconos si se hizo clic en el botón de advertencia */}
          <ContenedorToxicos>
            {warningClicked[pokemon.id] && (
              <p
                style={{
                  margin: 0,
                  fontSize: "20px",
                  background: "#B5C09C",
                  borderRadius: "5px",
                }}
              >
                🐈‍⬛ 🐕‍🦺 👶
              </p>
            )}
          </ContenedorToxicos>
          <WrapperBtnCards>
            {pokemon.isBaby && (
              <BtnWarning onClick={() => handleWarningClick(pokemon.id)}>
                <img
                  src={WarningSvg}
                  alt="Warning"
                  style={{ width: "20px", height: "20px" }}
                />
              </BtnWarning>
            )}

            {/* Resto del código para botones Fav e Info */}
            <BtnFav onClick={() => handleFavClick(pokemon.id)}>
              <img
                src={favIcons[pokemon.id] ? Fav2Svg : FavSvg}
                alt="Favorite"
                style={{ width: "20px", height: "20px" }}
              />
            </BtnFav>
            <BtnInfo onClick={() => handleInfoClick(pokemon)}>
              <img
                src={InfoSvg}
                alt="Info"
                style={{ width: "20px", height: "20px" }}
              />
            </BtnInfo>
          </WrapperBtnCards>
        </PlantCard>
      ))}

      {/* Modal */}
      {selectedPokemon && (
        <>
          <Overlay
            show={!!selectedPokemon}
            onClick={closeModal}
          />
          <Modal show={!!selectedPokemon}>
            <button
              className="close-modal"
              onClick={closeModal}
            >
              &times;
            </button>
            <ModalTitle>Información de {selectedPokemon.name}</ModalTitle>

            <InfoPlanta />
          </Modal>
        </>
      )}
    </MainCardsContainer>
  );
};

export default MainCards;
