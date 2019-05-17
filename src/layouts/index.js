import React from 'react';
import {Layout, Menu, Breadcrumb, Icon} from 'antd';
import {Link} from 'react-router-dom';
import {MenuData} from './menu';
console.log(MenuData);

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

export default class BasicLayout extends React.Component {
    state = {
        collapsed: false,
    };
    
    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };
    
    render() {
        return (
          <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                <div className="logo" />
                <Menu theme="dark" defaultSelectedKeys={['0']} mode="inline">
                    {
                        MenuData.map((item, index) => {
                            return (
                                <Menu.Item key={index}>
                                    <Link to={item.menuUrl}>{item.menuName}</Link>
                                </Menu.Item>
                            )
                        })
                    }
              </Menu>
            </Sider>
            <Layout>
                {/* <Header style={{ background: '#fff', padding: 0 }} /> */}
                <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>User</Breadcrumb.Item>
                    <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                    <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                        {([1, 2, 3]).map(item => {
                            return <p key={item}>{item}</p>
                        })}
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
          </Layout>
        );
    }
}