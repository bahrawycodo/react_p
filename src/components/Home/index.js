import React, {useEffect, useState} from "react";
import './style';
import {HomeBtn, HomeDesc, HomeDescSpan, HomeInfo, HomeInformation, HomeSection, HomeTitle} from "./style";
import axios from "axios";

const Home = () => {
    const [homeData,setHomeData]=useState([]);
    useEffect(()=>{
        axios.get("js/data.json").then(res=>{setHomeData(res.data.Profile)})
    },[])
        return (
            <HomeSection>
                <div className="container">
                    <HomeInformation>
                        <HomeTitle>{homeData.Name}</HomeTitle>
                        <HomeInfo>{homeData.Jop}</HomeInfo>
                        <HomeDesc>
                            Iam a professional <HomeDescSpan>UX Designer</HomeDescSpan> and Front-End Developer creating modern and
                            resposive designs to Web and Mobile. Let us work together. Thank you.
                        </HomeDesc>
                        <HomeBtn>Let's Begin</HomeBtn>
                    </HomeInformation>
                </div>
            </HomeSection>

        );


}

export default Home;