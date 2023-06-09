import { MyButton } from "./MyButton";
import { detailsPokes } from "../helper/detailsPokes";

export const RowTable = (props) => {
  const { pokemon } = props;
  const { showModalShinys, showDetails } = detailsPokes();
  // id: responseApiPoke.id,
  //       name: responseApiPoke.name,
  //       preview: responseApiPoke.sprites.front_default,
  //       types: responseApiPoke.types,
  //       skills: responseApiPoke.abilities,
  //       shynis: [responseApiPoke.sprites],
  return (
    <tr onClick={(e) => showDetails(e, pokemon)}>
      <th scope="row">{pokemon.id}</th>
      <td>{pokemon.name}</td>
      <td>
        <img src={pokemon.preview} alt={`imagen-${pokemon.name}`} />
      </td>
      <td>
        {pokemon.types.map((type, index) => (
          <p key={index}>{type.type.name}</p>
        ))}
      </td>
      <td>
        {pokemon.skills.map((skills, index) => (
          <p key={index}>{skills.ability.name}</p>
        ))}
      </td>
      <td>
        <MyButton event={(e) => showModalShinys(e, pokemon)} title="shiny" />
      </td>
    </tr>
  );
};
