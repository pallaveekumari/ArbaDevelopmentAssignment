import React from 'react'
import styles from "../Styles/Crousel.module.css"
const Crousels = () => {

    const carousel = document.getElementsByClassName('carousel')[0];
    const leftBtn = document.getElementsByClassName('leftbtn')[0];
    const rightBtn = document.getElementsByClassName('rightbtn')[0];
    const indicators = document.getElementsByClassName('indicator');
    
    const span = 300;
    let prv = 0;
    let currentIndex = 0;
    
    const clearActive = () => {
      for(let i = 0; i < indicators.length; i++) {
        indicators[i].classList.remove('active');
      }
    }
    
    const executeMove = (index: number) => {
      let mov = index * span;
        carousel.animate([
          { transform: 'translateX(-' + prv + 'px)' },
          { transform: 'translateX(-' + mov + 'px)' }
        ], { duration: 300 });
        carousel.style.transform = 'translateX(-' + mov + 'px)';  
      prv = mov;  
    }
    
    const moveSlide = (dir: string) => {  
       if(dir === 'left') {
        currentIndex--;
      } else {
        currentIndex++;
      }
      if(currentIndex < 0) {
        currentIndex = 0;
      } 
      if (currentIndex  > indicators.length - 1){    
        currentIndex = indicators.length - 1;
      }
     
      executeMove(currentIndex);
      
      indicators[currentIndex].classList.add('active');
      
    }
    
    for(let i = 0; i < indicators.length; i++) {
      indicators[i].addEventListener('click', () => {
        clearActive();
        executeMove(i);
        indicators[i].classList.add('active');
      });
    }
    
    leftBtn.addEventListener('click', () => {
      clearActive();
      moveSlide('left');
    });
    
    rightBtn.addEventListener('click', () => {
      clearActive();
      moveSlide('right');
    });


  return (
    <div>
    <div class="carousel-holder">
  <div class="left">
    <div class="leftbtn"></div>
  </div>
  <div class="carousel-frame">
    <div class="carousel">
      <div class="slide">
        <div>
          <img src="https://images.unsplash.com/photo-1657143377606-ad2f0b790fc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60" alt="">
        </div>
      </div>
      <div class="slide">
        <div>
          <img src="https://images.unsplash.com/photo-1657214058744-7ff3b448c205?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60" alt="">
        </div>
      </div>
      <div class="slide">
        <div>
          <img src="https://images.unsplash.com/photo-1657127791271-d5a722d331d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60" alt="">
        </div>
      </div>
      <div class="slide">
        <div>
          <img src="https://images.unsplash.com/photo-1657211492977-62bf30671311?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="">
        </div>
      </div>
      <div class="slide">
        <div>
          <img src="https://images.unsplash.com/photo-1657143376804-2c8ef7bfa72d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="">
        </div>
      </div>
    </div>
  </div>
  <div class="right">
    <div class="rightbtn"></div>
  </div>
</div>
<div class="indicators">
  <div class="indicator active"></div>
  <div class="indicator"></div>
  <div class="indicator"></div>
  <div class="indicator"></div>
  <div class="indicator"></div>
</div><div class="carouselholder">
  <div class="left">
    <div class="leftbtn"></div>
  </div>
  <div class="carouselframe">
    <div class="carousel">
      <div class="slide">
        <div>
          <img src="https://images.unsplash.com/photo-1657143377606-ad2f0b790fc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60" alt="">
        </div>
      </div>
      <div class="slide">
        <div>
          <img src="https://images.unsplash.com/photo-1657214058744-7ff3b448c205?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60" alt="">
        </div>
      </div>
      <div class="slide">
        <div>
          <img src="https://images.unsplash.com/photo-1657127791271-d5a722d331d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60" alt="">
        </div>
      </div>
      <div class="slide">
        <div>
          <img src="https://images.unsplash.com/photo-1657211492977-62bf30671311?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="">
        </div>
      </div>
      <div class="slide">
        <div>
          <img src="https://images.unsplash.com/photo-1657143376804-2c8ef7bfa72d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="">
        </div>
      </div>
    </div>
  </div>
  <div class="right">
    <div class="rightbtn"></div>
  </div>
</div>
<div class="indicators">
  <div class="indicatoractive"></div>
  <div class="indicator"></div>
  <div class="indicator"></div>
  <div class="indicator"></div>
  <div class="indicator"></div>
</div>
</div>
  )
}

export default Crousels