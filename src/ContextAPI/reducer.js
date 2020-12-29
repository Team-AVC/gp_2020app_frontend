export const initialState = {
  activeCensorid: undefined,
  activeCensor: {},
  censors: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_ACTIVECENSOR":
      return {
        ...state,
        activeCensor: action.value,
      };
    case "SET_CENSORS":
      return {
        ...state,
        censors: action.value,
      };
    case "SET_ACTIVECENSORID":
      return {
        ...state,
        activeCensorid: action.value,
      };
    default:
      return state;
  }
};

export default reducer;
  
