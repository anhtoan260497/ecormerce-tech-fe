import styles from '../Carousel/Carousel.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import {useSwiper} from 'swiper/react'
import { CSSProperties } from 'react';
import clsx from 'clsx';
function CarouselNavigationBtn({type, style, className} : {type : 'next' | 'prev', style? : CSSProperties, className? :  string}) {

    const swiper = useSwiper()

    const renderIcon = () => {
        if(type === 'next') {
            return <FontAwesomeIcon icon={faChevronRight} />
        }
        return <FontAwesomeIcon icon={faChevronLeft} />
    }
    
    return (
        <div style={style} className={clsx(type === 'next' ? styles.swiperButtonNext : styles.swiperButtonPrev, className)} onClick={type === 'next' ? () => swiper.slideNext() : () => swiper.slidePrev()}>{renderIcon()}</div>
    );
}

export default CarouselNavigationBtn;