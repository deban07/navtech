const initialState = {
  shoes: [],
};

const shoeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_SHOE':
      return {
        ...state,
        shoes: [...state.shoes, action.payload],
      };
    case 'REMOVE_SHOE':
      return {
        ...state,
        shoes: state.shoes.filter(shoe => shoe.id !== action.payload),
      };

    default:
      return state;
  }
};

export default shoeReducer;
