import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import Title from 'antd/lib/typography/Title';
import { Avatar, Tooltip, Collapse } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import {
  SlidersFilled,
  PieChartFilled,
  TeamOutlined,
  HeartTwoTone,
} from '@ant-design/icons';
import './styles.css';

import db from '../../data/dados_iniciais.json';

//import Listagem from '../../components/Listagem';

//import Collapsed from '../Collapse';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


const Main = () => {

  const [collapsed, setCollapsed] = useState(false)

  const onCollapse = collapsed => setCollapsed(collapsed);

  const { Panel } = Collapse;

  function callback(key) {
    console.log(key);
  }


  return (
    <Layout style={{ minHeight: '100vh' }}>

      <Sider style={{ paddingTop: 60 }} collapsible collapsed={collapsed} onCollapse={onCollapse}>

        <Menu theme="dark" defaultSelectedKeys={['2']} mode="inline">
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
        </Content>
        <Collapse style={{height:800}} onChange={callback}>

    <Panel header="Unidade 1" key="1">
      <Collapse defaultActiveKey="1">

        <Panel header="Ativo" key="1">
        {db.units[0].data.assetsData.map(assetItem => <p>{assetItem.name}</p>)}

        </Panel>
      </Collapse>
    </Panel>
    <Panel header="Unidade 2" key="1">
      <Collapse defaultActiveKey="1">
        <Panel header="Ativo" key="1">
          {db.units[1].data.assetsData.map(assetItem => <p>{assetItem.name}</p>)}
        </Panel>
      </Collapse>
    </Panel>


  </Collapse>
        <Footer style={{ textAlign: 'center' }}>Made with {<HeartTwoTone twoToneColor="#993399" />} by Beatriz Oliveira</Footer>
      </Layout>
    </Layout>
  );
}

export default Main;
