import React from 'react';
import {Layout, Menu, Breadcrumb, Icon} from 'antd';
import {Link} from 'react-router-dom';
import {MenuData} from './menu';

const { Header, Content, Footer, Sider } = Layout;

const SubMenu = Menu.SubMenu;

export default class BasicLayout extends React.Component {
    constructor (props) {
        super(props);
    }

    state = {
        collapsed: false,
    };
    
    onCollapse = collapsed => {
        this.setState({ collapsed });
    };

    componentWillMount () {
        const menuTreeNode = this.renderMenuNode(MenuData);
        this.setState({
            menuTreeNode
        })
    }

    renderMenuNode = (data) => {
        return data.map(item => {
            if(item.hasOwnProperty('children') && !!item.children.length){
                return (
                    <SubMenu key={item.menuName} title={item.menuName}>
                        {item.hasOwnProperty('children') && !!item.children.length ? this.renderMenuNode(item.children) : null}
                    </SubMenu>
                )
            } else {
                return (
                    <Menu.Item key={item.menuName} title={item.menuName}>
                        <Link to={item.menuUrl}>{item.menuName}</Link>
                    </Menu.Item>
                )
            }
        })
    }
    
    render() {
        const {children} = this.props.children;
        console.log(children);
        return (
          <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                <div className="logo" />
                <Menu theme="dark" mode="inline">
                    {this.state.menuTreeNode}
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
                        {/* {children} */}
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
          </Layout>
        );
    }
}