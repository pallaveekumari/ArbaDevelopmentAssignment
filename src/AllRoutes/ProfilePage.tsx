import React, { useEffect, useState } from "react";
import DialogBox from "../Components/DialogBox";
import Navbar from "../Components/Navbar";
import styles from "../Styles/ProfilePage.module.css";
const ProfilePage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [terms, setTerms] = useState<any>(false);

  const acceptTermsSubmit = (): void => {
    localStorage.setItem("terms", JSON.stringify(true));
  };

  return (
    <div>
      <Navbar />
      <h1>My Profile</h1>
      <div>
        <div className={styles.boxes}>
          <img
            className={styles.imagebox}
            src="https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg"
            alt=""
          />
          <p>user1</p>
          <p>arba@gmail.com</p>
        </div>
        <button
          className={styles.addToCartBtn}
          onClick={() => {
            setIsOpen(true);
          }}
        >
          See T&C
        </button>
        <div>
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
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Blanditiis reiciendis vero exercitationem soluta officiis cum
              tempora ipsa quos, perferendis reprehenderit ipsum vitae quaerat
              dicta voluptatibus rem quidem sapiente! Maiores, dolore!
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
      </div>
    </div>
  );
};

export default ProfilePage;
