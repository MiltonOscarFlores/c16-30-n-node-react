import styled from "styled-components";
import {useState, useEffect} from 'react'
import { useSearchParams } from "react-router-dom";

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
  const [provinces, setProvinces] = useState([])
  const [climates, setClimates] = useState([])
  const [plantTypes, setPlantTypes] = useState([])
  const [provinceFilter, setProvinceFilter] = useState('')
  const [climateFilter, setClimateFilter] = useState('')
  const [plantTypeFilter, setPlantTypeFilter] = useState('')
  const [searchParams, setSearchParams] = useSearchParams()
  const [queryParams, setQueryParams] = useState({})

  const  getFilters = async () =>{
    try {
      const request = await fetch(`${import.meta.env.VITE_BASE_URL}/plants/getSelectors`)
      const {data} = await request.json()

      //Convertir a objeto con objetos para acceder a cada propiedad
      const reduced = data.reduce((acc, curr,i) => {
        const key = Object.keys(curr)[0]
        if(!acc.hasOwnProperty(key)){
          acc[key] = curr[key]
        }
        return acc
      },{})
      
      setProvinces(reduced.provincias)
      setClimates(reduced.climas)
      setPlantTypes(reduced.tipos_planta)
      
    } catch (error) {
      console.log('Error: Unable to get filter values ', error)
    }
  }

  const getParams = () => {  
    return Object.fromEntries(searchParams.entries())
  }
  
  const applyFilters = (e) => {
    const params = getParams()
    e.preventDefault()
    if(climateFilter && climateFilter !== "clima"){
      params.clima = climateFilter
    }
    if(provinceFilter && provinceFilter !== "provincia"){
      params.provincia = provinceFilter
    }
    if(plantTypeFilter && plantTypeFilter !== "tipoPlanta"){
      params.tipo_planta = plantTypeFilter
    }
    setSearchParams(params)
    return
  }

  const cleanFilters = (e) => {
    const params = getParams()
    e.preventDefault()
    delete params.clima
    delete params.provincia
    delete params.tipo_planta
    setSearchParams(params)
    setClimateFilter('clima')
    setProvinceFilter('provincia')
    setPlantTypeFilter('tipoPlanta')
    return
  }


  useEffect(()=> {
  getFilters()
  setQueryParams(getParams())
  },[searchParams])
  return (
    <FiltersWrapper>
      <FilterSelect id="provincia"
      onChange={(e) => setProvinceFilter(e.target.value)}
      value={provinceFilter}
      >
        <option
          value="provincia"
        >
          Provincia
        </option>
        {provinces.map(el => {
          return <option key={el.id_provincia} value={el.provincia}>{el.provincia}</option>
        })}
      </FilterSelect>
      <FilterSelect id="clima"
      onChange={(e) => setClimateFilter(e.target.value)}
      value={climateFilter || "clima"}
      >
        <option
          value="clima"
        >
          Clima
        </option>
        {climates.map(el => {
          return <option key={el.id_clima} value={el.clima}>{el.clima}</option>
        })}
      </FilterSelect>
      <FilterSelect id="tipoPlanta"
      onChange={(e) => setPlantTypeFilter(e.target.value)}
      value={plantTypeFilter || "tipoPlanta"}
      >
        <option
          value="tipoPlanta"
          disabled
          hidden
        >
          Tipo de Planta
        </option>
        {plantTypes.map(el => {
          return <option key={el.id_tipo_planta} value={el.tipo_planta}>{el.tipo_planta}</option>
        })}
      </FilterSelect>
      <ApplyButton onClick={applyFilters}>Aplicar Filtros</ApplyButton>
      <ClearButton onClick={cleanFilters}>Borrar Filtros</ClearButton>
    </FiltersWrapper>
  );
};

export default MainFilters;
