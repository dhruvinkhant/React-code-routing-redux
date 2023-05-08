import React from 'react';
import Sidebaritem from './Sidebaritem';

const data = [
    {
        key: 1,
        name: "Dhruvin",
        email: "dhruvink.spaceo@gmail.com",
        number: 8866813547
    },
    {
        key: 2,
        name: "Jeet",
        email: "Jeet.spaceo@gmail.com",
        number: 123123123
    },
    {
        key: 3,
        name: "Smit",
        email: "Smit.spaceo@gmail.com",
        number: 567567567
    }
]

function Sidebar(props) {
    return (
        <div className='item-sidebar'>
            <Sidebaritem props={data}/>
        </div>
    );
}

export default Sidebar;