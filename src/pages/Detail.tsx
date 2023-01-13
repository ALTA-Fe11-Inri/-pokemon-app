import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Layout from "components/Layout";

import { PokemonType } from "utils/types/pokemon";
import { useTitle } from "utils/hooks/hooks";

interface PropsType {
  params?: any;
}

interface StateType {
  loading: boolean;
  data: PokemonType;
}

const Detail = () => {
  const { pokemon_name } = useParams();
  useTitle("Pokemon - detail page");
  const [pokemons, setPokemon] = useState<PokemonType>({});

  useEffect(() => {
    fetchPokemon();
  }, []);

  async function fetchPokemon() {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemon_name}`
    );
    const pokemons = await response.json();
    setPokemon(pokemons);
  }
  return (
    <Layout>
      <>
        <div className="w-full h-[100vh] bg-cover pt-10">
          <div className="flex justify-center gap-3">
            <div className="md:flex w-64 flex-row min-w-[50%] min-h-full bg-black border border-3 rounded-lg border-red-600 dark:border-white shadow-lg shadow-gray-700 cursor-pointer">
              <div className="">
                <img
                  className="w-80"
                  alt={pokemon_name}
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemons.id}.svg`}
                />
                <p className="px-36 pt-4 pb-5 text-white uppercase font-chackra font-extrabold">
                  {pokemon_name}
                </p>
                <div className="flex flex-row gap-5 px-3 pb-5">
                  <div className="text-white px-5 h-16 gap-3 md:flex bg-black border border-3 rounded-lg border-red-600 dark:border-white shadow-lg shadow-gray-700 cursor-pointer">
                    <span className="text-lg font-semibold">Abilities </span>
                    <div className="">
                      {pokemons.abilities &&
                        pokemons.abilities.map((ability: any, index: any) => (
                          <p key={index}>•{ability.ability.name}</p>
                        ))}
                    </div>
                  </div>
                  <div className="text-white flex-col px-5 gap-3 w-32 h-16 md:flex bg-black border border-3 rounded-lg border-red-600 dark:border-white shadow-lg shadow-gray-700 cursor-pointer">
                    <span className="text-sm font-semibold">
                      Height: {(pokemons.height * 0.1).toFixed(1)}
                    </span>
                    <span className="text-sm font-semibold">
                      Weight: {pokemons.weight}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col text-white pt-5 px-20">
                <div className="">
                  <div>
                    {pokemons.stats &&
                      pokemons.stats.map((stat: any, index: any) => (
                        <div key={index}>
                          <p>
                            {stat.stat.name} {stat.base_stat}
                          </p>
                          <meter
                            value={stat.base_stat}
                            min="0"
                            max="200"
                            key={index}
                          ></meter>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </Layout>
  );
};

export default Detail;
