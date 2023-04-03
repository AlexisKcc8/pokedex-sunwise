import { useEffect } from "react";
import { helpHttp } from "../helper/helpHttp";
import { useDispatch, useSelector } from "react-redux";
import { getPoke } from "../features/pokemons/pokemonsSlice";

export const usePokemon = () => {
  let urlPoke = "https://pokeapi.co/api/v2/pokemon?offset=1&limit=5";
  const dispatch = useDispatch();

  useEffect(() => {
    const getApiPokes = async () => {
      try {
        let responseApiUrlsPoke = await helpHttp().get(urlPoke);
        const { results } = responseApiUrlsPoke;
        for (const { url } of results) {
          let responseApiPoke = await helpHttp().get(url);
          let objectPokemon = {
            id: responseApiPoke.id,
            name: responseApiPoke.name,
            preview: responseApiPoke.sprites.front_default,
            types: responseApiPoke.types,
            skills: responseApiPoke.abilities,
            shynis: [responseApiPoke.sprites],
          };

          dispatch(getPoke(objectPokemon));
        }
      } catch (error) {
        dispatch(getPoke(null));
      }
    };
    getApiPokes();
  }, [urlPoke]);
};
