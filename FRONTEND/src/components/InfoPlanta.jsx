import styled from "styled-components";
import { useEffect, useState } from "react";

const ContenedorInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Columna = styled.div`
  flex: 1;
`;
const Articulo = styled.div`
  margin: 10px;
  border-top: 1px solid #5b5b5b9f;
  font-size: 14px;
`;

const Titulo = styled.h2`
  font-size: 15px;
  font-weight: 600;
  color: #433821;
`;

const Propiedad = styled.p`
  font-size: 12px;
  margin-top: -10px;
  font-weight: 500;
  color: #434343;
`;



const InfoPlanta = ({ idPlanta }) => {
  const [plant, setPlant] = useState({});

  const getPlantInfo = async () => {
    const request = await fetch(
      `${import.meta.env.VITE_BASE_URL}/plants/getPlantById/${idPlanta}`
    );
    const data = await request.json();
    setPlant(data.data[0]);
  };

  useEffect(() => {
    getPlantInfo();
  }, []);

  return (
    <ContenedorInfo>
      <Columna>
        <Articulo>
          <Titulo>Temporada de siembra</Titulo>
          <Propiedad>- {plant.temporada_siembra}</Propiedad>
        </Articulo>
        <Articulo>
          <Titulo>Regado</Titulo>
          <Propiedad>- {plant.requerimiento_agua}</Propiedad>
        </Articulo>
        <Articulo>
          <Titulo>Crecimiento</Titulo>
          <Propiedad>- {plant.ritmo_crecimiento}</Propiedad>
        </Articulo>
        <Articulo>
          <Titulo>Clima</Titulo>
          <Propiedad>- {plant.climas}</Propiedad>
        </Articulo>
        <Articulo>
          <Titulo>Tipo de planta</Titulo>
          <Propiedad>- {plant.tipo_planta}</Propiedad>
        </Articulo>
        <Articulo>
          <Titulo>Clasificacion de planta</Titulo>
          <Propiedad>- {plant.clasificacion_planta}</Propiedad>
        </Articulo>
      </Columna>
      <Columna>
        <Articulo>
          <Titulo>Luz</Titulo>
          <Propiedad>- {plant.requerimiento_luz}</Propiedad>
        </Articulo>
        <Articulo>
          <Titulo>Tiempo de crecimiento</Titulo>
          <Propiedad>- {plant.tiempo_fructificacion}</Propiedad>
        </Articulo>
        <Articulo>
          <Titulo>Mascotas susceptibles</Titulo>
          <Propiedad>
            {plant.mascotas_susceptibles &&
              plant.mascotas_susceptibles.map((mascota, index) => (
                <span key={index}>
                  {index > 0 && " "}- {mascota}
                </span>
              ))}
          </Propiedad>
        </Articulo>
        <Articulo>
          <Titulo>Plagas</Titulo>
          <Propiedad>
            {plant.plagas &&
              plant.plagas.map((plaga, index) => (
                <span key={index}>
                  {index > 0 && " "}- {plaga}
                </span>
              ))}
          </Propiedad>
        </Articulo>
        <Articulo>
          <Titulo>Provincias donde crece</Titulo>
          <Propiedad>
            {plant.provincias &&
              plant.provincias.map((provincia, index) => (
                <span key={index}>
                  {index > 0 && " "}- {provincia}
                </span>
              ))}
          </Propiedad>
        </Articulo>
      </Columna>
    </ContenedorInfo>
  );
};

export default InfoPlanta;
