// import React, { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
// import DialogBox from "../Components/DialogBox";
// import Navbar from "../Components/Navbar";
// import { getData, handleAddToCart } from "../Redux/AppReducer/action";

// import styles from "../Styles/HomePage.module.css";

// const HomePage = () => {
//     const [cartBtnToggle,setCartBtnToggle]=useState<boolean>(false)
//   const data = useSelector((store: any) => store.AppReducer.data);

//   const dispatch = useDispatch();

//   console.log(data);

//   useEffect(() => {
//     dispatch<any>(getData());
//   }, []);

//   return (
//     <div>
//       <Navbar />

//       <div className={styles.productsContainer}>
//         {data?.map((el: any, i: any) => {
//           return (
//             <div className={styles.eachProductBox}>
//               <img className={styles.image} src={el.image} alt="" />
//               <div className={styles.contentBox}>
//                 <p className={styles.title}>{el.title}</p>
//                 <p className={styles.category}>{el.category}</p>
//                 <p className={styles.price}>RS {el.price}</p>
//                 <div className={styles.btnBox}>
//                   <button
//                     className={styles.addToCartBtn}
//                     onClick={() => {
//                       dispatch<any>(handleAddToCart(el));
//                       alert("Item added to your cart!");
//                     }}
//                   >
//                     Add to cart
//                   </button>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default HomePage;


import React from 'react'

const HomePage = () => {
  return (
    <div>
      
    </div>
  )
}

export default HomePage
