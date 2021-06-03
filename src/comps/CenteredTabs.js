import React from 'react';
import {Paper, Tabs, Tab} from '@material-ui/core';
import "./centerTabs.css";
import CopiedItem from  './CopiedItem';


const CenteredTabs = () => {
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };
  return (
    <>
      <Paper className ="paper">
        <Tabs
          value={selectedTab}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          className = "tabs"
          centered
        >
          <Tab className = "tab" label="Links"/>
          <Tab className = "tab" label="Images" />
          <Tab className = "tab" label="Text" />
        </Tabs>
      </Paper>
      {selectedTab === 0 && <CopiedItem link = {"https://apple.com"} />}
  </>
  )
}

export default CenteredTabs;
