import { useEffect, useState } from "react";
import { helpHttp } from "../helper/helpHttp";
import { useDispatch, useSelector } from "react-redux";
import {
  getPokemonsList,
  getPokemonsGrid,
} from "../features/pokemons/pokemonsSlice";

export const usePokemon = () => {
  let urlPokeList = "https://pokeapi.co/api/v2/pokemon?offset=1&limit=5";
  let urlPokeGrid = "https://pokeapi.co/api/v2/pokemon?offset=1&limit=8";
  const dispatch = useDispatch();
  const [isViewPokemonList, setIsViewPokemonList] = useState(true);

  useEffect(() => {
    if (isViewPokemonList) {
      console.log("lista");
      getApiPokes(urlPokeList);
    } else {
      console.log("grid");
      getApiPokes(urlPokeGrid);
    }
  }, [isViewPokemonList]);

  const getApiPokes = async (urlPokemon) => {
    try {
      let responseApiUrlsPoke = await helpHttp().get(urlPokemon);
      const { results } = responseApiUrlsPoke;
      let arrayPokemons = [];
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
        arrayPokemons.push(objectPokemon);
      }
      if (isViewPokemonList) {
        dispatch(getPokemonsList(arrayPokemons));
      } else {
        dispatch(getPokemonsGrid(arrayPokemons));
      }
    } catch (error) {
      dispatch(getPokemonsList(null));
      dispatch(getPokemonsGrid(null));
    }
  };
  const changeViewPokemon = (view) => {
    setIsViewPokemonList(view);
  };
  return { changeViewPokemon, isViewPokemonList };
};
