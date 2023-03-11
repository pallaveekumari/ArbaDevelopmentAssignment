import * as types from "../AuthReducer/actionTypes"

const initialdata={
    token:"",
    isLoading:false,
    isError:false,
    isAuth:false
}


export const reducer=(state=initialdata,action:any)=>
{
  const {type,payload}=action;

  switch(type)
  {
     case types.LOGIN__REQUEST:
        return{
                ...state,
                isLoading:true,
                isError:false
                
        }
        case types.LOGIN__SUCEESS:
            return {
                ...state,
                isLoading:false,
                isAuth:true,
                token:payload,
                isError:false
            }

            case types.LOGIN__FAILURE:
                return {
                    ...state,
                    isError:true,
                    isLoading:false,
                    isAuth:false,
                    token:""
                    
                }
                default:return state;
  }


}