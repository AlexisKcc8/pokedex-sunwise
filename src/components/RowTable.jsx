import React from "react";

export const RowTable = (props) => {
  const { pokemon } = props;

  // id: responseApiPoke.id,
  //       name: responseApiPoke.name,
  //       preview: responseApiPoke.sprites.front_default,
  //       types: responseApiPoke.types,
  //       skills: responseApiPoke.abilities,
  //       shynis: [responseApiPoke.sprites],
  return (
    <tr
      onClick={() => {
        console.log(pokemon);
      }}
    >
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
        <button type="button" className="btn btn-info text-white">
          Shyni
        </button>
      </td>
    </tr>
  );
};
