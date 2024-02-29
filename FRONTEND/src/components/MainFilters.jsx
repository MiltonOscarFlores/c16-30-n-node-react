import styled from "styled-components";

const FiltersWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  max-width: 1229px;
  min-height: 50px;
  margin: 0 auto;
`;

const FilterSelect = styled.select`
  padding: 8px;
  font-size: 14px;
  margin: 25px 0px;
  background-color: #464e2e;
  color: white;
  border-radius: 4px;
  width: 176px;
`;

const ApplyButton = styled.button`
  width: 176px;
  font-weight: 500;
  padding: 8px 15px;
  font-size: 14px;
  background-color: #c6ccaf;
  color: black;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 1.3px 1.5px 2px rgba(0, 0, 0, 0.2);
  transition: border-color 0.2s;

  &:active {
    transform: translateY(1px);
    background-color: #3d4425;
    transition: background-color 1s, color 0.3s, transform 0.1s ease-in-out;
    box-shadow: 1.5px 1.5px 2px rgba(0, 0, 0, 0.2);
  }
`;

const ClearButton = styled.button`
  width: 176px;
  font-weight: 500;
  padding: 8px 15px;
  font-size: 14px;
  background-color: #c6ccaf;
  color: #464e2e;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 1.3px 1.5px 2px rgba(0, 0, 0, 0.2);
  transition: border-color 0.2s;

  &:active {
    transform: translateY(1px);
    background-color: #3d4425;
    transition: background-color 1s, color 0.3s, transform 0.1s ease-in-out;
    box-shadow: 1.5px 1.5px 2px rgba(0, 0, 0, 0.2);
  }
`;
/////////////////////////////////////////////////////////////
const MainFilters = () => {
  return (
    <FiltersWrapper>
      <FilterSelect id="provincia">
        <option
          value=""
          disabled
          selected
          hidden
        >
          Provincia
        </option>
        <option value="buenosaires">Buenos Aires</option>
        <option value="catamarca">Catamarca</option>
        <option value="chaco">Chaco</option>
        <option value="chubut">Chubut</option>
        <option value="cordoba">Córdoba</option>
        <option value="corrientes">Corrientes</option>
        <option value="entrerios">Entre Ríos</option>
        <option value="formosa">Formosa</option>
        <option value="jujuy">Jujuy</option>
        <option value="lapampa">La Pampa</option>
        <option value="larioja">La Rioja</option>
        <option value="mendoza">Mendoza</option>
        <option value="misiones">Misiones</option>
        <option value="neuquen">Neuquén</option>
        <option value="rionegro">Río Negro</option>
        <option value="salta">Salta</option>
        <option value="sanjuan">San Juan</option>
        <option value="sanluis">San Luis</option>
        <option value="santacruz">Santa Cruz</option>
        <option value="santafe">Santa Fe</option>
        <option value="santiago">Santiago del Estero</option>
        <option value="tierradelfuego">Tierra del Fuego</option>
        <option value="tucuman">Tucumán</option>
      </FilterSelect>
      <FilterSelect id="clima">
        <option
          value=""
          disabled
          selected
          hidden
        >
          Clima
        </option>
        <option value="humedo">Humedo</option>
        <option value="templado">Templado</option>
      </FilterSelect>
      <FilterSelect id="tipoPlanta">
        <option
          value=""
          disabled
          selected
          hidden
        >
          Tipo de Planta
        </option>
        <option value="tallo">Tallo</option>
        <option value="trepadora">Trepadora</option>
        <option value="hoja">Hoja</option>
      </FilterSelect>
      <ApplyButton>Aplicar Filtros</ApplyButton>
      <ClearButton>Borrar Filtros</ClearButton>
    </FiltersWrapper>
  );
};

export default MainFilters;
