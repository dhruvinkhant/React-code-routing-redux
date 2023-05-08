import React from 'react';

function Sidebaritem({props}) {
    const data = props
    console.log("data___", data)
    return (
        <>
        <div>
             {data.map((d,_index) => 
            <div className='single-item' key={_index}>
            <h1>{d.name}</h1>
            <h1>{d.email}</h1>
            <h1>{d.number}</h1>
            </div>)}
        </div>
        </>
        
    );
}

export default Sidebaritem;