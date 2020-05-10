import axios from "axios";

export function loadData() {
  return (dispatch) => {
    return axios
      .get(
        "https://gateway.marvel.com:443/v1/public/characters?apikey=d0b3e79e203c1593d5e57543698056ae"
      )
      .then((response) => {
        dispatch(getCharacters(response.data.data.results));
      });
  };
}
export function loadDataDetails() {
  return (dispatch) => {
    return axios
      .get(
        "https://gateway.marvel.com:443/v1/public/characters/1011334?apikey=d0b3e79e203c1593d5e57543698056ae"
      )
      .then((response) => {
        dispatch(getCharactersDetails(response.data.data.results));
      });
  };
}

export function getCharacters(characters) {
  return {
    type: "GET_CHARACTERS",
    characters: characters,
  };
}

export function getCharactersDetails(charactersDetails) {
  return {
    type: "GET_CHARACTERS_DETAILS",
    charactersDetails: charactersDetails,
  };
}

export function postDataCharacters(newDataCharacters) {
  return {
    type: "NEW_DATA_CHARACTERS",
    postDataCharacters: newDataCharacters,
  };
}
