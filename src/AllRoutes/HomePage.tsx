import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import DialogBox from "../Components/DialogBox";
import Navbar from "../Components/Navbar";
import { getData } from "../Redux/AppReducer/action";
import { store } from "../Redux/store";
import styles from "../Styles/HomePage.module.css";

const HomePage = () => {
  const data = useSelector((store: any) => store.AppReducer.data);
  const dispatch = useDispatch();

  console.log(data)

  useEffect(() => {
    dispatch<any>(getData());
  }, []);

  return (
    <div>
      <Navbar />

      <div className={styles.productsContainer}>
        {data?.map((el: any, i: any) => {
          return (
            <div className={styles.eachProductBox}>
              <img className={styles.image} src={el.image} alt="" />
              <div className={styles.contentBox}>
                <p className={styles.title}>{el.title}</p>
                <p className={styles.category}>{el.category}</p>
                <p className={styles.price}>RS {el.price}</p>
                <div className={styles.btnBox}>
                  <button className={styles.addToCartBtn}>Add to cart</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
