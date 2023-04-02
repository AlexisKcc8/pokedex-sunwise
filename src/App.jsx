import { useEffect } from "react";
import { LoginPage } from "./pages/LoginPage";
import { MainPage } from "./pages/MainPage";
import { helpHttp } from "./helper/helpHttp";
import { useDispatch } from "react-redux";
import { getPoke } from "./redux/pokemonsSlice";

function App() {
  let urlPoke = "https://pokeapi.co/api/v2/pokemon";
  const dispatch = useDispatch();
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
  useEffect(() => {
    getApiPokes();
  }, [urlPoke]);
  return (
    <section>
      <LoginPage />
      <MainPage />
    </section>
  );
}

export default App;
