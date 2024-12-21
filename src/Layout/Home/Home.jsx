import AboutUs from "./AboutUs";
import Contect from "./Contect";
import Hero from "./Hero";
import Products from "./Products";
import Services from "./Services";
import Team from "./Team";

const Home = () => {
    return (
        <div className="lg:mx-[10%] space-y-36">
            <Hero />
            <AboutUs />
            <Services />
            <Contect />
            <Products />
            <Team />
        </div>
    );
};

export default Home;