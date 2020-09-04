import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import Title from 'antd/lib/typography/Title';
import { Avatar, Tooltip } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import {
  SlidersFilled,
  PieChartFilled,
  FileOutlined,
  TeamOutlined,
  HeartTwoTone,
} from '@ant-design/icons';
import './styles.css';

//import Collapsed from '../Collapse';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const Main = () => {

  const [collapsed, setCollapsed] = useState(false)

  const onCollapse = collapsed => setCollapsed(collapsed);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider style={{ paddingTop: 60, marginTop: 0 }} collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1" icon={<PieChartFilled />}>
          <Link to="/">Geral</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<SlidersFilled />}>
            Ativos
          </Menu.Item>
          <SubMenu key="sub1" icon={<UserOutlined />} title="Usuários">
            <Menu.Item key="3">Emerson</Menu.Item>
            <Menu.Item key="4">Roberta</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<TeamOutlined />} title="Time">
            <Menu.Item key="6">Team 1</Menu.Item>
            <Menu.Item key="8">Team 2</Menu.Item>
          </SubMenu>
          <Menu.Item key="9" icon={<FileOutlined />} />
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

        </Content>
        <Footer style={{ textAlign: 'center' }}>Made with {<HeartTwoTone twoToneColor="#993399" />} by Beatriz Oliveira</Footer>
      </Layout>
    </Layout>
  );
}

export default Main;
