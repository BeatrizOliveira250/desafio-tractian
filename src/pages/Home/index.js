import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Carousel } from 'antd';
import Title from 'antd/lib/typography/Title';
import { Card, Col, Row } from 'antd';
import { Avatar, Tooltip } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { Progress } from 'antd';
import {
  SlidersFilled,
  PieChartFilled,
  TeamOutlined,
  HeartTwoTone,
} from '@ant-design/icons';
import './styles.css';
//import Activity from '../../components/Graph/Activity';
import Geral from '../../components/Graph/Geral';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


const Home = () => {

  const [collapsed, setCollapsed] = useState(false)

  const onCollapse = collapsed => setCollapsed(collapsed);


  const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>

      <Sider style={{ paddingTop: 60, marginTop: 0 }} collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo" />

        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1" icon={<PieChartFilled />}>
            Geral
          </Menu.Item>
          <Menu.Item key="2" icon={<SlidersFilled />}>
            <Link to="/ativos">Ativos</Link>
          </Menu.Item>
          <SubMenu key="sub1" icon={<UserOutlined />} title="Usuários">
            <Menu.Item key="3">Emerson</Menu.Item>
            <Menu.Item key="4">Roberta</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<TeamOutlined />} title="Time">
            <Menu.Item key="6">Team 1</Menu.Item>
            <Menu.Item key="8">Team 2</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>

  <Layout className="site-layout">

        <Header className="site-layout-background" style={{ padding: 10 }}>
          <Avatar.Group style={{ float: 'right' }}>
            <Tooltip title="Emerson" placement="top">
              <Avatar style={{ backgroundColor: '#87d068' }}>E</Avatar>
            </Tooltip>
            <Tooltip title="Roberta" placement="top">
              <Avatar style={{ backgroundColor: '#87d068' }}>R</Avatar>
            </Tooltip>
          </Avatar.Group>
          <Title style={{ color: 'white', textAlign: 'center' }} level={3}>TRACTIAN</Title>
        </Header>

        <Content style={{ margin: '0 16px' }}>
          <Button style={{marginTop: '10px', width: '300px', textAlign: 'left'}} icon={<SearchOutlined />}>Procurar por Ativos</Button>

       <div className="site-card-wrapper">

            <Row gutter={16}>

              <Col span={8}>
                <Card style={{ color: '#91DA6E', height: 300, marginTop: '10px' }} title="Nível de Saúde" bordered={false}>
                <Progress style={{marginLeft: 80, marginBlock:0}} type="circle" percent={75} />
                <Title style={{ color: '#48A8FF', textAlign: 'center', marginTop:10  }} level={3}>75%</Title>
                </Card>
              </Col>

              <Col span={8}>
                <Card  style={{ color: '#48A8FF', height: 300, marginTop: '10px' }} title="Insights Resolvidos" bordered={false}>
                <Progress  style={{marginLeft: 80, alignItems: 'center'}}type="circle" percent={100} />
                <Title style={{ color: '#48A8FF', textAlign: 'center', marginTop:10 }} level={3}>100%</Title>
                </Card>
              </Col>

              <Col span={8}>
                <Card style={{ color: '#FBC04A', height: 300, marginTop: '10px'}} title="Insights Pendentes" bordered={false}>
                <Progress style={{ marginLeft: 80, marginBlock:0}} type="circle" percent={70} status="exception" />
                <Title style={{ color: '#48A8FF', textAlign: 'center', marginTop: 10 }} level={3}>70%</Title>
                </Card>
              </Col>

              <Col span={12}>
                <Card style={{ color: '#48A8FF', marginTop: 15, height: 500}} title="Ativos" bordered={false}>
                 Unidade 1
                <Carousel autoplay>
                   <div>
                     <h3 style={contentStyle}>1</h3>
                   </div>
                   <div>
                      <h3 style={contentStyle}>2</h3>
                   </div>
                   <div>
                      <h3 style={contentStyle}>3</h3>
                  </div>
                   <div>
                    <h3 style={contentStyle}>4</h3>
                  </div>
                </Carousel>
                Unidade 2
                <Carousel autoplay>
                   <div>
                     <h3 style={contentStyle}>1</h3>
                   </div>
                   <div>
                      <h3 style={contentStyle}>2</h3>
                   </div>
                   <div>
                      <h3 style={contentStyle}>3</h3>
                  </div>
                   <div>
                    <h3 style={contentStyle}>4</h3>
                  </div>
                </Carousel>

                </Card>
              </Col>

              <Col span={12}>
                <Card style={{ color: '#FBC04A', marginTop: 15, height: 500, width: 500 }} title="" bordered={false}>
                  < Geral />
                </Card>
              </Col>
            </Row>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Made with {<HeartTwoTone twoToneColor="#993399" />} by Beatriz Oliveira</Footer>
      </Layout>
    </Layout>
  );
}

export default Home;
