import React from 'react';
import styles from './TopBanner.module.scss'
import clsx from 'clsx';


function TopBanner() {


    const banners = [
        {
            image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:10/plain/https://dashboard.cellphones.com.vn/storage/690x300_Rightbanner_Galaxy-M34-5G_04%20(2).png',
            title: 'Galaxy M34 5G',
            href: 'https://cellphones.com.vn/samsung-galaxy-m34-5g.html'
        },
        {
            image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:10/plain/https://dashboard.cellphones.com.vn/storage/b2s-mac-2024-690300.jpg',
            title: 'Macbook',
            href: 'https://cellphones.com.vn/uu-dai-sinh-vien-hoc-sinh/apple'
        },
        {
            image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:10/plain/https://dashboard.cellphones.com.vn/storage/b2s-2024-right-banner-laptop.jpg',
            title: 'Laptop',
            href: 'https://cellphones.com.vn/laptop.html'
        }
    ]

    const rennderBanner = () => {
        return banners.map((item, index) => {
            return (
                <a className={clsx(styles.TopBannerItem, 'box-shadow')} style={{ backgroundImage: `url('${item.image}')` }} href={item.href} key={item.title}></a>
            )

        })
    }

    return (
        <div className={clsx(styles.TopBannerContainer, 'md:w-1/5 flex flex-col gap-2')}>
            {rennderBanner()}
        </div>
    );
}

export default TopBanner;