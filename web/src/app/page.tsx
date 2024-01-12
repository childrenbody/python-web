import React from 'react';
import {Tabs, Layout} from 'antd';
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
            <Layout.Header style={{display: 'flex', alignItems: 'center'}}>
            </Layout.Header>
            <Layout.Content style={{padding: '0 48px'}}>
                <Tabs defaultActiveKey="kvs" items={items}/>
            </Layout.Content>
            <Layout.Footer style={{textAlign: 'center'}}>
                SwitchBot ©{new Date().getFullYear()} Created by SwitchBot
            </Layout.Footer>
        </Layout>
    )
}


export default Home;
