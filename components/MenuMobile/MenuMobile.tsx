import React from 'react';
import styles from './MenuMobile.module.scss'
import Image from 'next/image';
import clsx from 'clsx';


function MenuMobile() {

    const menu = [
        {
            icon: '/assets/images/svg/home.svg',
            title: 'Trang chủ'
        },
        {
            icon: '/assets/images/svg/menu.svg',
            title: 'Danh mục'
        },
        {
            icon: '/assets/images/svg/shop.svg',
            title: 'Cửa hàng'
        },
        {
            icon: '/assets/images/svg/member.svg',
            title: 'Đăng nhập'
        }
    ]


    const renderMobileMenu = () => {
        return menu.map((item) => {
            return (
                <div className={clsx(styles.menuMobileItem, 'flex', 'justify-center', 'items-center', 'flex-col')} key={item.title}>
                    <Image src={item.icon} width={20} height={20} alt='hello' />
                    <p>{item.title}</p>
                </div>
            )
        })
    }

    return (
        <div className={clsx(styles.menuMobileContainer, 'box-shadow justify-between items-center p-2 menu-mobile-responsive')}>
            {renderMobileMenu()}
        </div>
    );
}

export default MenuMobile;