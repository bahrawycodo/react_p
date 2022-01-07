import React,{useState,useEffect} from "react";
import {
    Image,
    ImageWrapper, Overlay, OverlaySpan,
    PortfolioItem,
    PortfolioList,
    PortfolioSection,
    PortfolioTitle,
    PortfolioTitleSpan
} from "./style";
import axios from "axios";

const Portfolio = () => {
    const [Images,setImages] = useState([]);
    useEffect(()=>{
        axios.get('/js/data.json').then(res=>{setImages(res.data.portfolio)})
    },[])
    const PortifolioImages = Images.map((imageItem,index)=>{
        return(
            <ImageWrapper key={imageItem.id}>
                <Image src={imageItem.image} alt="" />
                <Overlay>
                    <OverlaySpan>
                        Show Image
                    </OverlaySpan>
                </Overlay>
            </ImageWrapper>

        )
    })
        return (
                <PortfolioSection>
                    <PortfolioTitle><PortfolioTitleSpan>My</PortfolioTitleSpan> Portfolio</PortfolioTitle>
                    <PortfolioList>
                        <PortfolioItem active>All</PortfolioItem>
                        <PortfolioItem>HTML</PortfolioItem>
                        <PortfolioItem>Photoshop</PortfolioItem>
                        <PortfolioItem>Wordpress</PortfolioItem>
                        <PortfolioItem>Mobile</PortfolioItem>
                    </PortfolioList>

                    <div className="box">
                        {PortifolioImages}
                    </div>
                </PortfolioSection>
                );


}

export default Portfolio;