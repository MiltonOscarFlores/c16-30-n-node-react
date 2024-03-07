import { useEffect,  useState } from "react";
import styled from "styled-components";
import InfoSvg from "../assets/images/Info.svg";
import WarningSvg from "../assets/images/Warning.svg";
import FavSvg from "../assets/images/Fav.svg";
import Fav2Svg from "../assets/images/Fav2.svg";
import InfoPlanta from "./InfoPlanta";
import { useSearchParams } from "react-router-dom";
import { useInfiniteQuery } from "@tanstack/react-query";

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
  height: 250px;
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

const MsjPaginado = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1100px;
  padding: 30px;
  color: #424242;
  font-weight: 500;

  &:active {
    transform: translateY(1px);
    transition: background-color 1s, color 0.3s, transform 0.1s ease-in-out;
  }
`;

const MainCards = () => {
  const [favIcons, setFavIcons] = useState({});
  const [selectedPlant, setSelectedPlant] = useState(null);
  const [warningClicked, setWarningClicked] = useState({});
  const [searchParams] = useSearchParams();

  const fetchData = async (page = 1) => {
    let params = {};
    try {
      //Obtener parámetros de búsqueda si hay
      if (searchParams?.size > 0) {
        params = Object.fromEntries(searchParams.entries());
      }
      const response = await fetch(
        `${
          import.meta.env.VITE_BASE_URL || import.meta.env.VITE_LOCAL_URL
        }/plants/filterBy?page=${page}&limit=20&clima=${
          params.clima || ""
        }&provincia=${params.provincia || ""}&tipo_planta=${
          params.tipo_planta || ""
        }&nombre=${params.search || ""}`
      );
      const obj = await response.json();
      return {
        plants: obj.data,
        pagination: obj.pagination,
      };
    } catch (err) {
      console.error("Error fetching data:", err);
      return;
    }
  };
  // quitar estado plantsData y reemplazar por data: plantsData
  const {
    isLoading,
    isError,
    data = {},
    isFetching,
    fetchNextPage,
    hasNextPage,
    refetch,
    error,
  } = useInfiniteQuery({
    queryKey: ["plants"],
    queryFn: async ({ pageParam }) => {
      const res = await fetchData(pageParam);
      return res;
    },
    getNextPageParam: (lastPage, pages) => {
      if (!lastPage) {
        return undefined;
      }
      return lastPage?.pagination?.next_page || undefined;
    },
  });

  useEffect(() => {
    fetchData();
    refetch();
  }, [searchParams]);

  const plants =
    Object.entries(data).length === 0 || data.pages[0] === undefined
      ? []
      : data?.pages?.flatMap((el) => el.plants);

  const handleFavClick = (pokemonId) => {
    setFavIcons((prevFavIcons) => ({
      ...prevFavIcons,
      [pokemonId]: !prevFavIcons[pokemonId],
    }));
  };

  const handleInfoClick = (plant) => {
    setSelectedPlant(plant);
  };

  const closeModal = () => {
    setSelectedPlant(null);
  };

  const handleWarningClick = (pokemonId) => {
    setWarningClicked((prevWarningClicked) => ({
      ...prevWarningClicked,
      [pokemonId]: !prevWarningClicked[pokemonId],
    }));
  };
  return (
    <MainCardsContainer>
      {isLoading ? (
        <div>Cargando...</div>
      ) : isError ? (
        <span>Error al cargar los datos</span>
      ) : (
        <>
          {plants.length === 0 ? (
            <div>No hay resultados</div>
          ) : (
            plants?.map((plant) => (
              <PlantCard key={plant.id_especie}>
                <img
                  src={plant.img}
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
                      🐈‍⬛ 🐕 🐇
                    </p>
                  )}
                </ContenedorToxicos>
                <WrapperBtnCards>
                  {!!plant.toxica_para_mascotas && (
                    <BtnWarning
                      onClick={() => handleWarningClick(plant.id_especie)}
                    >
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
        </>
      )}

      {(isFetching || hasNextPage) && (
        <button onClick={() => fetchNextPage()}>
          <MsjPaginado>Mostrar más...</MsjPaginado>
        </button>
      )}

      {!hasNextPage && !isFetching && plants.length > 0 && (
        <span>
          <MsjPaginado>No hay más resultados.</MsjPaginado>
        </span>
      )}

      {/* Modal */}
      {!!selectedPlant && (
        <>
          <Overlay
            show={!!selectedPlant}
            onClick={closeModal}
          />
          <Modal show={selectedPlant != null}>
            <button
              className="close-modal"
              onClick={closeModal}
            >
              &times;
            </button>
            <ModalTitle>Información de {selectedPlant.nombre}</ModalTitle>
            <InfoPlanta idPlanta={selectedPlant.id_especie} />
          </Modal>
        </>
      )}
    </MainCardsContainer>
  );
};

export default MainCards;
