import React, { Component } from 'react';
// import { render } from 'react-dom';
// import ReactDOM from 'react-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

class RankingTab extends Component {
  handleSelect(index, last) {
    console.log('Selected tab: ' + index + ', Last tab: ' + last);
  }

  render() {
    return (

      <Tabs
        onSelect={this.handleSelect}
        selectedIndex={0}
        className='tab'
      >

        <TabList
          activeTabClassName={true}
          // disabledTabClassName='string'
          className='tabList'
        >
          <Tab>Foo</Tab>
          <Tab>Bar</Tab>
          <Tab>Baz</Tab>
        </TabList>

        <TabPanel>
          <h2>Hello from Foo</h2>
        </TabPanel>
        <TabPanel>
          <h2>Hello from Bar</h2>
        </TabPanel>
        <TabPanel>
          <h2>Hello from Baz</h2>
        </TabPanel>

      </Tabs>
    );
  }
}

export default RankingTab;
// ReactDOM.render(<RankingTab />, document.getElementById('container'));