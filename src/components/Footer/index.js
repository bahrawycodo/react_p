import React from "react";
import {FooterSection,FooterP} from "./style";

const Footer = () => {
        return (
            <FooterSection>
                <FooterP> copyright &copy; {new Date().getFullYear()} by ultra profile </FooterP>
            </FooterSection>
        );


}

export default Footer;