import styled from "styled-components";

export const SocialMediaSection =styled.div`
    height: auto;
    overflow: hidden `
export const Social =styled.div`
  width: 33.33%;
  float: left;
  box-sizing: border-box;
  padding: 100px 0 100px 60px;
  background:${props=>props.title === "face"?"#3b5998" :props.title === "twitter"? "#498cbf":props.title==="pin" ? "#cc2127":"#3b5998"};
  @media (max-width:991px) {
      width: 100%;
      float: none;
  }

`
export const SocialIcon =styled.i`
  width: 50px;
  height: 50px;
  background: #fff;
  text-align: center;
  line-height: 50px;
  color: #888;
  float: left;
  margin-right: 10px
`
export const SocialP =styled.p`
  font-weight: bold;
  text-transform: uppercase;
  font-size: 20px;
  color: #fff
`
export const SocialSpan =styled.span`
  display: block;
  margin-bottom: 8px;
  font-weight: ${props=>props.info2 ? "normal":"bold"}
`