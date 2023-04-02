import { useSelector } from "react-redux";
import { Table } from "./Table";
import { RowTable } from "./RowTable";

export const PokemonsModList = () => {
  const pokemons = useSelector((state) => state.pokemons);

  return (
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
            <td colSpan={6} style={{ width: "100%", backgroundColor: "red" }}>
              Sin datos
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};
