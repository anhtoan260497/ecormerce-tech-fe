import React from 'react';
import styles from './LongBannerHome.module.scss'
import Image from 'next/image';
function LongBannerHome({ imageDesktop, imageMobile, href, alt }: { imageDesktop: string, imageMobile: string, href: string, alt: string }) {
    return (
        <><a href={href} className={styles.longBannerHomeDesktop}>
            <Image src={imageDesktop} width={1200} height={200} alt={alt} />
        </a>
            <a href={href} className={styles.longBannerHomeMobile}>
                <Image src={imageMobile} width={1200} height={200} alt={alt} />
            </a>
        </>
    );
}

export default LongBannerHome;