export const initialState = {
    activecensor: null,
    censordata: {
      lastreading: {},
      alerts: [],
      lastreadings: [],
    },
    censors: [],
  };
  
  const reducer = (state, action) => {
    switch (action.type) {
      case "SET_ACTIVECENSOR":
        return {
          ...state,
          activecensor: action.value,
        };
      case "SEt_CENSORS":
        return {
          ...state,
          censors: action.value,
        };
      case "SET_CENSORDATA":
        return {
          ...state,
          censordata: action.value,
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  