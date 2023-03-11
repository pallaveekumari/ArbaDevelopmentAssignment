import { stat } from "fs";
import * as types from "../AppReducer/actionTypes";

const initialdata = {
  data: [],
  isLoading: true,
  isError: false,
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

            default:
                return state
  }
};
