import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Button, Row } from 'reactstrap';
import classnames from 'classnames';
import './menu.css'


function RenderCard({item}) {
  return (
    <>
      { item.map((i) => {
        return(               
          <div key={i.id} className="col-6 col-md-3 mb-4 card-father">
            <img width="100%" src={i.image} alt={i.title} />
            <div className="card-children pt-7">
              <div className="card-child mt-7 pt-7">             
                <h4 className="mb-2 mt-4" >{i.title}</h4>
                <Button className="mb-2" color="warning" size="lg" block>WATCH NOW</Button>
                <Button outline color="secondary" size="lg" block>MORE INFO</Button>        
              </div>   
            </div>
          </div>
        );
      })}  
    </>
  )
}

const Menu = (props) => {
    
    const [activeTab, setActiveTab] = useState('1');
    const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
    }

  return (
    <div>
      <Nav tabs>
        <NavItem>
          <NavLink className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }} >
            All
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }} >
            New Releases
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className={classnames({ active: activeTab === '3' })}
            onClick={() => { toggle('3'); }}  >
            Most Popular
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className={classnames({ active: activeTab === '4' })}
            onClick={() => { toggle('4'); }}  >
            Trends
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className={classnames({ active: activeTab === '5' })}
            onClick={() => { toggle('5'); }}  >
            My favorites
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className={classnames({ active: activeTab === '6' })}
            onClick={() => { toggle('6'); }} >
            Recommendations
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row >
            <RenderCard item={props.movies} />           
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <RenderCard item={props.new} /> 
          </Row>
        </TabPane>
        <TabPane tabId="3">
          <Row>
            <RenderCard item={props.popular} /> 
          </Row>
        </TabPane>
        <TabPane tabId="4">
          <Row>
            <RenderCard item={props.trend} />
          </Row>
        </TabPane>
        <TabPane tabId="5">
          <Row>
          <RenderCard item={props.favorite} />
          </Row>
        </TabPane>
        <TabPane tabId="6">
          <Row>
          <RenderCard item={props.recommendation} />
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
}

export default Menu;