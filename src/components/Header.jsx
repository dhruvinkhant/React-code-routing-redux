import { AppstoreOutlined, MailOutlined, HomeOutlined, FileImageOutlined, PhoneOutlined, SettingOutlined, LogoutOutlined, WindowsFilled } from '@ant-design/icons';
import { Menu } from 'antd';
import { useState } from 'react';
import { Link, Navigate, Route, Routes, useNavigate} from 'react-router-dom';
import About from './About';
import Home from './Home';
const items = [
  {
    label: 'Home',
    key: '',
    Component: Home,
  },
  {
    label: 'About',
    key: 'about',
    Component: About,
  },
  {
    label: 'Contact',
    key: 'Contact',
  },
  // {
  //   label: 'Navigation Three - Submenu',
  //   key: 'SubMenu',
  //   icon: <SettingOutlined />,
  //   children: [
  //     {
  //       type: 'group',
  //       label: 'Item 1',
  //       children: [
  //         {
  //           label: 'Option 1',
  //           key: 'setting:1',
  //         },
  //         {
  //           label: 'Option 2',
  //           key: 'setting:2',
  //         },
  //       ],
  //     },
  //     {
  //       type: 'group',
  //       label: 'Item 2',
  //       children: [
  //         {
  //           label: 'Option 3',
  //           key: 'setting:3',
  //         },
  //         {
  //           label: 'Option 4',
  //           key: 'setting:4',
  //         },
  //       ],
  //     },
  //   ],
  // },
  {
    label: (
      <a href="https://www.linkedin.com/in/dhruvin-khant-0959a31b3/" target="_blank" rel="noopener noreferrer">
        Profile - Link
      </a>
    ),
    key: 'alipay',
  },
];
const Header = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState('mail');
  const onClick = (e) => {
    console.log('click ', e.key);
    setCurrent(e.key);
  };

  const handleLogout = () => {
    console.log("logout called")
    localStorage.clear();
    // return <Navigate replace to="/login" />;
     navigate("/login");

  }
  return (
    <div>

      <Menu onClick={onClick} className='header' selectedKeys={[current]} mode="horizontal" style={{display: 'flex', justifyContent: 'center', backgroundColor:'#FAEBD7', fontSize: '17px'}}>
      <img className='header-img' src="https://i.pinimg.com/originals/54/8f/1d/548f1d08540f07f1c69661e678df7bd1.jpg" alt="" />
        {items.map(item => (
          <Menu.Item  className='header-item' key={item.key} icon={item.icon}>
            <Link to={`/${item.key}`}>
              {item.label}
            </Link>
          </Menu.Item>
        ))}
        {localStorage.getItem('user') && <LogoutOutlined className='logout-icon' onClick={() => handleLogout()} />}
      </Menu>
    </div>
  );
};
export default Header;