import { useEffect, useState } from "react";

import Layout from "components/Layout";
import Card from "components/Card";

import { PokemonType } from "utils/types/pokemon";
import { useTitle } from "utils/hooks/hooks";
import Button from "components/Button";

interface PropsType {}
interface StateType {
  loading: boolean;

  datas: PokemonType[];
  page: number;
  totalPage: number;
}

const Home = () => {
  useTitle("Pokemon - home page");

  const [pokemons, setPokemon] = useState<PokemonType[]>([]);
  const [loadPokemon, setLoadPokemon] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit&offset"
  );

  async function getPokemon() {
    const res = await fetch(loadPokemon);
    const data = await res.json();
    setLoadPokemon(data.next);

    function pokemonDisplay(result: any) {
      result.forEach(async (pokemon: any) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await res.json();
        setPokemon((list) => [...list, data]);
      });
    }
    pokemonDisplay(data.results);
  }

  //https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/.svg

  useEffect(() => {
    getPokemon();
  }, []);
  return (
    <>
      <Layout>
        <div className="">
          <div className="grid grid-flow-row auto-rows-max grid-cols-2 place-items-center p-6">
            {pokemons.map((pokemon) => (
              <Card
                key={pokemon.id}
                id={pokemon.id}
                name={pokemon.name}
                type={pokemon.type}
              />
            ))}
          </div>
          <div className="flex justify-center rounded-lg ">
            <Button label="Load More" onClick={() => getPokemon()} />
          </div>
        </div>
      </Layout>
    </>
  );
};
export default Home;
