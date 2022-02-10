import React, { Component } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';

SwiperCore.use([Navigation, Pagination, Autoplay]);

class Main extends Component {
  render() {
    return (
      <>
        <div className='main-slider'>
          <Swiper className='banner' spaceBetween={100} slidesPerView={2.4} loop={true} centeredSlides={true} navigation pagination={{ clickable: true }}>
            <SwiperSlide>
              <div className='img-bx'>
                <img src='assets/images/main/slide1.jpg' />
              </div>
              <div className='overlay'>
                <p className='text'>기회를 찾아야 기회를 만든다.</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='img-bx'>
                <img src='assets/images/main/slide2.jpg' />
              </div>
              <div className='overlay'>
                <p className='text'>인간의 감정은 누군가를 만날 때와 헤어질 때 가장 순수하며 가장 빛난다.</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='img-bx'>
                <img src='assets/images/main/slide3.jpg' />
              </div>
              <div className='overlay'>
                <p className='text'>마음에 대해 논할 때, 자기 기만에 대해서는 할 말이 많다.</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </>
    );
  }
}

export default Main;
