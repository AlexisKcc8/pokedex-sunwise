import { useSelector } from "react-redux";
import { Table } from "./Table";
import { RowTable } from "./RowTable";
import { Loader } from "./Loader";
import styled from "styled-components";
import { MyButton } from "./MyButton";
import { usePokemon } from "../hooks/usePokemon";

export const PokemonsModList = (props) => {
  const { nextPokeList, prevPokeList, loading } = props;
  const pokemons = useSelector((state) => state.pokemons.pokemonsList);

  return (
    <ContainerPokemonTableList>
      <section>
        <ContainerPagination>
          <MyButton event={prevPokeList} title="Anterior" />
          <MyButton event={nextPokeList} title="Siguiente" />
        </ContainerPagination>
        {loading ? (
          <Loader />
        ) : (
          <Table summary="Los grupos de música punk más famosos del Reino Unido">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">Vista Previa</th>
                <th scope="col">Tipos</th>
                <th scope="col">Habilidades</th>
                <th scope="col">Otros</th>
              </tr>
            </thead>
            <tbody>
              {pokemons.length > 0 ? (
                pokemons.map((pokemon) => (
                  <RowTable key={pokemon.id} pokemon={pokemon} />
                ))
              ) : (
                <tr>
                  <td
                    colSpan={6}
                    style={{ width: "100%", backgroundColor: "red" }}
                  >
                    Sin datos
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        )}
      </section>
    </ContainerPokemonTableList>
  );
};
const ContainerPokemonTableList = styled.section({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
});
const ContainerPagination = styled.section({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "1rem",
  padding: "1rem",
});
