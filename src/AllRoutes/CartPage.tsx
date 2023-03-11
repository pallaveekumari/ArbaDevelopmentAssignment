import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import styles from  "..//Styles/CartPage.module.css"
import { getData } from "../Redux/AppReducer/action";
const CartPage = () => {
  const data=useSelector((store:any)=>store.AppReducer.data)
const cartdata=useSelector((store:any)=>store.AppReducer.cartdata)
  const [qty,setQty]=useState<number>(1)

const dispatch=useDispatch()

useEffect(()=>{
    dispatch<any>(getData())
})
const handleqty=(id:any,amount:any)=>{
    let updatedData= cartdata.map(el=>{
      if(el.id==id)
      {
          return {
             ...el,
             qty: el.qty+amount
          }
      }
      else{
          return el;
      }
    })
    cartdata(updatedData)
  }


  return (
    <div className={styles.productsContainer}>
      {data.map((el:any) => {
       return (
        <div className={styles.eachProductBox}>
          <img className={styles.image} src={el.image} alt="" />
          <div className={styles.contentBox}>
            <p className={styles.title}>{el.title}</p>
            <p className={styles.category}>{el.category}</p>
            <p className={styles.price}>RS {el.price}</p>
            <div className={styles.addToCartBtn}>
              <button onClick={()=>handleqty(el.id,-1)}>-</button>
              <p>{qty}</p>
              <button onClick={()=>handleqty(el.id,1)}>+</button>
            </div>
          </div>
        </div>
      );
      })}
    </div>
  );
};

export default CartPage;
