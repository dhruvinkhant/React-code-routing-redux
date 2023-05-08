import { FacebookOutlined, GoogleOutlined, InstagramOutlined, LinkedinOutlined } from '@ant-design/icons';
import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <>
        <div className='footer'>
            <h1>©2023 Revision Legal. All Rights Reserved.</h1>
            <a href='https://www.instagram.com' target="_blank" className='icon' > 
            <InstagramOutlined />
            </a>

            <a href='https://www.linkedin.com' target="_blank" className='icon' > 
            <LinkedinOutlined />
            </a>

            <a href='https://www.facebook.com' target="_blank"  className='icon'> 
            <FacebookOutlined  />
            </a>

            <a href='https://www.google.com' target="_blank" className='icon'> 
            <GoogleOutlined  />
            </a>
        </div>
        </>

    );
}

export default Footer;