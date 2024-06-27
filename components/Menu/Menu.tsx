import React from 'react';
import styles from './Menu.module.scss'
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';

function Menu() {

    const menu = [
        {
            icon: 'https://cellphones.com.vn/media/icons/menu/icon-cps-3.svg',
            title: 'Điện thoại',
            href: '',
        },
        {
            icon: '	https://cdn2.cellphones.com.vn/x/media/icons/menu/icon-cps-380.svg',
            title: 'Laptop',
            href: '',
        },
        {
            icon: 'https://cellphones.com.vn/media/icons/menu/icon-cps-220.svg',
            title: 'Đồng hồ',
            href: '',
        },
        {
            icon: 'https://cellphones.com.vn/media/icons/menu/icon-cps-845.svg',
            title: 'Camera',
            href: '',
        },
        {
            icon: 'https://cellphones.com.vn/media/icons/menu/icon-cps-30.svg',
            title: 'Phụ kiện',
            href: '',
        }, {
            icon: 'https://cdn2.cellphones.com.vn/x/media/icons/menu/icon_cpu.svg',
            title: 'PC, Màn hình',
            href: '',
        },
        {
            icon: 'https://cellphones.com.vn/media/icons/menu/icon-cps-1124.svg',
            title: 'Tivi',
            href: '',
        },
        {
            icon: 'https://cellphones.com.vn/media/icons/menu/icon-cps-tcdm.svg',
            title: 'Thu cũ đổi mới',
            href: '',
        },
        {
            icon: 'https://cdn2.cellphones.com.vn/x/media/icons/menu/icon-cps-29.svg',
            title: 'Hàng cũ',
            href: '',
        }, {
            icon: '	https://cdn.cellphones.com.vn/media/icons/menu/icon-cps-tech.svg',
            title: 'Tin Công Nghệ',
            href: '',
        }
    ]

    const renderMenuItem = () => {
        return menu.map(item => {
            return (
                <div className={clsx(styles.menuItem, 'flex', 'justify-between', 'p-1')}>
                <div className='flex gap-2'>
                    <Image src={item.icon} alt={item.title} width={25} height={25} />
                    <p>{item.title}</p>
                </div>
                <FontAwesomeIcon icon={faChevronRight} width={10} />
            </div>
            )
        })
    }


    return (
        <div className={clsx('md:w-1/5 box-shadow', styles.menuContainer)}>
            {renderMenuItem()}
        </div>
    );
}

export default Menu;