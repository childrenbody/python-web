import React from 'react';
import {Tabs, Layout} from 'antd';
import {Header, Content, Footer} from "antd/es/layout/layout";
import type {TabsProps} from 'antd';
import {AndroidOutlined, AppleOutlined} from '@ant-design/icons';
import kvs from "@/app/component/kvs";


const items: TabsProps['items'] = [
    {
        key: 'kvs',
        label: 'KVS Page',
        children: <kvs/>,
        icon: <AppleOutlined/>
    },
    {
        key: 'admin',
        label: 'Admin',
        children: '管理界面',
        icon: <AndroidOutlined/>
    }
];


const Home: React.FC = () => {
    return (
        <Layout>
            <Header style={{display: 'flex', alignItems: 'center'}}>
            </Header>
            <Content style={{padding: '0 48px'}}>
                <Tabs defaultActiveKey="kvs" items={items}/>
            </Content>
            <Footer style={{textAlign: 'center'}}>
                Python Web ©{new Date().getFullYear()} Created by C.body
            </Footer>
        </Layout>
    )
}


export default Home;
