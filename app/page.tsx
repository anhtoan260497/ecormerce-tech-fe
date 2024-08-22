import Carousel from "@/components/Carousel/Carousel"
import CarouselMobile from "@/components/CarouselMobile/CarouselMobile"
import LongBannerHome from "@/components/LongBannerHome/LongBannerHome"
import Menu from "@/components/Menu/Menu"
import ProductItem from "@/components/ProductComponents/ProductItem/ProductItem"
import ProductWrapped from "@/components/ProductComponents/ProductWrapped/ProductWrapped"
import TopBanner from "@/components/TopBanner/TopBanner"
import { IProductItem } from "@/interfaces/Product"


const Home = () => {

    const bannerHome = {
        imageDesktop: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:1200:75/q:90/plain/https://dashboard.cellphones.com.vn/storage/b2s-update-19-06%20(1).gif',
        href: 'https://cellphones.com.vn/chao-nam-hoc-moi',
        alt: 'chao nam hoc moi',
        imageMobile: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:800:150/q:90/plain/https://dashboard.cellphones.com.vn/storage/b2s-update-19-06%20(2).gif'
    }

    const productItems: IProductItem[] = [
        {
            name: 'iPhone 15 Pro Max 256GB | VN/A Chính hãng',
            truePrice: 27990000,
            oldPrice: 32990000,
            image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/g/a/galaxy-a15-xanh-01.png',
            smember: {
                base: 249000,
                student: 149000
            },
            promotions: [
                {
                    promotionPrice: 0,
                    description: 'Tặng phần mềm Office và diệt Virus trị giá 300.000đ'
                }
            ]
        },
        {
            name: 'iPhone 15 Pro Max 256GB | VN/A Chính hãng',
            truePrice: 27990000,
            image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/g/a/galaxy-a15-xanh-01.png',
            smember: {
                base: 249000,
                student: 149.000
            },
            promotions: [
                {
                    promotionPrice: 0,
                    description: 'Tặng phần mềm Office và diệt Virus trị giá 300.000đ'
                }
            ]
        },
        {
            name: 'iPhone 15 Pro Max 256GB | VN/A Chính hãng',
            truePrice: 27990000,
            image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/g/a/galaxy-a15-xanh-01.png',
            promotions: [
                {
                    promotionPrice: 0,
                    description: 'Tặng phần mềm Office và diệt Virus trị giá 300.000đ'
                }
            ]
        },
        {
            name: 'iPhone 15 Pro Max 256GB | VN/A Chính hãng',
            truePrice: 27990000,
            oldPrice: 32990000,
            image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/g/a/galaxy-a15-xanh-01.png',
            smember: {
                base: 249000,
                student: 149.000
            },
        },
        {
            name: 'iPhone 15 Pro Max 256GB | VN/A Chính hãng',
            truePrice: 27990000,
            image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/g/a/galaxy-a15-xanh-01.png',
        },
        {
            name: 'iPhone 15 Pro Max 256GB | VN/A Chính hãng',
            truePrice: 27990000,
            oldPrice: 32990000,
            image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/g/a/galaxy-a15-xanh-01.png',
            smember: {
                base: 249000,
                student: 149.000
            },
            promotions: [
                {
                    promotionPrice: 0,
                    description: 'Tặng phần mềm Office và diệt Virus trị giá 300.000đ'
                }
            ]
        },
        {
            name: 'iPhone 15 Pro Max 256GB | VN/A Chính hãng',
            truePrice: 27990000,
            oldPrice: 32990000,
            image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/g/a/galaxy-a15-xanh-01.png',
            smember: {
                base: 249000,
                student: 149.000
            },
            promotions: [
                {
                    promotionPrice: 0,
                    description: 'Tặng phần mềm Office và diệt Virus trị giá 300.000đ'
                }
            ]
        },
        {
            name: 'iPhone 15 Pro Max 256GB | VN/A Chính hãng',
            truePrice: 27990000,
            oldPrice: 32990000,
            image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/g/a/galaxy-a15-xanh-01.png',
            smember: {
                base: 249000,
                student: 149.000
            },
            promotions: [
                {
                    promotionPrice: 0,
                    description: 'Tặng phần mềm Office và diệt Virus trị giá 300.000đ'
                }
            ]
        },
        {
            name: 'iPhone 15 Pro Max 256GB | VN/A Chính hãng',
            truePrice: 27990000,
            oldPrice: 32990000,
            image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/g/a/galaxy-a15-xanh-01.png',
            smember: {
                base: 249000,
                student: 149.000
            },
            promotions: [
                {
                    promotionPrice: 0,
                    description: 'Tặng phần mềm Office và diệt Virus trị giá 300.000đ'
                }
            ]
        },
        {
            name: 'iPhone 15 Pro Max 256GB | VN/A Chính hãng',
            truePrice: 27990000,
            oldPrice: 32990000,
            image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/g/a/galaxy-a15-xanh-01.png',
            smember: {
                base: 249000,
                student: 149.000
            },
            promotions: [
                {
                    promotionPrice: 0,
                    description: 'Tặng phần mềm Office và diệt Virus trị giá 300.000đ'
                }
            ]
        },
        {
            name: 'iPhone 15 Pro Max 256GB | VN/A Chính hãng',
            truePrice: 27990000,
            oldPrice: 32990000,
            image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/g/a/galaxy-a15-xanh-01.png',
            smember: {
                base: 249000,
                student: 149.000
            },
            promotions: [
                {
                    promotionPrice: 0,
                    description: 'Tặng phần mềm Office và diệt Virus trị giá 300.000đ'
                }
            ]
        },
    ]


    return (
        <>
            <div className="flex gap-3">
                <Menu />
                <Carousel />
                <CarouselMobile />
                <TopBanner />
            </div>
            <LongBannerHome imageDesktop={bannerHome.imageDesktop} imageMobile={bannerHome.imageMobile} href={bannerHome.href} alt={bannerHome.alt} />
            <ProductWrapped products={productItems}></ProductWrapped>
        </>

    )
}

export default Home