import React, { Component } from 'react';
import { Layout } from 'antd';
import './App.css';  
import 'antd/dist/antd.css';
import SiderPerson from './componentes/siderPerson/SiderPerson';
import TabsCard from './componentes/contentTask/ContentTask';
import StepsContents from './componentes/contentSteps/ContentTask';
import SiderGrafico from './componentes/siderGrafico/SiderGrafico';
import SiderFallowrs from './componentes/siderFallowers/SiderFollowers';
import SiderParticipants from './componentes/siderParticipants/SiderParticipants';
import SiderEmaill from './componentes/siderEmaill/SiderEmaill';
import SiderDetails from './componentes/siderDetails/SiderDetails';
import SiderOrganization from './componentes/siderOrganization/SiderOrganization';
import HeaderBar from './componentes/headerBar/HeaderBar';
import AlertList from './componentes/alertList/AlertList';


const {
  Header, Footer, Sider, Content,
} = Layout;


class App extends Component {

  render() {
    return (
      <div className="App">

      <HeaderBar/>
      <AlertList/>


        <Layout  style={{ padding: '10px 0', background: '#e7e7e7' }}>

          <Sider  style={{ padding: '10px 0', margin:'10px', background: '#e7e7e7' }} width={400} >

                      
                <SiderDetails/>
                <SiderOrganization/>
                <SiderPerson/>
                <SiderParticipants/>
                <SiderGrafico/>
                <SiderFallowrs/>
                <SiderEmaill/>
              
          </Sider>
          <Content>

              <TabsCard/>
              <StepsContents />
          
          </Content>
        </Layout>
     
      </div>
    );
  }
}

export default App;
