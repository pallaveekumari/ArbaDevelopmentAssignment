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


export const handleAddToCart=(data:any)=>(dispatch:any)=>{
    console.log(data)
dispatch({type:types.ADD_TO_CART_REQUEST})
dispatch({type:types.ADD_TO_CART_SUCCESS,payload:{...data,qty:1}})
dispatch({type:types.ADD_TO_CART_FAILURE})
}
// const handleqty = (id: any, amount: any) => {
//     let updatedData = cartdata.map((el: any) => {
//       if (el.id == id) {
//         return {
//           ...el,
//           qty: el.qty + amount,
//         };
//       } else {
//         return el;
//       }
//     });
//     cartdata(updatedData);
//   };


export const handlequantity=(updatedCartData:any)=>(dispatch:any)=>{

    dispatch({type:types.HANDLE_QUANTITY_REQUEST})
    dispatch({type:types.HANDLE_QUANTITY_SUCCESS,payload:updatedCartData})
    dispatch({type:types.HANDLE_QUANTITY_FAILURE})
}
