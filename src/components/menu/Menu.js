import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, CardImg, CardImgOverlay, Button, CardTitle, Row, Col } from 'reactstrap';
import classnames from 'classnames';


const Menu = (props) => {
  console.log(props)
    
    
    const menu = props.movies.map(movie => {
        return (
            <div className="col-6 col-md-3 " key={movie.id}>
                <Card key={movie.id} >
                    <CardImg width="100%" src={movie.image} alt={movie.title} />
                </Card>  
            </div>            
        )
    });
    
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
        <TabPane className="d-flex align-content-end flex-wrap" tabId="1">
          <Row >  
            {menu}    
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="6">
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="3">
          <Row>
            <Col sm="6">
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="4">
          <Row>
            <Col sm="6">
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="5">
          <Row>
            <Col sm="6">
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="6">
          <Row>
            <Col sm="6">
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
}

export default Menu;