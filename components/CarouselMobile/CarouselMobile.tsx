'use client'
import React, { useState } from 'react';
import styles from './CarouselMobile.module.scss'
import clsx from 'clsx';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import CarouselNavigationBtn from '../CarouselNavigationBtn/CarouselNavigationBtn';

function CarouselMobile() {

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

    const renderCarouselMobile = () => {
        return carouselItem.map((item, index) => {
            return <SwiperSlide key={item.href}>
                <a href={item.href}><Image src={item.img} alt='banner' width={690} height={300} /></a>
            </SwiperSlide>
        })
    }

    return (
        <div className={clsx(styles.carouselMobileContainer, 'md:hidden block w-full')}>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    renderBullet: function (index, className) {
                        return '<span class="' + className + '"></span>';
                    },
                    el: ".swiper-pagination",
                }}
                navigation={{
                    nextEl: styles.swiperButtonNext,
                    prevEl: styles.swiperButtonPrev,
                    enabled: true
                }}
                modules={[Autoplay, Pagination, Navigation]}
                onActiveIndexChange={(e) => setActiveIndex(e.activeIndex)}
            >
                {renderCarouselMobile()}
                {activeIndex < carouselItem.length - 1 && <CarouselNavigationBtn style={{ top: '35%', position: 'absolute', right: '10px', color: 'white', zIndex: '10000' }} type='next' />}
                {activeIndex > 0 && <CarouselNavigationBtn style={{ top: '35%', position: 'absolute', left: '10px', color: 'white', zIndex: '10000' }} type='prev' />}
                <div className="swiper-pagination"></div>
            </Swiper>
        </div>
    );
}

export default CarouselMobile;