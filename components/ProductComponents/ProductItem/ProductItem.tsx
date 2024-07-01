import React from 'react';
import styles from './ProductItem.module.scss'
import Image from 'next/image';
import clsx from 'clsx';
import { IProductItem } from '@/interface/Product';
import { convertPrice } from '@/utils';

function ProductItem(props: IProductItem) {

    const { name, truePrice, oldPrice, promotions, smember, image } = props
    return (
        <div className={clsx(styles.productItemContainer, 'box-shadow')}>
            <div className={styles.productDiscountPercent}>
                Giảm 25%
            </div>
            <Image className={styles.productImage} src={image} alt={name} width={300} height={300} />
            <h3 className={styles.productTitle}>{name}</h3>
            <div className={styles.productPrice}>
                <p className={styles.truePrice}>{convertPrice(truePrice)}đ</p>
                {oldPrice && <p className={styles.oldPrice}>{convertPrice(oldPrice)}đ</p>}
            </div>
            {smember && <div className={styles.productSmemberPromotion}>
                {smember.base && <p>Smember giảm thêm đến <span>{convertPrice(smember.base)}đ</span></p>}
                {smember.student && <p>S-Student giảm thêm đến <span>{convertPrice(smember.student)}đ</span></p>}
            </div>}

            <div className={styles.productMorePromotion}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia eius dicta qui ipsam. Suscipit, nihil deserunt ea, nam obcaecati impedit, harum voluptatibus dicta eveniet dolorem at voluptas consectetur consequatur! Quasi.
            </div>
        </div>
    );
}

export default ProductItem;