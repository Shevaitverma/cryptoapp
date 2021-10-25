import React from 'react'
import { Button, Menu, Typography, Avatar } from 'antd';
import {Link} from 'react-router-dom';
import {HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined, TrophyOutlined} from "@ant-design/icons";
import icon from '../images/cryptox.png';

const Navbar = () => {
    return (
        <div className='nav-container'>
            <div className='logo-controller'>
                <Avatar src={icon} size='large' />
                <Typography.Title level={2} className='logo'>
                    <Link to='/'>CryptoX</Link>
                </Typography.Title>
                {/* <button className='menu-control-container'></button> */}
            </div>
            <Menu theme='dark'>
                <Menu.Item icon={<HomeOutlined />}>
                    <Link to='/'>Home</Link>
                </Menu.Item>
                
                <Menu.Item icon={<FundOutlined/>}>
                    <Link to='/cryptocurrency'>Cryptocurrency</Link>
                </Menu.Item>
                
                <Menu.Item icon={<MoneyCollectOutlined />}>
                    <Link to='/exchanges'>Exchanges</Link>
                </Menu.Item>

                <Menu.Item icon={<BulbOutlined />}>
                    <Link to='/news'>News</Link>
                </Menu.Item>
            </Menu>
        </div>
    )
}

export default Navbar;