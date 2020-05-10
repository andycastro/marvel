const initialState = {
  characters: [],
  charactersDetails: [],
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_CHARACTERS":
      return {
        ...state,
        characters: action.characters,
      };
    case "GET_CHARACTERS_DETAILS":
      return {
        ...state,
        charactersDetails: action.charactersDetails,
      };
    case "NEW_DATA_CHARACTERS":
      const charactersDetailsCurr = state.charactersDetails;
      return {
        ...state,
        charactersDetails: [
          { ...charactersDetailsCurr, ...action.postDataCharacters },
        ],
      };
    default:
      return state;
  }
};

export default mainReducer;
