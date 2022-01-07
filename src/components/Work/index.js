import React, {Component} from "react";
import axios from "axios";
import './style';
import {
    WorkPart,
    WorkPartDesc,
    WorkPartIcon,
    WorkPartLine,
    WorkPartTitle,
    WorkSection,
    WorkTitle,
    WorkTitleSpan
} from "./style";

class Work extends Component{
    state = {
        works:[]
    }
    componentDidMount() {
        axios.get('js/data.json').then(res=>this.setState({works:res.data.works}));
    }

    render(){
        const {works} = this.state;
        const worksList = works.map((part,index)=>{
            return(
                <WorkPart first={index+1} key={part.id}>
                    <WorkPartIcon className={part.icon_name}></WorkPartIcon>
                    <WorkPartTitle className="part-title">{part.title}</WorkPartTitle>
                    <WorkPartLine></WorkPartLine>
                    <WorkPartDesc>
                        {part.body}
                    </WorkPartDesc>
                </WorkPart>
            )

        })
        return (
            <WorkSection>
                <div className="container">
                    <WorkTitle className="work-title"><WorkTitleSpan>My</WorkTitleSpan> Work</WorkTitle>
                    {worksList}
                </div>
            </WorkSection>
);
    }


}

export default Work;