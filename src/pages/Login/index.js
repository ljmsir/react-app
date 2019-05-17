import React from 'react';
import {Form, Icon, Input, Button} from 'antd';
import LoginBg from './../../assets/images/big-bg.jpg';
import './index.less';

const FormItem = Form.Item;

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                this.props.history.push('/home');
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;

        const loginBg = {background: 'url(' + LoginBg + ') no-repeat'}

        return (
            <div className="login-container" style={loginBg}>
                <div className="login-pandel">
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <FormItem>
                            {getFieldDecorator('userName', {
                                rules: [{ required: true, message: '请输入用户名!' }],
                            })(
                                <Input size="large" prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: '请输入密码!' }],
                            })(
                                <Input size="large" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
                            )}
                        </FormItem>
                        <FormItem>
                            <a className="login-form-forgot" href="">忘记密码</a>
                            <Button type="primary" htmlType="submit" size="large" className="login-form-button">
                                登录
                            </Button>
                            <div className="pannel-content-footer-Link">
                                <a href='../'>没有账号？立即注册</a>
                            </div>
                        </FormItem>
                    </Form>
                </div>
            </div>
        );
    }
}

export default Form.create()(Login);