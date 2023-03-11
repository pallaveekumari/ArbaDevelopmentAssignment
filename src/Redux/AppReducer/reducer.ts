import * as types from "../AppReducer/actionTypes";

const initialdata = {
  data: [],
  isLoading: true,
  isError: false,
  cartdata: [],
};

export const reducer = (state = initialdata, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    case types.GET_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: payload,
      };
    case types.GET_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case types.ADD_TO_CART_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    case types.ADD_TO_CART_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        cartdata: [...state.cartdata, payload],
      };

    case types.ADD_TO_CART_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case types.HANDLE_QUANTITY_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.HANDLE_QUANTITY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        cartdata: payload,
      };

    case types.HANDLE_QUANTITY_FAILURE:
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    default:
      return state;
  }
};
