import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import GaugeChart from 'react-gauge-chart';
import ReactSpeedometer from "react-d3-speedometer"
import logo from './logo.gif';
import logoBeckhoff from './beckhoff.jpg';
import poplatekLogo from './poplatek-logo.svg'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Col,
  Row
} from 'reactstrap';

// import { Row, Col } from 'reactstrap';

function App() {

  const status = false;

  return (
    <div className="App">
      <Navbar className="fixed-top navbar-dark bg-beckhoff" expand="md">
        <NavbarBrand href="#">
          <img src={logoBeckhoff} width={250} className="beckhoff" alt="logo" />
        </NavbarBrand>
        {/* <NavbarToggler /> */}
        <NavbarBrand href="#" className="ml-auto">          
          <img src={poplatekLogo} className="poplatekLogo" alt="logo2" />
        </NavbarBrand>
      </Navbar>

      <header className="App-header">
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Col className='col-12'>
          <Row>
            <Col className='col-6'>
              {/* <GaugeChart id="gauge-chart2" nrOfLevels={20} percent={0.86} /> */}
              <ReactSpeedometer 
                value={24.8} minValue={0} maxValue={200} width={600} height={350} needleHeightRatio={0.7}/>
              <h4>Voltage</h4>
            </Col>
            <Col className='col-6'>
              <ReactSpeedometer value={7.6} minValue={0} maxValue={15} width={600} height={350} needleHeightRatio={0.7}/>
              <h4>Current</h4>
            </Col>
          </Row>
        </Col>

        <p>
          Relay status : 
          <label className={status ? 'color-green relay-label' : 'color-grey relay-label'}>
          {status ? 'ON' : 'OFF'}
          </label>
        </p>
      </header>
    </div>
  );
}

export default App;
