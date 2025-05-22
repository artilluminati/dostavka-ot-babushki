import Header from "../components/Header/Header";
import Banner from "../components/Banner";
import AboutSection from "../components/landing/AboutSection";
import ContactSection from "../components/landing/ContactSection";
import Footer from "../components/Footer/Footer";

export default function Home() {
    return (
        <>
            <Header />
            <Banner />
            <AboutSection />
            <ContactSection className="mt-[80px] pt-[80px]" />
            <Footer className="mt-[150px]"/>
        </>
    );
}
