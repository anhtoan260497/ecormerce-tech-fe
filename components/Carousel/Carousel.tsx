
'use client'
import clsx from 'clsx';
import Image from 'next/image';
import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import CarouselNavigationBtn from '../CarouselNavigationBtn/CarouselNavigationBtn';
import styles from './Carousel.module.scss';

function Carousel() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null as any);
  const [activeIndex, setActiveIndex] = useState(0);



  const carouselItem = [
    {
      img: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/nang-cap-iphone-15-prm-chip-sliding-20-602024.jpg',
      title: <p className='text-center'><span className='text-sm'>IPHONE 15 PRO MAX</span><br /><span className=''>nâng cấp ngay</span></p>,
      href: 'https://cellphones.com.vn/iphone-15-pro-max.html'
    },
    {
      img: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/690x300_Galaxy-S24_06%20(2).png',
      title: <p className='text-center'><span className='text-sm'>GALAXY S24 SERIES</span><br /><span className=''>Giá tốt chốt ngay</span></p>,
      href: 'https://cellphones.com.vn/mobile/samsung/galaxy-s/s24-series.html'
    },
    {
      img: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/poco-m6-sliding-cate-27-6-2024.jpg',
      title: <p className='text-center'><span className='text-sm'>POCO M6</span><br /><span className=''>Giá chỉ 3.89 triệu</span></p>,
      href: ''
    },
  ]


  const renderCarouselItems = () => {
    return carouselItem.map((item, index) => {
      return (
        // @ts-ignore
        <SwiperSlide key={index}>
          <Image src={item.img} width={690} height={270} alt='banner' />
        </SwiperSlide>
      )
    })
  }

  const renderCarouselThumb = () => {
    return carouselItem.map((item, index) => {
      return (
        //@ts-ignore 
        <SwiperSlide className={clsx(styles.swiperThumbItem, activeIndex === index && styles.thumbsActived)} key={index}>
          {item.title}
        </SwiperSlide>
      )
    })
  }

  return (
    <div className={clsx('md:w-4/5 md:block lg:w-4/5 xl:w-3/5 box-shadow hidden', styles.carouselContainer)}>
      <Swiper
        loop={false}
        spaceBetween={0}
        navigation={{
          nextEl: styles.swiperButtonNext,
          prevEl: styles.swiperButtonPrev,
          enabled: true
        }}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Navigation, Thumbs, Autoplay]}
        className={styles.swiperBanner}
        autoplay={{ delay: 3000 }}
        onActiveIndexChange={(e) => setActiveIndex(e.activeIndex)}
      >
        {renderCarouselItems()}
        {activeIndex < carouselItem.length - 1 && <CarouselNavigationBtn type='next' />}
        {activeIndex > 0 && <CarouselNavigationBtn type='prev' />}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={false}
        spaceBetween={0}
        slidesPerView={carouselItem.length >= 5 ? 5 : carouselItem.length}
        modules={[FreeMode, Navigation, Thumbs]}
        className={styles.swiperThumb}
      >
        {renderCarouselThumb()}
      </Swiper>
    </div>
  );
}

export default Carousel; 
