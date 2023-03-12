import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import styles from "..//Styles/CartPage.module.css";
import Navbar from "../Components/Navbar";
import { getData, handlequantity } from "../Redux/AppReducer/action";
const CartPage = () => {
  const data = useSelector((store: any) => store.AppReducer.data);
  const cartdata = useSelector((store: any) => store.AppReducer.cartdata);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch<any>(getData());
  }, []);
  const handleqty = (id: any, amount: any) => {
    let updatedData = cartdata.map((el: any) => {
      if (el.id == id) {
        return {
          ...el,
          qty: el.qty + amount,
        };
      } else {
        return el;
      }
    });
    dispatch<any>(handlequantity(updatedData));
  };

  return (
    <div>
      <Navbar />
      <h1>My Cart</h1>
      <div className={styles.productsContainer}>
        {cartdata.map((el: any) => {
          return (
            <div className={styles.eachProductBox}>
              <img className={styles.image} src={el.image} alt="" />
              <div className={styles.contentBox}>
                <p className={styles.title}>{el.title}</p>
                <p className={styles.category}>{el.category}</p>
                <p className={styles.price}>RS {el.price}</p>
                <div className={styles.addToCartBtn}>
                  <button
                    disabled={el.qty == 1}
                    onClick={() => handleqty(el.id, -1)}
                  >
                    -
                  </button>
                  <p>{el.qty}</p>
                  <button onClick={() => handleqty(el.id, 1)}>+</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {cartdata.length != 0 ? (
        <div className={styles.productBtnBox}>
          <button className={styles.productBtn}>Checkout</button>
        </div>
      ) : null}
    </div>
  );
};

export default CartPage;
