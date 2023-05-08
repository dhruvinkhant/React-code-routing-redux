import React from 'react';
import { Carousel } from 'antd';
import { IconMap } from 'antd/es/result';
import { TypeIcon } from 'antd/es/message/PurePanel';
import { LeftOutlined, RightOutlined, StepBackwardOutlined, StepForwardOutlined } from '@ant-design/icons';
const contentStyle = {
    height: '560px',
    color: '#3437eb',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

const iconStyleHover = {
    width: '75px',
    height: '75px',
    borderRadius: '50%',
    backgroundColor: 'red',
};

const iconStyle = {
    display: 'inline-block',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    backgroundColor: 'blue',
    color: 'white',
    textAlign: 'center',
    lineHeight: '50px',
    transition: 'all 0.3s ease-in-out',
};



function SliderWindow() {
    return (
        <>
            {/* <LeftOutlined /> */}
            <Carousel >
                <div>
                    <h3 style={contentStyle}>
                        <img src="https://images.unsplash.com/photo-1587387119725-9d6bac0f22fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="" style={{ width: '100%', height: '100%' }} />
                    </h3>
                </div>
                <div>
                    <h3 style={contentStyle}>
                        <img src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?cs=srgb&dl=pexels-bas-masseus-1074535.jpg&fm=jpg" alt="" style={{ width: '100%', height: '100%' }} />
                    </h3>
                </div>
                <div>
                    <h3 style={contentStyle}>
                        <img src="https://media.istockphoto.com/id/961633870/photo/asphalt-road-and-hills-with-clouds-landscape-at-sunset.jpg?s=612x612&w=0&k=20&c=YE3Yv6YUduNzjT8krxbG3XgSEcJHVFFnMY22caSBmf4=" alt="" style={{ width: '100%', height: '100%' }} />
                    </h3>
                </div>
                <div>
                    <h3 style={contentStyle}>
                        <img src="https://wallpapershome.com/images/wallpapers/lake-2560x1440-4k-hd-wallpaper-sea-water-waterfall-rocks-mountain-sun-1143.jpg" alt="" style={{ width: '100%', height: '100%' }} />
                    </h3>
                </div>
            </Carousel>
            {/* <RightOutlined />  */}
        </>
    );
}

export default SliderWindow;