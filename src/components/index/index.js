import React,{Component} from "react";

import Footer from "./../Footer";
import Home from "./../Home";
import About from "./../About";
import Portfolio from "./../Portfolio";
import Profile from "./../Profile";
import SocialMedia from "./../SocialMedia";
import Work from "./../Work";

class Index extends Component {
    render() {
        return (
            <div>

                <Home />
                <Work />
                <Portfolio />
                <Profile />
                <About />
                <SocialMedia />
            </div>
        );

    }

}

export default Index;