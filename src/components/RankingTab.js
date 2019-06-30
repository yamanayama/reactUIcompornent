
import React, { Component } from 'react';
import 'react-tabs/style/react-tabs.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class RankingTab extends Component {

  handleSelect(index, last) {
    console.log('Selected tab: ' + index + ', Last tab: ' + last);
  }

  render() {

    const figureStyle = {
      maxWidth: 300,
      width: 200,
      color: '#fff',
      background: '#ddd'
    };

    const imgStyle = {
      width: '100%',
    };

    const tabs = this.props.tabs.map((tab, index) =>
      <Tab
        key={index}> {tab} </Tab>
    );

    const bodys = this.props.bodys.map((body, index) =>//keyのbodyを指定しないとエラー
      <TabPanel
        key={index} >
        <div>
          <h2>{body.title}</h2>
          <figure style={figureStyle}>
            <img src={body.img} alt={body.title} style={imgStyle} />
          </figure>
          <p>{body.text}</p>
        </div>
      </TabPanel >
    );

    return (
      <div className="tabArea">
        <Tabs
          onSelect={this.handleSelect}
          defaultIndex={1}
          forceRenderTabPanel
          className='tab'
        >
          <TabList
            className='tabList'
          >
            {tabs}
          </TabList >
          {bodys}
        </Tabs >
      </div>
    );
  }
}

export default RankingTab;