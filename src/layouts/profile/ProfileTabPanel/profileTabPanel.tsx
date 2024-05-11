import React from 'react';
import {Icon} from "../../../components/icon/IconSVG";
import styled from "styled-components";

export const ProfileTabPanel = () => {
    return (
        <TabPanel>
            <TabPanelItem>
                <Icon iconId={'shield'} width={"24px"} height={"24px"}/>
                <span>Posts</span>
            </TabPanelItem>
            <TabPanelItem>
                <Icon iconId={'shield'} width={"24px"} height={"24px"}/>
                <span>Photos</span>
            </TabPanelItem>
            <TabPanelItem>
                <Icon iconId={'shield'} width={"24px"} height={"24px"}/>
                <span>Videos</span>
            </TabPanelItem>
            <TabPanelItem>
                <Icon iconId={'shield'} width={"24px"} height={"24px"}/>
                <span>Tagged</span>
            </TabPanelItem>
            <TabPanelItem>
                <Icon iconId={'shield'} width={"24px"} height={"24px"}/>
                <span>Followers</span>
            </TabPanelItem>
            <TabPanelItem>
                <Icon iconId={'shield'} width={"24px"} height={"24px"}/>
                <span>Following</span>
            </TabPanelItem>

        </TabPanel>
    );
};


const TabPanel = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
`

const TabPanelItem = styled.li`
 list-style: none;
  align-items: center;
  height: 40px;
  display: flex;
  justify-content: center;
  padding: 8px  18px;
  width: auto;
  max-width: 140px;
  //border: 1px solid grey;
  border-radius: 8px;
  
 span {
   display:inline-block;
    padding-left: 8px;
  }
`

