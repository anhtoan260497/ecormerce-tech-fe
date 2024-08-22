'use client'

import CarouselNavigationBtn from '@/components/CarouselNavigationBtn/CarouselNavigationBtn';
import React from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';
import ProductItem from '../ProductItem/ProductItem';
import styles from './ProductWrapped.module.scss';
import { IProductItem } from '@/interfaces/Product';

function ProductWrapped({ products }: { products: IProductItem[] }) {

    const swiperSettings = {
        slidesPerView: 2,
        spaceBetween: 10,
        slidesPerGroup: 2,
        modules: [Navigation],
        navigation: {
            nextEl: styles.swiperButtonNext,
            prevEl: styles.swiperButtonPrev,
            enabled: true
        },
        breakpoints: {
            990: {
                slidesPerView: 4,
                slidesPerGroup: 1
            },

            768: {
                slidesPerView: 3,
                slidesPerGroup: 1
            },
            1200: {
                slidesPerView: 5,
                slidesPerGroup: 1,
            }
        }
    }

 

    const calculateButton = (swiper: SwiperType) => {
        // if(swiper.activeIndex === 0) return 'left'
        // const currentBreakPoint = swiper.currentBreakpoint
        // switch (currentBreakPoint) {
        //     case 990:
        //        4 * swiper.activeIndex 
        //     case 768:
        //         return 'left'
        //     case 1200:
        //         return 'left'
        // }
        // // if(activeIndex *) return 'right'
    }

    const renderProductItems = () => {
        return products.map(item => {
          return  <SwiperSlide style={{height : 'auto'}} key={item.name}><ProductItem {...item} /></SwiperSlide>
        })
    }

    return (
        <Swiper {...swiperSettings}onSlideChange={(e) => calculateButton(e)} className={styles.productWrappedContainer}>
            {renderProductItems()}
            <CarouselNavigationBtn type='next' className={styles.swiperButtonNext} />
            <CarouselNavigationBtn type='prev' className={styles.swiperButtonPrev} />
        </Swiper>
    );
}

export default ProductWrapped;