
import * as types from "../AuthReducer/actionTypes"

export const login =(payload:any)=>async(dispatch:any)=>{
   

    
dispatch({type:types.LOGIN__REQUEST})

return fetch("https://fakestoreapi.com/auth/login",{
    method:"POST",
    headers:{
        "contentType":"application/json"
        // "mode":"no-cors"
    },
    body:JSON.stringify(payload)
})
.then((res)=>{
    console.log(res)
    dispatch({type:types.LOGIN__SUCEESS,payload:res.token})
})
.catch((err)=>{
    console.log(err)
    dispatch({type:types.LOGIN__FAILURE})
})

}