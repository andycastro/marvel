import axios from "axios";

class GetSeries {
  getSeries = (secretKey, id) => {
    return axios.get(
      `https://gateway.marvel.com:443/v1/public/characters/${id}/series?apikey=${secretKey}`
    );
  };
}

export default new GetSeries();
