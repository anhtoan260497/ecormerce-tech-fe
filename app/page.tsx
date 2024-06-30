import Carousel from "@/components/Carousel/Carousel"
import CarouselMobile from "@/components/CarouselMobile/CarouselMobile"
import LongBannerHome from "@/components/LongBannerHome/LongBannerHome"
import Menu from "@/components/Menu/Menu"
import TopBanner from "@/components/TopBanner/TopBanner"


const Home = () => {

    const bannerHome = {
        imageDesktop : 'https://cdn2.cellphones.com.vn/insecure/rs:fill:1200:75/q:90/plain/https://dashboard.cellphones.com.vn/storage/b2s-update-19-06%20(1).gif',
        href : 'https://cellphones.com.vn/chao-nam-hoc-moi',
        alt: 'chao nam hoc moi',
        imageMobile : 'https://cdn2.cellphones.com.vn/insecure/rs:fill:800:150/q:90/plain/https://dashboard.cellphones.com.vn/storage/b2s-update-19-06%20(2).gif'
    }

    return (
        <>
            <div className="flex gap-3">
                <Menu />
                <Carousel />
                <CarouselMobile />
                <TopBanner />
            </div>
            <LongBannerHome imageDesktop={bannerHome.imageDesktop} imageMobile={bannerHome.imageMobile} href={bannerHome.href} alt={bannerHome.alt}/>
        </>

    )
}

export default Home