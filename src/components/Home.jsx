import React from 'react';
import Sidebar from './Sidebar';
import SliderWindow from './SliderWindow';
import CardView from './CardView';

function Home(props) {
    return (
        <div >
        {/* <div >
            <img src="https://cdn.pixabay.com/photo/2014/11/13/06/12/boy-529067_960_720.jpg" alt="" />
            
        </div>

        <div className='sidebar'>
            <Sidebar />
        </div> */}
        <SliderWindow />
        <CardView />
        </div>
    );
}

export default Home;