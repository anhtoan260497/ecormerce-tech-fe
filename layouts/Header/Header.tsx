'use client'
import React, { useState } from 'react'
import styles from './Header.module.scss'
import Image from 'next/image'
import clsx from 'clsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCartShopping, faChevronDown, faLocation, faLocationDot, faPhone, faSearch, faTruck, faXmark } from '@fortawesome/free-solid-svg-icons'

const Header = () => {

    const [isFocusInput, setIsFocusInput] = useState(false)

    return (
        <>
            <div className={clsx(styles.headerContainerFluid, styles.isDesktop, 'flex-center')}>
                <div className={clsx(styles.headerContainer, 'flex')}>
                    <Image src='/assets/images/svg/logo.svg' width={162} height={30} alt='hello' className={styles.logo} />
                    <Image src='/assets/images/svg/logoMobile.svg' width={162} height={30} alt='hello' className={styles.logoMobile} />
                    <div className={clsx(styles.headerItem, styles.headerItemMenu)}>
                        <FontAwesomeIcon icon={faBars} width={15} />
                        <div className={clsx(styles.headerItemLocation)}>
                            <p>Danh mục</p>
                        </div>
                    </div>
                    <div className={clsx(styles.headerItem, styles.headerItemMenu, styles.headerItemMenuLocation)}>
                        <FontAwesomeIcon icon={faLocationDot} width={15} color='white' />
                        <div className={clsx(styles.headerItemLocation)}>
                            <h3>Xem giá tại</h3>
                            <p>Hồ Chí Minh</p>
                        </div>
                        <FontAwesomeIcon icon={faChevronDown} width={12} className='self-start' />
                    </div>
                    <div className={clsx(styles.headerItem, styles.headerItemSearch)}>
                        <FontAwesomeIcon icon={faSearch} className={styles.headerItemSearchIcon} width={15} color='black' />
                        <input />
                        <FontAwesomeIcon icon={faXmark} className={clsx(styles.headerItemSearchIconClose)} width={15} color='black' />
                    </div>
                    <a href='tel:18002097' className={clsx(styles.headerItem, styles.headerItemMenu)}>
                        <FontAwesomeIcon icon={faPhone} width={15} color='white' />
                        <div className={clsx(styles.headerItemLocation)}>
                            <h3 className='text-xs'>Gọi Mua</h3>
                            <p>1800.2097</p>
                        </div>
                    </a>
                    <div className={clsx(styles.headerItem, styles.headerItemMenu, styles.headerItemResponsive)}>
                        <FontAwesomeIcon icon={faLocationDot} width={20} color='white' />
                        <div className={clsx(styles.headerItemLocation)}>
                            <p>Cửa hàng gần bạn</p>
                        </div>
                    </div>
                    <div className={clsx(styles.headerItem, styles.headerItemMenu, styles.headerItemResponsive)}>
                        <FontAwesomeIcon icon={faTruck} width={30} color='white' />
                        <div className={clsx(styles.headerItemLocation)}>
                            <p>Tra cứu đơn hàng</p>
                        </div>
                    </div>
                    <div className={clsx(styles.headerItem, styles.headerItemMenu)}>
                        <FontAwesomeIcon icon={faCartShopping} width={15} color='white' />
                        <div className={clsx(styles.headerItemLocation)}>
                            <p>Giỏ hàng</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={clsx(styles.headerContainerFluid, styles.isMobile)}>
                <Image src='/assets/images/svg/logoMobile.svg' width={40} height={40} alt='hello' className={styles.logoMobile} />
                <div className={clsx(styles.headerContainer, 'flex')}>
                    <div className={clsx(styles.headerItem, styles.headerItemSearch)} style={{width : isFocusInput ? '100%' : '30%'}}   >
                        <FontAwesomeIcon icon={faSearch} className={styles.headerItemSearchIcon} width={15} color='black' />
                        <input onFocus={() => setIsFocusInput(true)} onBlur={() => setIsFocusInput(false)} />
                        <FontAwesomeIcon icon={faXmark} className={clsx(styles.headerItemSearchIconClose)} width={15} color='black' />
                    </div>

                    {!isFocusInput && <><div className={clsx(styles.headerItem, styles.headerItemMenu, styles.headerItemMenuLocation)}>
                        <FontAwesomeIcon icon={faLocationDot} width={15} color='white' />
                        <div className={clsx(styles.headerItemLocation)}>
                            <h3>Xem giá tại</h3>
                            <p>Hồ Chí Minh</p>
                        </div>
                        <FontAwesomeIcon icon={faChevronDown} width={12} className='self-start' />
                    </div>

                    <div className={clsx(styles.headerItem, styles.headerItemMenu)}>
                        <FontAwesomeIcon icon={faCartShopping} width={15} color='white' />
                        <div className={clsx(styles.headerItemLocation)}>
                            <p>Giỏ hàng</p>
                        </div>
                    </div></>}
                </div>
            </div>
        </>


    )

}

export default Header