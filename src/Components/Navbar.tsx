import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styles from "../Styles/Navbar.module.css";

const Navbar = () => {
  const [bool, setBool] = useState<boolean>(false);
const navigate=useNavigate()
  const cartdata= useSelector((store:any)=>store.AppReducer.cartdata)
console.log(cartdata)
  const handleToggle = (): void => {
    setBool(!bool);
  };

  return (
    <div className={styles.header}>
      <div className={styles.leftBox}>
        <Link to="/">
        <img
          className={styles.logo}
          src="https://images.squarespace-cdn.com/content/v1/5e185abfc76307064fbf9623/1601657483135-2RZDLSDC83SZMJLWK1AY/Large+ArBa+Logo+2.PNG"
          alt=""
        />
        </Link>
      </div>
      <div className={styles.rightBox}>
        <div className={styles.cartBox}>
          <img
            className={styles.cartLogo}
            src="https://www.iconpacks.net/icons/3/free-green-shopping-cart-icon-10909-thumb.png"
            alt=""
          />
          <Link to="/cartpage">
          <div className={styles.cartItemCount}>{cartdata.length}</div>
          </Link>
        </div>
        <div className={styles.dropdown}>
          <img
            onClick={handleToggle}
            className={`${styles.link} ${styles.profile}`}
            src="https://picsum.photos/id/242/200/300"
            alt=""
          />
          <div
            style={
              bool
                ? {
                    opacity: "1",
                    pointerEvents: "auto",
                    transform: "translateY(0)",
                  }
                : {}
            }
            className={styles.dropdownMenu}
          >
            <p onClick={()=>{
                localStorage.removeItem("token")
                navigate("/login")
            }}>Logout</p>
          <Link to="/profile">  <p>Profile</p></Link>
            <p>Code Challenge</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;