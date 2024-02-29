import { useEffect, useState } from "react";
import styled from "styled-components";
import { Routes, Route, useParams, useSearchParams } from 'react-router-dom';

const MainCardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  max-width: 1229px;
  min-height: 600px;
  margin: 0 auto;
  outline: 1px solid red;
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

const MainCards = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [searchParams, _] = useSearchParams();
  const [noResults, setNoResults] = useState(false)


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
            return {
              name: pokemon.name,
              id: detailsData.id,
              image: detailsData.sprites.front_default,
            };
          })
        );
          if(searchParams?.size > 0){
            const params = {};
            for(let [key, value] of searchParams.entries()) {
              params[key] = value
            }
            const exp = new RegExp(`.*${params.search}.*`, 'i')
            const filtrado = detailedPokemonData?.filter(el => exp.test(el.name))
            setNoResults(filtrado.length === 0) 
            setPokemonData(filtrado)
            return
          } else {
            setPokemonData(detailedPokemonData);
          }
        
      } catch (error) {
        console.error("Error fetching Pokemon data:", error);
      }
    };

    fetchPokemonData();
  }, [searchParams]);


if(noResults){
  return (
    <div>No hay resultados</div>
  )
}

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
          <h3>{pokemon.name}</h3>
          <p>ID: {pokemon.id}</p>
        </PlantCard>
      ))}
    </MainCardsContainer>
  );
};

export default MainCards;
