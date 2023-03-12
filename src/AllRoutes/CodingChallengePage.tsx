import React from "react";
import Navbar from "../Components/Navbar";
import styles from "../Styles/CodingChallengePage.module.css";
const CodingChallengePage = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.conatiner}>
      <h2>Coding Challenge</h2>
      <div className={styles.codeBox}>
        <p>Write a function:</p>
        <p>function solution(A);</p>
        <p>
          that,given an array A of N integers, returns the smallest positive
          integer(greater than 0)
        </p>
        <p>that does not occur in A</p>
        <p>For example, given A=[1,3,6,4,1,2], the function should return 5.</p>
        <p>Given A = [1,2,3], the function should return 4.</p>
        <p>Given A = [-1,-3], the function should return 1.</p>
        <p>Write an efficient algorithm for the following assumptions:</p>
        <p>N is an integer within the range [1..100,000];</p>
        <p>
          each element of array A is an integer within the range
          [-1,000,000..1,000,000]
        </p>
      </div>
      </div>
      <div className={styles.collection}>
      <h2>Data Collection</h2>
      <div className={styles.databox}>
        <div className={styles.inputbox}>
          <input type="text" placeholder="Enter Your Input Here" />
          <p >Enter the value with Comma (,) seperator eg: 1,3,6,4,1,2</p>
        </div>
        <button className={styles.addToCartBtn}>Print Result</button>
      </div>
      </div>
      <div className={styles.outputcontainer}>
      <h2>Output</h2>
      <p className={styles.output}>5</p>
      </div>
      <div className={styles.notemainbox}>

      <h2 className={styles.note} >Note::</h2>
      <div className={styles.NoteBox}>
        <p>{">>"}You need to read the data from above input and convert that</p>
        <p>values into array eg: 1,3,6,4,1,2 will be [1,3,6,4,1,2]</p>
        <br />
        <p>
          {">>"}Use above converted array as a input to your solution function
        </p>
        <br />
        <p>{">>"}Display the output result in above output section once you</p>
        <p>called the solution function and get the result.</p>
      </div>
     
      </div>
    </div>
  );
};

export default CodingChallengePage;
