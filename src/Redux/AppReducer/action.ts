import * as types from "../AppReducer/actionTypes"

export const getData=()=>(dispatch:any)=>{

    dispatch({type:types.GET_DATA_REQUEST})

   return fetch("https://fakestoreapi.com/products")
   .then((res)=>{
    return res.json()
   })
    .then((res)=>{
        dispatch({type:types.GET_DATA_SUCCESS,payload:res})
    })
    .catch((err)=>{
        dispatch({type:types.GET_DATA_FAILURE})
    })
}


