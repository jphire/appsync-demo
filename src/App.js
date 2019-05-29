import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactSpeedometer from "react-d3-speedometer"
import logoBeckhoff from './beckhoff.jpg';
import poplatekLogo from './poplatek-logo.svg'
import Amplify, { API, graphqlOperation } from "aws-amplify";
import aws_config from "./aws-exports";
import * as subscriptions from './graphql/subscriptions';
import * as queries from './graphql/queries';

import {
  Navbar,
  NavbarBrand,
  Col,
  Row
} from 'reactstrap';

Amplify.configure(aws_config)

class App extends React.Component {

  constructor() {
    super()
    this.state = { data: {
      voltage: 0.0,
      current: 0.0,
      relay: false
    } }
  }

  async componentDidMount() {
    const response = await API.graphql(graphqlOperation(queries.getData, {id:'latest'}));
    const data = response.data.getData

    API.graphql(
        graphqlOperation(subscriptions.onUpdateData)
    ).subscribe({
        next: (iotData) => {
          console.log(iotData)
          this.setState({
            data: iotData.value.data.onUpdateData
          })
        }
    });
    this.setState({ data })
  }

  render() {
    return (
      <div className="App">
        <Navbar className="fixed-top navbar-dark bg-beckhoff" expand="md">
          <NavbarBrand href="#">
            <img src={logoBeckhoff} width={250} className="beckhoff" alt="logo" />
          </NavbarBrand>
          <NavbarBrand href="#" className="ml-auto">          
            <img src={poplatekLogo} className="poplatekLogo" alt="logo2" />
          </NavbarBrand>
        </Navbar>

        <header className="App-header">
          <Col className='col-12'>
            <Row>
              <Col className='col-6 col-md-6 col-sm-12'>
                <ReactSpeedometer 
                  value={this.state.data.voltage} segments={3} startColor={'#ff0000'} endColor={'#33cc33'} minValue={0} maxValue={200} width={600} height={350} needleHeightRatio={0.7}/>
                <h4>Voltage (V)</h4>
              </Col>
              <Col className='col-6 col-md-6 col-sm-12'>
                <ReactSpeedometer value={this.state.data.current} startColor={'#33cc33'} endColor={'#ff0000'} minValue={0} maxValue={15} width={600} height={350} needleHeightRatio={0.7}/>
                <h4>Current (A)</h4>
              </Col>
            </Row>
          </Col>

          <p>
            Relay status : 
            <label className={this.state.data.relay ? 'color-green relay-label' : 'color-grey relay-label'} style={{marginLeft:'10px'}}>
            {this.state.data.relay ? ' ON' : ' OFF'}
            </label>
          </p>
        </header>
      </div>
    );
  }
}

export default App;
