import { useEffect, useState } from "react";
import DialogBox from "../Components/DialogBox";
import Navbar from "../Components/Navbar";

import styles from "..//Styles/HomePage.module.css";
import { handleAddToCart, homePageData } from "../Redux/AppReducer/action";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Carousel from "../Components/Carousel";


const images = [
    'https://www.pngfind.com/pngs/m/620-6205611_banner-image-objectives-of-e-commerce-hd-png.png',
    'https://img.favpng.com/1/3/6/web-development-e-commerce-business-digital-marketing-web-design-png-favpng-UnKvfvQbtLxaZUtnnwzBK7Ywj.jpg',
    'https://www.pngfind.com/pngs/m/24-248789_ecommerce-website-development-e-commerce-banner-design-png.png',
  ];




const HomePage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [terms, setTerms] = useState<any>(false);

  const homepageData = useSelector(
    (store: any) => store.AppReducer.homepageData
  );
  console.log(homepageData);
  const dispatch = useDispatch();
  const acceptTermsSubmit = (): void => {
    localStorage.setItem("terms", JSON.stringify(true));
  };

  useEffect(() => {
    let termsFromStorage = localStorage.getItem("terms");

    if (termsFromStorage == undefined) {
      setTerms(false);
      setIsOpen(true);
    } else {
      setTerms(true);
    }
    dispatch<any>(homePageData());
  }, []);

  return (
    <div>
      <Navbar />
      <h1>Home</h1>
      <div>
        <Carousel images={images}/>
        {
          <DialogBox isOpen={isOpen} onClose={(e: any) => setIsOpen(false)}>
            <h1>Terms and Conditions</h1>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste a
            ipsam repellendus commodi ad, fugit id magnam inventore laudantium
            autem delectus praesentium incidunt debitis, numquam dicta eveniet
            obcaecati, itaque quidem? <br />
            <br /> Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Labore vel doloremque id iure ut aliquam et deserunt soluta saepe,
            corporis voluptatem consequatur amet optio rem molestiae ab
            delectus? Aliquam, autem!
            <br />
            <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis
            reiciendis vero exercitationem soluta officiis cum tempora ipsa
            quos, perferendis reprehenderit ipsum vitae quaerat dicta
            voluptatibus rem quidem sapiente! Maiores, dolore!
            <br />
            <br />
            <button
              onClick={() => {
                acceptTermsSubmit();
                setIsOpen(false);
              }}
              className={styles.tncBtn}
            >
              Accept
            </button>
            <button
              onClick={() => {
                setIsOpen(false);
                localStorage.removeItem("terms");
              }}
              className={styles.tncBtn}
            >
              Cancel
            </button>
          </DialogBox>
        }
      </div>

      <div className={styles.productsContainer}>
        {homepageData?.map((el: any, i: any) => {
          return (
            <div className={styles.eachProductBox}>
              <img className={styles.image} src={el.image} alt="" />
              <div className={styles.contentBox}>
                <p className={styles.title}>{el.title}</p>
                <p className={styles.category}>{el.category}</p>
                <p className={styles.price}>RS {el.price}</p>
                <div className={styles.btnBox}>
                  <button
                    className={styles.addToCartBtn}
                    onClick={() => {
                      dispatch<any>(handleAddToCart(el));
                      alert("Item added to your cart!");
                    }}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.productBtnBox}>
        <Link to="allproduct">
          {" "}
          <button className={styles.productBtn}>All Products {"> >"}</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
