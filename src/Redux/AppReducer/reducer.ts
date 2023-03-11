
import * as types from "../AppReducer/actionTypes";

const initialdata = {
  data: [],
  isLoading: true,
  isError: false,
  cartdata:[]
};

export const reducer = (state = initialdata, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_DATA_REQUEST:
      return {
        ...state,
        isLoading:true,
        isError:false
      };

      case types.GET_DATA_SUCCESS:
        return{
            ...state,
            isLoading:false,
            isError:false,
            data:payload
        }
        case types.GET_DATA_FAILURE:
            return {
                ...state,
                isLoading:false,
                isError:true
            }

            case types.ADD_TO_CART_REQUEST:
                return {
                    ...state,
                    isLoading:true,
                    isError:false
                }

                case types.ADD_TO_CART_SUCCESS:
                    return {
                        ...state,
                        isLoading:false,
                        isError:false,
                       cartdata:[...state.cartdata,payload]
                    }

                    case types.ADD_TO_CART_FAILURE:
                        return {
                            ...state,
                            isLoading:false,
                            isError:true
                        }
            default:
                return state
  }
};
