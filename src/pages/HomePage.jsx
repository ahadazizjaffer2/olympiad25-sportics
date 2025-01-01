import HeroSection from "../components/HomePageComponents/HeroSection"
import AboutCodersCup from "../components/HomePageComponents/AboutCodersCup"
import CodersCupHistory from "../components/HomePageComponents/CodersCupHistory"
import SponsorComp from "../components/HomePageComponents/SponsorComp"
import CodersCupBanner from "../components/HomePageComponents/CodersCupBanner"
import HousesSection from "../components/HomePageComponents/HousesSection"

export default function HomePage(){
    return(
        <div className="overflow-hidden">
            <HeroSection />
            <AboutCodersCup/>
            <CodersCupHistory/>
            <SponsorComp/>
            {/* <HousesSection/> */}
            <CodersCupBanner/>
        </div>
    )
}