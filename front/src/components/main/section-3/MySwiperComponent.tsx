// import React, { useEffect, useState } from "react";

// import Swiper from "swiper";
import "./style.css";

function MySwiperComponent() {
  // const [swiper, setSwiper] = useState(null);

  // useEffect(() => {
  //   if (swiper === null) {
  //     const newSwiper = new Swiper(".swiper-container", {
  //       // Swiper 옵션 설정
  //       slidesPerView: 2,
  //       spaceBetween: 10,
  //       loop: true,
  //       loopedSlides: 1,
  //       navigation: true,
  //       // 다른 옵션 설정...

  //       on: {
  //         slideChange: function () {
  //           const activeSlide = document.querySelector(".swiper-slide-active");
  //           // 이전 활성 슬라이드에서 CSS 제거
  //           const previousActiveSlide = document.querySelector(".active-slide");
  //           if (previousActiveSlide) {
  //             previousActiveSlide.classList.remove("active-slide");
  //           }
  //           // 현재 활성 슬라이드에 CSS 적용
  //           activeSlide.classList.add("active-slide");
  //         },
  //       },
  //     });
  //     setSwiper(newSwiper);
  //   }
  // }, [swiper]);

  return (
    <div className="swiper-container">
      <div className="swiper-wrapper" style={{ height: "400px" }}>
        <div className="swiper-slide" style={{ backgroundColor: "red" }}>
          Slide 1
        </div>
        <div className="swiper-slide" style={{ backgroundColor: "yellow" }}>
          Slide 2
        </div>
        <div className="swiper-slide" style={{ backgroundColor: "blue" }}>
          Slide 3
        </div>
        {/* 슬라이드 추가 */}
      </div>
    </div>
  );
}

export default MySwiperComponent;
