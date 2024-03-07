import { Component } from "react";
import Menu from "./Menu";
import HeroContent from "./HeroContent";
import AboutContent from "./AboutContent";
import ProjectDonation from "./ProjectDonation";
import Footer from "./Footer";
import MenuLabeledIcons from "./MenuLabeledIcons";

class App extends Component{
    render(){
        return(
            <div className="h-full w-full">
                <MenuLabeledIcons/>
                <Menu />
                <HeroContent />
                <AboutContent />
                <ProjectDonation />
                <Footer />
            </div>
        );
    };
};

export default App;