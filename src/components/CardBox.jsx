import React from 'react';
import { Card } from 'antd';

function CardBox({ data }) {
    const titleStyle = {
        color: 'blue',
    };

    const contentStyle = {
        color: 'red',
        fontSize: '17px'
    };

    return (
        <div className='main-card'>
            {/* {data.map((d) => {
                return (
                    <div className='card-item'>
                        <h1>{d.title}</h1>
                        <h4>{d.des}</h4>
                    </div>
                )

            })} */}
            {data.map((d) => {
                return (
                    <div className='main-card'>
                        <Card className='card-item' title={d.title} bordered={false} style={{ width: 300, color: 'blue' }}>
                            <p style={contentStyle}>{d.des1}</p>
                            <p style={contentStyle}>{d.des2}</p>
                            <p style={contentStyle}>{d.des3}</p>
                        </Card>
                    </div>
                )

            })}


        </div>
    );
}

export default CardBox;