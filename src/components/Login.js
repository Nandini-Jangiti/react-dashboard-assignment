import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Form, Input, message } from 'antd';
import '../cssfiles/Login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        const registeredUser = JSON.parse(localStorage.getItem('registeredUser'));
        if (registeredUser && username === registeredUser.username && password === registeredUser.password) {
            navigate('/dashboard');
            message.success('login successful! ');
        } else {
            message.error('Invalid username or password');
        }
    };

    return (
        <div className="login-container">
            <h2>Login here</h2>
            <Form layout="vertical">
                <Form.Item label="Username">
                    <Input value={username} onChange={(e) => setUsername(e.target.value)} />
                </Form.Item>
                <Form.Item label="Password">
                    <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" onClick={handleLogin}>Sign In</Button>
                </Form.Item>
            </Form>
            <p>
                Not registered? <Link to="/registration">Sign up here</Link>.
            </p>
        </div>
    );
};

export default Login;
