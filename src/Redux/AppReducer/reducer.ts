import * as types from "../AppReducer/actionTypes";

type init = {
  data: any;
  isLoading: any;
  isError: any;
  homepageData: any;
  cartdata: any;
};

const initialdata: init = {
  data: [],
  isLoading: true,
  isError: false,
  cartdata: localStorage.getItem("cartitem")
    ? JSON.parse(localStorage.getItem("cartitem")!)
    : [],

  homepageData: [],
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
      let updatedcartdata = [...state.cartdata, payload];
      localStorage.setItem("cartitem", JSON.stringify(updatedcartdata));
      return {
        ...state,
        isLoading: false,
        isError: false,
        cartdata: updatedcartdata,
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

    case types.HOMEPAGE_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        homepageData: payload,
      };
    default:
      return state;
  }
};
