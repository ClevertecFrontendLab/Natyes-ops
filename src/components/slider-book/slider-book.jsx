import { useState } from 'react';
import { FreeMode, Pagination, Scrollbar, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import './slider-book.css';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/thumbs';

export const SliderBook = ({...props}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { imgs } = props;
      
  const mWidth = 992;
  const cWidth = document.body.clientWidth;
  const renderImgs = (arr, classes = '') => (
      arr.map(i => 
        <SwiperSlide className={`book-img book-i ${classes}`} data-test-id='slide-mini'>
          <img src={i.img} alt="book" key={i.id}/>
        </SwiperSlide>
      )
    )
  const checkImgs = () => imgs.length <= 4 ? true : false;
  const main = () => (
    <Swiper
      spaceBetween={10}
      thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
      modules={[FreeMode, Pagination, Thumbs]}
      pagination={{ clickable: true }}
      className="slider-main"
      data-test-id='slide-big'
    >
      {renderImgs(imgs, 'book-img__main')}
    </Swiper>
  )
  const thumbs = () => 
    ( 
      <Swiper
      onSwiper={setThumbsSwiper}
      spaceBetween={30}
      slidesPerView={4}
      centeredSlides={checkImgs()}
      freeMode={true}
      scrollbar={{ draggable: true, hide: true }}
      watchSlidesProgress={true}
      modules={[FreeMode, Thumbs, Scrollbar]}
      className="slider-thumbs"
    >
      {renderImgs(imgs, 'book-img__thumbs')}
    </Swiper>)

  return (
    <div className="book-slider book-page__img book-page__img--main">
      {main()}
      {
        cWidth > mWidth && imgs.length !== 1 ? thumbs() : thumbs().destroyed
      }
    </div>
  );
}