import styled from "styled-components";
import { useEffect, useState } from "react";

const ContenedorInfo = styled.div`
  display: flex;
  justify-content: space-between;
  outline: 1px solid red;
`;
const Columna = styled.div`
  flex: 1;
  outline: 1px solid blue;
`;
const Articulo = styled.div`
  margin-bottom: 10px;
  outline: 1px solid green;
`;



const InfoPlanta = ({ idPlanta }) => {
  const [plant, setPlant] = useState({})

  const getPlantInfo = async () => {
    const request = await fetch(`${import.meta.env.VITE_BASE_URL}/plants/getPlantById/${idPlanta}`)
    const data = await request.json()
    setPlant(data.data[0])
  }

  useEffect(() => {
    getPlantInfo()
  }, [])

  
  return (
    <ContenedorInfo>
      <Columna>
        <Articulo>{plant.nombre_cientifico}</Articulo>
        <Articulo>2. Contenido del artículo 2</Articulo>
        <Articulo>3. Contenido del artículo 3</Articulo>
        <Articulo>4. Contenido del artículo 4</Articulo>
        <Articulo>5. Contenido del artículo 5</Articulo>
        <Articulo>6. Contenido del artículo 6</Articulo>
      </Columna>
      <Columna>
        <Articulo>7. Contenido del artículo 7</Articulo>
        <Articulo>8. Contenido del artículo 8</Articulo>
        <Articulo>9. Contenido del artículo 9</Articulo>
        <Articulo>10. Contenido del artículo 10</Articulo>
        <Articulo>11. Contenido del artículo 11</Articulo>
        <Articulo>12. Contenido del artículo 12</Articulo>
      </Columna>
    </ContenedorInfo>
  );
};

export default InfoPlanta;
