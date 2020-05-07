import axios from "axios";

class GetCharacters {
  getCharacters = (secretKey) => {
    return axios.get(
      `https://gateway.marvel.com:443/v1/public/characters?apikey=${secretKey}`
    );
  };
}

export default new GetCharacters();
