import { useCallback, useEffect, useRef, useState } from "react";
import { helpHttp } from "../helper/helpHttp";
import { useDispatch } from "react-redux";
import {
  getPokemonsList,
  getPokemonsGrid,
  filterByName,
} from "../features/pokemons/pokemonsSlice";

let objectPokemon = {
  name: "",
  preview: "",
  types: "",
  skills: "",
  shynis: [],
};
export const usePokemon = () => {
  const dispatch = useDispatch();
  const [pokemons, setPokemons] = useState([objectPokemon]);
  const [loading, setLoading] = useState(false);
  const [isViewPokemonList, setIsViewPokemonList] = useState(true);
  const [offsetPokeList, setOffsetPokeList] = useState(1);
  const [limitPokeGrid, setLimitPokeGrid] = useState(8);
  const [searchTerm, setSearchTerm] = useState("");
  const [showIconScrollTop, setShowIconScrollTop] = useState(false);

  let urlPokeList = `https://pokeapi.co/api/v2/pokemon?offset=${offsetPokeList}&limit=10`;
  let urlPokeGrid = `https://pokeapi.co/api/v2/pokemon?offset=1&limit=${limitPokeGrid}`;

  useEffect(() => {
    setSearchTerm("");
    if (isViewPokemonList) {
      getApiPokes(urlPokeList);
    } else {
      getApiPokes(urlPokeGrid);
      window.addEventListener("scroll", handleScroll);
    }
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isViewPokemonList, urlPokeList, urlPokeGrid]);

  useEffect(() => {
    dispatch(filterByName(searchTerm));
  }, [searchTerm, dispatch]);

  useEffect(() => {
    const handleVisibilityIconScroll = () => {
      window.pageYOffset > 300
        ? setShowIconScrollTop(true)
        : setShowIconScrollTop(false);
    };
    window.addEventListener("scroll", handleVisibilityIconScroll);
    return () => {
      window.removeEventListener("scroll", handleVisibilityIconScroll);
    };
  }, []);

  const changeSearchTerm = (e) => {
    setSearchTerm(e.target.value);
  };

  const nextPokeList = () => {
    if (offsetPokeList < 1281) {
      console.log("next");
      setOffsetPokeList(offsetPokeList + 10);
    } else {
      return;
    }
  };
  const prevPokeList = () => {
    if (offsetPokeList > 1) {
      setOffsetPokeList(offsetPokeList - 10);
    } else {
      return;
    }
  };
  const goUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const handleScroll = async () => {
    let innerHeight = window.innerHeight;
    let scrollTop = document.documentElement.scrollTop;
    let scrollHeight = document.documentElement.scrollHeight;
    if (innerHeight + scrollTop + 1 >= scrollHeight) {
      setLimitPokeGrid((prev) => prev + 4);
    }
  };

  const closeSession = () => {
    localStorage.removeItem("userActive");
    location.reload();
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
            sprites: [responseApiPoke.sprites],
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
    closeSession,
    changeSearchTerm,
    searchTerm,
    goUp,
    showIconScrollTop,
  };
};
