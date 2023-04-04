import { useCallback, useEffect, useRef, useState } from "react";
import { helpHttp } from "../helper/helpHttp";
import { useDispatch } from "react-redux";
import {
  getPokemonsList,
  getPokemonsGrid,
} from "../features/pokemons/pokemonsSlice";
let objectPokemon = {
  name: "",
  preview: "",
  types: "",
  skills: "",
  shynis: [],
};
export const usePokemon = () => {
  const [pokemons, setPokemons] = useState([objectPokemon]);
  const [loading, setLoading] = useState(false);
  const [isViewPokemonList, setIsViewPokemonList] = useState(true);
  const [offsetPokeList, setOffsetPokeList] = useState(1);
  const [limitPokeGrid, setLimitPokeGrid] = useState(8);
  const [showShiny, setShowShiny] = useState({ status: false, data: {} });

  let urlPokeList = `https://pokeapi.co/api/v2/pokemon?offset=${offsetPokeList}&limit=5`;
  let urlPokeGrid = `https://pokeapi.co/api/v2/pokemon?offset=1&limit=${limitPokeGrid}`;

  const dispatch = useDispatch();
  useEffect(() => {
    if (isViewPokemonList) {
      getApiPokes(urlPokeList);
    } else {
      getApiPokes(urlPokeGrid);
      window.addEventListener("scroll", handleScroll);
    }
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isViewPokemonList, urlPokeList, urlPokeGrid]);

  const nextPokeList = () => {
    if (offsetPokeList < 1281) {
      console.log("next");
      setOffsetPokeList(offsetPokeList + 5);
    } else {
      return;
    }
  };
  const prevPokeList = () => {
    if (offsetPokeList > 1) {
      setOffsetPokeList(offsetPokeList - 5);
    } else {
      return;
    }
  };
  // const showModalShiny = (data) => {
  //   setShowShiny({ status: true, data: data });
  //   console.log(data);
  // };

  const handleScroll = async () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setLimitPokeGrid((prev) => prev + 4);
    }
  };
  const getApiPokes = useCallback(
    async (urlPokemon) => {
      try {
        setLoading(true);
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
          setPokemons([...pokemons, objectPokemon]);
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
      } finally {
        setLoading(false);
      }
    },
    [isViewPokemonList]
  );

  const changeViewPokemon = (view) => {
    setIsViewPokemonList(view);
  };
  return {
    changeViewPokemon,
    isViewPokemonList,
    prevPokeList,
    nextPokeList,
    loading,
  };
};
