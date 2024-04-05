
import Header from "./header";
import Hero from "./hero";
import Body from "./body";

const Home = () => {
  
    return (
        <div className="home-page">
            <Header />

            <div className="home-content">
                <Hero />
                <Body />
            </div>
        </div>
    );
};
    
export default Home;