import { useEffect, useState } from "react";
import styled from "styled-components";
import InfoSvg from "../assets/images/Info.svg";
import WarningSvg from "../assets/images/Warning.svg";
import FavSvg from "../assets/images/Fav.svg";
import Fav2Svg from "../assets/images/Fav2.svg";
import InfoPlanta from "./InfoPlanta";
import { useSearchParams } from "react-router-dom";

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

const MainCards = () => {
  const [plantData, setPlantData] = useState([]);
  const [favIcons, setFavIcons] = useState({});
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [warningClicked, setWarningClicked] = useState({});
  const [noResults, setNoResults] = useState(false);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const fetchData = async () => {
      let params = {}
      try {
        //Obtener parámetros de búsqueda si hay
        if(searchParams?.size > 0) {
          params = Object.fromEntries(searchParams.entries());
        }
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/plants/filterBy?page=1&limit=30&clima=${params.clima || ''}&provincia=${params.provincia || ''}&tipo_planta=${params.tipo_planta || ''}&nombre=${params.search || ''}`)
        const obj = await response.json()
        const data = obj.data

        //Mostrar mensaje "No hay resultados"
        if(data.length === 0){
          setNoResults(true)
        } else {
          setNoResults(false)
          // Agregar propiedad isFavorite
          const withFav = data.map(el =>{
            el.isFavorite = false
            return el
          })
          setPlantData(withFav)
        }
        return 
 
} catch (err) {
  console.error("Error fetching data:", err);
  return
} 
    }
    fetchData();
}, [searchParams]);

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
      [pokemonId]: !prevWarningClicked[pokemonId],
    }));
  };

  return (
    <MainCardsContainer>
      {noResults ? (
        <div>No hay resultados</div>
      ) : (
        plantData.map((plant) => (
          <PlantCard key={plant.id_especie}>
            <img
            src={`${import.meta.env.VITE_SERVER_URL}src/assets/plants_thumb/${plant.img}`}
              alt={plant.nombre}
              style={{
                maxWidth: "100%",
                maxHeight: "120px",
                marginBottom: "8px",
              }}
            />
            <Myh3>{plant.nombre}</Myh3>
            <ContenedorToxicos>
              {warningClicked[plant.id_especie] && (
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
              {!!plant.toxica_para_mascotas && (
                <BtnWarning onClick={() => handleWarningClick(plant.id_especie)}>
                  <img
                    src={WarningSvg}
                    alt="Warning"
                    style={{ width: "20px", height: "20px" }}
                  />
                </BtnWarning>
              )}
              <BtnFav onClick={() => handleFavClick(plant.id_especie)}>
                <img
                  src={favIcons[plant.id_especie] ? Fav2Svg : FavSvg}
                  alt="Favorite"
                  style={{ width: "20px", height: "20px" }}
                />
              </BtnFav>
              <BtnInfo onClick={() => handleInfoClick(plant)}>
                <img
                  src={InfoSvg}
                  alt="Info"
                  style={{ width: "20px", height: "20px" }}
                />
              </BtnInfo>
            </WrapperBtnCards>
          </PlantCard>
        ))
      )}

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
