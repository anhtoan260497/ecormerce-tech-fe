import Carousel from "@/components/Carousel/Carousel"
import CarouselMobile from "@/components/CarouselMobile/CarouselMobile"
import Menu from "@/components/Menu/Menu"
import TopBanner from "@/components/TopBanner/TopBanner"


const Home = () => {

    return (
        <div className="flex gap-3">
            <Menu />    
            <Carousel />
            <CarouselMobile />
            <TopBanner />
        </div>
    )
}

export default Home