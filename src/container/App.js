import React, { useState, useEffect } from "react";
import axios from "axios";
import GetCharacters from "../services/getCharacters";
import GetSeries from "../services/getSeries";

function App() {
  const [characters, setCharacters] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [idCharacters, setIdCharacters] = useState("");

  useEffect(() => {
    const secretKey = "d0b3e79e203c1593d5e57543698056ae";
    const id = idCharacters ? idCharacters : "1011334";
    console.log(idCharacters);
    axios
      .all([
        GetCharacters.getCharacters(secretKey),
        GetSeries.getSeries(secretKey, id),
      ])
      .then(
        axios.spread(function (response, responseSeries) {
          const listagem = response.data.data.results;
          setCharacters(listagem);
          console.log(response.data.data.results);
          console.log(responseSeries.data.data.results);
        })
      );
  }, [idCharacters]);

  const handleInputChange = (e) => {
    const searchBy = e.target.value || "";
    const lowerSearch = searchBy.toLowerCase();
    const resultSearch = characters.filter((element) => {
      const lowerElement = element.name.toLowerCase();
      return lowerElement.indexOf(lowerSearch) !== -1;
    });
    setSearchResult(resultSearch);
  };

  const list = searchResult.length !== 0 ? searchResult : characters;

  return (
    <>
      <form>
        <input type="text" placeholder="Busca" onChange={handleInputChange} />
        <button>Buscar</button>
      </form>

      <div>
        <ul>
          {list.map((character) => {
            return (
              <li key={character.id}>
                {character.name}
                <img
                  width="100"
                  src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                  alt={`${character.name}`}
                />
                <button
                  onClick={() => {
                    console.log(character.id);
                    setIdCharacters(character.id);
                  }}
                >
                  + detalhes
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
