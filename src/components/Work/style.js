import styled from "styled-components";

export const WorkSection =styled.div`
  height: auto;
    padding: 50px 0;
    overflow: hidden;
    background: #fff
`
export const WorkTitle =styled.h2`
  font-size: 60px;
`
export const WorkTitleSpan =styled.span`
  font-weight: normal
`
export const WorkPart =styled.div`
  margin-top: 20px;
  width: 30%;
  float: left;
  height: auto;
  padding: 100px 0;
  border: 1px solid #888;
  box-sizing: border-box;
  text-align: center;
  margin-left: ${props=>props.first === 1 ? "0" :'5%'};

  @media (max-width: 575px) {
    width: 100%;
    float: none;
    margin-left: 0
  }
  @media (min-width: 576px )and (max-width:768px) {
    width: 47%;
  }

`

export const WorkPartLast =styled(WorkPart)`
  @media (min-width: 576px )and (max-width:768px) {
      margin-left: 0
    }
`
export const WorkPartIcon =styled.i`
  color: #888;
  margin-bottom: 20px
`
export const WorkPartTitle =styled.h4`
  font-size: 25px;
  color: #eb5424;
  margin-bottom: 20px
`
export const WorkPartLine =styled.hr`
  width: 60%;
  margin: auto;
  margin-bottom: 20px
`
export const WorkPartDesc =styled.div`
  font-size: 14px;
  color: #888;
  padding: 20px
`
