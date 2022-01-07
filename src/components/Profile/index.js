import React, {useEffect, useState} from "react";
import {
    ProfileItemSpan,
    ProfileList,
    ProfileListItem,
    ProfileSection,
    ProfileSkillsSection,
    ProfileSpan,
    ProfileSpanWeb,
    ProfileTitle,
    SkillsBar,
    SkillsBarParent,
    SkillsBarParentSpan,
    SkillsBarPerc,
    SkillsBarTitle,
    SkillsDesc,
    SkillsSection
} from "./style";
import axios from "axios";

const Profile = () => {
    const [profileData,setProfileData]=useState({}),
          [skillsData,setSkillsData]=useState([]);
    useEffect(()=>{
        axios.get('js/data.json').then(res=>{setProfileData(res.data.Profile);setSkillsData(res.data.Skills)})
    },[])

    const SkillsBarsData = skillsData.map((Bar,index)=>{
        return(
            <SkillsBar key={Bar.id}>
                <SkillsBarTitle>{Bar.Title}</SkillsBarTitle>
                <SkillsBarPerc>{Bar.Number}%</SkillsBarPerc>
                <SkillsBarParent>
                    <SkillsBarParentSpan width={Bar.Number}></SkillsBarParentSpan>
                </SkillsBarParent>
            </SkillsBar>

        )
    })
        return (
            <ProfileSkillsSection>
                <div className="container">
                    <ProfileSection>
                        <ProfileTitle><ProfileSpan>My </ProfileSpan>Profile</ProfileTitle>
                        <ProfileList>
                            <ProfileListItem>
                                <ProfileItemSpan>Name</ProfileItemSpan>
                                {profileData.Name}
                            </ProfileListItem>
                            <ProfileListItem>
                                <ProfileItemSpan>Birthday</ProfileItemSpan>
                                {profileData.Birthday}
                            </ProfileListItem>
                            <ProfileListItem>
                                <ProfileItemSpan>Address</ProfileItemSpan>
                                {profileData.Address}
                            </ProfileListItem>
                            <ProfileListItem>
                                <ProfileItemSpan>Phone</ProfileItemSpan>
                                {profileData.Phone}
                            </ProfileListItem>
                            <ProfileListItem>
                                <ProfileItemSpan>Email</ProfileItemSpan>
                                {profileData.Email}
                            </ProfileListItem>
                            <ProfileListItem>
                                <ProfileItemSpan>Website</ProfileItemSpan>
                                <ProfileSpanWeb>{profileData.Website}</ProfileSpanWeb>
                            </ProfileListItem>
                        </ProfileList>
                    </ProfileSection>

                    <SkillsSection>
                        <ProfileTitle>Some <ProfileSpan>skills</ProfileSpan></ProfileTitle>
                        <SkillsDesc>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse
                            cupiditate, omnis similique.
                        </SkillsDesc>
                        {SkillsBarsData}
                    </SkillsSection>

                </div>

            </ProfileSkillsSection>
        );


}

export default Profile;