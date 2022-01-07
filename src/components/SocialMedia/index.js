import React, {useEffect, useState} from "react";
import './style';
import {Social, SocialIcon, SocialMediaSection, SocialP, SocialSpan} from "./style";
import axios from "axios";

const SocialMedia = () => {
    const [socialItems,setSocialItems]=useState([]);
    useEffect(()=>{
        axios.get('js/data.json').then(res=>{setSocialItems(res.data.social)})
    },[])
    const SocialLinks = socialItems.map((Link,index)=>{
        return(
            <Social title={Link.title} key={Link.id}>
                <SocialIcon  className={Link.icon}></SocialIcon>
                <SocialP>
                    <SocialSpan info1>{Link.head}</SocialSpan>
                    <SocialSpan info2>{Link.body}</SocialSpan>
                </SocialP>
            </Social>
        )
    })
        return (
            <SocialMediaSection>
                {SocialLinks}
            </SocialMediaSection>
        );


}

export default SocialMedia;