import * as actionTypes from "../actions/types";

const initialState = {
  bakeries: [],
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_BAKERY:
      const { newBakery } = action.payload;
      return {
        ...state,
        bakeries: [...state.bakeries, newBakery],
      };

    case actionTypes.FETCH_BAKERIES:
      return {
        ...state,
        bakeries: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default reducer;
