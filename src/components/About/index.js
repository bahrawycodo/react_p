import React,{useState,useEffect} from "react";
import './style';
import {AboutInfo, AboutSection, InfoDesc, InfoDescAnchor, InfoDir, InfoTitle, InfoTitleSpan} from "./style";
import axios from "axios";

const About = () => {
    const [aboutData,setAboutData]=useState([]);
    useEffect(()=>{
        axios.get("js/data.json").then(res=>{setAboutData(res.data.Profile)})
    },[])

    return (
            <AboutSection>
                <div className="container">
                    <AboutInfo>
                        <InfoTitle><InfoTitleSpan>This is</InfoTitleSpan> Me</InfoTitle>
                        <InfoDir>{aboutData.Jop}</InfoDir>
                        <InfoDesc>
                            {aboutData.summery}
                        </InfoDesc>
                    </AboutInfo>
                </div>
            </AboutSection>
        );


}

export default About;